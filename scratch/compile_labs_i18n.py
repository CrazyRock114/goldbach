import json, os, sys

sys.path.append("scratch")
from data_clusters_ui import CLUSTERS, UI
from labs_trans_01_25 import LABS_TRANS_1_25
from labs_trans_26_50 import LABS_TRANS_26_50
from labs_trans_51_75 import LABS_TRANS_51_75
from labs_trans_76_100 import LABS_TRANS_76_100

# Merge all labs
ALL_LABS = {}
for d in [LABS_TRANS_1_25, LABS_TRANS_26_50, LABS_TRANS_51_75, LABS_TRANS_76_100]:
    ALL_LABS.update(d)

print(f"Total labs merged: {len(ALL_LABS)}")
assert len(ALL_LABS) == 100, f"Expected 100 labs, found {len(ALL_LABS)}"

# Verify all 8 languages exist for every lab
LANGS = ["en", "de", "fr", "it", "ja", "ko", "zh-CN", "zh-TW"]
for num, info in ALL_LABS.items():
    for l in LANGS:
        assert l in info["title"], f"Lab {num} missing title in {l}"
        assert l in info["hook"], f"Lab {num} missing hook in {l}"

print("All 100 labs have complete translations across all 8 languages!")

# Generate edu/labs/i18n.js
js_content = """// ============================================================================
// 100 GOLDBACH DISCOVERY LABS - INTERNATIONALIZATION (i18n) ENGINE
// Supported Languages:
//   en: English (Default)
//   de: Deutsch (German)
//   fr: Français (French)
//   it: Italiano (Italian)
//   ja: 日本語 (Japanese)
//   ko: 한국어 (Korean)
//   zh-CN: 简体中文 (Simplified Chinese)
//   zh-TW: 繁體中文 (Traditional Chinese)
// ============================================================================

(function(window) {
  'use strict';

  const LANGUAGES = {
    'en': { 'label': '🇺🇸 English', 'dir': 'ltr' },
    'de': { 'label': '🇩🇪 Deutsch', 'dir': 'ltr' },
    'fr': { 'label': '🇫🇷 Français', 'dir': 'ltr' },
    'it': { 'label': '🇮🇹 Italiano', 'dir': 'ltr' },
    'ja': { 'label': '🇯🇵 日本語', 'dir': 'ltr' },
    'ko': { 'label': '🇰🇷 한국어', 'dir': 'ltr' },
    'zh-CN': { 'label': '🇨🇳 简体中文', 'dir': 'ltr' },
    'zh-TW': { 'label': '🇭🇰 繁體中文', 'dir': 'ltr' }
  };

  const CLUSTERS = """ + json.dumps(CLUSTERS, ensure_ascii=False) + """;

  const UI = """ + json.dumps(UI, ensure_ascii=False) + """;

  const LABS = """ + json.dumps(ALL_LABS, ensure_ascii=False) + """;

  const GLabI18N = {
    LANGUAGES,
    CLUSTERS,
    UI,
    LABS,
    currentLang: 'en',

    init() {
      let saved = 'en';
      try {
        saved = localStorage.getItem('goldbach_edu_lang');
      } catch (e) {}

      if (!saved && typeof navigator !== 'undefined' && navigator.language) {
        const navLang = navigator.language;
        if (navLang.startsWith('de')) saved = 'de';
        else if (navLang.startsWith('fr')) saved = 'fr';
        else if (navLang.startsWith('it')) saved = 'it';
        else if (navLang.startsWith('ja')) saved = 'ja';
        else if (navLang.startsWith('ko')) saved = 'ko';
        else if (navLang.toLowerCase() === 'zh-tw' || navLang.toLowerCase() === 'zh-hant' || navLang.toLowerCase() === 'zh-hk') saved = 'zh-TW';
        else if (navLang.startsWith('zh')) saved = 'zh-CN';
        else saved = 'en';
      }

      if (!LANGUAGES[saved]) saved = 'en';
      this.currentLang = saved;
      this.applyToDOM(saved);
    },

    t(key, lang = null) {
      const l = lang || this.currentLang;
      if (UI[l] && UI[l][key] !== undefined) return UI[l][key];
      if (UI['en'] && UI['en'][key] !== undefined) return UI['en'][key];
      return key;
    },

    getClusterName(cNum, lang = null) {
      const l = lang || this.currentLang;
      if (CLUSTERS[cNum] && CLUSTERS[cNum][l]) return CLUSTERS[cNum][l];
      if (CLUSTERS[cNum] && CLUSTERS[cNum]['en']) return CLUSTERS[cNum]['en'];
      return `Cluster ${cNum}`;
    },

    getLab(num, lang = null) {
      const l = lang || this.currentLang;
      if (!LABS[num]) return null;
      const title = (LABS[num].title && LABS[num].title[l]) || (LABS[num].title && LABS[num].title['en']) || `Lab ${num}`;
      const hook = (LABS[num].hook && LABS[num].hook[l]) || (LABS[num].hook && LABS[num].hook['en']) || '';
      return { title, hook };
    },

    setLanguage(lang) {
      if (!LANGUAGES[lang]) return;
      this.currentLang = lang;
      try {
        localStorage.setItem('goldbach_edu_lang', lang);
      } catch (e) {}
      this.applyToDOM(lang);

      if (typeof window.onLabLanguageChanged === 'function') {
        window.onLabLanguageChanged(lang);
      }
    },

    applyToDOM(lang) {
      const l = lang || this.currentLang;
      if (typeof document === 'undefined') return;

      if (document.documentElement) {
        document.documentElement.lang = l;
        document.documentElement.dir = LANGUAGES[l] ? LANGUAGES[l].dir : 'ltr';
      }

      // 1. Data-i18n replacements
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key) {
          const val = this.t(key, l);
          if (val) el.innerHTML = val;
        }
      });

      // 2. Data-i18n-placeholder
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (key) {
          const val = this.t(key, l);
          if (val) el.setAttribute('placeholder', val);
        }
      });

      // 3. Update active select dropdowns
      document.querySelectorAll('.lab-lang-select, #lab-lang-select').forEach(sel => {
        if (sel.value !== l) sel.value = l;
      });

      // 4. Lab-specific header translation if on a lab page
      if (window.GLab && window.GLab.activeConfig) {
        const cfg = window.GLab.activeConfig;
        const labData = this.getLab(cfg.labNum, l);
        if (labData) {
          const h1 = document.querySelector('.lab-header h1');
          if (h1) {
            h1.innerHTML = `${this.t('labPrefix', l)}${String(cfg.labNum).padStart(3, '0')}: ${labData.title}`;
          }
          const hookEl = document.querySelector('.lab-header p.hook');
          if (hookEl) {
            hookEl.innerHTML = labData.hook;
          }
          const cBadge = document.querySelector('.cluster-badge');
          if (cBadge) {
            cBadge.innerHTML = `${this.t('clusterPrefix', l)} ${cfg.clusterNum}: ${this.getClusterName(cfg.clusterNum, l)}`;
          }
        }

        // Update Pedagogy Card titles
        const storyCard = document.querySelector('.pedagogy-card.story h3');
        if (storyCard) {
          storyCard.textContent = this.t('storyTitle', l);
        }
        const challengeCard = document.querySelector('.pedagogy-card.challenge h3');
        if (challengeCard) {
          challengeCard.textContent = this.t('challengeTitle', l);
        }
        const rigorCard = document.querySelector('.pedagogy-card.rigor h3');
        if (rigorCard) {
          rigorCard.textContent = this.t('rigorTitle', l);
        }

        // Update solution reveal buttons
        document.querySelectorAll('.reveal-btn').forEach(btn => {
          const isShown = btn.getAttribute('data-shown') === 'true';
          btn.textContent = isShown ? this.t('hideSolution', l) : this.t('revealSolution', l);
        });

        // Update nav links
        const hubLink = document.querySelector('.lab-nav-link-hub');
        if (hubLink) hubLink.innerHTML = this.t('navHub', l);
        const mainLink = document.querySelector('.lab-nav-link-main');
        if (mainLink) mainLink.innerHTML = this.t('navMainPortal', l);
        const prevLink = document.querySelector('.lab-nav-link-prev');
        if (prevLink) prevLink.innerHTML = this.t('prev', l);
        const nextLink = document.querySelector('.lab-nav-link-next');
        if (nextLink) nextLink.innerHTML = this.t('next', l);
      }
    }
  };

  window.GLabI18N = GLabI18N;
})(typeof window !== 'undefined' ? window : this);
"""

with open("edu/labs/i18n.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("edu/labs/i18n.js successfully created!")
