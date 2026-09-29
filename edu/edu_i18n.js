// ============================================================================
// GOLDBACH DISCOVERY LAB - INTERNATIONALIZATION (i18n) ENGINE
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

window.EDU_I18N = {
  currentLang: 'en',
  languages: {
  "en": {
    "label": "🇺🇸 English",
    "dir": "ltr"
  },
  "de": {
    "label": "🇩🇪 Deutsch",
    "dir": "ltr"
  },
  "fr": {
    "label": "🇫🇷 Français",
    "dir": "ltr"
  },
  "it": {
    "label": "🇮🇹 Italiano",
    "dir": "ltr"
  },
  "ja": {
    "label": "🇯🇵 日本語",
    "dir": "ltr"
  },
  "ko": {
    "label": "🇰🇷 한국어",
    "dir": "ltr"
  },
  "zh-CN": {
    "label": "🇨🇳 简体中文",
    "dir": "ltr"
  },
  "zh-TW": {
    "label": "🇭🇰 繁體中文",
    "dir": "ltr"
  }
},
  translations: {
  "en": {
    "nav": {
      "appTitle": "Goldbach Discovery Lab 🧪",
      "subtitle": "An Interactive Mathematical Playground for Students & Classrooms",
      "soundOn": "Sound: ON",
      "soundOff": "Sound: OFF",
      "studentMode": "Student Mode",
      "teacherMode": "Teacher Mode",
      "badgesHeader": "Badges ({count}/6)",
      "tabScale": "⚖️ 1. Balance Scale",
      "tabMatrix": "🧩 2. 100-Grid Matrix",
      "tabClock": "🕰️ 3. Modulo Clock",
      "tabComet": "🌌 4. Comet Explorer",
      "tabDetective": "🕵️‍♂️ 5. Detective Academy",
      "tabWorksheet": "📄 6. Worksheet Generator",
      "tab100Labs": "🚀 100 Discovery Labs Catalog ★",
      "banner100Title": "🌟 Explore the 100 Expanded Goldbach Interactive Labs!",
      "banner100Badge": "100 LABS COMPLETE",
      "banner100Desc": "Journey through 10 curated clusters spanning small primes, modulo-6 symmetry, 3D simplices, game puzzles, prime gap bridges, and supercomputer benchmarks.",
      "banner100Btn": "Open 100 Labs Catalog →"
    },
    "trophy": {
      "title": "🏆 Your Goldbach Trophy Cabinet",
      "desc": "Solve detective cases and mathematical challenges across the lab to unlock all 6 explorer badges!",
      "unlocked": "Badges Unlocked: {count} / 6",
      "reset": "Reset Badges 🔄",
      "close": "✕ Close",
      "resetConfirm": "Are you sure you want to reset all earned badges and detective cases?"
    },
    "scale": {
      "teacherGuide": "🧑‍🏫 Teacher Guide (Elementary & Middle School | CCSS.MATH.CONTENT.4.OA.B.4): Goldbach conjectured in 1742 that every even integer greater than 2 can be formed by adding two prime numbers. Classroom prompt: Ask students why odd numbers cannot generally be written as the sum of 2 odd primes (Hint: Odd + Odd = Even!). Have students try numbers in the \"Unique Four\" {4, 6, 8, 12} and observe how larger numbers have rapidly multiplying solutions.",
      "title": "The Prime Balance Scale: Weighing Goldbach Sums",
      "targetLabel": "Target Even Weight N:",
      "rollRandom": "Roll Random 🎲",
      "showPairs": "Show All Pairs 💡",
      "presetLabel": "Quick Presets:",
      "trayTitle": "Prime Weight Tray",
      "traySubtitle": "Click any prime below to add it to or remove it from the scale pan:",
      "panTarget": "Target N",
      "panSum": "Prime Sum",
      "statusBalanced": "🌟 Scale in Balance! {p} + {q} = {n}",
      "statusOverweight": "⚠️ Overweight! Sum {sum} > Target {n}",
      "statusUnderweight": "⚖️ Underweight! Sum {sum} < Target {n}",
      "statusEmpty": "Place two prime weights on the right pan to balance the target!",
      "statusOneWeight": "Added {p}. Place one more prime weight to balance!",
      "discoveredTitle": "Discovered Prime Pairs for {n}:",
      "noPairsDiscovered": "No prime pairs discovered yet for {n}.",
      "toastFound": "Pair Discovered! {p} + {q} = {n}",
      "toastAllFound": "All {count} Prime Pairs Found for {n}!",
      "alreadyOnScale": "{p} is already on the scale pan! Click it to remove.",
      "hintTarget": "Hint: Target {n} can be balanced by {count} distinct pair(s): {pairs}",
      "presetSolo": "4 (Solo)",
      "presetUnique": "12 (Unique)",
      "presetOasis": "30 (Oasis)",
      "presetDesert": "64 (Desert)",
      "presetChampion": "98 (Champion)",
      "clearBtn": "Clear Weights ✕",
      "pairsFound": "{found} of {total} pairs found",
      "targetLabelSvg": "TARGET",
      "sumLabelSvg": "SUM: {sum}"
    },
    "matrix": {
      "teacherGuide": "🧑‍🏫 Teacher Guide (Sieve of Eratosthenes & Number Patterns): primes are highlighted in vibrant cyan. Notice how composites have their prime factorization displayed on hover. This visual grid helps students discover that every Goldbach pair reflects across the midpoint N/2.",
      "title": "The 100-Grid Prime Matrix: Finding Complementary Pairs",
      "subtitle": "Tap primes or select target N to illuminate Goldbach pairs across the grid!",
      "targetLabel": "Target Even Integer N:",
      "lightUpBtn": "Light Up All Pairs 🌟",
      "clearBtn": "Clear Highlights 🧹",
      "prime": "Prime",
      "neither": "Neither prime nor composite",
      "allPairsFound": "Found {count} Goldbach prime pair(s) for N = {n}:",
      "noPairsFound": "No prime pairs found for {n}.",
      "bothPrimeDesc": "Self-Pair: {p} + {p} = {n}",
      "inspectPrompt": "Click a prime number in the grid below to inspect its partner!",
      "targetStatus": "Target N = <strong>{target}</strong>.",
      "legendSelected": "Prime p (Selected)",
      "legendPartner": "Prime Partner q (Match!)",
      "legendComposite": "Composite Partner (Not Prime)"
    },
    "clock": {
      "teacherGuide": "🧑‍🏫 Teacher Guide (Clock Arithmetic & Modulo Symmetry): Placing numbers on a circular clock transforms Goldbach pairs into geometric chords. Notice that when N is divisible by 6, chords form a dense, symmetric web of bridges — yielding nearly double the prime pairs!",
      "title": "The Modulo Clock Wheel: Geometric Symmetry & The \"Power of 6\"",
      "targetLabel": "Target N:",
      "clockModeLabel": "Clock Mode:",
      "modeFull": "Full Wheel (1 to N)",
      "mode12": "12-Hour Clock",
      "mode6": "6-Hour Modular Wheel",
      "symphonyBtn": "Play Chord Symphony 🎵",
      "mult6Bonus": "{n} is A MULTIPLE OF 6! 🌟 (~2x Prime Bonus)",
      "notMult6": "{n} is NOT a multiple of 6.",
      "totalPairs": "Total Goldbach Prime Pairs: {count}",
      "clickPairTip": "Click any pair to isolate its chord:",
      "resetView": "Reset View",
      "reflectionAxis": "Reflection Axis",
      "selfPair": "🌟 (Self-Pair)",
      "tip": "💡 Tip: Chords reflect horizontally across the vertical axis! Click any prime pair chip on the right to focus.",
      "cardTitle": "The Multiples-of-6 Prime Bonus",
      "cardDesc": "Notice how chords reflect across the central symmetry axis. When N is divisible by 6, chords form a dense, symmetric web of bridges!",
      "symmetricTip": "Chords reflect horizontally across the vertical axis! Click any prime pair chip on the right to focus."
    },
    "comet": {
      "teacherGuide": "🧑‍🏫 Teacher Guide (Goldbach Comet & Asymptotics): The Goldbach Comet is the scatterplot of k(N) (number of prime pairs) against N. Students can visually discover the upper ridge (\"Oasis Numbers\" like 840, 1260, highly composite) vs the bottom floor (\"Desert Numbers\" like powers of 2).",
      "title": "Goldbach Comet Explorer: Navigating the Constellation of Numbers",
      "subtitle": "Hover over any star in the constellation to inspect its decomposition count and prime anatomy. Filter by number families to see the distinct bands!",
      "filterAll": "✨ All Even Numbers",
      "filterOasis": "🌟 Oasis Numbers (Multiples of 30)",
      "filterM6": "⚡ Multiples of 6",
      "filterDesert": "🌵 Desert Numbers (Powers of 2)",
      "filterTwin": "🌉 Twin Prime Bridges",
      "oasisCeilingTitle": "🌟 The High Oasis Ceiling:",
      "oasisCeilingDesc": "Numbers with prime factors {2, 3, 5, 7} have maximum pairs because very few prime candidates are disqualified by divisibility!",
      "desertFloorTitle": "🌵 The Low Desert Floor:",
      "desertFloorDesc": "Powers of 2 (16, 32, 64, 128, ...) have only 2 as a prime factor, giving them the fewest pairs of all even numbers of comparable size.",
      "axisX": "Even Number N (4 to {range})",
      "axisY": "Pairs k(N)",
      "pairsLabel": "Prime Pairs k(N) = {count}",
      "pminLabel": "Smallest Prime p_min = {pmin}",
      "hoverTip": "(Click star to lock and investigate!)",
      "lockedBadge": "LOCKED 🔒",
      "inspectorEmpty": "Click or hover over any star point in the constellation above to inspect its prime anatomy!",
      "btnWeigh": "Weigh on Scale ⚖️",
      "btnClock": "View on Clock ⏰",
      "btnGrid": "Grid View 🔢",
      "toastScale": "Switched to Balance Scale! Weighing prime pairs for N = {n}",
      "toastClock": "Switched to Modulo Clock! Inspecting geometric chords for N = {n}",
      "toastMatrix": "Switched to 100-Grid! Lit up all Goldbach pairs for N = {n}",
      "inspectorTitle": "Star Inspector & Data Station:",
      "evenNumberTitle": "Even Number N = {n}",
      "factorizationLabel": "Prime Factorization",
      "pairsListLabel": "Pairs"
    },
    "detective": {
      "teacherGuide": "🧑‍🏫 Teacher Guide (Gamified Number Theory Challenges): These 6 tiered cases encourage inductive reasoning and hypothesis testing. Students test their conjectures about prime distribution, smallest Goldbach primes p_min(N), and champion integers.",
      "title": "Junior Detective Academy: The 6 Goldbach Case Files 🕵️‍♂️",
      "subtitle": "Put your mathematical detective hat on! Solve each mystery by testing numbers and discovering their hidden patterns.",
      "casesSolved": "Cases Solved: {count} / 6",
      "verifyBtn": "Verify",
      "enterNPlaceholder": "Enter N",
      "solvedBadge": "SOLVED ✓",
      "activeBadge": "ACTIVE CASE 🔍",
      "lockedBadge": "LOCKED 🔒",
      "inputInvalid": "Please enter a valid even number!",
      "notQuiteHint": "Not quite! Try another number or re-read the hint.",
      "cases": [
        {
          "num": 1,
          "title": "The Secret Society of Four",
          "badge": "Elementary",
          "story": "Four special even numbers have ONLY ONE single prime pair! Enter one of the four:",
          "hint": "Hint: One of them is the only even prime doubled (2 + 2), and another is 3 + 5.",
          "explanation": "Solved! The Unique Four are {4, 6, 8, 12}. All larger numbers have multiple pairs!"
        },
        {
          "num": 2,
          "title": "The Multiples-of-6 Jackpot",
          "badge": "Intermediate",
          "story": "Multiples of 6 receive twice as many pairs! Find an even number under 40 with at least 3 pairs:",
          "hint": "Hint: Try a multiple of 6 like 24, 30, or 36 (or even 22, 26, 34).",
          "explanation": "Jackpot hit! Multiples of 6 connect primes from both 6k-1 and 6k+1 residue classes."
        },
        {
          "num": 3,
          "title": "The Twin Prime Bridge",
          "badge": "Geometry",
          "story": "Twin primes (29, 31) meet at midpoint 30. What is their doubled bridge number N?",
          "hint": "Hint: 2 × Midpoint = 2 × 30.",
          "explanation": "Bridge crossed! 60 = 29 + 31. Every twin prime pair builds a guaranteed Goldbach decomposition!"
        },
        {
          "num": 4,
          "title": "The Desert Mirage",
          "badge": "Number Theory",
          "story": "Powers of 2 live in the driest desert of the Goldbach Comet. Name a power of 2 between 30 and 100:",
          "hint": "Hint: 2, 4, 8, 16, 32, 64, 128...",
          "explanation": "Desert identified! 64 has only 5 pairs, while its neighbor 60 has 6 pairs despite being smaller!"
        },
        {
          "num": 5,
          "title": "The Smallest Prime Leap",
          "badge": "Investigation",
          "story": "Find an even number where NEITHER 3 nor 5 can be used (so smallest prime p ≥ 7):",
          "hint": "Hint: Multiples of 30 like 30, 60, 90, 120, or even 38, 54, 68 work!",
          "explanation": "Mystery solved! Divisibility by 3 and 5 forces the prime search to leap all the way to 7."
        },
        {
          "num": 6,
          "title": "The Grand Champion of 98",
          "badge": "Master Detective",
          "story": "The 5th champion integer jumps its smallest prime all the way to 19! What is this number?",
          "hint": "Hint: It is just two steps away from 100.",
          "explanation": "GENIUS DETECTIVE! 98 = 19 + 79. Every prime below 19 fails because 98 - p is composite!"
        }
      ],
      "caseSolvedToast": "Case #{num} Solved!"
    },
    "worksheet": {
      "teacherGuide": "🧑‍🏫 Teacher Guide (Classroom Practice & Assessment): Generate differentiated, print-ready worksheets with clean typography for classroom handouts. Select your grade level and problem count, then click Print Worksheet to open the system print dialog.",
      "title": "Printable Worksheet Generator: Classroom Discovery 📄",
      "gradeTier": "Grade Tier:",
      "tierElem": "Elementary (Grades 3-5: N ≤ 30)",
      "tierMiddle": "Middle School (Grades 6-8: N ≤ 80)",
      "tierHigh": "High School Competition (Grades 9-12: N ≤ 120)",
      "countLabel": "Number of Problems:",
      "includeKey": "Include Teacher Answer Key",
      "printBtn": "Print Worksheet 🖨️",
      "sheetTitle": "Goldbach's Conjecture: Prime Pair Discovery Challenge",
      "studentName": "Name: ___________________________",
      "date": "Date: _____________",
      "score": "Score: _____ / {count}",
      "instructions": "Instructions: For each even number below, find two prime numbers that add up to equal it. Write the prime numbers on the blanks provided!",
      "problemPrompt": "Problem {num}:",
      "showWork": "(Show work / prime check: __________________)",
      "bonusTitle": "🌟 Bonus Challenge Question:",
      "bonusPrompt": "Can you find an even number that has only one single pair of prime numbers? Name at least two such numbers and show their prime sums!",
      "answerKeyTitle": "Teacher Answer Key (All Valid Goldbach Pairs):",
      "none": "None",
      "count6": "6 Problems",
      "count10": "10 Problems",
      "count14": "14 Problems",
      "subSeries": "Mathematics Department • Educational Discovery Series",
      "studentDateClass": "Date: ________________ Class: _____"
    },
    "badges": {
      "solo_four": {
        "name": "The Solo Four",
        "desc": "Discovered the unique {4, 6, 8, 12} with only 1 pair"
      },
      "balance_master": {
        "name": "Scale Master",
        "desc": "Discovered all prime pairs for a target on the scale"
      },
      "matrix_sleuth": {
        "name": "Matrix Sleuth",
        "desc": "Discovered 3 prime pairs using the 100-Grid Matrix"
      },
      "clock_maestro": {
        "name": "Clock Maestro",
        "desc": "Played the Chord Symphony on the Modulo Clock"
      },
      "comet_stargazer": {
        "name": "Comet Stargazer",
        "desc": "Explored Oasis and Desert peaks on the Comet canvas"
      },
      "chief_inspector": {
        "name": "Chief Inspector",
        "desc": "Solved all 6 Junior Detective Case Files"
      }
    }
  },
  "de": {
    "nav": {
      "appTitle": "Goldbach-Entdeckungslabor 🧪",
      "subtitle": "Ein interaktiver mathematischer Spielplatz für Schüler & Klassenzimmer",
      "soundOn": "Ton: AN",
      "soundOff": "Ton: AUS",
      "studentMode": "Schülermodus",
      "teacherMode": "Lehrermodus",
      "badgesHeader": "Abzeichen ({count}/6)",
      "tabScale": "⚖️ 1. Balkenwaage",
      "tabMatrix": "🧩 2. 100er-Gitter",
      "tabClock": "🕰️ 3. Modulo-Uhr",
      "tabComet": "🌌 4. Kometen-Explorer",
      "tabDetective": "🕵️‍♂️ 5. Detektiv-Akademie",
      "tabWorksheet": "📄 6. Arbeitsblatt-Generator",
      "tab100Labs": "🚀 100 Entdeckungslabore Katalog ★",
      "banner100Title": "🌟 Erkunde die 100 erweiterten interaktiven Goldbach-Labore!",
      "banner100Badge": "100 LABORE KOMPLETT",
      "banner100Desc": "Reise durch 10 Themen-Cluster von kleinen Primzahlen über Modulo-6-Symmetrie, 3D-Simplizes, Mathe-Rätsel bis zu Supercomputer-Benchmarks.",
      "banner100Btn": "100 Labore Katalog öffnen →"
    },
    "trophy": {
      "title": "🏆 Deine Goldbach-Trophäensammlung",
      "desc": "Löse Detektivfälle und mathematische Aufgaben im Labor, um alle 6 Forscher-Abzeichen freizuschalten!",
      "unlocked": "Abzeichen freigeschaltet: {count} / 6",
      "reset": "Abzeichen zurücksetzen 🔄",
      "close": "✕ Schließen",
      "resetConfirm": "Möchtest du wirklich alle verdienten Abzeichen und Detektivfälle zurücksetzen?"
    },
    "scale": {
      "teacherGuide": "🧑‍🏫 Lehrer-Leitfaden (Grundschule & Sekundarstufe I): Christian Goldbach stellte 1742 die Vermutung auf, dass jede gerade Zahl größer als 2 als Summe zweier Primzahlen dargestellt werden kann. Frage im Unterricht: Warum können ungerade Zahlen nicht als Summe zweier ungerader Primzahlen geschrieben werden? (Hinweis: Ungerade + Ungerade = Gerade!).",
      "title": "Die Primzahl-Balkenwaage: Goldbach-Summen wiegen",
      "targetLabel": "Zielgewicht N (gerade):",
      "rollRandom": "Zufall 🎲",
      "showPairs": "Alle Paare zeigen 💡",
      "presetLabel": "Schnellwahl:",
      "trayTitle": "Primzahl-Gewichtsschale",
      "traySubtitle": "Klicke auf eine Primzahl, um sie auf die Waagschale zu legen oder zu entfernen:",
      "panTarget": "Zielgewicht N",
      "panSum": "Primzahlsumme",
      "statusBalanced": "🌟 Waage im Gleichgewicht! {p} + {q} = {n}",
      "statusOverweight": "⚠️ Übergewicht! Summe {sum} > Ziel {n}",
      "statusUnderweight": "⚖️ Untergewicht! Summe {sum} < Ziel {n}",
      "statusEmpty": "Lege zwei Primzahlgewichte auf die rechte Schale, um das Ziel auszugleichen!",
      "statusOneWeight": "{p} platziert. Lege noch eine Primzahl auf, um das Ziel zu erreichen!",
      "discoveredTitle": "Entdeckte Primzahlpaare für {n}:",
      "noPairsDiscovered": "Für {n} wurden noch keine Primzahlpaare entdeckt.",
      "toastFound": "Paar entdeckt! {p} + {q} = {n}",
      "toastAllFound": "Alle {count} Primzahlpaare für {n} gefunden!",
      "alreadyOnScale": "{p} liegt bereits auf der Waagschale! Klicke darauf zum Entfernen.",
      "hintTarget": "Hinweis: Ziel {n} kann durch {count} Paar(e) ausgeglichen werden: {pairs}",
      "presetSolo": "4 (Solo)",
      "presetUnique": "12 (Einzig)",
      "presetOasis": "30 (Oase)",
      "presetDesert": "64 (Wüste)",
      "presetChampion": "98 (Champion)",
      "clearBtn": "Gewichte leeren ✕",
      "pairsFound": "{found} von {total} Paaren gefunden",
      "targetLabelSvg": "ZIEL",
      "sumLabelSvg": "SUMME: {sum}"
    },
    "matrix": {
      "teacherGuide": "🧑‍🏫 Lehrer-Leitfaden (Sieb des Eratosthenes & Zahlenmuster): Primzahlen leuchten cyanblau. Beim Überfahren mit der Maus wird die Primfaktorzerlegung von zusammengesetzten Zahlen angezeigt. Jedes Goldbach-Paar spiegelt sich symmetrisch am Mittelpunkt N/2.",
      "title": "Das 100er-Primzahlgitter: Komplementäre Paare finden",
      "subtitle": "Tippe auf Primzahlen oder wähle N, um Goldbach-Paare im Gitter aufleuchten zu lassen!",
      "targetLabel": "Gerade Zahl N:",
      "lightUpBtn": "Alle Paare erleuchten 🌟",
      "clearBtn": "Markierung löschen 🧹",
      "prime": "Primzahl",
      "neither": "Weder Primzahl noch zusammengesetzt",
      "allPairsFound": "{count} Goldbach-Primzahlpaar(e) für N = {n} gefunden:",
      "noPairsFound": "Keine Primzahlpaare für {n} gefunden.",
      "bothPrimeDesc": "Selbst-Paar: {p} + {p} = {n}",
      "inspectPrompt": "Klicke unten auf eine Primzahl, um ihren Partner zu prüfen!",
      "targetStatus": "Ziel N = <strong>{target}</strong>.",
      "legendSelected": "Primzahl p (Ausgewählt)",
      "legendPartner": "Primzahl-Partner q (Treffer!)",
      "legendComposite": "Zusammengesetzter Partner (Keine Primzahl)"
    },
    "clock": {
      "teacherGuide": "🧑‍🏫 Lehrer-Leitfaden (Uhr-Arithmetik & Modulo-Symmetrie): Auf einem Zifferblatt werden Goldbach-Paare zu geometrischen Sehnen. Wenn N durch 6 teilbar ist, entsteht ein besonders dichtes Netz von Sehnen — mit fast doppelt so vielen Paaren!",
      "title": "Das Modulo-Uhrenrad: Geometrische Symmetrie & die \"Kraft der 6\"",
      "targetLabel": "Ziel N:",
      "clockModeLabel": "Uhrmodus:",
      "modeFull": "Vollrad (1 bis N)",
      "mode12": "12-Stunden-Uhr",
      "mode6": "6-Stunden-Modularrad",
      "symphonyBtn": "Akkord-Symphonie spielen 🎵",
      "mult6Bonus": "{n} ist EIN VIELFACHES VON 6! 🌟 (~2x Primzahl-Bonus)",
      "notMult6": "{n} ist KEIN Vielfaches von 6.",
      "totalPairs": "Goldbach-Primzahlpaare gesamt: {count}",
      "clickPairTip": "Klicke auf ein Paar, um seine Sehne zu isolieren:",
      "resetView": "Ansicht zurücksetzen",
      "reflectionAxis": "Spiegelachse",
      "selfPair": "🌟 (Selbst-Paar)",
      "tip": "💡 Tipp: Sehnen spiegeln sich horizontal an der vertikalen Achse! Klicke rechts auf ein Paar zum Fokussieren.",
      "cardTitle": "Der 6er-Vielfachen-Primzahl-Bonus",
      "cardDesc": "Beobachte die Spiegelsymmetrie! Ist N durch 6 teilbar, formen die Sehnen ein besonders dichtes Verbindungsnetz.",
      "symmetricTip": "Sehnen spiegeln sich horizontal an der vertikalen Achse! Klicke rechts auf ein Paar zum Fokussieren."
    },
    "comet": {
      "teacherGuide": "🧑‍🏫 Lehrer-Leitfaden (Goldbach-Komet & Asymptotik): Der Goldbach-Komet ist das Streudiagramm von k(N) gegen N. Schüler entdecken die obere Decke (\"Oasen-Zahlen\" wie 840, 1260) und den unteren Boden (\"Wüsten-Zahlen\" wie Zweierpotenzen).",
      "title": "Goldbach-Kometen-Explorer: Reise durch das Zahlen-Sternbild",
      "subtitle": "Fahre über Sterne, um Zerlegungsanzahl und Primzahlanatomie zu prüfen. Filter nach Zahlenfamilien!",
      "filterAll": "✨ Alle geraden Zahlen",
      "filterOasis": "🌟 Oasen-Zahlen (Vielfache von 30)",
      "filterM6": "⚡ Vielfache von 6",
      "filterDesert": "🌵 Wüsten-Zahlen (Zweierpotenzen)",
      "filterTwin": "🌉 Primzahlzwillings-Brücken",
      "oasisCeilingTitle": "🌟 Die hohe Oasendecke:",
      "oasisCeilingDesc": "Zahlen mit Primfaktoren {2, 3, 5, 7} haben maximale Paare, da fast keine Primzahlkandidaten durch Teilbarkeit ausgeschlossen werden!",
      "desertFloorTitle": "🌵 Der tiefe Wüstenboden:",
      "desertFloorDesc": "Zweierpotenzen (16, 32, 64, 128, ...) haben nur 2 als Primfaktor und besitzen daher die wenigsten Paare unter vergleichbar großen Zahlen.",
      "axisX": "Gerade Zahl N (4 bis {range})",
      "axisY": "Paare k(N)",
      "pairsLabel": "Primzahlpaare k(N) = {count}",
      "pminLabel": "Kleinste Primzahl p_min = {pmin}",
      "hoverTip": "(Stern anklicken zum Arretieren!)",
      "lockedBadge": "ARRETIERT 🔒",
      "inspectorEmpty": "Klicke oder bewege den Mauszeiger über einen Stern, um seine Primzahlzerlegung zu analysieren!",
      "btnWeigh": "Auf Waage wiegen ⚖️",
      "btnClock": "Auf Uhr zeigen ⏰",
      "btnGrid": "Im Gitter zeigen 🔢",
      "toastScale": "Zur Balkenwaage gewechselt! Wiege Paare für N = {n}",
      "toastClock": "Zur Modulo-Uhr gewechselt! Untersuche Sehnen für N = {n}",
      "toastMatrix": "Zum 100er-Gitter gewechselt! Paare für N = {n} markiert",
      "inspectorTitle": "Sternen-Inspektor & Datenstation:",
      "evenNumberTitle": "Gerade Zahl N = {n}",
      "factorizationLabel": "Primfaktorzerlegung",
      "pairsListLabel": "Paare"
    },
    "detective": {
      "teacherGuide": "🧑‍🏫 Lehrer-Leitfaden (Spielerische Zahlentheorie): Diese 6 Fälle fördern induktives Denken und Hypothesentests über Primzahlverteilungen, kleinste Primzahlen p_min(N) und Rekordzahlen.",
      "title": "Junior-Detektiv-Akademie: Die 6 Goldbach-Fallakten 🕵️‍♂️",
      "subtitle": "Setz deinen Detektivhut auf! Löse jedes Rätsel durch Testen von Zahlen und Aufdecken verborgener Muster.",
      "casesSolved": "Gelöste Fälle: {count} / 6",
      "verifyBtn": "Prüfen",
      "enterNPlaceholder": "Zahl N",
      "solvedBadge": "GELÖST ✓",
      "activeBadge": "AKTIVER FALL 🔍",
      "lockedBadge": "GESPERRT 🔒",
      "inputInvalid": "Bitte gib eine gültige gerade Zahl ein!",
      "notQuiteHint": "Noch nicht ganz! Probiere eine andere Zahl oder lies den Hinweis nochmals.",
      "cases": [
        {
          "num": 1,
          "title": "Der Geheimbund der Vier",
          "badge": "Grundstufe",
          "story": "Vier ganz besondere gerade Zahlen besitzen NUR EIN EINZIGES Primzahlpaar! Gib eine davon ein:",
          "hint": "Hinweis: Eine davon ist die einzige verdoppelte gerade Primzahl (2 + 2), eine andere ist 3 + 5.",
          "explanation": "Gelöst! Die einzigartigen Vier sind {4, 6, 8, 12}. Alle größeren Zahlen haben mehrere Paare!"
        },
        {
          "num": 2,
          "title": "Der 6er-Vielfachen-Jackpot",
          "badge": "Mittelstufe",
          "story": "Vielfache von 6 erhalten doppelt so viele Paare! Finde eine gerade Zahl unter 40 mit mindestens 3 Paaren:",
          "hint": "Hinweis: Probiere ein Vielfaches von 6 wie 24, 30 oder 36 (oder auch 22, 26, 34).",
          "explanation": "Jackpot geknackt! Vielfache von 6 verbinden Primzahlen aus beiden Restklassen 6k-1 und 6k+1."
        },
        {
          "num": 3,
          "title": "Die Primzahlzwillings-Brücke",
          "badge": "Geometrie",
          "story": "Die Primzahlzwillinge (29, 31) treffen sich in der Mitte bei 30. Wie lautet ihre verdoppelte Brückenzahl N?",
          "hint": "Hinweis: 2 × Mittelpunkt = 2 × 30.",
          "explanation": "Brücke überquert! 60 = 29 + 31. Jedes Primzahlzwillingspaar garantiert eine Goldbach-Zerlegung!"
        },
        {
          "num": 4,
          "title": "Die Wüstenfata-Morgana",
          "badge": "Zahlentheorie",
          "story": "Zweierpotenzen leben in der trockensten Wüste des Kometen. Nenne eine Zweierpotenz zwischen 30 und 100:",
          "hint": "Hinweis: 2, 4, 8, 16, 32, 64, 128...",
          "explanation": "Wüste erkannt! 64 hat nur 5 Paare, während der kleinere Nachbar 60 bereits 6 Paare besitzt!"
        },
        {
          "num": 5,
          "title": "Der kleinste Primzahlsprung",
          "badge": "Ermittlung",
          "story": "Finde eine gerade Zahl, bei der weder 3 noch 5 verwendet werden können (also kleinste Primzahl p ≥ 7):",
          "hint": "Hinweis: Ein Vielfaches von 2, 3 und 5 ist ein Vielfaches von 30! (z.B. 30, 60, 90, 120 oder auch 38, 54)",
          "explanation": "Rätsel gelöst! Die Teilbarkeit durch 3 und 5 zwingt die Primzahlsuche zum Sprung bis 7."
        },
        {
          "num": 6,
          "title": "Der Großmeister von 98",
          "badge": "Meisterdetektiv",
          "story": "Die 5. Rekordzahl springt mit ihrer kleinsten Primzahl bis auf 19! Wie heißt diese Zahl?",
          "hint": "Hinweis: Sie liegt nur zwei Schritte unter 100.",
          "explanation": "MEISTERDETEKTIV! 98 = 19 + 79. Jede Primzahl unter 19 scheidet aus, weil 98 - p zusammengesetzt ist!"
        }
      ],
      "caseSolvedToast": "Fall #{num} gelöst!"
    },
    "worksheet": {
      "teacherGuide": "🧑‍🏫 Lehrer-Leitfaden (Übung & Leistungsnachweis): Erstelle differenzierte, druckfertige Arbeitsblätter mit sauberer Typografie für den Unterricht. Wähle Klassenstufe und Aufgabenanzahl, dann klicke auf Drucken.",
      "title": "Druckbarer Arbeitsblatt-Generator: Unterrichtspraxis 📄",
      "gradeTier": "Schwierigkeitsstufe:",
      "tierElem": "Grundschule (Klasse 3-5: N ≤ 30)",
      "tierMiddle": "Sekundarstufe I (Klasse 6-8: N ≤ 80)",
      "tierHigh": "Wettbewerb / Gymnasium (Klasse 9-12: N ≤ 120)",
      "countLabel": "Aufgabenanzahl:",
      "includeKey": "Lehrer-Lösungsbogen beilegen",
      "printBtn": "Arbeitsblatt drucken 🖨️",
      "sheetTitle": "Goldbach-Vermutung: Primzahlpaar-Entdeckerblatt",
      "studentName": "Name: ___________________________",
      "date": "Datum: _____________",
      "score": "Punkte: _____ / {count}",
      "instructions": "Anleitung: Finde für jede gerade Zahl unten zwei Primzahlen, deren Summe genau diese Zahl ergibt. Trage die Primzahlen in die Lücken ein!",
      "problemPrompt": "Aufgabe {num}:",
      "showWork": "(Rechenweg / Primzahlprüfung: __________________)",
      "bonusTitle": "🌟 Bonus-Herausforderung:",
      "bonusPrompt": "Kennst du eine gerade Zahl mit genau einem einzigen Primzahlpaar? Nenne mindestens zwei und zeige ihre Summen!",
      "answerKeyTitle": "Lehrer-Lösungsbogen (Alle gültigen Goldbach-Paare):",
      "none": "Keine",
      "count6": "6 Aufgaben",
      "count10": "10 Aufgaben",
      "count14": "14 Aufgaben",
      "subSeries": "Mathematische Abteilung • Pädagogische Entdeckungsreihe",
      "studentDateClass": "Datum: ________________ Klasse: _____"
    },
    "badges": {
      "solo_four": {
        "name": "Der Geheimbund der Vier",
        "desc": "Die einzigartigen Zahlen {4, 6, 8, 12} mit genau 1 Paar entdeckt"
      },
      "balance_master": {
        "name": "Waagen-Meister",
        "desc": "Alle Primzahlpaare für ein Ziel auf der Waage gefunden"
      },
      "matrix_sleuth": {
        "name": "Gitter-Spürhund",
        "desc": "3 Primzahlpaare im 100er-Gitter aufgedeckt"
      },
      "clock_maestro": {
        "name": "Uhren-Maestro",
        "desc": "Die Akkord-Symphonie auf der Modulo-Uhr abgespielt"
      },
      "comet_stargazer": {
        "name": "Kometen-Beobachter",
        "desc": "Oasen- und Wüstengipfel im Kometen erforscht"
      },
      "chief_inspector": {
        "name": "Chef-Inspektor",
        "desc": "Alle 6 Junior-Detektiv-Fälle erfolgreich gelöst"
      }
    }
  },
  "fr": {
    "nav": {
      "appTitle": "Laboratoire de Découverte de Goldbach 🧪",
      "subtitle": "Un terrain de jeu mathématique interactif pour élèves et salles de classe",
      "soundOn": "Son: ACTIVÉ",
      "soundOff": "Son: DÉSACTIVÉ",
      "studentMode": "Mode Élève",
      "teacherMode": "Mode Enseignant",
      "badgesHeader": "Badges ({count}/6)",
      "tabScale": "⚖️ 1. Balance",
      "tabMatrix": "🧩 2. Grille de 100",
      "tabClock": "🕰️ 3. Horloge Modulo",
      "tabComet": "🌌 4. Comète de Goldbach",
      "tabDetective": "🕵️‍♂️ 5. Académie des Détectives",
      "tabWorksheet": "📄 6. Générateur d'Exercices",
      "tab100Labs": "🚀 Catalogue des 100 Laboratoires ★",
      "banner100Title": "🌟 Explorez les 100 laboratoires interactifs de Goldbach !",
      "banner100Badge": "100 LABS DISPONIBLES",
      "banner100Desc": "Parcourez 10 groupes thématiques des petits premiers aux simplexes 3D, énigmes ludiques et calculs sur supercalculateurs.",
      "banner100Btn": "Ouvrir le catalogue des 100 labs →"
    },
    "trophy": {
      "title": "🏆 Votre Galerie de Trophées Goldbach",
      "desc": "Résolvez les enquêtes et les énigmes mathématiques pour débloquer les 6 badges d'explorateur !",
      "unlocked": "Badges débloqués : {count} / 6",
      "reset": "Réinitialiser les badges 🔄",
      "close": "✕ Fermer",
      "resetConfirm": "Voulez-vous vraiment réinitialiser tous vos badges et énigmes résolues ?"
    },
    "scale": {
      "teacherGuide": "🧑‍🏫 Guide Pédagogique (Primaire & Collège) : En 1742, Christian Goldbach a conjecturé que tout nombre entier pair supérieur à 2 peut s'écrire comme la somme de deux nombres premiers. Question en classe : Pourquoi un nombre impair ne peut-il généralement pas être la somme de deux nombres premiers impairs ? (Indice : Impair + Impair = Pair !).",
      "title": "La Balance des Premiers : Peser les Sommes de Goldbach",
      "targetLabel": "Poids Pair Cible N :",
      "rollRandom": "Aléatoire 🎲",
      "showPairs": "Voir toutes les paires 💡",
      "presetLabel": "Sélection rapide :",
      "trayTitle": "Plateau des Poids Premiers",
      "traySubtitle": "Cliquez sur un nombre premier pour le poser sur la balance ou le retirer :",
      "panTarget": "Cible N",
      "panSum": "Somme Première",
      "statusBalanced": "🌟 Balance en Équilibre ! {p} + {q} = {n}",
      "statusOverweight": "⚠️ Surcharge ! Somme {sum} > Cible {n}",
      "statusUnderweight": "⚖️ Poids insuffisant ! Somme {sum} < Cible {n}",
      "statusEmpty": "Posez deux poids premiers sur le plateau droit pour équilibrer la cible !",
      "statusOneWeight": "{p} posé. Posez un deuxième nombre premier pour atteindre l'équilibre !",
      "discoveredTitle": "Paires premières découvertes pour {n} :",
      "noPairsDiscovered": "Aucune paire de premiers découverte pour {n} pour le moment.",
      "toastFound": "Paire Découverte ! {p} + {q} = {n}",
      "toastAllFound": "Les {count} paires premières de {n} ont été trouvées !",
      "alreadyOnScale": "{p} est déjà sur le plateau ! Cliquez dessus pour le retirer.",
      "hintTarget": "Indice : La cible {n} possède {count} paire(s) de Goldbach : {pairs}",
      "presetSolo": "4 (Seul)",
      "presetUnique": "12 (Unique)",
      "presetOasis": "30 (Oasis)",
      "presetDesert": "64 (Désert)",
      "presetChampion": "98 (Champion)",
      "clearBtn": "Effacer les poids ✕",
      "pairsFound": "{found} sur {total} paires trouvées",
      "targetLabelSvg": "CIBLE",
      "sumLabelSvg": "SOMME : {sum}"
    },
    "matrix": {
      "teacherGuide": "🧑‍🏫 Guide Pédagogique (Crible d'Ératosthène & Motifs) : Les nombres premiers brillent en cyan éclatant. Au survol, la décomposition en facteurs premiers des nombres composés s'affiche. Chaque paire de Goldbach se reflète de façon symétrique par rapport au milieu N/2.",
      "title": "La Grille des 100 Premiers : Trouver les Paires Complémentaires",
      "subtitle": "Touchez les nombres premiers ou sélectionnez la cible N pour illuminer les paires !",
      "targetLabel": "Nombre Pair N :",
      "lightUpBtn": "Illuminer toutes les paires 🌟",
      "clearBtn": "Effacer la sélection 🧹",
      "prime": "Nombre premier",
      "neither": "Ni premier ni composé",
      "allPairsFound": "{count} paire(s) de Goldbach trouvée(s) pour N = {n} :",
      "noPairsFound": "Aucune paire première trouvée pour {n}.",
      "bothPrimeDesc": "Auto-paire : {p} + {p} = {n}",
      "inspectPrompt": "Cliquez sur un nombre premier dans la grille ci-dessous pour trouver son partenaire !",
      "targetStatus": "Cible N = <strong>{target}</strong>.",
      "legendSelected": "Premier p (Sélectionné)",
      "legendPartner": "Partenaire Premier q (Succès !)",
      "legendComposite": "Partenaire Composé (Non Premier)"
    },
    "clock": {
      "teacherGuide": "🧑‍🏫 Guide Pédagogique (Arithmétique Modulaire & Symétrie) : Disposer les entiers sur un cadran circulaire transforme les paires en cordes géométriques. Lorsque N est un multiple de 6, les cordes créent un réseau dense et symétrique — produisant presque le double de paires !",
      "title": "L'Horloge Modulo : Symétrie Géométrique & Le « Pouvoir de 6 »",
      "targetLabel": "Cible N :",
      "clockModeLabel": "Mode Horloge :",
      "modeFull": "Cadran Complet (1 à N)",
      "mode12": "Horloge 12 Heures",
      "mode6": "Roue Modulaire 6 Heures",
      "symphonyBtn": "Jouer la Symphonie d'Accords 🎵",
      "mult6Bonus": "{n} est UN MULTIPLE DE 6 ! 🌟 (~Bonus x2)",
      "notMult6": "{n} n'est PAS un multiple de 6.",
      "totalPairs": "Total des Paires de Goldbach : {count}",
      "clickPairTip": "Cliquez sur une paire pour isoler sa corde :",
      "resetView": "Réinitialiser",
      "reflectionAxis": "Axe de Réflexion",
      "selfPair": "🌟 (Auto-Paire)",
      "tip": "💡 Astuce : Les cordes se reflètent horizontalement le long de l'axe vertical ! Cliquez sur une paire à droite pour zoomer.",
      "cardTitle": "Le Bonus des Multiples de 6",
      "cardDesc": "Admirez la symétrie ! Si N est divisible par 6, les cordes forment une passerelle particulièrement riche et dense.",
      "symmetricTip": "Les cordes se reflètent horizontalement par rapport à l'axe vertical ! Cliquez à droite pour cibler une paire."
    },
    "comet": {
      "teacherGuide": "🧑‍🏫 Guide Pédagogique (Comète de Goldbach & Asymptotique) : La comète est le nuage de points de k(N) en fonction de N. Les élèves découvrent visuellement la crête supérieure (« Nombres Oasis » comme 840, 1260) et le plancher inférieur (« Nombres Désert » comme les puissances de 2).",
      "title": "Explorateur de la Comète de Goldbach : Voyage dans la Constellation",
      "subtitle": "Survolez les étoiles pour explorer le nombre de paires et leur anatomie. Filtrez par familles de nombres !",
      "filterAll": "✨ Tous les nombres pairs",
      "filterOasis": "🌟 Nombres Oasis (multiples de 30)",
      "filterM6": "⚡ Multiples de 6",
      "filterDesert": "🌵 Nombres Désert (puissances de 2)",
      "filterTwin": "🌉 Ponts des premiers jumeaux",
      "oasisCeilingTitle": "🌟 Le Plafond Doré des Oasis :",
      "oasisCeilingDesc": "Les nombres divisibles par {2, 3, 5, 7} ont un maximum de paires car très peu de candidats premiers sont éliminés par la divisibilité !",
      "desertFloorTitle": "🌵 Le Plancher du Désert :",
      "desertFloorDesc": "Les puissances de 2 (16, 32, 64, 128, ...) n'ont que 2 comme facteur premier et ont donc le moins de paires parmi les nombres de taille comparable.",
      "axisX": "Nombre Pair N (4 à {range})",
      "axisY": "Paires k(N)",
      "pairsLabel": "Paires Premières k(N) = {count}",
      "pminLabel": "Plus petit premier p_min = {pmin}",
      "hoverTip": "(Cliquez sur une étoile pour la verrouiller !)",
      "lockedBadge": "VERROUILLÉ 🔒",
      "inspectorEmpty": "Cliquez ou survolez une étoile de la constellation ci-dessus pour inspecter sa structure première !",
      "btnWeigh": "Peser sur la Balance ⚖️",
      "btnClock": "Voir sur l'Horloge ⏰",
      "btnGrid": "Voir dans la Grille 🔢",
      "toastScale": "Bascule sur la Balance ! Pesée des paires pour N = {n}",
      "toastClock": "Bascule sur l'Horloge ! Inspection des cordes pour N = {n}",
      "toastMatrix": "Bascule sur la Grille ! Paires illuminées pour N = {n}",
      "inspectorTitle": "Station d'Inspection Stellaire :",
      "evenNumberTitle": "Nombre Pair N = {n}",
      "factorizationLabel": "Factorisation Première",
      "pairsListLabel": "Paires"
    },
    "detective": {
      "teacherGuide": "🧑‍🏫 Guide Pédagogique (Énigmes de Théorie des Nombres) : Ces 6 dossiers d'enquête développent le raisonnement inductif et la formulation d'hypothèses sur la répartition des nombres premiers.",
      "title": "Académie des Détectives Juniors : Les 6 Dossiers Goldbach 🕵️‍♂️",
      "subtitle": "Mettez votre chapeau de détective ! Résolvez chaque mystère en testant des nombres et en dénichant des régularités.",
      "casesSolved": "Affaires résolues : {count} / 6",
      "verifyBtn": "Vérifier",
      "enterNPlaceholder": "Entrez N",
      "solvedBadge": "RÉSOLU ✓",
      "activeBadge": "AFFAIRE EN COURS 🔍",
      "lockedBadge": "VERROUILLÉ 🔒",
      "inputInvalid": "Veuillez entrer un nombre pair valide !",
      "notQuiteHint": "Pas tout à fait ! Essayez un autre nombre ou relisez l'indice.",
      "cases": [
        {
          "num": 1,
          "title": "La Société Secrète des Quatre",
          "badge": "Élémentaire",
          "story": "Quatre nombres pairs très spéciaux ne possèdent QU'UNE SEULE paire de nombres premiers ! Entrez-en un :",
          "hint": "Indice : L'un d'eux est le seul premier pair doublé (2 + 2), un autre est 3 + 5.",
          "explanation": "Résolu ! Les Quatre Uniques sont {4, 6, 8, 12}. Tous les nombres supérieurs ont plusieurs paires !"
        },
        {
          "num": 2,
          "title": "Le Jackpot des Multiples de 6",
          "badge": "Intermédiaire",
          "story": "Les multiples de 6 reçoivent deux fois plus de paires ! Trouvez un nombre pair inférieur à 40 avec au moins 3 paires :",
          "hint": "Indice : Essayez un multiple de 6 comme 24, 30 ou 36 (ou même 22, 26, 34).",
          "explanation": "Jackpot décroché ! Les multiples de 6 relient les nombres premiers des deux classes 6k-1 et 6k+1."
        },
        {
          "num": 3,
          "title": "Le Pont des Premiers Jumeaux",
          "badge": "Géométrie",
          "story": "Les premiers jumeaux (29, 31) se croisent au milieu 30. Quel est leur nombre pont N doublé ?",
          "hint": "Indice : 2 × Milieu = 2 × 30.",
          "explanation": "Pont franchi ! 60 = 29 + 31. Chaque paire de premiers jumeaux forme une décomposition de Goldbach garantie !"
        },
        {
          "num": 4,
          "title": "Le Mirage du Désert",
          "badge": "Théorie des Nombres",
          "story": "Les puissances de 2 habitent la zone la plus aride de la comète. Nommez une puissance de 2 entre 30 et 100 :",
          "hint": "Indice : 2, 4, 8, 16, 32, 64, 128...",
          "explanation": "Désert identifié ! 64 n'a que 5 paires, alors que son voisin 60 en a déjà 6 malgré sa plus petite taille !"
        },
        {
          "num": 5,
          "title": "Le Grand Saut du Premier",
          "badge": "Investigation",
          "story": "Trouvez un nombre pair où NI 3 NI 5 ne peuvent être utilisés (donc le plus petit premier p ≥ 7) :",
          "hint": "Indice : Un multiple de 2, 3 et 5 est un multiple de 30 ! (ex. 30, 60, 90, 120 ou même 38, 54)",
          "explanation": "Mystère résolu ! La divisibilité par 3 et 5 contraint la recherche de premiers à sauter jusqu'à 7."
        },
        {
          "num": 6,
          "title": "Le Grand Champion de 98",
          "badge": "Maître Détective",
          "story": "Le 5e nombre champion voit son plus petit nombre premier sauter jusqu'à 19 ! Quel est ce nombre ?",
          "hint": "Indice : Il est situé à seulement deux pas de 100.",
          "explanation": "MAÎTRE DÉTECTIVE ! 98 = 19 + 79. Tous les nombres premiers inférieurs à 19 échouent car 98 - p est composé !"
        }
      ],
      "caseSolvedToast": "Affaire #{num} Résolue !"
    },
    "worksheet": {
      "teacherGuide": "🧑‍🏫 Guide Pédagogique (Exercices & Évaluation) : Générez des fiches d'exercices différenciées et prêtes à imprimer pour la classe. Choisissez le niveau et le nombre d'exercices, puis cliquez sur Imprimer.",
      "title": "Générateur de Fiches d'Exercices à Imprimer 📄",
      "gradeTier": "Niveau Scolaire :",
      "tierElem": "École Primaire (CE2-CM2 : N ≤ 30)",
      "tierMiddle": "Collège (6e-3e : N ≤ 80)",
      "tierHigh": "Lycée / Concours (2nde-Terminale : N ≤ 120)",
      "countLabel": "Nombre de problèmes :",
      "includeKey": "Inclure le corrigé enseignant",
      "printBtn": "Imprimer la fiche 🖨️",
      "sheetTitle": "Conjecture de Goldbach : Défi de Découverte des Paires Premières",
      "studentName": "Nom : ___________________________",
      "date": "Date : _____________",
      "score": "Note : _____ / {count}",
      "instructions": "Consignes : Pour chaque nombre pair ci-dessous, trouvez deux nombres premiers dont la somme est égale à ce nombre. Écrivez les nombres premiers sur les lignes prévues !",
      "problemPrompt": "Exercice {num} :",
      "showWork": "(Calcul / vérification des premiers : __________________)",
      "bonusTitle": "🌟 Question Défi Bonus :",
      "bonusPrompt": "Pouvez-vous trouver un nombre pair qui n'a qu'une seule paire de nombres premiers ? Citez-en au moins deux et donnez leurs sommes !",
      "answerKeyTitle": "Corrigé Enseignant (Toutes les paires de Goldbach valides) :",
      "none": "Aucune",
      "count6": "6 Problèmes",
      "count10": "10 Problèmes",
      "count14": "14 Problèmes",
      "subSeries": "Département de Mathématiques • Série Découverte Éducative",
      "studentDateClass": "Date : ________________ Classe : _____"
    },
    "badges": {
      "solo_four": {
        "name": "Les Quatre Uniques",
        "desc": "A découvert les nombres uniques {4, 6, 8, 12} à une seule paire"
      },
      "balance_master": {
        "name": "Maître de la Balance",
        "desc": "A trouvé toutes les paires premières pour une cible sur la balance"
      },
      "matrix_sleuth": {
        "name": "Fin Limier de la Grille",
        "desc": "A découvert 3 paires premières dans la grille de 100"
      },
      "clock_maestro": {
        "name": "Maestro de l'Horloge",
        "desc": "A joué la Symphonie d'Accords sur l'horloge modulo"
      },
      "comet_stargazer": {
        "name": "Astronome de la Comète",
        "desc": "A exploré les sommets d'Oasis et les vallées du Désert"
      },
      "chief_inspector": {
        "name": "Inspecteur en Chef",
        "desc": "A résolu avec brio les 6 affaires criminelles de l'académie"
      }
    }
  },
  "it": {
    "nav": {
      "appTitle": "Laboratorio di Scoperta di Goldbach 🧪",
      "subtitle": "Un parco giochi matematico interattivo per studenti e classi",
      "soundOn": "Audio: ATTIVO",
      "soundOff": "Audio: DISATTIVATO",
      "studentMode": "Modalità Studente",
      "teacherMode": "Modalità Docente",
      "badgesHeader": "Distintivi ({count}/6)",
      "tabScale": "⚖️ 1. Bilancia",
      "tabMatrix": "🧩 2. Griglia dei 100",
      "tabClock": "🕰️ 3. Orologio Modulo",
      "tabComet": "🌌 4. Cometa di Goldbach",
      "tabDetective": "🕵️‍♂️ 5. Accademia Detective",
      "tabWorksheet": "📄 6. Generatore Schede",
      "tab100Labs": "🚀 Catalogo dei 100 Laboratori ★",
      "banner100Title": "🌟 Esplora i 100 laboratori interattivi di Goldbach!",
      "banner100Badge": "100 LAB COMPLETATI",
      "banner100Desc": "Viaggia attraverso 10 cluster curati tra piccoli numeri primi, simmetria mod 6, simplessi 3D, giochi e benchmark ad alte prestazioni.",
      "banner100Btn": "Apri il catalogo dei 100 lab →"
    },
    "trophy": {
      "title": "🏆 La tua Bacheca dei Trofei Goldbach",
      "desc": "Risolvi i casi investigativi e le sfide matematiche per sbloccare tutti e 6 i distintivi da esploratore!",
      "unlocked": "Distintivi sbloccati: {count} / 6",
      "reset": "Ripristina Distintivi 🔄",
      "close": "✕ Chiudi",
      "resetConfirm": "Sei sicuro di voler azzerare tutti i distintivi e i casi risolti?"
    },
    "scale": {
      "teacherGuide": "🧑‍🏫 Guida Docente (Scuola Primaria e Secondaria di I Grado): Nel 1742 Christian Goldbach congetturò che ogni numero pari maggiore di 2 può essere scritto come somma di due numeri primi. Spunto didattico: Perché i numeri dispari non possono essere somma di due primi dispari? (Dispari + Dispari = Pari!).",
      "title": "La Bilancia dei Primi: Pesare le Somme di Goldbach",
      "targetLabel": "Peso Pari Bersaglio N:",
      "rollRandom": "Casuale 🎲",
      "showPairs": "Mostra tutte le coppie 💡",
      "presetLabel": "Selezione rapida:",
      "trayTitle": "Vassoio dei Pesi Primi",
      "traySubtitle": "Fai clic su un numero primo per aggiungerlo o rimuoverlo dal piatto della bilancia:",
      "panTarget": "Bersaglio N",
      "panSum": "Somma Primi",
      "statusBalanced": "🌟 Bilancia in Equilibrio! {p} + {q} = {n}",
      "statusOverweight": "⚠️ Sovraccarico! Somma {sum} > Bersaglio {n}",
      "statusUnderweight": "⚖️ Peso insufficiente! Somma {sum} < Bersaglio {n}",
      "statusEmpty": "Metti due numeri primi sul piatto destro per bilanciare il bersaglio!",
      "statusOneWeight": "{p} posizionato. Aggiungi un altro numero primo per raggiungere l'equilibrio!",
      "discoveredTitle": "Coppie prime scoperte per {n}:",
      "noPairsDiscovered": "Nessuna coppia prima ancora scoperta per {n}.",
      "toastFound": "Coppia Trovata! {p} + {q} = {n}",
      "toastAllFound": "Tutte le {count} coppie prime per {n} trovate!",
      "alreadyOnScale": "{p} è già sul piatto! Fai clic su di esso per rimuoverlo.",
      "hintTarget": "Suggerimento: Il bersaglio {n} ha {count} coppia/e di Goldbach: {pairs}",
      "presetSolo": "4 (Solo)",
      "presetUnique": "12 (Unico)",
      "presetOasis": "30 (Oasi)",
      "presetDesert": "64 (Deserto)",
      "presetChampion": "98 (Campione)",
      "clearBtn": "Cancella pesi ✕",
      "pairsFound": "{found} di {total} coppie trovate",
      "targetLabelSvg": "BERSAGLIO",
      "sumLabelSvg": "SOMMA: {sum}"
    },
    "matrix": {
      "teacherGuide": "🧑‍🏫 Guida Docente (Crivello di Eratostene & Schemi Numerici): I numeri primi brillano in ciano. Al passaggio del mouse viene visualizzata la scomposizione in fattori primi. Ogni coppia di Goldbach si riflette simmetricamente rispetto al punto medio N/2.",
      "title": "La Griglia dei 100 Primi: Trovare le Coppie Complementari",
      "subtitle": "Tocca i primi o seleziona il bersaglio N per illuminare le coppie nella griglia!",
      "targetLabel": "Numero Pari N:",
      "lightUpBtn": "Illumina tutte le coppie 🌟",
      "clearBtn": "Cancella evidenziazioni 🧹",
      "prime": "Primo",
      "neither": "Né primo né composto",
      "allPairsFound": "Trovate {count} coppia/e di Goldbach per N = {n}:",
      "noPairsFound": "Nessuna coppia prima trovata per {n}.",
      "bothPrimeDesc": "Auto-coppia: {p} + {p} = {n}",
      "inspectPrompt": "Fai clic su un numero primo nella griglia sottostante per esaminare il suo partner!",
      "targetStatus": "Bersaglio N = <strong>{target}</strong>.",
      "legendSelected": "Primo p (Selezionato)",
      "legendPartner": "Partner Primo q (Corrispondenza!)",
      "legendComposite": "Partner Composto (Non Primo)"
    },
    "clock": {
      "teacherGuide": "🧑‍🏫 Guida Docente (Aritmetica dell'Orologio & Simmetria Modulare): Disporre i numeri su un cerchio trasforma le coppie in corde geometriche. Quando N è multiplo di 6, le corde formano una fitta rete simmetrica — raddoppiando quasi le coppie!",
      "title": "La Ruota Orologio Modulare: Simmetria Geometrica & il \"Potere del 6\"",
      "targetLabel": "Bersaglio N:",
      "clockModeLabel": "Modalità Orologio:",
      "modeFull": "Ruota Completa (da 1 a N)",
      "mode12": "Orologio a 12 Ore",
      "mode6": "Ruota Modulare a 6 Ore",
      "symphonyBtn": "Riproduci Sinfonia di Accordi 🎵",
      "mult6Bonus": "{n} è UN MULTIPLO DI 6! 🌟 (~Bonus x2)",
      "notMult6": "{n} NON è un multiplo di 6.",
      "totalPairs": "Totale Coppie Prime di Goldbach: {count}",
      "clickPairTip": "Fai clic su una coppia per isolarne la corda:",
      "resetView": "Ripristina Vista",
      "reflectionAxis": "Asse di Riflessione",
      "selfPair": "🌟 (Auto-Coppia)",
      "tip": "💡 Suggerimento: Le corde si riflettono orizzontalmente lungo l'asse verticale! Fai clic su una coppia a destra per evidenziarla.",
      "cardTitle": "Il Bonus dei Multipli di 6",
      "cardDesc": "Osserva la simmetria! Se N è divisibile per 6, le corde formano una rete di ponti straordinariamente densa.",
      "symmetricTip": "Le corde si riflettono orizzontalmente sull'asse verticale! Fai clic su una coppia a destra per evidenziarla."
    },
    "comet": {
      "teacherGuide": "🧑‍🏫 Guida Docente (Cometa di Goldbach & Andamento Asintotico): La cometa è il grafico a dispersione di k(N) rispetto a N. Gli studenti scoprono il soffitto superiore (\"Numeri Oasi\" come 840, 1260) e il pavimento inferiore (\"Numeri Deserto\" come le potenze di 2).",
      "title": "Esploratore della Cometa di Goldbach: Nella Costellazione dei Numeri",
      "subtitle": "Passa con il mouse sulle stelle per esaminare il numero di coppie e l'anatomia dei primi. Filtra per famiglie numeriche!",
      "filterAll": "✨ Tutti i numeri pari",
      "filterOasis": "🌟 Numeri Oasi (multipli di 30)",
      "filterM6": "⚡ Multipli di 6",
      "filterDesert": "🌵 Numeri Deserto (potenze di 2)",
      "filterTwin": "🌉 Ponti di Primi Gemelli",
      "oasisCeilingTitle": "🌟 Il Soffitto d'Oro delle Oasi:",
      "oasisCeilingDesc": "I numeri divisibili per {2, 3, 5, 7} hanno il massimo delle coppie perché pochissimi candidati primi sono esclusi dalla divisibilità!",
      "desertFloorTitle": "🌵 Il Pavimento del Deserto:",
      "desertFloorDesc": "Le potenze di 2 (16, 32, 64, 128, ...) hanno solo 2 come fattore primo e possiedono quindi il minor numero di coppie tra i numeri di grandezza simile.",
      "axisX": "Numero Pari N (da 4 a {range})",
      "axisY": "Coppie k(N)",
      "pairsLabel": "Coppie Prime k(N) = {count}",
      "pminLabel": "Primo più piccolo p_min = {pmin}",
      "hoverTip": "(Fai clic su una stella per bloccarla!)",
      "lockedBadge": "BLOCCATO 🔒",
      "inspectorEmpty": "Fai clic o passa il mouse su qualsiasi stella nella costellazione per esaminare la sua anatomia prima!",
      "btnWeigh": "Pesa sulla Bilancia ⚖️",
      "btnClock": "Vedi sull'Orologio ⏰",
      "btnGrid": "Vedi nella Griglia 🔢",
      "toastScale": "Passato alla Bilancia! Pesata coppie per N = {n}",
      "toastClock": "Passato all'Orologio! Ispezione corde per N = {n}",
      "toastMatrix": "Passato alla Griglia! Coppie illuminate per N = {n}",
      "inspectorTitle": "Stazione Dati & Ispettore Stellare:",
      "evenNumberTitle": "Numero Pari N = {n}",
      "factorizationLabel": "Scomposizione in Primi",
      "pairsListLabel": "Coppie"
    },
    "detective": {
      "teacherGuide": "🧑‍🏫 Guida Docente (Sfide di Teoria dei Numeri): Questi 6 casi incoraggiano il pensiero induttivo e la verifica di congetture sulla distribuzione dei numeri primi.",
      "title": "Accademia dei Detective Junior: I 6 Fascicoli Goldbach 🕵️‍♂️",
      "subtitle": "Indossa il cappello da detective! Risolvi ogni mistero verificando i numeri e scoprendo schemi nascosti.",
      "casesSolved": "Casi risolti: {count} / 6",
      "verifyBtn": "Verifica",
      "enterNPlaceholder": "Inserisci N",
      "solvedBadge": "RISOLTO ✓",
      "activeBadge": "CASO ATTIVO 🔍",
      "lockedBadge": "BLOCCATO 🔒",
      "inputInvalid": "Inserisci un numero pari valido!",
      "notQuiteHint": "Non del tutto! Prova un altro numero o rileggi il suggerimento.",
      "cases": [
        {
          "num": 1,
          "title": "La Società Segreta dei Quattro",
          "badge": "Elementare",
          "story": "Quattro numeri pari speciali possiedono SOLO UNA singola coppia di numeri primi! Inseriscine uno:",
          "hint": "Suggerimento: Uno di essi è l'unico primo pari raddoppiato (2 + 2), un altro è 3 + 5.",
          "explanation": "Risolto! I Quattro Unici sono {4, 6, 8, 12}. Tutti i numeri superiori hanno coppie multiple!"
        },
        {
          "num": 2,
          "title": "Il Jackpot dei Multipli di 6",
          "badge": "Intermedio",
          "story": "I multipli di 6 ricevono il doppio delle coppie! Trova un numero pari sotto il 40 con almeno 3 coppie:",
          "hint": "Suggerimento: Prova un multiplo di 6 come 24, 30 o 36 (oppure anche 22, 26, 34).",
          "explanation": "Jackpot centrato! I multipli di 6 collegano i primi di entrambe le classi di resto 6k-1 e 6k+1."
        },
        {
          "num": 3,
          "title": "Il Ponte dei Primi Gemelli",
          "badge": "Geometria",
          "story": "I primi gemelli (29, 31) si incontrano a metà strada su 30. Qual è il loro numero ponte raddoppiato N?",
          "hint": "Suggerimento: 2 × Punto Medio = 2 × 30.",
          "explanation": "Ponte superato! 60 = 29 + 31. Ogni coppia di primi gemelli garantisce una scomposizione di Goldbach!"
        },
        {
          "num": 4,
          "title": "Il Miraggio del Deserto",
          "badge": "Teoria Numeri",
          "story": "Le potenze di 2 vivono nel deserto più arido della cometa. Trova una potenza di 2 tra 30 e 100:",
          "hint": "Suggerimento: 2, 4, 8, 16, 32, 64, 128...",
          "explanation": "Deserto individuato! 64 ha solo 5 coppie, mentre il suo vicino più piccolo 60 ne ha già 6!"
        },
        {
          "num": 5,
          "title": "Il Grande Salto del Primo",
          "badge": "Investigazione",
          "story": "Trova un numero pari in cui NÉ 3 NÉ 5 possono essere usati (quindi il primo più piccolo p ≥ 7):",
          "hint": "Suggerimento: Un multiplo di 2, 3 e 5 è un multiplo di 30! (es. 30, 60, 90, 120 oppure anche 38, 54)",
          "explanation": "Mistero risolto! La divisibilità per 3 e 5 costringe la ricerca di primi a saltare fino al 7."
        },
        {
          "num": 6,
          "title": "Il Grande Campione del 98",
          "badge": "Mastro Detective",
          "story": "Il quinto numero campione fa balzare il suo primo più piccolo fino al 19! Qual è questo numero?",
          "hint": "Suggerimento: Dista solo due passi da 100.",
          "explanation": "GENIO DETECTIVE! 98 = 19 + 79. Ogni primo inferiore a 19 fallisce perché 98 - p è composto!"
        }
      ],
      "caseSolvedToast": "Caso #{num} Risolto!"
    },
    "worksheet": {
      "teacherGuide": "🧑‍🏫 Guida Docente (Esercitazione e Valutazione): Genera schede didattiche pronte per la stampa. Seleziona il livello scolastico e il numero di problemi, poi fai clic su Stampa Scheda.",
      "title": "Generatore di Schede Didattiche Stampabili 📄",
      "gradeTier": "Livello Scolastico:",
      "tierElem": "Scuola Primaria (Classi 3-5: N ≤ 30)",
      "tierMiddle": "Scuola Secondaria I Grado (Classi 6-8: N ≤ 80)",
      "tierHigh": "Scuola Secondaria II Grado / Gare (N ≤ 120)",
      "countLabel": "Numero di Problemi:",
      "includeKey": "Includi Soluzioni Docente",
      "printBtn": "Stampa Scheda 🖨️",
      "sheetTitle": "Congettura di Goldbach: Sfida delle Coppie di Numeri Primi",
      "studentName": "Nome: ___________________________",
      "date": "Data: _____________",
      "score": "Punteggio: _____ / {count}",
      "instructions": "Istruzioni: Per ogni numero pari sottostante, trova due numeri primi che sommati diano esattamente quel numero. Scrivi i numeri primi negli spazi vuoti!",
      "problemPrompt": "Problema {num}:",
      "showWork": "(Procedimento / verifica primi: __________________)",
      "bonusTitle": "🌟 Domanda Sfida Bonus:",
      "bonusPrompt": "Riesci a trovare un numero pari che abbia solo una singola coppia di numeri primi? Indicane almeno due e mostra le loro somme!",
      "answerKeyTitle": "Soluzioni per il Docente (Tutte le coppie di Goldbach valide):",
      "none": "Nessuna",
      "count6": "6 Problemi",
      "count10": "10 Problemi",
      "count14": "14 Problemi",
      "subSeries": "Dipartimento di Matematica • Serie Didattica di Scoperta",
      "studentDateClass": "Data: ________________ Classe: _____"
    },
    "badges": {
      "solo_four": {
        "name": "I Fantastici Quattro",
        "desc": "Scoperti i numeri unici {4, 6, 8, 12} con una sola coppia"
      },
      "balance_master": {
        "name": "Mastro della Bilancia",
        "desc": "Trovate tutte le coppie prime per un bersaglio sulla bilancia"
      },
      "matrix_sleuth": {
        "name": "Segugio della Griglia",
        "desc": "Scoperte 3 coppie prime nella griglia dei 100"
      },
      "clock_maestro": {
        "name": "Maestro dell'Orologio",
        "desc": "Ripetuta la Sinfonia di Accordi sull'orologio modulo"
      },
      "comet_stargazer": {
        "name": "Osservatore della Cometa",
        "desc": "Esplorate le vette Oasi e le valli Deserto nella cometa"
      },
      "chief_inspector": {
        "name": "Ispettore Capo",
        "desc": "Risolti tutti e 6 i casi dell'Accademia Detective"
      }
    }
  },
  "ja": {
    "nav": {
      "appTitle": "ゴールドバッハ発見ラボ 🧪",
      "subtitle": "児童・生徒と教室のためのインタラクティブな数学プレイグラウンド",
      "soundOn": "効果音: オン",
      "soundOff": "効果音: オフ",
      "studentMode": "生徒モード",
      "teacherMode": "先生モード",
      "badgesHeader": "バッジ ({count}/6)",
      "tabScale": "⚖️ 1. 天秤ばかり",
      "tabMatrix": "🧩 2. 100グリッド行列",
      "tabClock": "🕰️ 3. 剰余時計",
      "tabComet": "🌌 4. 彗星探査機",
      "tabDetective": "🕵️‍♂️ 5. ジュニア探偵団",
      "tabWorksheet": "📄 6. ワークシート生成",
      "tab100Labs": "🚀 100の探究ラボ カタログ ★",
      "banner100Title": "🌟 100のゴールドバッハ探究インタラクティブ・ラボを体験！",
      "banner100Badge": "100ラボ 全完備",
      "banner100Desc": "小さな素数、法6の対称性、3次元単形、ゲームパズル、スパコン数値検証まで、10大クラスターを巡る知的冒険。",
      "banner100Btn": "100ラボ カタログを開く →"
    },
    "trophy": {
      "title": "🏆 ゴールドバッハ トロフィーキャビネット",
      "desc": "探偵事件や数学の課題を解き明かし、全6種の探検家バッジをコンプリートしよう！",
      "unlocked": "獲得バッジ: {count} / 6",
      "reset": "バッジをリセット 🔄",
      "close": "✕ 閉じる",
      "resetConfirm": "獲得したすべてのバッジと事件の進捗をリセットしますか？"
    },
    "scale": {
      "teacherGuide": "🧑‍🏫 指導者ガイド（小学校・中学校算数・数学）: クリスティアン・ゴールドバッハは1742年、「2より大きいすべての偶数は2つの素数の和で表せる」と予想しました。授業での問いかけ: なぜ奇数は一般に2つの奇素数の和で表せないのでしょうか？（ヒント: 奇数＋奇数＝偶数！）。",
      "title": "素数天秤ばかり: ゴールドバッハの和を量る",
      "targetLabel": "目標の偶数重さ N:",
      "rollRandom": "ランダム出題 🎲",
      "showPairs": "すべてのペアを表示 💡",
      "presetLabel": "クイック選択:",
      "trayTitle": "素数おもりトレイ",
      "traySubtitle": "下の素数をクリックして、右の天秤皿に乗せたり下ろしたりできます:",
      "panTarget": "目標 N",
      "panSum": "素数の合計",
      "statusBalanced": "🌟 天秤がつり合いました！ {p} + {q} = {n}",
      "statusOverweight": "⚠️ 重すぎます！ 合計 {sum} > 目標 {n}",
      "statusUnderweight": "⚖️ 軽すぎます！ 合計 {sum} < 目標 {n}",
      "statusEmpty": "右の皿に2つの素数おもりを乗せて、目標の重さとつり合わせよう！",
      "statusOneWeight": "{p} を乗せました。あと1つ素数おもりを乗せてつり合わせよう！",
      "discoveredTitle": "発見された {n} の素数ペア:",
      "noPairsDiscovered": "{n} の素数ペアはまだ発見されていません。",
      "toastFound": "素数ペア発見！ {p} + {q} = {n}",
      "toastAllFound": "{n} の全 {count} 個の素数ペアをすべて発見しました！",
      "alreadyOnScale": "{p} はすでに皿に乗っています！ クリックして取り外します。",
      "hintTarget": "ヒント: 目標 {n} には {count} 組の素数ペアがあります: {pairs}",
      "presetSolo": "4 (唯一解)",
      "presetUnique": "12 (最後の唯一解)",
      "presetOasis": "30 (オアシス)",
      "presetDesert": "64 (砂漠)",
      "presetChampion": "98 (チャンピオン)",
      "clearBtn": "重りをクリア ✕",
      "pairsFound": "{total}組中 {found}組を発見",
      "targetLabelSvg": "目標値",
      "sumLabelSvg": "合計: {sum}"
    },
    "matrix": {
      "teacherGuide": "🧑‍🏫 指導者ガイド（エラトステネスの篩と数の構造）: 素数はシアン色で光ります。合成数にカーソルを合わせると素因数分解が表示されます。どのゴールドバッハ・ペアも中央値 N/2 を挟んで対称に位置していることに着目させてください。",
      "title": "100グリッド素数行列: 相補ペアの発見",
      "subtitle": "素数をタップするか目標 N を選んで、方陣上のゴールドバッハ・ペアを点灯させよう！",
      "targetLabel": "目標の偶数 N:",
      "lightUpBtn": "全ペアを点灯 🌟",
      "clearBtn": "ハイライト消去 🧹",
      "prime": "素数",
      "neither": "素数でも合成数でもない",
      "allPairsFound": "N = {n} のゴールドバッハ・ペアが {count} 組見つかりました:",
      "noPairsFound": "{n} の素数ペアは見つかりませんでした。",
      "bothPrimeDesc": "同数ペア: {p} + {p} = {n}",
      "inspectPrompt": "下のマスから素数を1つクリックして、ペアになる相手の数を調べましょう！",
      "targetStatus": "目標 N = <strong>{target}</strong>",
      "legendSelected": "素数 p（選択中）",
      "legendPartner": "相棒の素数 q（成立！）",
      "legendComposite": "合成数の相手（素数ではない）"
    },
    "clock": {
      "teacherGuide": "🧑‍🏫 指導者ガイド（時計の算術と合同式の対称性）: 数を円形時計に配置すると、ゴールドバッハ・ペアは幾何学的な弦（コード）になります。Nが6の倍数のとき、弦は対称的で密な美しい格子を形成し、ペア数がほぼ2倍に跳ね上がります！",
      "title": "剰余時計ホイール: 幾何学的対称性と「6の力」",
      "targetLabel": "目標 N:",
      "clockModeLabel": "時計モード:",
      "modeFull": "全体ホイール (1〜N)",
      "mode12": "12時間時計",
      "mode6": "6時間モジュラーホイール",
      "symphonyBtn": "和音シンフォニーを演奏 🎵",
      "mult6Bonus": "{n} は 6の倍数です！ 🌟（約2倍の素数ボーナス）",
      "notMult6": "{n} は 6の倍数ではありません。",
      "totalPairs": "ゴールドバッハ素数ペア総数: {count}",
      "clickPairTip": "ペアをクリックするとその弦だけをハイライト表示します:",
      "resetView": "全体表示に戻す",
      "reflectionAxis": "対称軸",
      "selfPair": "🌟（自分自身とのペア）",
      "tip": "💡 ヒント: 弦は垂直な対称軸を挟んで水平に対称となります！ 右側のペアチップをクリックすると個別確認できます。",
      "cardTitle": "6の倍数ボーナス",
      "cardDesc": "幾何学的対称性に注目！ Nが6で割り切れるとき、弦は美しい対称ウェブを張り巡らせます。",
      "symmetricTip": "弦は垂直軸に対して左右対称に反射します！右側の素数対ボタンをクリックして注目してみましょう。"
    },
    "comet": {
      "teacherGuide": "🧑‍🏫 指導者ガイド（ゴールドバッハの彗星と漸近挙動）: 偶数 N に対する素数ペア数 k(N) をプロットした散布図を「ゴールドバッハの彗星」と呼びます。上空の上限（30の倍数などのオアシス数）と下限の底（2の累乗などの砂漠数）が美しい尾を引きます。",
      "title": "ゴールドバッハ彗星探査機: 数の星座をナビゲート",
      "subtitle": "星座の星にマウスを重ねると、素数の分解数や構造がわかります。数論グループで絞り込んでみよう！",
      "filterAll": "✨ すべての偶数",
      "filterOasis": "🌟 オアシス数（30の倍数）",
      "filterM6": "⚡ 6の倍数",
      "filterDesert": "🌵 砂漠数（2の累乗）",
      "filterTwin": "🌉 双子素数ブリッジ",
      "oasisCeilingTitle": "🌟 高いオアシス天井:",
      "oasisCeilingDesc": "素因数に {2, 3, 5, 7} をもつ数は、素数候補が割り切れることで除外されにくいため、圧倒的に多くのペアを持ちます！",
      "desertFloorTitle": "🌵 低い砂漠フロア:",
      "desertFloorDesc": "2の累乗（16, 32, 64, 128...）は素因数が2しかないため、同じ桁の偶数の中でペア数が最も少なくなります。",
      "axisX": "偶数 N（4〜{range}）",
      "axisY": "ペア数 k(N)",
      "pairsLabel": "素数ペア数 k(N) = {count}",
      "pminLabel": "最小素数 p_min = {pmin}",
      "hoverTip": "（星をクリックして固定＆調査！）",
      "lockedBadge": "ロック中 🔒",
      "inspectorEmpty": "上の星図の星にカーソルを合わせるかクリックして、素数構造を分析しましょう！",
      "btnWeigh": "天秤で量る ⚖️",
      "btnClock": "時計で見る ⏰",
      "btnGrid": "100方陣で見る 🔢",
      "toastScale": "天秤ばかりへ移動！ N = {n} の素数ペアを計量します",
      "toastClock": "剰余時計へ移動！ N = {n} の幾何学的弦を観察します",
      "toastMatrix": "100グリッドへ移動！ N = {n} の全ペアを点灯しました",
      "inspectorTitle": "星の観測所・データステーション：",
      "evenNumberTitle": "偶数 N = {n}",
      "factorizationLabel": "素因数分解",
      "pairsListLabel": "素数対"
    },
    "detective": {
      "teacherGuide": "🧑‍🏫 指導者ガイド（ゲーム感覚の数論チャレンジ）: 難易度別の6つの事件ファイルを通して、帰納的推論や仮説検証力を養います。最小素数 p_min(N) やチャンピオン数の性質を探究します。",
      "title": "ジュニア探偵アカデミー: 6つのゴールドバッハ事件簿 🕵️‍♂️",
      "subtitle": "名探偵の帽子をかぶろう！ 数をテストして隠された法則を突き止め、すべての謎を解決してください。",
      "casesSolved": "解決した事件: {count} / 6",
      "verifyBtn": "推理を検証",
      "enterNPlaceholder": "偶数 N を入力",
      "solvedBadge": "解決済み ✓",
      "activeBadge": "捜査中 🔍",
      "lockedBadge": "未解禁 🔒",
      "inputInvalid": "正しい偶数を入力してください！",
      "notQuiteHint": "おしい！ 別の数を試すか、ヒントをもう一度読み直してみよう。",
      "cases": [
        {
          "num": 1,
          "title": "秘密のカルテット",
          "badge": "初級",
          "story": "たった1組しか素数ペアを持たない特別な偶数が4つだけ存在します！ そのうち1つを入力してください:",
          "hint": "ヒント: 1つは唯一の偶数素数の2倍（2 + 2）、もう1つは 3 + 5 です。",
          "explanation": "事件解決！ 「ユニーク・フォー」は {4, 6, 8, 12} の4つです。これより大きな偶数はすべて複数のペアを持ちます！"
        },
        {
          "num": 2,
          "title": "6の倍数の大当たり",
          "badge": "中級",
          "story": "6の倍数は2倍のペアを獲得できます！ 40未満で3組以上のペアを持つ偶数を1つ見つけてください:",
          "hint": "ヒント: 24, 30, 36 などの6の倍数（または 22, 26, 34）を試してみよう。",
          "explanation": "大当たり！ 6の倍数は、6k-1型と6k+1型の両方の剰余類の素数を結びつけます。"
        },
        {
          "num": 3,
          "title": "双子素数の架け橋",
          "badge": "幾何",
          "story": "双子素数（29, 31）の中点は 30 です。このペアが結ぶ2倍のブリッジ偶数 N はいくつでしょうか？",
          "hint": "ヒント: 2 × 中点 = 2 × 30。",
          "explanation": "橋が開通！ 60 = 29 + 31。双子素数は必ずゴールドバッハ分解を1組保証します！"
        },
        {
          "num": 4,
          "title": "砂漠の蜃気楼",
          "badge": "数論",
          "story": "2の累乗は彗星で最も乾燥した砂漠に生息します。30から100の間にある2の累乗を入力してください:",
          "hint": "ヒント: 2, 4, 8, 16, 32, 64, 128...",
          "explanation": "砂漠を発見！ 64は5ペアしかありませんが、より小さな隣の60は6ペアもあります！"
        },
        {
          "num": 5,
          "title": "最小素数の大跳躍",
          "badge": "調査",
          "story": "3も5も使えない（最小素数が7以上になる）偶数を見つけてください:",
          "hint": "ヒント: 2と3と5の公倍数は30の倍数です！（例: 30, 60, 90, 120、または 38, 54）",
          "explanation": "謎解明！ 3と5の両方で割り切れるため、素数探しは7までスキップせざるを得ません。"
        },
        {
          "num": 6,
          "title": "98のグランドチャンピオン",
          "badge": "名探偵マスター",
          "story": "第5のチャンピオン数は、最小素数が一気に19までジャンプします！ この数は何でしょう？",
          "hint": "ヒント: 100のちょうど2つ手前の数です。",
          "explanation": "天才名探偵！ 98 = 19 + 79。19未満の素数は 98 - p がすべて合成数になるためペアになれません！"
        }
      ],
      "caseSolvedToast": "事件 #{num} 解決！"
    },
    "worksheet": {
      "teacherGuide": "🧑‍🏫 指導者ガイド（プリント学習と評価）: 学年や習熟度に応じた印刷用プリントを瞬時に作成できます。学年帯と問題数を選択し、「印刷」を押してください。",
      "title": "印刷用ワークシート生成機: 教室での発見学習 📄",
      "gradeTier": "学年・難易度:",
      "tierElem": "小学校（3〜5年: N ≤ 30）",
      "tierMiddle": "中学校（1〜3年: N ≤ 80）",
      "tierHigh": "高校・数学コンテスト（N ≤ 120）",
      "countLabel": "問題数:",
      "includeKey": "解答・解説（教師用）を含める",
      "printBtn": "プリントを印刷 🖨️",
      "sheetTitle": "ゴールドバッハの予想: 素数ペア発見チャレンジ",
      "studentName": "氏名：___________________________",
      "date": "日付: _____________",
      "score": "得点: _____ / {count}",
      "instructions": "指示: 下の偶数それぞれについて、足してその数になる2つの素数を見つけ、空欄に書き込みましょう！",
      "problemPrompt": "第 {num} 問:",
      "showWork": "（計算・素数の確認メモ: __________________）",
      "bonusTitle": "🌟 ボーナス挑戦問題:",
      "bonusPrompt": "素数ペアがたった1組しかない偶数を見つけられますか？ その数を2つ以上挙げ、足し算の式を書いてみよう！",
      "answerKeyTitle": "教師用解答例（すべての有効なゴールドバッハ・ペア）:",
      "none": "なし",
      "count6": "6問",
      "count10": "10問",
      "count14": "14問",
      "subSeries": "数学教育部 • 体験的探究学習シリーズ",
      "studentDateClass": "日付：________________ 学級：_____"
    },
    "badges": {
      "solo_four": {
        "name": "秘密のカルテット",
        "desc": "1ペアしかない孤高の4数 {4, 6, 8, 12} を発見"
      },
      "balance_master": {
        "name": "天秤マスター",
        "desc": "天秤ばかりで目標数のすべての素数ペアを発見"
      },
      "matrix_sleuth": {
        "name": "行列の名探偵",
        "desc": "100グリッド行列で3つの素数ペアを点灯"
      },
      "clock_maestro": {
        "name": "時計のマエストロ",
        "desc": "剰余時計で和音シンフォニーを演奏"
      },
      "comet_stargazer": {
        "name": "彗星の星空観察者",
        "desc": "彗星キャンバスでオアシスと砂漠の星を探査"
      },
      "chief_inspector": {
        "name": "警視総監",
        "desc": "ジュニア探偵アカデミーの全6事件を完全解決"
      }
    }
  },
  "ko": {
    "nav": {
      "appTitle": "골드바흐 탐구 실험실 🧪",
      "subtitle": "학생과 교실을 위한 대화형 수학 놀이터",
      "soundOn": "소리: 켜짐",
      "soundOff": "소리: 꺼짐",
      "studentMode": "학생 모드",
      "teacherMode": "교사 모드",
      "badgesHeader": "배지 ({count}/6)",
      "tabScale": "⚖️ 1. 양팔 저울",
      "tabMatrix": "🧩 2. 100-격자 행렬",
      "tabClock": "🕰️ 3. 모듈로 시계",
      "tabComet": "🌌 4. 혜성 탐험기",
      "tabDetective": "🕵️‍♂️ 5. 주니어 탐정단",
      "tabWorksheet": "📄 6. 학습지 생성기",
      "tab100Labs": "🚀 100대 탐구 실험실 카탈로그 ★",
      "banner100Title": "🌟 100개의 확장 골드바흐 인터랙티브 실험실을 탐험하세요!",
      "banner100Badge": "100개 랩 완비",
      "banner100Desc": "작은 소수부터 모듈러-6 대칭, 3D 심플렉스, 게임 퍼즐, 소수 간격 가교, 슈퍼컴퓨터 벤치마크까지 10개 클러스터 대장정.",
      "banner100Btn": "100개 랩 카탈로그 열기 →"
    },
    "trophy": {
      "title": "🏆 나의 골드바흐 트로피 진열장",
      "desc": "탐정 사건과 수학 과제를 해결하여 6개의 탐험가 배지를 모두 획득하세요!",
      "unlocked": "획득한 배지: {count} / 6",
      "reset": "배지 초기화 🔄",
      "close": "✕ 닫기",
      "resetConfirm": "획득한 모든 배지와 사건 진행 상황을 초기화하시겠습니까?"
    },
    "scale": {
      "teacherGuide": "🧑‍🏫 교사용 가이드 (초등 및 중학교 수학): 1742년 크리스티안 골드바흐는 2보다 큰 모든 짝수가 두 소수의 합으로 표현될 수 있다고 추측했습니다. 교실 발문: 홀수는 왜 일반적으로 두 홀수 소수의 합으로 나타낼 수 없을까요? (힌트: 홀수 + 홀수 = 짝수!).",
      "title": "소수 양팔 저울: 골드바흐의 합 달아보기",
      "targetLabel": "목표 짝수 무게 N:",
      "rollRandom": "무작위 주사위 🎲",
      "showPairs": "모든 쌍 보기 💡",
      "presetLabel": "빠른 선택:",
      "trayTitle": "소수 추 트레이",
      "traySubtitle": "아래 소수를 클릭하여 오른쪽 저울 접시에 올리거나 내리세요:",
      "panTarget": "목표 N",
      "panSum": "소수 합계",
      "statusBalanced": "🌟 저울이 수평을 이뤘습니다! {p} + {q} = {n}",
      "statusOverweight": "⚠️ 너무 무겁습니다! 합계 {sum} > 목표 {n}",
      "statusUnderweight": "⚖️ 너무 가볍습니다! 합계 {sum} < 목표 {n}",
      "statusEmpty": "오른쪽 접시에 두 개의 소수 추를 올려 목표 무게를 맞추세요!",
      "statusOneWeight": "{p}을(를) 올렸습니다. 소수 추 하나를 더 올려 균형을 맞추세요!",
      "discoveredTitle": "발견된 {n}의 소수 쌍:",
      "noPairsDiscovered": "아직 {n}에 대한 소수 쌍을 발견하지 못했습니다.",
      "toastFound": "소수 쌍 발견! {p} + {q} = {n}",
      "toastAllFound": "{n}의 모든 {count}개 소수 쌍을 찾았습니다!",
      "alreadyOnScale": "{p}은(는) 이미 저울에 올려져 있습니다! 클릭하여 제거하세요.",
      "hintTarget": "힌트: 목표 {n}은(는) {count}개의 골드바흐 소수 쌍이 있습니다: {pairs}",
      "presetSolo": "4 (단독)",
      "presetUnique": "12 (유일)",
      "presetOasis": "30 (오아시스)",
      "presetDesert": "64 (사막)",
      "presetChampion": "98 (챔피언)",
      "clearBtn": "추 비우기 ✕",
      "pairsFound": "{total}개 중 {found}개 발견",
      "targetLabelSvg": "목표값",
      "sumLabelSvg": "합계: {sum}"
    },
    "matrix": {
      "teacherGuide": "🧑‍🏫 교사용 가이드 (에라토스테네스의 체 & 수 배열표): 소수는 밝은 청록색으로 빛납니다. 마우스를 올리면 합성수의 소인수분해가 표시됩니다. 모든 골드바흐 쌍이 중앙값 N/2를 중심으로 대칭을 이루는 것을 확인시켜 주세요.",
      "title": "100-격자 소수 행렬: 상보적 소수 쌍 찾기",
      "subtitle": "소수를 탭하거나 목표 N을 선택하여 행렬에서 골드바흐 쌍을 환하게 밝히세요!",
      "targetLabel": "목표 짝수 N:",
      "lightUpBtn": "모든 쌍 밝히기 🌟",
      "clearBtn": "강조 지우기 🧹",
      "prime": "소수",
      "neither": "소수도 합성수도 아님",
      "allPairsFound": "N = {n}의 골드바흐 소수 쌍 {count}개를 찾았습니다:",
      "noPairsFound": "{n}의 소수 쌍을 찾지 못했습니다.",
      "bothPrimeDesc": "자기 쌍: {p} + {p} = {n}",
      "inspectPrompt": "아래 그리드에서 소수를 클릭하여 파트너 수를 확인해보세요!",
      "targetStatus": "목표 N = <strong>{target}</strong>",
      "legendSelected": "소수 p (선택됨)",
      "legendPartner": "소수 파트너 q (성공!)",
      "legendComposite": "합성수 파트너 (소수 아님)"
    },
    "clock": {
      "teacherGuide": "🧑‍🏫 교사용 가이드 (시계 산술과 잉여류 대칭): 수를 원형 시계에 배치하면 골드바흐 쌍이 기하학적 현(chord)으로 변환됩니다. N이 6의 배수일 때 현들이 대칭적이고 빽빽한 거미줄을 형성하여 소수 쌍이 거의 2배로 증가합니다!",
      "title": "모듈로 시계 바퀴: 기하학적 대칭과 \"6의 힘\"",
      "targetLabel": "목표 N:",
      "clockModeLabel": "시계 모드:",
      "modeFull": "전체 바퀴 (1부터 N)",
      "mode12": "12시간 시계",
      "mode6": "6시간 모듈러 바퀴",
      "symphonyBtn": "화음 교향곡 연주 🎵",
      "mult6Bonus": "{n}은(는) 6의 배수입니다! 🌟 (~2배 소수 보너스)",
      "notMult6": "{n}은(는) 6의 배수가 아닙니다.",
      "totalPairs": "골드바흐 소수 쌍 총 개수: {count}",
      "clickPairTip": "소수 쌍을 클릭하면 해당 현만 분리하여 볼 수 있습니다:",
      "resetView": "전체 보기",
      "reflectionAxis": "대칭축",
      "selfPair": "🌟 (자기 쌍)",
      "tip": "💡 팁: 현들은 수직축을 중심으로 좌우 수평 대칭을 이룹니다! 오른쪽 쌍 버튼을 눌러 개별 확인하세요.",
      "cardTitle": "6의 배수 소수 보너스",
      "cardDesc": "기하학적 대칭을 관찰하세요! N이 6으로 나누어떨어질 때 현들이 조화롭고 풍성한 네트워크를 형성합니다.",
      "symmetricTip": "현들은 수직축을 기준으로 좌우 대칭을 이룹니다! 오른쪽의 소수 쌍 칩을 클릭하여 집중 탐색해보세요."
    },
    "comet": {
      "teacherGuide": "🧑‍🏫 교사용 가이드 (골드바흐 혜성과 점근선): 짝수 N에 따른 소수 쌍의 개수 k(N)을 나타낸 산점도를 '골드바흐 혜성'이라 부릅니다. 윗부분의 오아시스 수(30의 배수)와 아랫부분의 사막 수(2의 거듭제곱)가 만드는 꼬리를 탐구합니다.",
      "title": "골드바흐 혜성 탐험기: 수의 별자리 항해",
      "subtitle": "별자리의 별에 마우스를 올려 소수 분해 개수와 구조를 확인하세요. 수 집합별로 필터링해 보세요!",
      "filterAll": "✨ 모든 짝수",
      "filterOasis": "🌟 오아시스 수 (30의 배수)",
      "filterM6": "⚡ 6의 배수",
      "filterDesert": "🌵 사막 수 (2의 거듭제곱)",
      "filterTwin": "🌉 쌍둥이 소수 다리",
      "oasisCeilingTitle": "🌟 높은 오아시스 천장:",
      "oasisCeilingDesc": "소인수로 {2, 3, 5, 7}을 갖는 수들은 나누어떨어짐으로 인해 탈락하는 소수 후보가 적어 소수 쌍이 최대로 많습니다!",
      "desertFloorTitle": "🌵 낮은 사막 바닥:",
      "desertFloorDesc": "2의 거듭제곱(16, 32, 64, 128...)은 소인수로 2만 가지므로 비슷한 크기의 짝수 중 소수 쌍이 가장 적습니다.",
      "axisX": "짝수 N (4부터 {range})",
      "axisY": "쌍 개수 k(N)",
      "pairsLabel": "소수 쌍 k(N) = {count}",
      "pminLabel": "가장 작은 소수 p_min = {pmin}",
      "hoverTip": "(별을 클릭하여 고정하고 조사하세요!)",
      "lockedBadge": "고정됨 🔒",
      "inspectorEmpty": "위의 별자리에서 별을 클릭하거나 마우스를 올려 소수 구조를 탐색하세요!",
      "btnWeigh": "저울에 올리기 ⚖️",
      "btnClock": "시계로 보기 ⏰",
      "btnGrid": "격자로 보기 🔢",
      "toastScale": "양팔 저울로 이동! N = {n}의 소수 쌍을 계량합니다",
      "toastClock": "모듈로 시계로 이동! N = {n}의 기하학적 현을 관찰합니다",
      "toastMatrix": "100-격자로 이동! N = {n}의 모든 쌍을 밝혔습니다",
      "inspectorTitle": "별 관측소 및 데이터 스테이션:",
      "evenNumberTitle": "짝수 N = {n}",
      "factorizationLabel": "소인수분해",
      "pairsListLabel": "소수 쌍"
    },
    "detective": {
      "teacherGuide": "🧑‍🏫 교사용 가이드 (게임형 정수론 도전): 단계별 6개의 사건 파일을 통해 귀납적 추론과 가설 검증 능력을 기릅니다. 최소 소수 p_min(N)과 챔피언 수의 특징을 탐구합니다.",
      "title": "주니어 탐정 아카데미: 6개의 골드바흐 사건 파일 🕵️‍♂️",
      "subtitle": "명탐정 모자를 쓰세요! 수를 시험하고 숨겨진 규칙을 찾아내 모든 미스터리를 해결하세요.",
      "casesSolved": "해결된 사건: {count} / 6",
      "verifyBtn": "추리 검증",
      "enterNPlaceholder": "짝수 N 입력",
      "solvedBadge": "해결됨 ✓",
      "activeBadge": "수사 중 🔍",
      "lockedBadge": "잠김 🔒",
      "inputInvalid": "올바른 짝수를 입력하세요!",
      "notQuiteHint": "아직 아닙니다! 다른 수를 입력하거나 힌트를 다시 읽어보세요.",
      "cases": [
        {
          "num": 1,
          "title": "비밀의 네 숫자 모임",
          "badge": "초급",
          "story": "단 1개의 소수 쌍만 갖는 특별한 짝수가 딱 4개 있습니다! 그중 하나를 입력하세요:",
          "hint": "힌트: 하나는 유일한 짝수 소수를 두 번 더한 것(2 + 2)이고, 다른 하나는 3 + 5입니다.",
          "explanation": "사건 해결! '유니크 포'는 {4, 6, 8, 12}입니다. 이보다 큰 모든 짝수는 여러 개의 소수 쌍을 갖습니다!"
        },
        {
          "num": 2,
          "title": "6의 배수 대박 사건",
          "badge": "중급",
          "story": "6의 배수는 두 배로 많은 소수 쌍을 받습니다! 40 미만에서 3개 이상의 쌍을 갖는 짝수를 찾으세요:",
          "hint": "힌트: 24, 30, 36 같은 6의 배수(또는 22, 26, 34)를 시도해 보세요.",
          "explanation": "대박 적중! 6의 배수는 6k-1형과 6k+1형의 소수들을 모두 연결합니다."
        },
        {
          "num": 3,
          "title": "쌍둥이 소수 구름다리",
          "badge": "기하",
          "story": "쌍둥이 소수 (29, 31)의 한가운데는 30입니다. 이 둘이 연결하는 2배의 다리 짝수 N은 무엇일까요?",
          "hint": "힌트: 2 × 한가운데 = 2 × 30.",
          "explanation": "다리 통과! 60 = 29 + 31. 모든 쌍둥이 소수 쌍은 골드바흐 분해를 1개 이상 보장합니다!"
        },
        {
          "num": 4,
          "title": "사막의 신기루",
          "badge": "정수론",
          "story": "2의 거듭제곱은 혜성의 가장 메마른 사막에 살고 있습니다. 30과 100 사이에 있는 2의 거듭제곱을 입력하세요:",
          "hint": "힌트: 2, 4, 8, 16, 32, 64, 128...",
          "explanation": "사막 발견! 64는 5개의 쌍만 갖지만, 더 작은 이웃 60은 6개의 쌍을 가지고 있습니다!"
        },
        {
          "num": 5,
          "title": "최소 소수의 대도약",
          "badge": "수사",
          "story": "3도 5도 사용할 수 없는(가장 작은 소수가 7 이상인) 짝수를 찾으세요:",
          "hint": "힌트: 2, 3, 5의 공배수는 30의 배수입니다! (예: 30, 60, 90, 120 또는 38, 54)",
          "explanation": "미스터리 해결! 3과 5로 모두 나누어떨어지기 때문에 소수 탐색이 7까지 건너뛰어야 합니다."
        },
        {
          "num": 6,
          "title": "98의 위대한 챔피언",
          "badge": "명탐정 마스터",
          "story": "5번째 챔피언 수는 가장 작은 소수가 19까지 점프합니다! 이 수는 무엇일까요?",
          "hint": "힌트: 100에서 단 2칸 모자란 수입니다.",
          "explanation": "천재 명탐정! 98 = 19 + 79. 19 미만의 모든 소수는 98 - p가 합성수가 되어 실패합니다!"
        }
      ],
      "caseSolvedToast": "사건 #{num} 해결!"
    },
    "worksheet": {
      "teacherGuide": "🧑‍🏫 교사용 가이드 (인쇄 학습지 & 평가): 학년과 수준에 맞춘 깔끔한 출력용 학습지를 즉시 생성합니다. 학년과 문항 수를 선택하고 '인쇄하기'를 누르세요.",
      "title": "인쇄용 학습지 생성기: 교실 속 탐구 활동 📄",
      "gradeTier": "학년 단계:",
      "tierElem": "초등학교 (3-5학년: N ≤ 30)",
      "tierMiddle": "중학교 (1-3학년: N ≤ 80)",
      "tierHigh": "고등학교 / 경시대회 (N ≤ 120)",
      "countLabel": "문제 수:",
      "includeKey": "교사용 정답표 포함",
      "printBtn": "학습지 인쇄 🖨️",
      "sheetTitle": "골드바흐의 추측: 소수 쌍 발견 도전 과제",
      "studentName": "이름: ___________________________",
      "date": "날짜: _____________",
      "score": "점수: _____ / {count}",
      "instructions": "안내: 아래의 각 짝수에 대해, 더해서 그 수가 되는 두 소수를 찾아 빈칸에 적으세요!",
      "problemPrompt": "문제 {num}:",
      "showWork": "(풀이 과정 / 소수 확인: __________________)",
      "bonusTitle": "🌟 보너스 도전 문제:",
      "bonusPrompt": "소수 쌍이 오직 하나뿐인 짝수를 찾을 수 있나요? 2개 이상 찾고 그 덧셈식을 적어보세요!",
      "answerKeyTitle": "교사용 정답표 (모든 유효한 골드바흐 쌍):",
      "none": "없음",
      "count6": "6문제",
      "count10": "10문제",
      "count14": "14문제",
      "subSeries": "수학 교육부 • 교육적 탐구 학습 시리즈",
      "studentDateClass": "날짜: ________________ 학급: _____"
    },
    "badges": {
      "solo_four": {
        "name": "유니크 포",
        "desc": "소수 쌍이 하나뿐인 특별한 4수 {4, 6, 8, 12} 발견"
      },
      "balance_master": {
        "name": "저울의 달인",
        "desc": "저울 위에서 목표 수의 모든 소수 쌍을 찾아냄"
      },
      "matrix_sleuth": {
        "name": "격자의 명탐정",
        "desc": "100-격자 행렬에서 3개의 소수 쌍을 밝혀냄"
      },
      "clock_maestro": {
        "name": "시계의 마에스트로",
        "desc": "모듈로 시계에서 화음 교향곡을 연주함"
      },
      "comet_stargazer": {
        "name": "혜성 천문학자",
        "desc": "혜성 캔버스에서 오아시스와 사막의 별을 탐험함"
      },
      "chief_inspector": {
        "name": "수석 경정",
        "desc": "주니어 탐정 아카데미의 6개 사건 파일을 모두 해결함"
      }
    }
  },
  "zh-CN": {
    "nav": {
      "appTitle": "哥德巴赫探索实验室 🧪",
      "subtitle": "专为学生与课堂打造的交互式数学探索乐园",
      "soundOn": "音效: 开启",
      "soundOff": "音效: 关闭",
      "studentMode": "学生模式",
      "teacherMode": "教师模式",
      "badgesHeader": "徽章 ({count}/6)",
      "tabScale": "⚖️ 1. 天平称重",
      "tabMatrix": "🧩 2. 百数表方阵",
      "tabClock": "🕰️ 3. 模数时钟",
      "tabComet": "🌌 4. 彗星漫游",
      "tabDetective": "🕵️‍♂️ 5. 侦探学院",
      "tabWorksheet": "📄 6. 练习单生成器",
      "tab100Labs": "🚀 100个探索实验室全景目录 ★",
      "banner100Title": "🌟 探索100个扩展的哥德巴赫互动数学实验室！",
      "banner100Badge": "100篇实验室全量上线",
      "banner100Desc": "穿越10大精心编排的教学集群：涵盖基础小素数、模6旋转时钟、3D几何单纯形、游戏谜题、素数间隙桥梁到超级计算机验证极限。",
      "banner100Btn": "进入100实验室总目录 →"
    },
    "trophy": {
      "title": "🏆 你的哥德巴赫荣誉陈列室",
      "desc": "在实验室中破解侦探案件与数学挑战，集齐全部 6 枚探险家成就徽章！",
      "unlocked": "已解锁徽章: {count} / 6",
      "reset": "重置徽章 🔄",
      "close": "✕ 关闭",
      "resetConfirm": "确定要重置所有已获得的徽章与侦探案件记录吗？"
    },
    "scale": {
      "teacherGuide": "🧑‍🏫 教师指南（小学与初中数学）: 克里斯蒂安·哥德巴赫于 1742 年提出猜想：任一大于 2 的偶数都可写成两个质数之和。课堂提问：为什么奇数通常不能写成两个奇质数之和？（提示：奇数 + 奇数 = 偶数！）。",
      "title": "质数平衡天平：称量哥德巴赫之和",
      "targetLabel": "目标偶数重量 N:",
      "rollRandom": "随机掷数 🎲",
      "showPairs": "显示所有质数对 💡",
      "presetLabel": "快速预设:",
      "trayTitle": "质数砝码托盘",
      "traySubtitle": "点击下方任意质数将其放入或取出天平称盘：",
      "panTarget": "目标 N",
      "panSum": "质数之和",
      "statusBalanced": "🌟 天平完全平衡！ {p} + {q} = {n}",
      "statusOverweight": "⚠️ 超重！和 {sum} > 目标 {n}",
      "statusUnderweight": "⚖️ 偏轻！和 {sum} < 目标 {n}",
      "statusEmpty": "请在右侧盘中放入两个质数砝码以平衡目标！",
      "statusOneWeight": "已放入 {p}。再放入一个质数砝码以达到平衡！",
      "discoveredTitle": "已发现的 {n} 质数对:",
      "noPairsDiscovered": "尚未为 {n} 找到素数对。",
      "toastFound": "发现质数对！ {p} + {q} = {n}",
      "toastAllFound": "{n} 的全部 {count} 组质数对已集齐！",
      "alreadyOnScale": "{p} 已经在天平盘上了！点击它可取下。",
      "hintTarget": "提示：目标数 {n} 共有 {count} 组质数分解：{pairs}",
      "presetSolo": "4 (独解)",
      "presetUnique": "12 (唯一)",
      "presetOasis": "30 (绿洲)",
      "presetDesert": "64 (沙漠)",
      "presetChampion": "98 (冠军)",
      "clearBtn": "清空砝码 ✕",
      "pairsFound": "已找到 {found} / {total} 组素数对",
      "targetLabelSvg": "目标值",
      "sumLabelSvg": "当前和: {sum}"
    },
    "matrix": {
      "teacherGuide": "🧑‍🏫 教师指南（埃拉托斯特尼筛法与数字规律）: 质数以亮青色高亮显示。鼠标悬停时可查看合数的质因数分解。引导学生发现每组哥德巴赫质数对都关于中心点 N/2 对称分布。",
      "title": "百数表质数方阵：寻找互补质数对",
      "subtitle": "点击质数或选择目标 N，点亮方阵中所有匹配的哥德巴赫质数对！",
      "targetLabel": "目标偶数 N:",
      "lightUpBtn": "点亮所有质数对 🌟",
      "clearBtn": "清除高亮 🧹",
      "prime": "质数",
      "neither": "既非质数也非合数",
      "allPairsFound": "找到 N = {n} 的 {count} 组哥德巴赫质数对：",
      "noPairsFound": "未找到 {n} 的质数对。",
      "bothPrimeDesc": "自身对：{p} + {p} = {n}",
      "inspectPrompt": "点击下方网格中的任意素数，探寻与它凑成目标数的搭档！",
      "targetStatus": "当前目标 N = <strong>{target}</strong>",
      "legendSelected": "素数 p（已选择）",
      "legendPartner": "素数搭档 q（匹配成功！）",
      "legendComposite": "合数搭档（非素数）"
    },
    "clock": {
      "teacherGuide": "🧑‍🏫 教师指南（时钟算术与同余对称性）: 将数字排列在圆盘时钟上，哥德巴赫质数对便化作一条条几何弦。当 N 是 6 的倍数时，弦构成致密对称的桥梁网络，质数对数量几乎翻倍！",
      "title": "模数时钟圆盘：几何对称性与“6的超能力”",
      "targetLabel": "目标 N:",
      "clockModeLabel": "时钟模式:",
      "modeFull": "整盘模式 (1 到 N)",
      "mode12": "12小时制时钟",
      "mode6": "6小时模数圆盘",
      "symphonyBtn": "奏响弦乐交响曲 🎵",
      "mult6Bonus": "{n} 是 6 的倍数！🌟（质数对数量翻倍奖赏）",
      "notMult6": "{n} 不是 6 的倍数。",
      "totalPairs": "哥德巴赫质数对总数: {count}",
      "clickPairTip": "点击右侧质数对可单独高亮其几何弦：",
      "resetView": "重置视图",
      "reflectionAxis": "对称反射轴",
      "selfPair": "🌟 (自身对)",
      "tip": "💡 提示：所有弦关于垂直对称轴水平反射对称！点击右侧质数对按钮可聚焦观察。",
      "cardTitle": "6的倍数质数奖赏",
      "cardDesc": "观察美妙的几何对称！当 N 能被 6 整除时，弦线构成了一张极为致密的彩虹桥网。",
      "symmetricTip": "琴弦关于垂直中轴水平镜像对称！点击右侧任意素数对按钮可高亮聚焦。"
    },
    "comet": {
      "teacherGuide": "🧑‍🏫 教师指南（哥德巴赫彗星与渐近规律）: 将偶数 N 对应的质数对数量 k(N) 绘制成散点图，即为壮丽的“哥德巴赫彗星”。学生可以直观观察到上方的天花板（绿洲数如 840、1260）与下方的地板（沙漠数如 2 的幂次）。",
      "title": "哥德巴赫彗星漫游：在数字星座中穿梭",
      "subtitle": "将鼠标悬停在星群中的任意恒星上，探查其质数解剖数据。按数论家族筛选清晰的分层条带！",
      "filterAll": "✨ 全部偶数",
      "filterOasis": "🌟 绿洲数 (30的倍数)",
      "filterM6": "⚡ 6的倍数",
      "filterDesert": "🌵 沙漠数 (2的幂次)",
      "filterTwin": "🌉 孪生素数彩虹桥",
      "oasisCeilingTitle": "🌟 黄金绿洲天花板:",
      "oasisCeilingDesc": "拥有因数 {2, 3, 5, 7} 的数字拥有最多的质数对，因为极少有质数候选因整除性被筛掉！",
      "desertFloorTitle": "🌵 贫瘠沙漠地板:",
      "desertFloorDesc": "2的幂（16, 32, 64, 128...）仅有 2 这个质因数，因此在同量级偶数中拥有的质数对最少。",
      "axisX": "偶数 N (4 到 {range})",
      "axisY": "质数对数量 k(N)",
      "pairsLabel": "质数对 k(N) = {count}",
      "pminLabel": "最小质数 p_min = {pmin}",
      "hoverTip": "(点击星星可锁定并深入探究！)",
      "lockedBadge": "已锁定 🔒",
      "inspectorEmpty": "在上方星座星图中悬停或点击任意恒星，解析它的素数结构！",
      "btnWeigh": "在天平上称量 ⚖️",
      "btnClock": "在时钟上观察 ⏰",
      "btnGrid": "在百数表中点亮 🔢",
      "toastScale": "切换到天平称重！正在称量 N = {n} 的质数对",
      "toastClock": "切换到模数时钟！正在观察 N = {n} 的几何弦",
      "toastMatrix": "切换到百数表！已点亮 N = {n} 的所有质数对",
      "inspectorTitle": "恒星探测站与数据中心：",
      "evenNumberTitle": "偶数 N = {n}",
      "factorizationLabel": "质因数分解",
      "pairsListLabel": "素数对"
    },
    "detective": {
      "teacherGuide": "🧑‍🏫 教师指南（游戏化数论挑战）: 这 6 个分层探案卷宗鼓励学生进行归纳推理与猜想验证，探索最小质数 p_min(N) 与纪录冠军数的奥秘。",
      "title": "少年侦探学院：6 份哥德巴赫探案卷宗 🕵️‍♂️",
      "subtitle": "戴上大侦探之帽！通过检验数字、寻找隐藏规律来破解全部谜案。",
      "casesSolved": "已破案: {count} / 6",
      "verifyBtn": "验证推论",
      "enterNPlaceholder": "输入偶数 N",
      "solvedBadge": "已破解 ✓",
      "activeBadge": "正在调查 🔍",
      "lockedBadge": "未解密 🔒",
      "inputInvalid": "请输入合法的偶数！",
      "notQuiteHint": "还差一点！换一个数字试试，或重新阅读线索。",
      "cases": [
        {
          "num": 1,
          "title": "独数四杰的秘密集会",
          "badge": "初级侦探",
          "story": "有四个非常特别的偶数，它们有且仅有一组质数对！请输入其中任意一个：",
          "hint": "提示：其中一个是唯一偶质数的双倍（2 + 2），另一个是 3 + 5。",
          "explanation": "破案成功！独数四杰是 {4, 6, 8, 12}。所有更大的偶数都拥有多组质数对！"
        },
        {
          "num": 2,
          "title": "6的倍数超级大奖",
          "badge": "中级侦探",
          "story": "6的倍数能获得双倍质数对奖赏！请找出一个小于40且至少有3组质数对的偶数：",
          "hint": "提示：尝试 24, 30 或 36 等 6 的倍数（亦可尝试 22, 26, 34）。",
          "explanation": "命中大奖！6的倍数将 6k-1 与 6k+1 两个剩余类的质数完美连接。"
        },
        {
          "num": 3,
          "title": "孪生素数彩虹桥",
          "badge": "几何侦探",
          "story": "孪生素数 (29, 31) 的中点是 30。它们所跨越的双倍桥梁数 N 是多少？",
          "hint": "提示：2 × 中点 = 2 × 30。",
          "explanation": "成功跨桥！60 = 29 + 31。每一对孪生素数都能确凿无误地搭起一座哥德巴赫桥梁！"
        },
        {
          "num": 4,
          "title": "沙漠蜃景",
          "badge": "数论侦探",
          "story": "2的幂生活在彗星最贫瘠的沙漠底带。请说出一个介于 30 到 100 之间的 2 的幂：",
          "hint": "提示：2, 4, 8, 16, 32, 64, 128...",
          "explanation": "锁定沙漠！64 仅有 5 组质数对，而比它小的邻居 60 却拥有足足 6 组！"
        },
        {
          "num": 5,
          "title": "最小质数大跳跃",
          "badge": "破案专家",
          "story": "找出一个既不能用 3 也不能用 5 的偶数（即最小质数 p ≥ 7）：",
          "hint": "提示：同时是 2、3、5 倍数的数必定是 30 的倍数！（如 30, 60, 90, 120，亦可如 38, 54）",
          "explanation": "真相大白！由于被 3 和 5 整除，质数搜索不得不一路跳跃至 7。"
        },
        {
          "num": 6,
          "title": "98的大宗师传奇",
          "badge": "神探大师",
          "story": "第5个纪录冠军数将其最小质数一路逼跳到了 19！这个数是多少？",
          "hint": "提示：距离 100 仅有两步之遥。",
          "explanation": "神探降世！98 = 19 + 79。小于 19 的所有质数都因 98 - p 为合数而通通失效！"
        }
      ],
      "caseSolvedToast": "第 #{num} 号案件破获成功！"
    },
    "worksheet": {
      "teacherGuide": "🧑‍🏫 教师指南（课堂练习与评估）: 一键生成排版工整、分层级的课堂打印练习单。选择年级段与题量后，点击“打印练习单”即可调出打印对话框。",
      "title": "课堂练习单生成器：探究式作业设计 📄",
      "gradeTier": "年级难度:",
      "tierElem": "小学阶段 (3-5年级: N ≤ 30)",
      "tierMiddle": "初中阶段 (6-8年级: N ≤ 80)",
      "tierHigh": "高中奥数/竞赛 (9-12年级: N ≤ 120)",
      "countLabel": "练习题量:",
      "includeKey": "附带教师参考答案",
      "printBtn": "打印练习单 🖨️",
      "sheetTitle": "哥德巴赫猜想：质数对发现探索挑战单",
      "studentName": "姓名：___________________________",
      "date": "日期: _____________",
      "score": "得分: _____ / {count}",
      "instructions": "答题说明：对于下方的每一个偶数，请找出两个相加等于它的质数，并将它们分别写在横线上！",
      "problemPrompt": "第 {num} 题:",
      "showWork": "(运算过程 / 质数检验: __________________)",
      "bonusTitle": "🌟 附加挑战思考题:",
      "bonusPrompt": "你能找到只有一个质数对的偶数吗？请至少写出两个这样的数字并列出它们的质数求和式！",
      "answerKeyTitle": "教师参考答案（所有有效哥德巴赫质数对）:",
      "none": "无",
      "count6": "6 道题目",
      "count10": "10 道题目",
      "count14": "14 道题目",
      "subSeries": "数学教研部 • 启发式探究教学系列练习",
      "studentDateClass": "日期：________________ 班级：_____"
    },
    "badges": {
      "solo_four": {
        "name": "独数四杰",
        "desc": "探明仅有1组质数对的独数群 {4, 6, 8, 12}"
      },
      "balance_master": {
        "name": "天平掌门",
        "desc": "在天平上集齐目标数的所有哥德巴赫质数对"
      },
      "matrix_sleuth": {
        "name": "百数神探",
        "desc": "在百数表方阵中点亮3组以上质数对"
      },
      "clock_maestro": {
        "name": "时钟乐圣",
        "desc": "在模数时钟上演奏弦乐交响曲"
      },
      "comet_stargazer": {
        "name": "彗星观星者",
        "desc": "在彗星天幕中漫游绿洲顶峰与沙漠低谷"
      },
      "chief_inspector": {
        "name": "皇家总督察",
        "desc": "成功侦破少年侦探学院全部 6 起重大案件"
      }
    }
  },
  "zh-TW": {
    "nav": {
      "appTitle": "哥德巴赫探索實驗室 🧪",
      "subtitle": "專為學生與課堂打造的互動式數學探索樂園",
      "soundOn": "音效: 開啟",
      "soundOff": "音效: 關閉",
      "studentMode": "學生模式",
      "teacherMode": "教師模式",
      "badgesHeader": "徽章 ({count}/6)",
      "tabScale": "⚖️ 1. 天平稱重",
      "tabMatrix": "🧩 2. 百數表方陣",
      "tabClock": "🕰️ 3. 模數時鐘",
      "tabComet": "🌌 4. 彗星漫遊",
      "tabDetective": "🕵️‍♂️ 5. 偵探學院",
      "tabWorksheet": "📄 6. 練習單產生器",
      "tab100Labs": "🚀 100個探索實驗室全景目錄 ★",
      "banner100Title": "🌟 探索100個擴展的哥德巴赫互動數學實驗室！",
      "banner100Badge": "100篇實驗室全量上線",
      "banner100Desc": "穿越10大精心編排的教學集群：涵蓋基礎小質數、模6旋轉時鐘、3D幾何單純形、遊戲謎題、質數間隙橋樑到超級計算機驗證極限。",
      "banner100Btn": "進入100實驗室總目錄 →"
    },
    "trophy": {
      "title": "🏆 你的哥德巴赫榮譽陳列室",
      "desc": "在實驗室中破解偵探案件與數學挑戰，集齊全部 6 枚探險家成就徽章！",
      "unlocked": "已解鎖徽章: {count} / 6",
      "reset": "重設徽章 🔄",
      "close": "✕ 關閉",
      "resetConfirm": "確定要重設所有已獲得的徽章與偵探案件紀錄嗎？"
    },
    "scale": {
      "teacherGuide": "🧑‍🏫 教師指南（國小與國中數學）: 克里斯蒂安·哥德巴赫於 1742 年提出猜想：任一大於 2 的偶數皆可寫成兩個質數之和。課堂提問：為什麼奇數通常不能寫成兩個奇質數之和？（提示：奇數 + 奇數 = 偶數！）。",
      "title": "質數平衡天平：秤量哥德巴赫之和",
      "targetLabel": "目標偶數重量 N:",
      "rollRandom": "隨機擲數 🎲",
      "showPairs": "顯示所有質數對 💡",
      "presetLabel": "快速預設:",
      "trayTitle": "質數砝碼托盤",
      "traySubtitle": "點擊下方任意質數將其放入或移出天平秤盤：",
      "panTarget": "目標 N",
      "panSum": "質數之和",
      "statusBalanced": "🌟 天平完全平衡！ {p} + {q} = {n}",
      "statusOverweight": "⚠️ 超重！和 {sum} > 目標 {n}",
      "statusUnderweight": "⚖️ 偏輕！和 {sum} < 目標 {n}",
      "statusEmpty": "請在右側盤中放入兩個質數砝碼以平衡目標！",
      "statusOneWeight": "已放入 {p}。再放入一個質數砝碼以達到平衡！",
      "discoveredTitle": "已發現的 {n} 質數對:",
      "noPairsDiscovered": "尚未為 {n} 找到質數對。",
      "toastFound": "發現質數對！ {p} + {q} = {n}",
      "toastAllFound": "{n} 的全部 {count} 組質數對已集齊！",
      "alreadyOnScale": "{p} 已經在天平盤上了！點擊它可取下。",
      "hintTarget": "提示：目標數 {n} 共有 {count} 組質數分解：{pairs}",
      "presetSolo": "4 (獨解)",
      "presetUnique": "12 (唯一)",
      "presetOasis": "30 (綠洲)",
      "presetDesert": "64 (沙漠)",
      "presetChampion": "98 (冠軍)",
      "clearBtn": "清空砝碼 ✕",
      "pairsFound": "已找到 {found} / {total} 組質數對",
      "targetLabelSvg": "目標值",
      "sumLabelSvg": "當前和: {sum}"
    },
    "matrix": {
      "teacherGuide": "🧑‍🏫 教師指南（埃拉托斯特尼篩法與數字規律）: 質數以亮青色高亮顯示。滑鼠懸停時可檢視合數的質因數分解。引導學生發現每組哥德巴赫質數對皆關於中心點 N/2 對稱分布。",
      "title": "百數表質數方陣：尋找互補質數對",
      "subtitle": "點擊質數或選擇目標 N，點亮方陣中所有匹配的哥德巴赫質數對！",
      "targetLabel": "目標偶數 N:",
      "lightUpBtn": "點亮所有質數對 🌟",
      "clearBtn": "清除高亮 🧹",
      "prime": "質數",
      "neither": "既非質數也非合數",
      "allPairsFound": "找到 N = {n} 的 {count} 組哥德巴赫質數對：",
      "noPairsFound": "未找到 {n} 的質數對。",
      "bothPrimeDesc": "自身對：{p} + {p} = {n}",
      "inspectPrompt": "點擊下方網格中的任意質數，探尋與它湊成目標數的搭檔！",
      "targetStatus": "當前目標 N = <strong>{target}</strong>",
      "legendSelected": "質數 p（已選擇）",
      "legendPartner": "質數搭檔 q（匹配成功！）",
      "legendComposite": "合數搭檔（非質數）"
    },
    "clock": {
      "teacherGuide": "🧑‍🏫 教師指南（時鐘算術與同餘對稱性）: 將數字排列在圓盤時鐘上，哥德巴赫質數對便化作一條條幾何弦。當 N 是 6 的倍數時，弦構成緻密對稱的橋梁網絡，質數對數量幾乎翻倍！",
      "title": "模數時鐘圓盤：幾何對稱性與「6的超能力」",
      "targetLabel": "目標 N:",
      "clockModeLabel": "時鐘模式:",
      "modeFull": "整盤模式 (1 到 N)",
      "mode12": "12小時制時鐘",
      "mode6": "6小時模數圓盤",
      "symphonyBtn": "奏響弦樂交響曲 🎵",
      "mult6Bonus": "{n} 是 6 的倍數！🌟（質數對數量翻倍獎賞）",
      "notMult6": "{n} 不是 6 的倍数。",
      "totalPairs": "哥德巴赫質數對總數: {count}",
      "clickPairTip": "點擊右側質數對可單獨高亮其幾何弦：",
      "resetView": "重設檢視",
      "reflectionAxis": "對稱反射軸",
      "selfPair": "🌟 (自身對)",
      "tip": "💡 提示：所有弦關於垂直對稱軸水平反射對稱！點擊右側質數對按鈕可聚焦觀察。",
      "cardTitle": "6的倍數質數獎賞",
      "cardDesc": "觀察美妙的幾何對稱！當 N 能被 6 整除時，弦線構成了一張極為緻密的彩虹橋網。",
      "symmetricTip": "琴弦關於垂直中軸水平鏡像對稱！點擊右側任意質數對按鈕可高亮聚焦。"
    },
    "comet": {
      "teacherGuide": "🧑‍🏫 教師指南（哥德巴赫彗星與漸近規律）: 將偶數 N 對應的質數對數量 k(N) 繪製成散佈圖，即為壯麗的「哥德巴赫彗星」。學生可以直觀觀察到上方的天花板（綠洲數如 840、1260）與下方的地板（沙漠數如 2 的次方）。",
      "title": "哥德巴赫彗星漫遊：在數字星座中穿梭",
      "subtitle": "將滑鼠懸停在星群中的任意恆星上，探查其質數解剖數據。按數論家族篩選清晰的分層條帶！",
      "filterAll": "✨ 全部偶數",
      "filterOasis": "🌟 綠洲數 (30的倍數)",
      "filterM6": "⚡ 6的倍數",
      "filterDesert": "🌵 沙漠數 (2的次方)",
      "filterTwin": "🌉 蠻生素數彩虹橋",
      "oasisCeilingTitle": "🌟 黃金綠洲天花板:",
      "oasisCeilingDesc": "擁有因數 {2, 3, 5, 7} 的數字擁有最多的質數對，因為極少有質數候選因整除性被篩除！",
      "desertFloorTitle": "🌵 貧瘠沙漠地板:",
      "desertFloorDesc": "2的次方（16, 32, 64, 128...）僅有 2 這個質因數，因此在同量級偶數中擁有的質數對最少。",
      "axisX": "偶數 N (4 到 {range})",
      "axisY": "質數對數量 k(N)",
      "pairsLabel": "質數對 k(N) = {count}",
      "pminLabel": "最小質數 p_min = {pmin}",
      "hoverTip": "(點擊星星可鎖定並深入探究！)",
      "lockedBadge": "已鎖定 🔒",
      "inspectorEmpty": "在上方星座星圖中懸停或點擊任意恆星，解析它的質數結構！",
      "btnWeigh": "在天平上秤量 ⚖️",
      "btnClock": "在時鐘上觀察 ⏰",
      "btnGrid": "在百數表中點亮 🔢",
      "toastScale": "切換到天平稱重！正在秤量 N = {n} 的質數對",
      "toastClock": "切換到模數時鐘！正在觀察 N = {n} 的幾何弦",
      "toastMatrix": "切換到百數表！已點亮 N = {n} 的所有質数對",
      "inspectorTitle": "恆星探測站與數據中心：",
      "evenNumberTitle": "偶數 N = {n}",
      "factorizationLabel": "質因數分解",
      "pairsListLabel": "質數對"
    },
    "detective": {
      "teacherGuide": "🧑‍🏫 教師指南（遊戲化數論挑戰）: 這 6 個分層探案卷宗鼓勵學生進行歸納推理與猜想驗證，探索最小質數 p_min(N) 與紀錄冠軍數的奧秘。",
      "title": "少年偵探學院：6 份哥德巴赫探案卷宗 🕵️‍♂️",
      "subtitle": "戴上大偵探之帽！通過檢驗數字、尋找隱藏規律來破解全部謎案。",
      "casesSolved": "已破案: {count} / 6",
      "verifyBtn": "驗證推論",
      "enterNPlaceholder": "輸入偶數 N",
      "solvedBadge": "已破解 ✓",
      "activeBadge": "正在調查 🔍",
      "lockedBadge": "未解密 🔒",
      "inputInvalid": "請輸入合法的偶數！",
      "notQuiteHint": "還差一點！換一個數字試試，或重新閱讀線索。",
      "cases": [
        {
          "num": 1,
          "title": "獨數四傑的秘密集會",
          "badge": "初級偵探",
          "story": "有四個非常特別的偶數，它們有且僅有一組質數對！請輸入其中任意一個：",
          "hint": "提示：其中一個是唯一偶質數的雙倍（2 + 2），另一個是 3 + 5。",
          "explanation": "破案成功！獨數四傑是 {4, 6, 8, 12}。所有更大的偶數都擁有多組質數對！"
        },
        {
          "num": 2,
          "title": "6的倍數超級大獎",
          "badge": "中級偵探",
          "story": "6的倍數能獲得雙倍質數對獎賞！請找出一個小於40且至少有3組質數對的偶數：",
          "hint": "提示：嘗試 24, 30 或 36 等 6 的倍數（亦可嘗試 22, 26, 34）。",
          "explanation": "命中大獎！6的倍數將 6k-1 與 6k+1 兩個剩餘類的質數完美連接。"
        },
        {
          "num": 3,
          "title": "雙生質數彩虹橋",
          "badge": "幾何偵探",
          "story": "雙生質數 (29, 31) 的中點是 30。它們所跨越的雙倍橋樑數 N 是多少？",
          "hint": "提示：2 × 中點 = 2 × 30。",
          "explanation": "成功跨橋！60 = 29 + 31。每一對雙生質數都能確鑿無誤地搭起一座哥德巴赫橋樑！"
        },
        {
          "num": 4,
          "title": "沙漠蜃景",
          "badge": "數論偵探",
          "story": "2的次方生活在彗星最貧瘠的沙漠底帶。請說出一個介於 30 到 100 之間的 2 的次方：",
          "hint": "提示：2, 4, 8, 16, 32, 64, 128...",
          "explanation": "鎖定沙漠！64 僅有 5 組質數對，而比它小的鄰居 60 卻擁有足足 6 組！"
        },
        {
          "num": 5,
          "title": "最小質數大跳躍",
          "badge": "破案專家",
          "story": "找出一個既不能用 3 也不能用 5 的偶數（即最小質數 p ≥ 7）：",
          "hint": "提示：同時是 2、3、5 倍數的數必定是 30 的倍數！（如 30, 60, 90, 120，亦可如 38, 54）",
          "explanation": "真相大白！由於被 3 和 5 整除，質數搜尋不得不一路跳躍至 7。"
        },
        {
          "num": 6,
          "title": "98的大宗師傳奇",
          "badge": "神探大師",
          "story": "第5個紀錄冠軍數將其最小質數一路逼跳到了 19！這個數是多少？",
          "hint": "提示：距離 100 僅有兩步之遙。",
          "explanation": "神探降世！98 = 19 + 79。小於 19 的所有質數都因 98 - p 為合數而通通失效！"
        }
      ],
      "caseSolvedToast": "第 #{num} 號案件破獲成功！"
    },
    "worksheet": {
      "teacherGuide": "🧑‍🏫 教師指南（課堂練習與評估）: 一鍵產生排版工整、分層級的課堂列印練習單。選擇年級段與題量後，點擊「列印練習單」即可調出列印對話框。",
      "title": "課堂練習單產生器：探究式作業設計 📄",
      "gradeTier": "年級難度:",
      "tierElem": "國小階段 (3-5年級: N ≤ 30)",
      "tierMiddle": "國中階段 (6-8年級: N ≤ 80)",
      "tierHigh": "高中奧數/競賽 (9-12年級: N ≤ 120)",
      "countLabel": "練習題量:",
      "includeKey": "附帶教師參考答案",
      "printBtn": "列印練習單 🖨️",
      "sheetTitle": "哥德巴赫猜想：質數對發現探索挑戰單",
      "studentName": "姓名：___________________________",
      "date": "日期: _____________",
      "score": "得分: _____ / {count}",
      "instructions": "答題說明：對於下方的每一個偶數，請找出兩個相加等於它的質數，並將它們分別寫在橫線上！",
      "problemPrompt": "第 {num} 題:",
      "showWork": "(運算過程 / 質數檢驗: __________________)",
      "bonusTitle": "🌟 附加挑戰思考題:",
      "bonusPrompt": "你能找到只有一個質數對的偶數嗎？請至少寫出兩個這樣的數字並列出它們的質數求和式！",
      "answerKeyTitle": "教師參考答案（所有有效哥德巴赫質數對）:",
      "none": "無",
      "count6": "6 道題目",
      "count10": "10 道題目",
      "count14": "14 道題目",
      "subSeries": "數學教研部 • 啟發式探究教學系列練習",
      "studentDateClass": "日期：________________ 班級：_____"
    },
    "badges": {
      "solo_four": {
        "name": "獨數四傑",
        "desc": "探明僅有1組質數對的獨數群 {4, 6, 8, 12}"
      },
      "balance_master": {
        "name": "天平掌門",
        "desc": "在天平上集齊目標數的所有哥德巴赫質數對"
      },
      "matrix_sleuth": {
        "name": "百數神探",
        "desc": "在百數表方陣中點亮3組以上質數對"
      },
      "clock_maestro": {
        "name": "時鐘樂聖",
        "desc": "在模數時鐘上演奏弦樂交響曲"
      },
      "comet_stargazer": {
        "name": "彗星觀星者",
        "desc": "在彗星天幕中漫遊綠洲頂峰與沙漠低谷"
      },
      "chief_inspector": {
        "name": "皇家總督察",
        "desc": "成功偵破少年偵探學院全部 6 起重大案件"
      }
    }
  }
},

  /**
   * Translates a key path (e.g. 'scale.statusBalanced' or 'nav.appTitle')
   * Supports parameter interpolation: {n}, {count}, {p}, {q}, etc.
   */
  t: function(keyPath, params) {
    var lang = this.currentLang || 'en';
    var dict = this.translations[lang] || this.translations['en'];
    var parts = keyPath.split('.');
    var val = dict;

    for (var i = 0; i < parts.length; i++) {
      if (val && typeof val === 'object' && parts[i] in val) {
        val = val[parts[i]];
      } else {
        // Fallback to English
        val = null;
        break;
      }
    }

    if (val === null || val === undefined) {
      // Try fallback to en
      var enDict = this.translations['en'];
      val = enDict;
      for (var j = 0; j < parts.length; j++) {
        if (val && typeof val === 'object' && parts[j] in val) {
          val = val[parts[j]];
        } else {
          val = keyPath;
          break;
        }
      }
    }

    if (typeof val !== 'string') {
      return val;
    }

    if (params && typeof params === 'object') {
      for (var p in params) {
        val = val.replace(new RegExp('\\{' + p + '\\}', 'g'), String(params[p]));
      }
    }

    return val;
  },

  /**
   * Sets current language and updates all [data-i18n] DOM elements
   */
  setLanguage: function(lang) {
    if (!this.translations[lang]) {
      lang = 'en';
    }
    this.currentLang = lang;
    try {
      localStorage.setItem('goldbach_edu_lang', lang);
    } catch (e) {}

    if (typeof document !== 'undefined' && document.documentElement) {
      document.documentElement.lang = lang;
      var dir = (this.languages[lang] && this.languages[lang].dir) || 'ltr';
      document.documentElement.dir = dir;

      // Translate all static elements with data-i18n
      var elements = document.querySelectorAll('[data-i18n]');
      for (var i = 0; i < elements.length; i++) {
        var el = elements[i];
        var key = el.getAttribute('data-i18n');
        if (key) {
          var translated = this.t(key);
          if (translated) {
            el.innerHTML = translated;
          }
        }
      }

      // Translate placeholder attributes
      var placeholderEls = document.querySelectorAll('[data-i18n-placeholder]');
      for (var k = 0; k < placeholderEls.length; k++) {
        var pEl = placeholderEls[k];
        var pKey = pEl.getAttribute('data-i18n-placeholder');
        if (pKey) {
          pEl.setAttribute('placeholder', this.t(pKey));
        }
      }

      // Update select dropdown value if exists
      var langSelect = document.getElementById('lang-select');
      if (langSelect && langSelect.value !== lang) {
        langSelect.value = lang;
      }
    }

    // Broadcast change event for dynamic views in edu_app.js
    if (typeof window !== 'undefined' && typeof window.onLanguageChanged === 'function') {
      window.onLanguageChanged(lang);
    }
  },

  /**
   * Initialize language from localStorage or navigator and apply to DOM
   */
  init: function() {
    var savedLang = 'en';
    try {
      savedLang = localStorage.getItem('goldbach_edu_lang');
    } catch (e) {}

    if (!savedLang && typeof navigator !== 'undefined' && navigator.language) {
      var navLang = navigator.language;
      if (navLang.startsWith('de')) savedLang = 'de';
      else if (navLang.startsWith('fr')) savedLang = 'fr';
      else if (navLang.startsWith('it')) savedLang = 'it';
      else if (navLang.startsWith('ja')) savedLang = 'ja';
      else if (navLang.startsWith('ko')) savedLang = 'ko';
      else if (navLang.toLowerCase() === 'zh-tw' || navLang.toLowerCase() === 'zh-hant' || navLang.toLowerCase() === 'zh-hk') savedLang = 'zh-TW';
      else if (navLang.startsWith('zh')) savedLang = 'zh-CN';
      else savedLang = 'en';
    }

    if (!this.translations[savedLang]) {
      savedLang = 'en';
    }

    this.currentLang = savedLang;

    // Apply to DOM if document is ready, or hook DOMContentLoaded
    var self = this;
    if (typeof document !== 'undefined') {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
          self.setLanguage(self.currentLang);
        });
      } else {
        self.setLanguage(self.currentLang);
      }
    }
  }
};

// Initialize immediately
window.EDU_I18N.init();
