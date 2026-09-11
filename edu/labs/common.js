/**
 * Goldbach Discovery Labs - Shared Framework & Utilities
 * Zero dependencies, 100% offline HTML5/JS
 */

const GLab = {
  // --- Mathematical Utilities ---
  primesCache: null,

  sieve(max = 10000) {
    if (this.primesCache && this.primesCache.max >= max) {
      return this.primesCache;
    }
    const isP = new Uint8Array(max + 1);
    isP.fill(1);
    isP[0] = 0;
    if (max >= 1) isP[1] = 0;
    for (let p = 2; p * p <= max; p++) {
      if (isP[p]) {
        for (let i = p * p; i <= max; i += p) {
          isP[i] = 0;
        }
      }
    }
    const list = [];
    for (let i = 2; i <= max; i++) {
      if (isP[i]) list.push(i);
    }
    this.primesCache = { max, isP, list };
    return this.primesCache;
  },

  isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    if (this.primesCache && n <= this.primesCache.max) {
      return this.primesCache.isP[n] === 1;
    }
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  },

  getPrimes(max = 1000) {
    return this.sieve(max).list.filter(p => p <= max);
  },

  getGoldbachPairs(n) {
    if (n < 4 || n % 2 !== 0) return [];
    this.sieve(n);
    const pairs = [];
    const half = n / 2;
    for (let p = 2; p <= half; p++) {
      if (this.isPrime(p) && this.isPrime(n - p)) {
        pairs.push([p, n - p]);
      }
    }
    return pairs;
  },

  getTernaryPartitions(n, limit = 50) {
    if (n < 6 || n % 2 === 0) return [];
    this.sieve(n);
    const primes = this.getPrimes(n);
    const triples = [];
    for (let i = 0; i < primes.length; i++) {
      const p1 = primes[i];
      if (p1 * 3 > n) break;
      for (let j = i; j < primes.length; j++) {
        const p2 = primes[j];
        const p3 = n - p1 - p2;
        if (p3 < p2) break;
        if (this.isPrime(p3)) {
          triples.push([p1, p2, p3]);
          if (triples.length >= limit) return triples;
        }
      }
    }
    return triples;
  },

  hardyLittlewoodEstimate(n) {
    if (n < 4 || n % 2 !== 0) return 0;
    const C2 = 0.6601618158;
    let prod = 1;
    let temp = n;
    // Odd prime factors
    const limit = Math.floor(Math.sqrt(temp));
    for (let d = 3; d <= limit; d += 2) {
      if (temp % d === 0) {
        prod *= (d - 1) / (d - 2);
        while (temp % d === 0) temp /= d;
      }
    }
    if (temp > 2) {
      prod *= (temp - 1) / (temp - 2);
    }
    const logN = Math.log(n);
    return 2 * C2 * prod * (n / (logN * logN));
  },

  // --- Web Audio Synthesizer ---
  audio: {
    ctx: null,
    muted: false,

    init() {
      const saved = localStorage.getItem('glab_muted');
      if (saved !== null) {
        this.muted = saved === 'true';
      }
    },

    getAudioContext() {
      if (!this.ctx && typeof AudioContext !== 'undefined') {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      return this.ctx;
    },

    toggleMute() {
      this.muted = !this.muted;
      localStorage.setItem('glab_muted', this.muted);
      return this.muted;
    },

    playTone(freq = 440, duration = 0.15, type = 'sine', gainVal = 0.12) {
      if (this.muted) return;
      try {
        const ctx = this.getAudioContext();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        gain.gain.setValueAtTime(gainVal, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + duration);
      } catch (e) {
        // Audio policy or disabled
      }
    },

    playChord(freqs = [261.63, 329.63, 392.00], duration = 0.3) {
      if (this.muted) return;
      freqs.forEach(f => this.playTone(f, duration, 'triangle', 0.08));
    },

    playSuccess() {
      if (this.muted) return;
      const now = (this.getAudioContext() || {}).currentTime || 0;
      setTimeout(() => this.playTone(523.25, 0.15, 'triangle', 0.15), 0);
      setTimeout(() => this.playTone(659.25, 0.15, 'triangle', 0.15), 100);
      setTimeout(() => this.playTone(783.99, 0.25, 'triangle', 0.18), 200);
    },

    playClick() {
      this.playTone(700, 0.04, 'sine', 0.06);
    }
  },

  // --- Lab Initialization & Nav Injector ---
  activeConfig: null,

  init(config) {
    this.activeConfig = config;
    this.audio.init();

    if (window.GLabI18N) {
      window.GLabI18N.init();
    }

    const curLang = (window.GLabI18N && window.GLabI18N.currentLang) || 'en';

    const nav = document.getElementById('lab-nav');
    if (nav) {
      const prevBtn = config.prevId 
        ? `<a href="${config.prevId}.html" class="nav-link lab-nav-link-prev" title="Previous Lab (Press [)">← Prev</a>`
        : `<span class="nav-link lab-nav-link-prev" style="opacity:0.4; cursor:default">← Prev</span>`;
      
      const nextBtn = config.nextId
        ? `<a href="${config.nextId}.html" class="nav-link lab-nav-link-next" title="Next Lab (Press ])">Next →</a>`
        : `<span class="nav-link lab-nav-link-next" style="opacity:0.4; cursor:default">Next →</span>`;

      const muteIcon = this.audio.muted ? '🔇' : '🔊';

      nav.innerHTML = `
        <div class="lab-nav-inner">
          <div class="lab-nav-left">
            <a href="index.html" class="nav-link lab-nav-link-hub">🔬 100 Labs Hub</a>
            <a href="../index.html" class="nav-link lab-nav-link-main">🏠 Main Portal</a>
            <span class="lab-badge">Lab #${String(config.labNum).padStart(3, '0')}</span>
            <span class="cluster-badge">Cluster ${config.clusterNum}: ${config.clusterName}</span>
          </div>
          <div class="lab-nav-right">
            <div class="lang-selector-wrap">
              <select id="lab-lang-select" class="lab-lang-select" title="Change Language">
                <option value="en">🇺🇸 English</option>
                <option value="de">🇩🇪 Deutsch</option>
                <option value="fr">🇫🇷 Français</option>
                <option value="it">🇮🇹 Italiano</option>
                <option value="ja">🇯🇵 日本語</option>
                <option value="ko">🇰🇷 한국어</option>
                <option value="zh-CN">🇨🇳 简体中文</option>
                <option value="zh-TW">🇭🇰 繁體中文</option>
              </select>
            </div>
            ${prevBtn}
            ${nextBtn}
            <button class="nav-link" id="audio-toggle-btn" style="cursor:pointer;" title="Toggle Sound">
              ${muteIcon} Sound
            </button>
          </div>
        </div>
      `;

      const langSelect = document.getElementById('lab-lang-select');
      if (langSelect) {
        langSelect.value = curLang;
        langSelect.addEventListener('change', (e) => {
          if (window.GLabI18N) {
            window.GLabI18N.setLanguage(e.target.value);
          }
        });
      }

      const audioBtn = document.getElementById('audio-toggle-btn');
      if (audioBtn) {
        audioBtn.addEventListener('click', () => {
          const isMuted = this.audio.toggleMute();
          audioBtn.innerHTML = (isMuted ? '🔇' : '🔊') + ' Sound';
        });
      }

      if (window.GLabI18N) {
        window.GLabI18N.applyToDOM(curLang);
      }
    }

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;
      if ((e.key === '[' || e.key === 'ArrowLeft') && config.prevId) {
        window.location.href = `${config.prevId}.html`;
      } else if ((e.key === ']' || e.key === 'ArrowRight') && config.nextId) {
        window.location.href = `${config.nextId}.html`;
      }
    });

    // Reveal answer buttons
    document.querySelectorAll('.reveal-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const target = targetId ? document.getElementById(targetId) : btn.nextElementSibling;
        if (target) {
          const isShown = target.classList.contains('show');
          target.classList.toggle('show');
          btn.setAttribute('data-shown', isShown ? 'false' : 'true');
          const tKey = isShown ? 'revealSolution' : 'hideSolution';
          btn.textContent = (window.GLabI18N ? window.GLabI18N.t(tKey) : (isShown ? '💡 Show Solution & Explanation' : '🙈 Hide Solution'));
          if (!isShown) GLab.audio.playClick();
        }
      });
    });

    // Handle user interaction to unlock audio
    const unlockAudio = () => {
      this.audio.getAudioContext();
      window.removeEventListener('pointerdown', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
    };
    window.addEventListener('pointerdown', unlockAudio);
    window.addEventListener('keydown', unlockAudio);
  }
};

window.GLab = GLab;
