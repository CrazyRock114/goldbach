/**
 * Goldbach Discovery Lab: Core Interactive Engine
 * Zero-dependency HTML5 / Canvas / SVG / Web Audio API Application
 */

function _t(key, params) {
  if (window.EDU_I18N && typeof window.EDU_I18N.t === 'function') {
    return window.EDU_I18N.t(key, params);
  }
  return key;
}

// ============================================================================
// 1. WEB AUDIO API SYNTHESIZER (SAFE & NON-BLOCKING)
// ============================================================================
let audioCtx = null;
let soundEnabled = true;

function getAudioContext() {
  try {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {});
    }
    return audioCtx;
  } catch (e) {
    return null;
  }
}

function playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.1) {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const now = ctx.currentTime;
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    gain.gain.setValueAtTime(gainVal, now);
    gain.gain.linearRampToValueAtTime(0.0001, now + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + duration);
  } catch (e) {
    // Graceful fallback if audio is restricted
  }
}

function playClick() {
  playTone(850, 'sine', 0.04, 0.05);
}

function playTilt() {
  playTone(130, 'triangle', 0.12, 0.08);
}

function playChime() {
  if (!soundEnabled) return;
  try {
    playTone(523.25, 'sine', 0.35, 0.08); // C5
    setTimeout(() => playTone(659.25, 'sine', 0.35, 0.08), 70); // E5
    setTimeout(() => playTone(783.99, 'sine', 0.45, 0.08), 140); // G5
  } catch (e) {}
}

function playFanfare() {
  if (!soundEnabled) return;
  try {
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => playTone(freq, 'sine', 0.28, 0.09), idx * 100);
    });
  } catch (e) {}
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  const btn = document.getElementById('sound-btn');
  const icon = document.getElementById('sound-icon');
  const text = document.getElementById('sound-text');
  const onText = _t('nav.soundOn');
  const offText = _t('nav.soundOff');
  if (soundEnabled) {
    if (btn) btn.classList.add('active');
    if (icon) icon.innerText = '🔊';
    if (text) text.innerText = onText;
    playClick();
    showToast(onText, '', '🔊');
  } else {
    if (btn) btn.classList.remove('active');
    if (icon) icon.innerText = '🔇';
    if (text) text.innerText = offText;
    showToast(offText, '', '🔇');
  }
}

// ============================================================================
// 2. TOAST NOTIFICATION SYSTEM (REPLACES BLOCKING ALERT)
// ============================================================================
function showToast(title, message, icon = '✨') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span style="font-size: 22px;">${icon}</span>
    <div>
      <div style="font-weight: 700; color: #38bdf8;">${title}</div>
      <div style="font-size: 12px; color: #94a3b8;">${message}</div>
    </div>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'all 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50px)';
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 3500);
}

// ============================================================================
// 3. CONFETTI PARTICLE SYSTEM
// ============================================================================
const confettiParticles = [];
let confettiAnimating = false;

function fireConfetti(originX, originY, count = 50) {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#38bdf8', '#fbbf24', '#34d399', '#f472b6', '#c084fc', '#60a5fa'];
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 8 + 3;
    confettiParticles.push({
      x: originX || window.innerWidth / 2,
      y: originY || window.innerHeight / 2,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 3,
      size: Math.random() * 7 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rSpeed: Math.random() * 10 - 5,
      alpha: 1
    });
  }

  const safeRaf = (typeof window !== 'undefined' && window.requestAnimationFrame) 
    ? window.requestAnimationFrame 
    : (cb) => setTimeout(cb, 16);

  if (!confettiAnimating) {
    confettiAnimating = true;
    safeRaf(renderConfetti);
  }
}

function renderConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = confettiParticles.length - 1; i >= 0; i--) {
    const p = confettiParticles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.2;
    p.rotation += p.rSpeed;
    p.alpha -= 0.015;

    if (p.alpha <= 0 || p.y > canvas.height + 20) {
      confettiParticles.splice(i, 1);
      continue;
    }

    if (ctx.save && ctx.translate && ctx.rotate && ctx.restore) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();
    } else {
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x, p.y, p.size, p.size);
    }
  }

  const safeRaf = (typeof window !== 'undefined' && window.requestAnimationFrame) 
    ? window.requestAnimationFrame 
    : (cb) => setTimeout(cb, 16);

  if (confettiParticles.length > 0) {
    safeRaf(renderConfetti);
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiAnimating = false;
  }
}

// ============================================================================
// 4. BADGES & TROPHY CABINET SYSTEM
// ============================================================================
const BADGE_DEFS = [
  { id: 'solo_four', name: 'The Solo Four', icon: '💎', desc: 'Discovered the unique {4, 6, 8, 12} with only 1 pair' },
  { id: 'balance_master', name: 'Scale Master', icon: '⚖️', desc: 'Discovered all prime pairs for a target on the scale' },
  { id: 'matrix_sleuth', name: 'Matrix Sleuth', icon: '🧩', desc: 'Discovered 3 prime pairs using the 100-Grid Matrix' },
  { id: 'clock_maestro', name: 'Clock Maestro', icon: '🎵', desc: 'Played the Chord Symphony on the Modulo Clock' },
  { id: 'comet_stargazer', name: 'Comet Stargazer', icon: '🔭', desc: 'Explored Oasis and Desert peaks on the Comet canvas' },
  { id: 'chief_inspector', name: 'Chief Inspector', icon: '🕵️‍♂️', desc: 'Solved all 6 Junior Detective Case Files' }
];

function getBadgeInfo(id) {
  const b = BADGE_DEFS.find(item => item.id === id);
  const nameKey = 'badges.' + id + '.name';
  const descKey = 'badges.' + id + '.desc';
  const trName = _t(nameKey);
  const trDesc = _t(descKey);
  return {
    name: (trName && trName !== nameKey) ? trName : (b ? b.name : id),
    desc: (trDesc && trDesc !== descKey) ? trDesc : (b ? b.desc : '')
  };
}

let userBadges = {};

function loadBadges() {
  try {
    const saved = localStorage.getItem('goldbach_edu_badges');
    userBadges = saved ? JSON.parse(saved) : {};
  } catch (e) {
    userBadges = {};
  }
  updateBadgeHeader();
}

function saveBadges() {
  try {
    localStorage.setItem('goldbach_edu_badges', JSON.stringify(userBadges));
  } catch (e) {}
  updateBadgeHeader();
}

function unlockBadge(id) {
  if (userBadges[id]) return;
  userBadges[id] = Date.now();
  saveBadges();
  playFanfare();
  fireConfetti();
  const b = BADGE_DEFS.find(item => item.id === id);
  if (b) {
    const info = getBadgeInfo(id);
    showToast(`🏆 ${info.name}!`, info.desc, b.icon);
  }
}

function updateBadgeHeader() {
  const count = Object.keys(userBadges).length;
  const header = document.getElementById('badge-count-header');
  if (header) header.innerText = _t('nav.badgesHeader', { count: count });
  const modalCount = document.getElementById('badge-count-modal');
  if (modalCount) modalCount.innerText = _t('trophy.unlocked', { count: count });
}

function openTrophyModal() {
  playClick();
  renderTrophyShelf();
  const modal = document.getElementById('trophy-modal');
  if (modal) modal.classList.add('open');
}

function closeTrophyModal(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const modal = document.getElementById('trophy-modal');
  if (modal) modal.classList.remove('open');
}

function resetBadges() {
  if (confirm(_t('trophy.resetConfirm'))) {
    userBadges = {};
    saveBadges();
    renderTrophyShelf();
    playClick();
    showToast(_t('trophy.reset'), '', '🔄');
  }
}

function renderTrophyShelf() {
  const container = document.getElementById('badge-shelf-container');
  if (!container) return;
  container.innerHTML = '';

  BADGE_DEFS.forEach(b => {
    const unlocked = !!userBadges[b.id];
    const info = getBadgeInfo(b.id);
    const card = document.createElement('div');
    card.className = `shelf-badge ${unlocked ? 'unlocked' : ''}`;
    card.innerHTML = `
      <div class="icon">${b.icon}</div>
      <div class="name">${info.name}</div>
      <div class="desc">${info.desc}</div>
      ${unlocked ? `<div style="font-size: 10px; color: var(--green); font-weight: bold; margin-top: 4px;">${_t('detective.solvedBadge')}</div>` : `<div style="font-size: 10px; color: var(--muted); margin-top: 4px;">${_t('detective.lockedBadge')}</div>`}
    `;
    container.appendChild(card);
  });
  updateBadgeHeader();
}

// ============================================================================
// 5. TEACHER MODE & TAB SWITCHING
// ============================================================================
let isTeacherMode = false;

function toggleTeacherMode() {
  isTeacherMode = !isTeacherMode;
  document.body.classList.toggle('teacher-mode', isTeacherMode);
  const btn = document.getElementById('mode-btn');
  const icon = document.getElementById('mode-icon');
  const text = document.getElementById('mode-text');
  const teacherText = _t('nav.teacherMode');
  const studentText = _t('nav.studentMode');
  if (isTeacherMode) {
    if (btn) btn.classList.add('active');
    if (icon) icon.innerText = '🧑‍🏫';
    if (text) text.innerText = teacherText;
    showToast(teacherText, '', '🧑‍🏫');
  } else {
    if (btn) btn.classList.remove('active');
    if (icon) icon.innerText = '🎒';
    if (text) text.innerText = studentText;
    showToast(studentText, '', '🎒');
  }
  playClick();
}

function setLabTab(tabName) {
  playClick();
  // Safe tab button switching using data-tab attribute (no relying on event.target)
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-tab') === tabName);
  });
  document.querySelectorAll('.tab-content').forEach(c => {
    c.classList.remove('active');
  });
  const tabEl = document.getElementById('module-' + tabName);
  if (tabEl) tabEl.classList.add('active');

  if (tabName === 'scale') updateScaleView();
  if (tabName === 'clock') {
    drawClock();
    if (window.requestAnimationFrame) window.requestAnimationFrame(() => drawClock());
    setTimeout(() => drawClock(), 60);
  }
  if (tabName === 'matrix') initMatrix();
  if (tabName === 'comet') {
    initCometCanvas();
    if (window.requestAnimationFrame) window.requestAnimationFrame(() => initCometCanvas());
    setTimeout(() => initCometCanvas(), 60);
  }
  if (tabName === 'detective') renderDetectiveCases();
  if (tabName === 'worksheet') generateWorksheet();
}

// ============================================================================
// 6. MODULE 1: THE PRIME BALANCE SCALE (PLACE & REMOVE INTERACTION)
// ============================================================================
let scaleTarget = 24;
let scalePrimes = [null, null]; // [slot1, slot2]
let scaleDiscoveredPairs = [];

function initScale() {
  const tray = document.getElementById('prime-tray');
  if (!tray) return;
  tray.innerHTML = '';

  const primes = (window.EDU_GOLDBACH_DATA && window.EDU_GOLDBACH_DATA.prime_list)
    ? window.EDU_GOLDBACH_DATA.prime_list.slice(0, 24)
    : [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61];

  primes.forEach(p => {
    const chip = document.createElement('div');
    chip.className = 'prime-chip';
    chip.id = `prime-chip-${p}`;
    chip.setAttribute('data-prime', p);
    chip.innerText = p;
    chip.onclick = () => onScalePrimeClicked(p);
    tray.appendChild(chip);
  });

  resetScale();
}

function setTargetFromInput() {
  const input = document.getElementById('scale-target-input');
  let val = parseInt(input.value);
  if (isNaN(val) || val < 4) val = 4;
  if (val % 2 !== 0) val += 1;
  input.value = val;
  scaleTarget = val;
  resetScale();
}

function setPresetTarget(val) {
  scaleTarget = val;
  const input = document.getElementById('scale-target-input');
  if (input) input.value = val;
  resetScale();
  playClick();
}

function pickRandomTarget() {
  const evens = [6, 8, 10, 12, 14, 16, 18, 20, 24, 28, 30, 36, 40, 48, 60, 72, 84, 90, 98];
  scaleTarget = evens[Math.floor(Math.random() * evens.length)];
  const input = document.getElementById('scale-target-input');
  if (input) input.value = scaleTarget;
  resetScale();
  playClick();
}

function resetScale() {
  scalePrimes = [null, null];
  scaleDiscoveredPairs = [];
  const targetValEl = document.getElementById('svg-target-val');
  if (targetValEl) targetValEl.textContent = scaleTarget;
  const foundTitleEl = document.getElementById('found-target-title');
  if (foundTitleEl) foundTitleEl.innerText = scaleTarget;
  updateScaleView();
  playClick();
}

/**
 * Place OR Remove Prime on Scale (Complete Toggle Support)
 */
function onScalePrimeClicked(p) {
  playClick();

  // 1. If prime p is currently in slot 0, clicking it REMOVES it
  if (scalePrimes[0] === p) {
    scalePrimes[0] = null;
  }
  // 2. If prime p is currently in slot 1, clicking it REMOVES it
  else if (scalePrimes[1] === p) {
    scalePrimes[1] = null;
  }
  // 3. Otherwise, PLACE prime p in the first empty slot
  else if (scalePrimes[0] === null) {
    scalePrimes[0] = p;
  } else if (scalePrimes[1] === null) {
    scalePrimes[1] = p;
  }
  // 4. If both slots are full, replace slot 0 with the new prime
  else {
    scalePrimes[0] = p;
  }

  updateScaleView();
}

/**
 * Click directly on a slot circle on the scale SVG to remove it
 */
function clearScaleSlot(slotIdx) {
  if (scalePrimes[slotIdx] !== null) {
    playClick();
    scalePrimes[slotIdx] = null;
    updateScaleView();
  }
}

function updateScaleView() {
  const p1 = scalePrimes[0];
  const p2 = scalePrimes[1];
  const slot1El = document.getElementById('svg-slot1-val');
  const slot2El = document.getElementById('svg-slot2-val');
  const sumLabel = document.getElementById('svg-sum-label');
  const beam = document.getElementById('scaleBeam');
  const banner = document.getElementById('scale-status');

  if (slot1El) slot1El.textContent = p1 !== null ? p1 : '?';
  if (slot2El) slot2El.textContent = p2 !== null ? p2 : '?';

  const sum = (p1 || 0) + (p2 || 0);
  if (sumLabel) sumLabel.textContent = `${_t('scale.panSum')}: ${sum}`;

  // Update .selected class on all tray chips
  document.querySelectorAll('.prime-chip').forEach(chip => {
    const pVal = parseInt(chip.getAttribute('data-prime'));
    const isPlaced = (scalePrimes[0] === pVal || scalePrimes[1] === pVal);
    chip.classList.toggle('selected', isPlaced);
  });

  // Dynamic Scale Tilt Physics
  let angle = 0;
  if (p1 === null && p2 === null) {
    angle = -10; // leans left (target heavier)
    if (banner) {
      banner.className = 'status-banner banner-pending';
      banner.innerText = _t('scale.statusEmpty');
    }
  } else if (p1 === null || p2 === null) {
    const filledP = p1 !== null ? p1 : p2;
    const diff = filledP - scaleTarget;
    angle = Math.max(-12, Math.min(12, diff * 0.6));
    if (banner) {
      banner.className = 'status-banner banner-pending';
      banner.innerText = _t('scale.statusOneWeight', { p: filledP, n: scaleTarget });
    }
  } else {
    // Both primes placed!
    const diff = sum - scaleTarget;
    if (diff === 0) {
      angle = 0; // Perfect balance!
      if (banner) {
        banner.className = 'status-banner banner-success';
        banner.innerText = _t('scale.statusBalanced', { p: p1, q: p2, n: scaleTarget });
      }
      playChime();

      // Record discovered pair
      const pairKey = `${Math.min(p1, p2)} + ${Math.max(p1, p2)}`;
      if (!scaleDiscoveredPairs.includes(pairKey)) {
        scaleDiscoveredPairs.push(pairKey);
        fireConfetti();
        showToast(_t('scale.toastFound', { p: p1, q: p2, n: scaleTarget }), '', '⚖️');
      }

      checkScaleTargetCompletion();
    } else {
      angle = diff > 0 ? 11 : -11;
      playTilt();
      if (banner) {
        banner.className = 'status-banner banner-error';
        banner.innerText = diff > 0
          ? _t('scale.statusOverweight', { sum: sum, n: scaleTarget })
          : _t('scale.statusUnderweight', { sum: sum, n: scaleTarget });
      }
    }
  }

  if (beam) beam.style.transform = `rotate(${angle}deg)`;
  updateDiscoveredPairsList();
}

function checkScaleTargetCompletion() {
  const targetData = (window.EDU_GOLDBACH_DATA && window.EDU_GOLDBACH_DATA.small_numbers)
    ? window.EDU_GOLDBACH_DATA.small_numbers.find(d => d.n === scaleTarget)
    : null;

  const actualPairs = targetData ? targetData.pairs : getGoldbachPairsFor(scaleTarget);
  if (scaleDiscoveredPairs.length >= actualPairs.length && actualPairs.length > 0) {
    unlockBadge('balance_master');
    if ([4, 6, 8, 12].includes(scaleTarget)) {
      unlockBadge('solo_four');
    }
  }
}

function updateDiscoveredPairsList() {
  const container = document.getElementById('found-pairs-list');
  const badgeEl = document.getElementById('pairs-completion-badge');
  const foundLabel = document.getElementById('found-target-label');
  if (foundLabel) foundLabel.innerText = _t('scale.discoveredTitle', { n: scaleTarget });
  if (!container) return;
  container.innerHTML = '';

  const targetData = (window.EDU_GOLDBACH_DATA && window.EDU_GOLDBACH_DATA.small_numbers)
    ? window.EDU_GOLDBACH_DATA.small_numbers.find(d => d.n === scaleTarget)
    : null;
  const totalAvailable = targetData ? targetData.pairs.length : getGoldbachPairsFor(scaleTarget).length;

  if (badgeEl) badgeEl.innerText = `${scaleDiscoveredPairs.length} / ${totalAvailable}`;

  if (scaleDiscoveredPairs.length === 0) {
    container.innerHTML = `<span style="color: var(--muted); font-size: 13px;">${_t('matrix.noPairsFound', { n: scaleTarget })}</span>`;
    return;
  }

  scaleDiscoveredPairs.forEach(pStr => {
    const chip = document.createElement('span');
    chip.style.cssText = 'background: rgba(52, 211, 153, 0.2); color: #34d399; padding: 4px 10px; border-radius: 6px; font-weight: 700; font-size: 13px; border: 1px solid rgba(52, 211, 153, 0.4);';
    chip.innerText = pStr;
    container.appendChild(chip);
  });
}

function solveScale() {
  playClick();
  const targetData = (window.EDU_GOLDBACH_DATA && window.EDU_GOLDBACH_DATA.small_numbers)
    ? window.EDU_GOLDBACH_DATA.small_numbers.find(d => d.n === scaleTarget)
    : null;
  const pairs = targetData ? targetData.pairs : getGoldbachPairsFor(scaleTarget);

  if (pairs && pairs.length > 0) {
    scaleDiscoveredPairs = pairs.map(p => `${p[0]} + ${p[1]}`);
    const first = pairs[0];
    scalePrimes = [first[0], first[1]];
    updateScaleView();
    checkScaleTargetCompletion();
    showToast(_t('scale.toastAllFound', { count: pairs.length, n: scaleTarget }), '', '💡');
  }
}

// ============================================================================
// 7. MODULE 2: 100-GRID MATRIX (ROBUST PARTNER FINDER & LIGHT UP PAIRS)
// ============================================================================
let matrixTarget = 28;
let matrixSelectedPrime = null;
let matrixPairsCount = 0;

function isNumberPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function getPrimeFactorsStr(num) {
  if (num <= 1) return _t('matrix.neither');
  let d = 2;
  let temp = num;
  let factors = [];
  while (d * d <= temp) {
    while (temp % d === 0) {
      factors.push(d);
      temp = Math.floor(temp / d);
    }
    d++;
  }
  if (temp > 1) factors.push(temp);
  return factors.length > 1 ? factors.join(' × ') : _t('matrix.prime');
}

function getGoldbachPairsFor(n) {
  const pairs = [];
  for (let p = 2; p <= n / 2; p++) {
    const q = n - p;
    if (isNumberPrime(p) && isNumberPrime(q)) {
      pairs.push([p, q]);
    }
  }
  return pairs;
}

function initMatrix(force = false) {
  const grid = document.getElementById('matrixGrid');
  if (!grid) return;
  if (!force && grid.children.length > 0) return;
  grid.innerHTML = '';

  for (let i = 1; i <= 100; i++) {
    const isPr = isNumberPrime(i);
    const cell = document.createElement('div');
    cell.className = `matrix-cell ${isPr ? 'is-prime' : ''}`;
    cell.id = `mcell-${i}`;
    cell.innerText = i;
    cell.title = isPr ? `${_t('matrix.prime')} ${i}` : `${i} = ${getPrimeFactorsStr(i)}`;
    cell.onclick = () => onMatrixCellClicked(i, isPr);
    grid.appendChild(cell);
  }
}

function updateMatrixFromSlider() {
  matrixTarget = parseInt(document.getElementById('matrix-slider').value);
  const nValEl = document.getElementById('matrix-n-val');
  if (nValEl) nValEl.innerText = matrixTarget;
  clearMatrixHighlights();
}

function setMatrixTarget(val) {
  matrixTarget = val;
  const slider = document.getElementById('matrix-slider');
  if (slider) slider.value = val;
  const nValEl = document.getElementById('matrix-n-val');
  if (nValEl) nValEl.innerText = val;
  clearMatrixHighlights();
  playClick();
}

function clearMatrixHighlights() {
  document.querySelectorAll('.matrix-cell').forEach(c => {
    c.classList.remove('selected-prime', 'partner-prime', 'both-prime', 'partner-composite');
    c.style.background = '';
    c.style.borderColor = '';
    c.style.color = '';
    c.style.boxShadow = '';
  });
  const fb = document.getElementById('matrix-feedback');
  if (fb) fb.innerHTML = `Target N = <strong>${matrixTarget}</strong>.`;
}

function onMatrixCellClicked(num, isPr) {
  playClick();
  clearMatrixHighlights();

  const fb = document.getElementById('matrix-feedback');
  if (!fb) return;

  if (!isPr) {
    fb.innerHTML = `<span style="color: var(--danger); font-weight: bold;">✕ ${num} (${getPrimeFactorsStr(num)})</span>`;
    return;
  }

  if (num >= matrixTarget) {
    fb.innerHTML = `<span style="color: var(--accent); font-weight: bold;">⚠️ ${num} ≥ ${matrixTarget}</span>`;
    return;
  }

  matrixSelectedPrime = num;
  const partner = matrixTarget - num;
  const cellP = document.getElementById(`mcell-${num}`);
  const partnerCell = document.getElementById(`mcell-${partner}`);
  const partnerIsPrime = isNumberPrime(partner);

  if (num === partner && partnerIsPrime) {
    // Both primes are the exact same number (e.g., 5 + 5 = 10, 3 + 3 = 6)
    if (cellP) cellP.classList.add('both-prime');
    playChime();
    matrixPairsCount++;
    if (matrixPairsCount >= 3) unlockBadge('matrix_sleuth');
    fb.innerHTML = `
      <span style="color: var(--green); font-weight: bold;">
        🎯 ${_t('matrix.bothPrimeDesc', { p: num, n: matrixTarget })}
      </span>
    `;
    return;
  }

  if (cellP) cellP.classList.add('selected-prime');

  if (partnerIsPrime) {
    if (partnerCell) partnerCell.classList.add('partner-prime');
    playChime();
    matrixPairsCount++;
    if (matrixPairsCount >= 3) unlockBadge('matrix_sleuth');
    fb.innerHTML = `
      <span style="color: var(--green); font-weight: bold;">
        🎯 ${num} + ${partner} = ${matrixTarget} (${_t('matrix.prime')})
      </span>
    `;
  } else {
    if (partnerCell) partnerCell.classList.add('partner-composite');
    fb.innerHTML = `
      <span style="color: var(--danger);">
        ${num} + <strong>${partner}</strong> = ${matrixTarget} (${partner}: ${getPrimeFactorsStr(partner)})
      </span>
    `;
  }
}

/**
 * Robust "Light Up All Pairs" Feature with Distinct Colors & Clickable Chips
 */
function highlightAllMatrixPairs() {
  clearMatrixHighlights();
  playFanfare();

  const pairs = getGoldbachPairsFor(matrixTarget);
  const fb = document.getElementById('matrix-feedback');
  if (!fb) return;

  if (pairs.length === 0) {
    fb.innerHTML = `<span style="color: var(--danger); font-weight: bold;">${_t('matrix.noPairsFound', { n: matrixTarget })}</span>`;
    return;
  }

  const pairColors = [
    { bg: '#34d399', text: '#0b1120', label: 'Pair 1' },
    { bg: '#fbbf24', text: '#0b1120', label: 'Pair 2' },
    { bg: '#c084fc', text: '#0b1120', label: 'Pair 3' },
    { bg: '#38bdf8', text: '#0b1120', label: 'Pair 4' },
    { bg: '#f472b6', text: '#0b1120', label: 'Pair 5' },
    { bg: '#a3e635', text: '#0b1120', label: 'Pair 6' }
  ];

  pairs.forEach((pair, idx) => {
    const p1 = pair[0];
    const p2 = pair[1];
    const colorTheme = pairColors[idx % pairColors.length];

    const c1 = document.getElementById(`mcell-${p1}`);
    const c2 = document.getElementById(`mcell-${p2}`);

    if (p1 === p2) {
      if (c1) {
        c1.style.background = colorTheme.bg;
        c1.style.color = colorTheme.text;
        c1.style.boxShadow = `0 0 14px ${colorTheme.bg}`;
        c1.style.borderColor = '#ffffff';
      }
    } else {
      if (c1) {
        c1.style.background = colorTheme.bg;
        c1.style.color = colorTheme.text;
        c1.style.boxShadow = `0 0 12px ${colorTheme.bg}`;
        c1.style.borderColor = '#ffffff';
      }
      if (c2) {
        c2.style.background = colorTheme.bg;
        c2.style.color = colorTheme.text;
        c2.style.boxShadow = `0 0 12px ${colorTheme.bg}`;
        c2.style.borderColor = '#ffffff';
      }
    }
  });

  // Render Interactive Clickable Pair Chips
  let chipsHtml = `
    <div style="width: 100%; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
      <span style="color: var(--green); font-weight: bold;">
        🌟 ${_t('matrix.allPairsFound', { count: pairs.length, n: matrixTarget })}
      </span>
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
  `;

  pairs.forEach((pair, idx) => {
    const colorTheme = pairColors[idx % pairColors.length];
    chipsHtml += `
      <button class="btn btn-sm" onclick="focusMatrixPair(${pair[0]}, ${pair[1]})" style="background: ${colorTheme.bg}; color: ${colorTheme.text}; font-weight: bold; border-radius: 6px;">
        ${pair[0]} + ${pair[1]} = ${matrixTarget}
      </button>
    `;
  });

  chipsHtml += `</div></div>`;
  fb.innerHTML = chipsHtml;
  fireConfetti();
  showToast(_t('matrix.lightUpBtn'), _t('matrix.allPairsFound', { count: pairs.length, n: matrixTarget }), '🌟');
}

function focusMatrixPair(p1, p2) {
  clearMatrixHighlights();
  playChime();
  const c1 = document.getElementById(`mcell-${p1}`);
  const c2 = document.getElementById(`mcell-${p2}`);

  if (p1 === p2) {
    if (c1) c1.classList.add('both-prime');
  } else {
    if (c1) c1.classList.add('selected-prime');
    if (c2) c2.classList.add('partner-prime');
  }

  const fb = document.getElementById('matrix-feedback');
  if (fb) {
    fb.innerHTML = `
      <span style="color: var(--green); font-weight: bold;">
        ✨ ${p1} + ${p2} = ${matrixTarget}
      </span>
      <button class="btn btn-sm btn-green" onclick="highlightAllMatrixPairs()" style="margin-left: 12px;">${_t('matrix.lightUpBtn')}</button>
    `;
  }
}

// ============================================================================
// 8. MODULE 3: MODULO CLOCK WHEEL
// ============================================================================
let clockTarget = 24;
let clockMode = 'target'; // 'target', '12', or '6'
let clockSelectedPair = null; // [p, q] or null
let clockHoveredNode = null; // i or null

function setClockMode(mode) {
  clockMode = mode;
  clockSelectedPair = null;
  const b1 = document.getElementById('clk-mode-n');
  const b2 = document.getElementById('clk-mode-12');
  const b3 = document.getElementById('clk-mode-6');
  if (b1) b1.className = `btn btn-sm ${mode === 'target' ? 'btn-primary' : ''}`;
  if (b2) b2.className = `btn btn-sm ${mode === '12' ? 'btn-primary' : ''}`;
  if (b3) b3.className = `btn btn-sm ${mode === '6' ? 'btn-primary' : ''}`;
  playClick();
  drawClock();
}

function updateClockFromSlider() {
  clockTarget = parseInt(document.getElementById('clock-slider').value);
  clockSelectedPair = null;
  const nValEl = document.getElementById('clock-n-val');
  if (nValEl) nValEl.innerText = clockTarget;
  drawClock();
}

function toggleClockPairSelection(p, q) {
  if (p === null || (clockSelectedPair && clockSelectedPair[0] === p && clockSelectedPair[1] === q)) {
    clockSelectedPair = null;
  } else {
    clockSelectedPair = [p, q];
    playTone(520, 'sine', 0.25, 0.08);
  }
  playClick();
  drawClock();
}

function onClockMouseMove(e) {
  const canvas = document.getElementById('clockCanvas');
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;
  const mx = (e.clientX - rect.left) * scaleX;
  const my = (e.clientY - rect.top) * scaleY;

  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const radius = 170;

  let totalSlots = clockTarget;
  if (clockMode === '12') totalSlots = 12;
  if (clockMode === '6') totalSlots = 6;

  let closestNode = null;
  let minDist = 22;

  for (let i = 1; i <= totalSlots; i++) {
    const angle = -Math.PI / 2 + (i / totalSlots) * Math.PI * 2;
    const px = cx + radius * Math.cos(angle);
    const py = cy + radius * Math.sin(angle);
    const d = Math.hypot(mx - px, my - py);
    if (d < minDist) {
      minDist = d;
      closestNode = i;
    }
  }

  if (closestNode !== clockHoveredNode) {
    clockHoveredNode = closestNode;
    drawClock();
  }
}

function onClockMouseLeave() {
  if (clockHoveredNode !== null) {
    clockHoveredNode = null;
    drawClock();
  }
}

function drawClock(animatedPairsCount = null) {
  const canvas = document.getElementById('clockCanvas');
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Attach hover events once
  if (!canvas._hasClockEvents) {
    canvas.onmousemove = onClockMouseMove;
    canvas.onmouseleave = onClockMouseLeave;
    canvas._hasClockEvents = true;
  }

  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  const cx = w / 2;
  const cy = h / 2;
  const radius = 170;

  let totalSlots = clockTarget;
  if (clockMode === '12') totalSlots = 12;
  if (clockMode === '6') totalSlots = 6;

  // Outer ring
  ctx.strokeStyle = '#334155';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.stroke();

  // Draw symmetry reflection axis
  ctx.save();
  ctx.setLineDash([5, 5]);
  ctx.strokeStyle = '#64748b';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(cx, cy - radius - 20);
  ctx.lineTo(cx, cy + radius + 20);
  ctx.stroke();

  // Labels for symmetry axis
  ctx.fillStyle = '#94a3b8';
  ctx.font = '10px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(_t('clock.reflectionAxis'), cx, cy - radius - 24);
  ctx.fillText(clockMode === 'target' ? `N/2 = ${clockTarget / 2}` : '', cx, cy + radius + 28);
  ctx.restore();

  // Plot perimeter number nodes
  const points = {};
  for (let i = 1; i <= totalSlots; i++) {
    const angle = -Math.PI / 2 + (i / totalSlots) * Math.PI * 2;
    const px = cx + radius * Math.cos(angle);
    const py = cy + radius * Math.sin(angle);
    const isPr = isNumberPrime(i);
    const isHovered = clockHoveredNode === i;

    points[i] = { x: px, y: py, isPr: isPr, angle: angle };

    // Node point circle
    ctx.beginPath();
    ctx.arc(px, py, isHovered ? 8 : (isPr ? 6 : 3.5), 0, Math.PI * 2);
    ctx.fillStyle = isHovered ? '#f59e0b' : (isPr ? '#38bdf8' : '#64748b');
    ctx.fill();

    if (isHovered || isPr) {
      ctx.strokeStyle = isHovered ? '#ffffff' : '#0284c7';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    // Number text
    const tx = cx + (radius + 18) * Math.cos(angle);
    const ty = cy + (radius + 18) * Math.sin(angle);
    ctx.fillStyle = isHovered ? '#fbbf24' : (isPr ? '#38bdf8' : '#94a3b8');
    ctx.font = isHovered ? 'bold 13px sans-serif' : (isPr ? 'bold 11px sans-serif' : '10px sans-serif');
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(i, tx, ty);
  }

  // Draw Chords
  const pairs = getGoldbachPairsFor(clockTarget);
  const chordsToDraw = animatedPairsCount !== null ? pairs.slice(0, animatedPairsCount) : pairs;

  chordsToDraw.forEach(pair => {
    const p = pair[0];
    const q = pair[1];
    let pt1, pt2;

    if (clockMode === 'target') {
      pt1 = points[p];
      pt2 = points[q];
    } else if (clockMode === '12') {
      const m1 = p % 12 === 0 ? 12 : p % 12;
      const m2 = q % 12 === 0 ? 12 : q % 12;
      pt1 = points[m1];
      pt2 = points[m2];
    } else {
      const m1 = p % 6 === 0 ? 6 : p % 6;
      const m2 = q % 6 === 0 ? 6 : q % 6;
      pt1 = points[m1];
      pt2 = points[m2];
    }

    if (pt1 && pt2) {
      const isDoubled = (pt1.x === pt2.x && pt1.y === pt2.y) || (p === q);
      const isSelected = clockSelectedPair && (
        (clockSelectedPair[0] === p && clockSelectedPair[1] === q) ||
        (clockSelectedPair[0] === q && clockSelectedPair[1] === p)
      );

      if (isDoubled) {
        // Doubled prime (p + p = N): Draw glowing reflection fixed-point node!
        ctx.beginPath();
        ctx.arc(pt1.x, pt1.y, isSelected ? 16 : 12, 0, Math.PI * 2);
        ctx.strokeStyle = isSelected ? '#38bdf8' : '#f43f5e';
        ctx.lineWidth = isSelected ? 3.5 : 2.5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(pt1.x, pt1.y, isSelected ? 7 : 5, 0, Math.PI * 2);
        ctx.fillStyle = isSelected ? '#38bdf8' : '#f43f5e';
        ctx.fill();
      } else {
        // Linear chord
        ctx.beginPath();
        ctx.moveTo(pt1.x, pt1.y);
        ctx.lineTo(pt2.x, pt2.y);
        ctx.strokeStyle = isSelected
          ? '#38bdf8'
          : (clockSelectedPair ? 'rgba(100, 116, 139, 0.25)' : (clockTarget % 6 === 0 ? '#fbbf24' : '#38bdf8'));
        ctx.lineWidth = isSelected ? 4 : 2.5;
        ctx.stroke();

        if (isSelected) {
          // Highlight endpoints
          [pt1, pt2].forEach(pt => {
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 9, 0, Math.PI * 2);
            ctx.fillStyle = '#38bdf8';
            ctx.fill();
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            ctx.stroke();
          });
        }
      }
    }
  });

  // Highlight hovered node partner chord if hovering
  if (clockHoveredNode && clockMode === 'target') {
    const hNum = clockHoveredNode;
    const partner = clockTarget - hNum;
    if (partner >= 1 && partner <= clockTarget && points[partner]) {
      const ptA = points[hNum];
      const ptB = points[partner];
      const isBothPrime = isNumberPrime(hNum) && isNumberPrime(partner);

      ctx.save();
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(ptA.x, ptA.y);
      ctx.lineTo(ptB.x, ptB.y);
      ctx.strokeStyle = isBothPrime ? '#22c55e' : '#ef4444';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
    }
  }

  // Center Badge
  ctx.beginPath();
  ctx.arc(cx, cy, 38, 0, Math.PI * 2);
  ctx.fillStyle = '#0f172a';
  ctx.fill();
  ctx.strokeStyle = clockTarget % 6 === 0 ? '#fbbf24' : '#38bdf8';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#f8fafc';
  ctx.font = 'bold 20px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(clockTarget, cx, cy - 6);

  ctx.fillStyle = '#94a3b8';
  ctx.font = '11px sans-serif';
  ctx.fillText(`${pairs.length} pair${pairs.length === 1 ? '' : 's'}`, cx, cy + 14);

  // Update Clock Stats & Interactive Pair Chips
  const statsDiv = document.getElementById('clock-stats');
  if (statsDiv) {
    const isMult6 = clockTarget % 6 === 0;

    let hoverInfoHtml = '';
    if (clockHoveredNode && clockMode === 'target') {
      const hNum = clockHoveredNode;
      const comp = clockTarget - hNum;
      const hIsP = isNumberPrime(hNum);
      const cIsP = comp > 0 && isNumberPrime(comp);
      if (hIsP && cIsP) {
        hoverInfoHtml = `<div style="margin-top: 8px; padding: 6px 10px; background: rgba(34, 197, 94, 0.15); border: 1px solid #22c55e; border-radius: 6px; color: #4ade80; font-size: 12px;">🌟 Hovered ${hNum}: Partner ${comp} is also Prime! (${hNum} + ${comp} = ${clockTarget})</div>`;
      } else if (hIsP && !cIsP) {
        hoverInfoHtml = `<div style="margin-top: 8px; padding: 6px 10px; background: rgba(239, 68, 68, 0.15); border: 1px solid #ef4444; border-radius: 6px; color: #f87171; font-size: 12px;">❌ Hovered ${hNum} is Prime, but ${comp} is Composite (${getPrimeFactorsStr(comp)}).</div>`;
      } else {
        hoverInfoHtml = `<div style="margin-top: 8px; padding: 6px 10px; background: rgba(100, 116, 139, 0.2); border: 1px solid #64748b; border-radius: 6px; color: #94a3b8; font-size: 12px;">ℹ️ ${hNum} (${getPrimeFactorsStr(hNum)}).</div>`;
      }
    }

    const pairButtonsHtml = pairs.map(pair => {
      const isDoubled = pair[0] === pair[1];
      const isSel = clockSelectedPair && clockSelectedPair[0] === pair[0] && clockSelectedPair[1] === pair[1];
      return `
        <button class="btn btn-sm" style="padding: 4px 10px; font-size: 12px; margin: 3px; ${isSel ? 'background: var(--primary); color: #000; font-weight: bold; border-color: var(--primary);' : 'background: #1e293b; color: white; border: 1px solid #334155;'}" onclick="toggleClockPairSelection(${pair[0]}, ${pair[1]})">
          ${pair[0]} + ${pair[1]} ${isDoubled ? _t('clock.selfPair') : ''}
        </button>
      `;
    }).join(' ');

    statsDiv.innerHTML = `
      <div style="font-weight: 700; color: ${isMult6 ? '#fbbf24' : '#38bdf8'}; margin-bottom: 6px;">
        ${isMult6 ? _t('clock.mult6Bonus', { n: clockTarget }) : _t('clock.notMult6', { n: clockTarget })}
      </div>
      <div style="color: var(--muted); margin-bottom: 8px; font-size: 13px;">
        ${_t('clock.totalPairs', { count: pairs.length })}
      </div>
      <div style="margin-bottom: 6px;">
        <span style="font-size: 11px; color: var(--muted);">${_t('clock.clickPairTip')}</span>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 4px; align-items: center;">
        ${pairButtonsHtml || `<span style="color: #ef4444; font-size: 12px;">${_t('matrix.noPairsFound', { n: clockTarget })}</span>`}
        ${clockSelectedPair ? `<button class="btn btn-sm" style="padding: 3px 8px; font-size: 11px; margin-left: 6px; background: #334155;" onclick="toggleClockPairSelection(null, null)">${_t('clock.resetView')}</button>` : ''}
      </div>
      ${hoverInfoHtml}
    `;
  }
}

function playChordSymphony() {
  const pairs = getGoldbachPairsFor(clockTarget);
  if (pairs.length === 0) return;

  const notes = [440, 493.88, 554.37, 659.25, 739.99, 880, 987.77];
  pairs.forEach((_, idx) => {
    setTimeout(() => {
      drawClock(idx + 1);
      playTone(notes[idx % notes.length], 'sine', 0.22, 0.09);
    }, (idx + 1) * 220);
  });

  setTimeout(() => {
    drawClock(null);
    unlockBadge('clock_maestro');
  }, (pairs.length + 1) * 220);
}


// ============================================================================
// 9. MODULE 4: GOLDBACH COMET EXPLORER
// ============================================================================
let cometRange = 500;
let cometFilter = 'all';
let cometHoverPoint = null;
let cometLockedPoint = null;

function getCometPoints() {
  if (window.EDU_GOLDBACH_DATA && window.EDU_GOLDBACH_DATA.comet_points && window.EDU_GOLDBACH_DATA.comet_points.length > 0) {
    return window.EDU_GOLDBACH_DATA.comet_points;
  }
  // Resilient fallback generator if data script is delayed
  const points = [];
  for (let n = 4; n <= 1000; n += 2) {
    const pairs = getGoldbachPairsFor(n);
    const k = pairs.length;
    const pmin = pairs.length > 0 ? pairs[0][0] : 0;
    const tags = [];
    if ((n & (n - 1)) === 0) tags.push('pow2');
    if (n % 30 === 0) tags.push('m30');
    else if (n % 6 === 0) tags.push('m6');
    if (isNumberPrime(n / 2 - 1) && isNumberPrime(n / 2 + 1)) tags.push('twin');
    points.push({ n, k, pmin, tags });
  }
  return points;
}

function getCometCanvasWidth() {
  const box = document.getElementById('cometBox');
  if (box && box.clientWidth > 150) {
    return Math.max(box.clientWidth - 24, 340);
  }
  const container = document.querySelector('.container');
  if (container && container.clientWidth > 150) {
    return Math.max(container.clientWidth - 48, 340);
  }
  return Math.max(window.innerWidth - 80, 500);
}

function setCometRange(range) {
  cometRange = range;
  const b200 = document.getElementById('btn-comet-200');
  const b500 = document.getElementById('btn-comet-500');
  const b1000 = document.getElementById('btn-comet-1000');
  if (b200) b200.className = `btn btn-sm ${range === 200 ? 'btn-primary' : ''}`;
  if (b500) b500.className = `btn btn-sm ${range === 500 ? 'btn-primary' : ''}`;
  if (b1000) b1000.className = `btn btn-sm ${range === 1000 ? 'btn-primary' : ''}`;
  playClick();
  renderCometCanvas();
}

function toggleCometFilter(filterName) {
  cometFilter = filterName;
  document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
  const pill = document.getElementById(`flt-${filterName}`);
  if (pill) pill.classList.add('active');
  playClick();
  renderCometCanvas();
}

function initCometCanvas() {
  const canvas = document.getElementById('cometCanvas');
  if (!canvas) return;

  const targetWidth = getCometCanvasWidth();
  canvas.width = targetWidth;
  canvas.height = 380;

  canvas.onmousemove = onCometMouseMove;
  canvas.onmouseleave = onCometMouseLeave;
  canvas.onclick = onCometClick;

  // Touch device support (mobile / iPad)
  canvas.ontouchstart = onCometTouch;
  canvas.ontouchmove = onCometTouch;
  canvas.ontouchend = onCometMouseLeave;

  renderCometCanvas();
}

function renderCometCanvas() {
  const canvas = document.getElementById('cometCanvas');
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Self-heal width if rendered during initial hidden tab state
  if (!canvas.width || canvas.width < 150) {
    canvas.width = getCometCanvasWidth();
    canvas.height = 380;
  }

  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  const allPoints = getCometPoints();
  const points = allPoints.filter(p => p.n <= cometRange);
  if (points.length === 0) return;

  const maxK = Math.max(...points.map(p => p.k), 10);
  const padX = 54;
  const padY = 36;
  const plotW = w - padX * 2;
  const plotH = h - padY * 2;

  // Subtle background starry glow
  const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
  bgGrad.addColorStop(0, '#0a0f1d');
  bgGrad.addColorStop(1, '#070a12');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(padX, padY, plotW, plotH);

  // Horizontal Grid lines and Y-axis numbers
  ctx.lineWidth = 1;
  for (let step = 0; step <= 5; step++) {
    const yVal = Math.round((maxK / 5) * step);
    const yPos = h - padY - (yVal / maxK) * plotH;

    ctx.strokeStyle = '#1e293b';
    ctx.beginPath();
    ctx.moveTo(padX, yPos);
    ctx.lineTo(w - padX, yPos);
    ctx.stroke();

    ctx.fillStyle = '#64748b';
    ctx.font = '10px sans-serif';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    ctx.fillText(yVal, padX - 10, yPos);
  }

  // Vertical Grid lines and X-axis numbers
  const xStepCount = w < 600 ? 4 : 8;
  for (let step = 0; step <= xStepCount; step++) {
    const xVal = Math.round((cometRange / xStepCount) * step);
    if (xVal === 0) continue;
    const xPos = padX + (xVal / cometRange) * plotW;

    ctx.strokeStyle = '#1e293b';
    ctx.beginPath();
    ctx.moveTo(xPos, padY);
    ctx.lineTo(xPos, h - padY);
    ctx.stroke();

    ctx.fillStyle = '#64748b';
    ctx.font = '10px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText(xVal, xPos, h - padY + 8);
  }

  // Axis Labels
  ctx.fillStyle = '#94a3b8';
  ctx.font = 'bold 11px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(_t('comet.axisX', { range: cometRange }), padX + plotW / 2, h - padY + 24);

  ctx.save();
  ctx.translate(14, padY + plotH / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.textAlign = 'center';
  ctx.fillText(_t('comet.axisY'), 0, 0);
  ctx.restore();

  // Draw Upper Ceiling Guide (Oasis envelope) & Lower Floor Guide (Desert)
  ctx.save();
  ctx.setLineDash([3, 3]);
  ctx.strokeStyle = 'rgba(251, 191, 36, 0.25)'; // faint gold
  ctx.beginPath();
  ctx.moveTo(padX, h - padY);
  ctx.lineTo(w - padX, padY + 8);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(244, 114, 182, 0.25)'; // faint pink
  ctx.beginPath();
  ctx.moveTo(padX, h - padY);
  ctx.lineTo(w - padX, h - padY - 0.22 * plotH);
  ctx.stroke();
  ctx.restore();

  // Draw Data Points
  points.forEach(pt => {
    const px = padX + (pt.n / cometRange) * plotW;
    const py = h - padY - (pt.k / maxK) * plotH;

    let drawThis = true;
    let color = '#38bdf8';
    let size = 2.6;

    const isM30 = pt.tags && pt.tags.includes('m30');
    const isM6 = pt.tags && pt.tags.includes('m6');
    const isPow2 = pt.tags && pt.tags.includes('pow2');
    const isTwin = pt.tags && pt.tags.includes('twin');

    if (cometFilter === 'm30' && !isM30) drawThis = false;
    if (cometFilter === 'm6' && !isM6 && !isM30) drawThis = false;
    if (cometFilter === 'pow2' && !isPow2) drawThis = false;
    if (cometFilter === 'twin' && !isTwin) drawThis = false;

    if (!drawThis) return;

    if (isM30) {
      color = '#fbbf24'; // gold oasis
      size = 4.2;
    } else if (isPow2) {
      color = '#f472b6'; // desert pink
      size = 4.2;
    } else if (isTwin) {
      color = '#34d399'; // twin green
      size = 3.5;
    } else if (isM6) {
      color = '#facc15';
      size = 3.2;
    }

    ctx.beginPath();
    ctx.arc(px, py, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  });

  // Highlight Locked or Hovered point
  const activePt = cometLockedPoint || cometHoverPoint;
  if (activePt && activePt.n <= cometRange) {
    const px = padX + (activePt.n / cometRange) * plotW;
    const py = h - padY - (activePt.k / maxK) * plotH;

    // Crosshairs
    ctx.save();
    ctx.setLineDash([2, 2]);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.beginPath();
    ctx.moveTo(padX, py);
    ctx.lineTo(w - padX, py);
    ctx.moveTo(px, padY);
    ctx.lineTo(px, h - padY);
    ctx.stroke();
    ctx.restore();

    // Radiant Target Ring
    ctx.beginPath();
    ctx.arc(px, py, 9, 0, Math.PI * 2);
    ctx.strokeStyle = cometLockedPoint === activePt ? '#22c55e' : '#ffffff';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(px, py, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
  }
}

function getCometCoords(e, canvas) {
  const rect = canvas.getBoundingClientRect();
  const clientX = (e.touches && e.touches.length > 0) ? e.touches[0].clientX : e.clientX;
  const clientY = (e.touches && e.touches.length > 0) ? e.touches[0].clientY : e.clientY;

  // Scale client mouse/touch to internal canvas drawing coordinates
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;

  return {
    canvasX: (clientX - rect.left) * scaleX,
    canvasY: (clientY - rect.top) * scaleY,
    cssX: clientX - rect.left,
    cssY: clientY - rect.top,
    rectWidth: rect.width,
    rectHeight: rect.height
  };
}

function findNearestCometPoint(coords, canvas) {
  const allPoints = getCometPoints();
  const points = allPoints.filter(p => p.n <= cometRange);
  if (points.length === 0) return null;

  const maxK = Math.max(...points.map(p => p.k), 10);
  const padX = 54;
  const padY = 36;
  const plotW = canvas.width - padX * 2;
  const plotH = canvas.height - padY * 2;

  let nearest = null;
  let minDist = 22; // tolerance in canvas pixels

  points.forEach(pt => {
    // Filter matching
    if (cometFilter === 'm30' && (!pt.tags || !pt.tags.includes('m30'))) return;
    if (cometFilter === 'm6' && (!pt.tags || (!pt.tags.includes('m6') && !pt.tags.includes('m30')))) return;
    if (cometFilter === 'pow2' && (!pt.tags || !pt.tags.includes('pow2'))) return;
    if (cometFilter === 'twin' && (!pt.tags || !pt.tags.includes('twin'))) return;

    const px = padX + (pt.n / cometRange) * plotW;
    const py = canvas.height - padY - (pt.k / maxK) * plotH;
    const d = Math.hypot(coords.canvasX - px, coords.canvasY - py);
    if (d < minDist) {
      minDist = d;
      nearest = pt;
    }
  });

  return nearest;
}

function onCometMouseMove(e) {
  const canvas = document.getElementById('cometCanvas');
  const tooltip = document.getElementById('cometTooltip');
  if (!canvas) return;

  const coords = getCometCoords(e, canvas);
  const nearest = findNearestCometPoint(coords, canvas);

  if (nearest) {
    cometHoverPoint = nearest;
    if (tooltip) {
      tooltip.style.display = 'block';
      tooltip.style.left = `${Math.min(coords.cssX + 16, coords.rectWidth - 230)}px`;
      tooltip.style.top = `${Math.max(coords.cssY - 80, 10)}px`;

      const tagsDesc = (nearest.tags || []).map(t => {
        if (t === 'm30') return _t('comet.filterOasis');
        if (t === 'm6') return _t('comet.filterM6');
        if (t === 'pow2') return _t('comet.filterDesert');
        if (t === 'twin') return _t('comet.filterTwin');
        return t;
      }).join(' • ');

      tooltip.innerHTML = `
        <div style="font-weight: bold; color: #38bdf8; font-size: 14px;">Even Number N = ${nearest.n}</div>
        <div style="color: #fbbf24; font-size: 13px; font-weight: bold;">${_t('comet.pairsLabel', { count: nearest.k })}</div>
        <div style="color: #94a3b8; font-size: 11px;">${_t('comet.pminLabel', { pmin: nearest.pmin })}</div>
        ${tagsDesc ? `<div style="margin-top: 4px; font-size: 10px; color: #a5f3fc;">${tagsDesc}</div>` : ''}
        <div style="margin-top: 4px; font-size: 10px; color: #64748b; font-style: italic;">${_t('comet.hoverTip')}</div>
      `;
    }

    if (!cometLockedPoint) {
      updateCometInspector(nearest, false);
    }

    if (nearest.tags && (nearest.tags.includes('m30') || nearest.tags.includes('pow2'))) {
      unlockBadge('comet_stargazer');
    }
    renderCometCanvas();
  } else {
    cometHoverPoint = null;
    if (tooltip) tooltip.style.display = 'none';
    renderCometCanvas();
  }
}

function onCometTouch(e) {
  if (e.cancelable) e.preventDefault();
  onCometMouseMove(e);
}

function onCometClick(e) {
  const canvas = document.getElementById('cometCanvas');
  if (!canvas) return;

  const coords = getCometCoords(e, canvas);
  const nearest = findNearestCometPoint(coords, canvas);

  if (nearest) {
    cometLockedPoint = (cometLockedPoint && cometLockedPoint.n === nearest.n) ? null : nearest;
    playClick();
    updateCometInspector(nearest, Boolean(cometLockedPoint));
    renderCometCanvas();
  } else {
    cometLockedPoint = null;
    updateCometInspector(null, false);
    renderCometCanvas();
  }
}

function onCometMouseLeave() {
  cometHoverPoint = null;
  const tooltip = document.getElementById('cometTooltip');
  if (tooltip) tooltip.style.display = 'none';
  if (!cometLockedPoint) {
    updateCometInspector(null, false);
  }
  renderCometCanvas();
}

function updateCometInspector(pt, isLocked) {
  const detailEl = document.getElementById('cometInspectDetail');
  const actionsEl = document.getElementById('cometInspectActions');
  if (!detailEl || !actionsEl) return;

  if (!pt) {
    detailEl.innerHTML = _t('comet.inspectorEmpty');
    actionsEl.innerHTML = '';
    return;
  }

  const tagsDesc = (pt.tags || []).map(t => {
    if (t === 'm30') return `<span class="badge badge-gold" style="font-size: 11px;">${_t('comet.filterOasis')}</span>`;
    if (t === 'm6') return `<span class="badge badge-gold" style="font-size: 11px;">${_t('comet.filterM6')}</span>`;
    if (t === 'pow2') return `<span class="badge badge-pink" style="font-size: 11px;">${_t('comet.filterDesert')}</span>`;
    if (t === 'twin') return `<span class="badge badge-green" style="font-size: 11px;">${_t('comet.filterTwin')}</span>`;
    return `<span class="badge badge-blue" style="font-size: 11px;">${t}</span>`;
  }).join(' ');

  const pairs = getGoldbachPairsFor(pt.n);

  detailEl.innerHTML = `
    <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
      <strong style="font-size: 16px; color: var(--primary);">Even Number N = ${pt.n}</strong>
      ${isLocked ? `<span style="font-size: 11px; background: #22c55e; color: #000; padding: 2px 6px; border-radius: 4px; font-weight: bold;">${_t('comet.lockedBadge')}</span>` : ''}
      ${tagsDesc}
    </div>
    <div style="font-size: 13px; color: var(--muted); margin-top: 4px;">
      Prime Factorization: <strong style="color: white;">${getPrimeFactorsStr(pt.n)}</strong> &nbsp;•&nbsp;
      ${_t('comet.pairsLabel', { count: pt.k })} &nbsp;•&nbsp;
      ${_t('comet.pminLabel', { pmin: pt.pmin })}
    </div>
    <div style="font-size: 12px; color: #94a3b8; margin-top: 4px;">
      Pairs: ${pairs.map(p => `${p[0]}+${p[1]}`).join(', ') || _t('worksheet.none')}
    </div>
  `;

  actionsEl.innerHTML = `
    <button class="btn btn-sm btn-primary" onclick="investigateCometNumberOnScale(${pt.n})">${_t('comet.btnWeigh')}</button>
    <button class="btn btn-sm btn-accent" onclick="investigateCometNumberOnClock(${pt.n})">${_t('comet.btnClock')}</button>
    ${pt.n <= 100 ? `<button class="btn btn-sm btn-green" onclick="investigateCometNumberOnMatrix(${pt.n})">${_t('comet.btnGrid')}</button>` : ''}
  `;
}

function investigateCometNumberOnScale(n) {
  playClick();
  setLabTab('scale');
  setPresetTarget(n);
  showToast(_t('comet.toastScale', { n: n }), '', '⚖️');
}

function investigateCometNumberOnClock(n) {
  playClick();
  setLabTab('clock');
  clockTarget = n;
  const slider = document.getElementById('clock-slider');
  if (slider) {
    if (n > parseInt(slider.max)) slider.max = n;
    slider.value = n;
  }
  const nValEl = document.getElementById('clock-n-val');
  if (nValEl) nValEl.innerText = n;
  drawClock();
  showToast(_t('comet.toastClock', { n: n }), '', '⏰');
}

function investigateCometNumberOnMatrix(n) {
  playClick();
  setLabTab('matrix');
  setMatrixTarget(n);
  highlightAllMatrixPairs();
  showToast(_t('comet.toastMatrix', { n: n }), '', '🔢');
}


// ============================================================================
// 10. MODULE 5: JUNIOR DETECTIVE ACADEMY
// ============================================================================
const DETECTIVE_CASES = [
  {
    num: 1,
    title: 'The Secret Society of Four',
    badge: 'Elementary',
    story: 'Four special even numbers have ONLY ONE single prime pair! Enter one of the four:',
    hint: 'Hint: One of them is the only even prime doubled (2 + 2), and another is 3 + 5.',
    validSolutions: [4, 6, 8, 12],
    explanation: 'Solved! The Unique Four are {4, 6, 8, 12}. All larger numbers have multiple pairs!'
  },
  {
    num: 2,
    title: 'The Multiples-of-6 Jackpot',
    badge: 'Intermediate',
    story: 'Multiples of 6 receive twice as many pairs! Find an even number under 40 with at least 3 pairs:',
    hint: 'Hint: Try a multiple of 6 like 24, 30, or 36.',
    validSolutions: [24, 30, 36],
    explanation: 'Jackpot hit! Multiples of 6 connect primes from both 6k-1 and 6k+1 residue classes.'
  },
  {
    num: 3,
    title: 'The Twin Prime Bridge',
    badge: 'Geometry',
    story: 'Twin primes (29, 31) meet at midpoint 30. What is their doubled bridge number N?',
    hint: 'Hint: 2 × Midpoint = 2 × 30.',
    validSolutions: [60],
    explanation: 'Bridge crossed! 60 = 29 + 31. Every twin prime pair builds a guaranteed Goldbach decomposition!'
  },
  {
    num: 4,
    title: 'The Desert Mirage',
    badge: 'Number Theory',
    story: 'Powers of 2 live in the driest desert of the Goldbach Comet. Name a power of 2 between 30 and 100:',
    hint: 'Hint: 2, 4, 8, 16, 32, 64, 128...',
    validSolutions: [64],
    explanation: 'Desert identified! 64 has only 5 pairs, while its neighbor 60 has 6 pairs despite being smaller!'
  },
  {
    num: 5,
    title: 'The Smallest Prime Leap',
    badge: 'Investigation',
    story: 'Find an even number where NEITHER 3 nor 5 can be used (so smallest prime p ≥ 7):',
    hint: 'Hint: A multiple of 2, 3, and 5 is a multiple of 30! (e.g. 30, 42, 60, 90)',
    validSolutions: [30, 42, 60, 90],
    explanation: 'Mystery solved! Divisibility by 3 and 5 forces the prime search to leap all the way to 7.'
  },
  {
    num: 6,
    title: 'The Grand Champion of 98',
    badge: 'Master Detective',
    story: 'The 5th champion integer jumps its smallest prime all the way to 19! What is this number?',
    hint: 'Hint: It is just two steps away from 100.',
    validSolutions: [98],
    explanation: 'GENIUS DETECTIVE! 98 = 19 + 79. Every prime below 19 fails because 98 - p is composite!'
  }
];

let solvedCases = {};

function loadSolvedCases() {
  try {
    const saved = localStorage.getItem('goldbach_solved_cases');
    solvedCases = saved ? JSON.parse(saved) : { 1: false };
  } catch (e) {
    solvedCases = { 1: false };
  }
  if (solvedCases[1] === undefined) solvedCases[1] = false;
}

function saveSolvedCases() {
  try {
    localStorage.setItem('goldbach_solved_cases', JSON.stringify(solvedCases));
  } catch (e) {}
}

function renderDetectiveCases() {
  const grid = document.getElementById('detectiveCardsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  let solvedCount = 0;
  DETECTIVE_CASES.forEach(c => {
    if (solvedCases[c.num] === true) solvedCount++;
  });

  const badgeCountEl = document.getElementById('solved-count-badge');
  if (badgeCountEl) badgeCountEl.innerText = _t('detective.casesSolved', { count: solvedCount });

  const trCases = (window.EDU_I18N && window.EDU_I18N.translations && window.EDU_I18N.translations[window.EDU_I18N.currentLang] && window.EDU_I18N.translations[window.EDU_I18N.currentLang].detective)
    ? window.EDU_I18N.translations[window.EDU_I18N.currentLang].detective.cases
    : null;

  DETECTIVE_CASES.forEach((c, idx) => {
    const isSolved = solvedCases[c.num] === true;
    const isUnlocked = c.num === 1 || solvedCases[c.num - 1] === true;
    const tr = (trCases && trCases[idx]) ? trCases[idx] : c;

    const card = document.createElement('div');
    card.className = `case-card ${isSolved ? 'solved' : (isUnlocked ? 'unlocked' : 'locked')}`;
    card.id = `case-card-${c.num}`;

    card.innerHTML = `
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <span class="badge ${isSolved ? 'badge-green' : 'badge-gold'}">${tr.badge || c.badge}</span>
          <span style="font-size: 11px; font-weight: bold; color: ${isSolved ? 'var(--green)' : 'var(--muted)'};">
            ${isSolved ? _t('detective.solvedBadge') : (isUnlocked ? _t('detective.activeBadge') : _t('detective.lockedBadge'))}
          </span>
        </div>
        <h3 style="font-size: 15px; margin-bottom: 6px;">Case #${c.num}: ${tr.title || c.title}</h3>
        <p style="font-size: 13px; color: var(--muted); margin-bottom: 6px;">${tr.story || c.story}</p>
        <p style="font-size: 11px; color: #64748b; font-style: italic;">${tr.hint || c.hint}</p>
      </div>

      <div style="margin-top: 14px;">
        <div style="display: flex; gap: 8px;">
          <input type="number" id="case-input-${c.num}" placeholder="${_t('detective.enterNPlaceholder')}" ${!isUnlocked || isSolved ? 'disabled' : ''} onkeydown="if(event.key==='Enter') solveDetectiveCase(${c.num})" style="width: 100px; padding: 6px 10px; background: #1e293b; border: 1px solid var(--card-border); border-radius: 6px; color: white; font-weight: bold;">
          <button class="btn btn-primary btn-sm" onclick="solveDetectiveCase(${c.num})" ${!isUnlocked || isSolved ? 'disabled' : ''}>${_t('detective.verifyBtn')}</button>
        </div>
        <div id="case-feedback-${c.num}" style="margin-top: 8px; font-size: 12px; font-weight: bold;">
          ${isSolved ? `<span style="color: var(--green);">${tr.explanation || c.explanation}</span>` : ''}
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function solveDetectiveCase(caseNum) {
  playClick();
  const c = DETECTIVE_CASES.find(item => item.num === caseNum);
  const input = document.getElementById(`case-input-${caseNum}`);
  const feedback = document.getElementById(`case-feedback-${caseNum}`);
  const val = parseInt(input.value);

  if (isNaN(val) || val < 2) {
    if (feedback) feedback.innerHTML = `<span style="color: var(--danger);">${_t('detective.inputInvalid')}</span>`;
    return;
  }

  let isCorrect = false;
  if (c.validSolutions && c.validSolutions.includes(val)) {
    isCorrect = true;
  }

  const trCases = (window.EDU_I18N && window.EDU_I18N.translations && window.EDU_I18N.translations[window.EDU_I18N.currentLang] && window.EDU_I18N.translations[window.EDU_I18N.currentLang].detective)
    ? window.EDU_I18N.translations[window.EDU_I18N.currentLang].detective.cases
    : null;
  const tr = (trCases && trCases[caseNum - 1]) ? trCases[caseNum - 1] : c;
  const expl = tr.explanation || c.explanation;

  if (isCorrect) {
    solvedCases[caseNum] = true;
    saveSolvedCases();
    playFanfare();
    fireConfetti();
    if (feedback) feedback.innerHTML = `<span style="color: var(--green);">${expl}</span>`;

    showToast(`Case #${caseNum} Solved!`, expl, '🕵️‍♂️');

    if (caseNum < 6) {
      solvedCases[caseNum + 1] = false;
      saveSolvedCases();
    } else {
      unlockBadge('chief_inspector');
    }

    renderDetectiveCases();
  } else {
    if (feedback) feedback.innerHTML = `<span style="color: var(--accent);">${_t('detective.notQuiteHint')}</span>`;
  }
}

// ============================================================================
// 11. MODULE 6: PRINTABLE WORKSHEET GENERATOR
// ============================================================================
let worksheetProblems = [];

function generateWorksheet() {
  playClick();
  const tierEl = document.getElementById('ws-tier');
  const countEl = document.getElementById('ws-count');
  const tier = tierEl ? tierEl.value : 'middle';
  const count = countEl ? (parseInt(countEl.value) || 10) : 10;
  worksheetProblems = [];

  let pool = [];
  if (tier === 'elem') {
    pool = [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
  } else if (tier === 'middle') {
    pool = [16, 20, 24, 28, 32, 36, 40, 44, 48, 50, 54, 60, 64, 70, 72, 80];
  } else {
    pool = [60, 64, 72, 80, 84, 90, 96, 98, 100, 108, 110, 114, 120];
  }

  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, count).sort((a, b) => a - b);

  selected.forEach(n => {
    const pairs = getGoldbachPairsFor(n);
    worksheetProblems.push({ n: n, pairs: pairs });
  });

  renderWorksheetDOM();
}

function renderWorksheetDOM() {
  const probList = document.getElementById('wsProblemList');
  const ansList = document.getElementById('wsAnswerList');
  if (!probList || !ansList) return;

  const sName = document.getElementById('ws-student-name');
  if (sName) sName.innerText = _t('worksheet.studentName');
  const sDate = document.getElementById('ws-student-date');
  if (sDate) sDate.innerText = _t('worksheet.date');

  probList.innerHTML = '';
  ansList.innerHTML = '';

  worksheetProblems.forEach((prob, idx) => {
    const item = document.createElement('div');
    item.className = 'ws-problem';
    item.innerHTML = `
      <strong>${_t('worksheet.problemPrompt', { num: idx + 1 })}</strong> &nbsp;
      <span style="font-size: 18px; font-weight: bold;">${prob.n} = </span>
      <span class="ws-fill-line">&nbsp;</span> &nbsp;+&nbsp;
      <span class="ws-fill-line">&nbsp;</span>
      <div style="font-size: 12px; color: #6b7280; margin-top: 6px;">
        ${_t('worksheet.showWork')}
      </div>
    `;
    probList.appendChild(item);

    const ansItem = document.createElement('div');
    const pairStrs = prob.pairs.map(p => `${p[0]} + ${p[1]}`).join('  OR  ');
    ansItem.innerHTML = `<strong>#${idx + 1} (${prob.n}):</strong> &nbsp; ${pairStrs || _t('worksheet.none')}`;
    ansList.appendChild(ansItem);
  });
}

function toggleWorksheetKey() {
  const checkbox = document.getElementById('ws-include-key');
  const keyArea = document.getElementById('wsKeyArea');
  if (keyArea && checkbox) {
    keyArea.style.display = checkbox.checked ? 'block' : 'none';
  }
}

// ============================================================================
// 12. INITIALIZATION & I18N HOOKS
// ============================================================================
window.onLanguageChanged = function(lang) {
  // Update badges
  updateBadgeHeader();
  const trophyModal = document.getElementById('trophy-modal');
  if (trophyModal && trophyModal.classList.contains('open')) {
    renderTrophyShelf();
  }

  // Update sound & teacher mode buttons
  const soundText = document.getElementById('sound-text');
  if (soundText) {
    soundText.innerText = soundEnabled ? _t('nav.soundOn') : _t('nav.soundOff');
  }
  const modeText = document.getElementById('mode-text');
  if (modeText) {
    modeText.innerText = isTeacherMode ? _t('nav.teacherMode') : _t('nav.studentMode');
  }

  // Re-render components with translated dynamic text
  updateScaleView();
  initMatrix(true);
  drawClock();
  renderCometCanvas();
  updateCometInspector(cometLockedPoint || cometHoverPoint, Boolean(cometLockedPoint));
  renderDetectiveCases();
  renderWorksheetDOM();
};

window.addEventListener('load', () => {
  loadBadges();
  loadSolvedCases();
  initScale();
  pickRandomTarget();
  drawClock();
  initMatrix();
  if (window.EDU_I18N && typeof window.EDU_I18N.init === 'function') {
    window.EDU_I18N.init();
  }
});

window.addEventListener('resize', () => {
  const cometCanvas = document.getElementById('cometCanvas');
  if (cometCanvas) {
    cometCanvas.width = getCometCanvasWidth();
    renderCometCanvas();
  }
  drawClock();
});

