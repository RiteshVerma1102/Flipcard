/**
 * Flipcard Studio — Interactive 3D Card Engine & Study Platform
 * Author: Ritesh Verma (https://github.com/RiteshVerma1102)
 */

(function () {
  'use strict';

  // --- BUILT-IN SEED DECKS ---
  const DEFAULT_DECKS = {
    web_dev: {
      id: 'web_dev',
      name: '🌐 Full Stack Web Development',
      cards: [
        {
          id: 'wd_1',
          category: 'JavaScript',
          difficulty: 'Intermediate',
          question: 'What is the Event Loop in JavaScript and how does the microtask queue differ from the macrotask queue?',
          answer: 'The Event Loop coordinates code execution, events, and sub-tasks. Microtasks (Promises, queueMicrotask, MutationObserver) run immediately after current synchronous code finishes and before the next macrotask (setTimeout, setInterval, I/O) is processed.',
          code: '// Microtasks run before macrotasks\nsetTimeout(() => console.log("Macrotask"), 0);\nPromise.resolve().then(() => console.log("Microtask"));\n// Output: Microtask, then Macrotask',
          keyPoints: [
            'Microtasks always starve macrotasks if queued continuously',
            'Promise callbacks are microtasks',
            'DOM renders occur between macrotasks'
          ]
        },
        {
          id: 'wd_2',
          category: 'React 19',
          difficulty: 'Advanced',
          question: 'How does React 19 Server Actions and the useActionState hook optimize state transitions?',
          answer: 'useActionState manages async state transitions cleanly without manual isLoading / error flags. It pairs with Server Actions to automatically handle pending states, optimistic updates, and automatic form resets upon submission.',
          code: 'const [state, formAction, isPending] = useActionState(async (prevState, formData) => {\n  return await updateProfile(formData);\n}, initialState);',
          keyPoints: [
            'Eliminates manual useEffect data mutations',
            'Integrates with React Transition API',
            'Progressively enhances standard HTML forms'
          ]
        },
        {
          id: 'wd_3',
          category: 'TypeScript',
          difficulty: 'Intermediate',
          question: 'What is the difference between "unknown" and "any" in TypeScript?',
          answer: '"any" disables all type safety checks, allowing any property or method access. "unknown" is the type-safe counterpart; any value can be assigned to it, but you cannot perform operations on it without narrowing the type first (via typeof, instanceof, or custom type guards).',
          code: 'let val: unknown = "Hello";\n// val.toUpperCase(); // Error: Object is of type "unknown"\nif (typeof val === "string") {\n  console.log(val.toUpperCase()); // Safe!\n}',
          keyPoints: [
            'Always prefer "unknown" over "any" for uncertain inputs',
            'Requires explicit type narrowing before use'
          ]
        },
        {
          id: 'wd_4',
          category: 'CSS / Layout',
          difficulty: 'Intermediate',
          question: 'How does 3D CSS transform-style: preserve-3d enable realistic flip card mechanics?',
          answer: 'By default, nested child elements are flattened into the 2D plane of their parent. Setting `transform-style: preserve-3d` instructs the browser to retain children in 3D coordinate space, allowing opposing faces with `backface-visibility: hidden` to rotate on the Y-axis without visual clipping.',
          code: '.card-container {\n  perspective: 1000px;\n}\n.card {\n  transform-style: preserve-3d;\n  transition: transform 0.6s ease;\n}\n.card.flipped {\n  transform: rotateY(180deg);\n}',
          keyPoints: [
            'Parent needs perspective property for focal depth',
            'Faces require backface-visibility: hidden'
          ]
        }
      ]
    },
    dsa: {
      id: 'dsa',
      name: '⚡ Data Structures & Algorithms',
      cards: [
        {
          id: 'dsa_1',
          category: 'Graph Algorithms',
          difficulty: 'Advanced',
          question: 'When should you use Dijkstra’s algorithm vs A* Search vs Bellman-Ford?',
          answer: 'Dijkstra finds the single-source shortest path on graphs with non-negative weights in O((V + E) log V). A* uses an admissible heuristic h(n) to guide the search towards the goal faster. Bellman-Ford works with negative edge weights and detects negative weight cycles in O(V * E).',
          code: '// Dijkstra Priority Queue edge relaxation\nif (dist[u] + weight < dist[v]) {\n  dist[v] = dist[u] + weight;\n  pq.push({ node: v, cost: dist[v] });\n}',
          keyPoints: [
            'Dijkstra cannot handle negative cycles',
            'A* is optimal when heuristic is admissible and consistent'
          ]
        },
        {
          id: 'dsa_2',
          category: 'Dynamic Programming',
          difficulty: 'Intermediate',
          question: 'What are the two core properties required to solve a problem with Dynamic Programming?',
          answer: '1. Optimal Substructure: An optimal solution to the problem contains optimal solutions to subproblems.\n2. Overlapping Subproblems: The problem can be broken down into subproblems which are reused multiple times rather than generating new subproblems each step.',
          code: '// Memoization Fibonacci pattern\nfunction fib(n, memo = {}) {\n  if (n <= 1) return n;\n  if (n in memo) return memo[n];\n  return memo[n] = fib(n - 1, memo) + fib(n - 2, memo);\n}',
          keyPoints: [
            'Top-down with Memoization vs Bottom-up with Tabulation',
            'Space optimization can often reduce O(N) to O(1) state'
          ]
        },
        {
          id: 'dsa_3',
          category: 'Trees & Heaps',
          difficulty: 'Intermediate',
          question: 'What is a Min-Heap and what is the time complexity of insert and extractMin operations?',
          answer: 'A Min-Heap is a complete binary tree where the key at root is the minimum among all keys, and this property recursively holds for all subtrees. Insertion takes O(log N) using bubble-up/sift-up, and extractMin takes O(log N) by replacing root with last element and running sift-down.',
          code: '// Array-based Heap indexing\n// Parent(i) = Math.floor((i - 1) / 2)\n// LeftChild(i) = 2*i + 1\n// RightChild(i) = 2*i + 2',
          keyPoints: [
            'Array representation is memory compact without pointers',
            'Heapify an array of size N takes O(N) linear time'
          ]
        }
      ]
    },
    system_design: {
      id: 'system_design',
      name: '🏗️ System Design & Architecture',
      cards: [
        {
          id: 'sd_1',
          category: 'Distributed Systems',
          difficulty: 'Advanced',
          question: 'Explain the CAP Theorem and PACELC extension.',
          answer: 'The CAP theorem states that a distributed system can guarantee at most two out of: Consistency, Availability, and Partition Tolerance. In reality, network partitions (P) are unavoidable, so systems must choose CP (Consistency) or AP (Availability). PACELC extends this: If Partition (P), choose Availability (A) or Consistency (C); Else (E), choose Latency (L) or Consistency (C).',
          code: '// Example: Cassandra is AP (tunable consistency)\n// Example: PostgreSQL is CA (single node) / CP (distributed)',
          keyPoints: [
            'Network partitions are inevitable in real networks',
            'PACELC covers normal operating state latency tradeoffs'
          ]
        },
        {
          id: 'sd_2',
          category: 'Caching Strategies',
          difficulty: 'Intermediate',
          question: 'What is the difference between Cache-Aside, Write-Through, and Write-Behind (Write-Back)?',
          answer: 'Cache-Aside: The application reads from cache; on miss, reads DB, updates cache, and returns. Write-Through: App writes to cache, and cache synchronously writes to DB before confirming. Write-Behind: App writes to cache, and cache asynchronously flushes batch writes to DB in background.',
          code: '// Cache-Aside Flow\nlet data = cache.get(key);\nif (!data) {\n  data = db.query(key);\n  cache.set(key, data, ttl);\n}\nreturn data;',
          keyPoints: [
            'Cache-Aside is resilient to cache failure',
            'Write-Behind provides fastest write latency but risk of data loss on crash'
          ]
        }
      ]
    },
    ai_ml: {
      id: 'ai_ml',
      name: '🤖 AI & Machine Learning Foundations',
      cards: [
        {
          id: 'ai_1',
          category: 'Transformers',
          difficulty: 'Advanced',
          question: 'How does Scaled Dot-Product Attention compute token weights in Transformers?',
          answer: 'Attention takes Queries (Q), Keys (K), and Values (V). It calculates dot products of Q with all K, divides each by sqrt(d_k) to prevent vanishing gradients in softmax, applies softmax to obtain weights, and multiplies by V: Attention(Q, K, V) = softmax(Q * K^T / sqrt(d_k)) * V.',
          code: '// Matrix Attention Formula\n// Attention(Q, K, V) = softmax((Q @ K.T) / sqrt(d_k)) @ V',
          keyPoints: [
            'Scaled factor sqrt(d_k) keeps dot-product magnitudes stable',
            'Multi-Head Attention enables model to focus on diverse representations'
          ]
        },
        {
          id: 'ai_2',
          category: 'RAG & Vectors',
          difficulty: 'Intermediate',
          question: 'What is Retrieval-Augmented Generation (RAG) and why is Cosine Similarity preferred for dense embeddings?',
          answer: 'RAG supplements LLMs by retrieving relevant documents from a vector store at query time to inject fresh, domain-specific context into prompts. Cosine similarity measures the cosine of angle between two vectors, effectively comparing semantic direction regardless of text length or vector magnitude.',
          code: '// Cosine Similarity formula\n// cos(θ) = (A • B) / (||A|| * ||B||)',
          keyPoints: [
            'Mitigates LLM hallucinations and outdated knowledge',
            'Embedding vectors represent semantic meaning in continuous space'
          ]
        }
      ]
    }
  };

  // --- APP STATE ---
  const state = {
    decks: {},
    currentDeckId: 'web_dev',
    currentCardIndex: 0,
    isFlipped: false,
    soundEnabled: true,
    theme: 'neon',
    stats: {
      streak: 0,
      masteredIds: new Set(),
      needsReviewIds: new Set()
    }
  };

  // --- AUDIO SYNTHESIZER (Web Audio API) ---
  const audioCtx = (function () {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      return new AudioContext();
    } catch (e) {
      return null;
    }
  })();

  function playSound(type) {
    if (!state.soundEnabled || !audioCtx) return;
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    try {
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === 'flip') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(160, now + 0.08);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      } else if (type === 'success') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      } else if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      }
    } catch (e) {
      console.warn('Audio playback error', e);
    }
  }

  // --- LOCAL STORAGE PERSISTENCE ---
  const STORAGE_KEY = 'flipcard_studio_state_v1';

  function loadSavedState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        state.decks = parsed.decks || DEFAULT_DECKS;
        state.currentDeckId = parsed.currentDeckId || 'web_dev';
        state.theme = parsed.theme || 'neon';
        state.soundEnabled = parsed.soundEnabled ?? true;
        if (parsed.stats) {
          state.stats.streak = parsed.stats.streak || 0;
          state.stats.masteredIds = new Set(parsed.stats.masteredIds || []);
          state.stats.needsReviewIds = new Set(parsed.stats.needsReviewIds || []);
        }
      } else {
        state.decks = JSON.parse(JSON.stringify(DEFAULT_DECKS));
      }
    } catch (e) {
      console.error('Error loading stored state:', e);
      state.decks = JSON.parse(JSON.stringify(DEFAULT_DECKS));
    }
  }

  function saveCurrentState() {
    try {
      const serializable = {
        decks: state.decks,
        currentDeckId: state.currentDeckId,
        theme: state.theme,
        soundEnabled: state.soundEnabled,
        stats: {
          streak: state.stats.streak,
          masteredIds: Array.from(state.stats.masteredIds),
          needsReviewIds: Array.from(state.stats.needsReviewIds)
        }
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(serializable));
    } catch (e) {
      console.error('Error saving state:', e);
    }
  }

  // --- DOM ELEMENTS ---
  const DOM = {
    body: document.body,
    themeSelect: document.getElementById('themeSelect'),
    deckSelect: document.getElementById('deckSelect'),
    soundToggleBtn: document.getElementById('soundToggleBtn'),
    soundIconOn: document.getElementById('soundIconOn'),
    soundIconOff: document.getElementById('soundIconOff'),
    
    // Stats Ribbon
    deckProgressBar: document.getElementById('deckProgressBar'),
    progressPercent: document.getElementById('progressPercent'),
    cardCounter: document.getElementById('cardCounter'),
    streakCounter: document.getElementById('streakCounter'),
    masteredCount: document.getElementById('masteredCount'),
    
    // View Toggles
    studyModeBtn: document.getElementById('studyModeBtn'),
    gridModeBtn: document.getElementById('gridModeBtn'),
    studyView: document.getElementById('studyView'),
    gridView: document.getElementById('gridView'),
    
    // 3D Card
    cardStage: document.getElementById('cardStage'),
    flipCard: document.getElementById('flipCard'),
    cardCategoryTag: document.getElementById('cardCategoryTag'),
    cardDifficultyTag: document.getElementById('cardDifficultyTag'),
    cardStatusBadge: document.getElementById('cardStatusBadge'),
    cardQuestion: document.getElementById('cardQuestion'),
    cardAnswer: document.getElementById('cardAnswer'),
    cardCodeBlockFront: document.getElementById('cardCodeBlockFront'),
    cardCodeFront: document.getElementById('cardCodeFront'),
    cardCodeBlockBack: document.getElementById('cardCodeBlockBack'),
    cardCodeBack: document.getElementById('cardCodeBack'),
    cardKeyPoints: document.getElementById('cardKeyPoints'),
    keyPointsList: document.getElementById('keyPointsList'),
    currentDeckLabel: document.getElementById('currentDeckLabel'),
    flipBtnText: document.getElementById('flipBtnText'),
    
    // Navigation / Controls
    flipActionBtn: document.getElementById('flipActionBtn'),
    prevCardBtn: document.getElementById('prevCardBtn'),
    nextCardBtn: document.getElementById('nextCardBtn'),
    shuffleDeckBtn: document.getElementById('shuffleDeckBtn'),
    resetDeckBtn: document.getElementById('resetDeckBtn'),
    
    // Rating Buttons
    rateHardBtn: document.getElementById('rateHardBtn'),
    rateGoodBtn: document.getElementById('rateGoodBtn'),
    rateEasyBtn: document.getElementById('rateEasyBtn'),
    
    // Grid Elements
    cardsGridContainer: document.getElementById('cardsGridContainer'),
    gridSearchInput: document.getElementById('gridSearchInput'),
    exportDeckBtn: document.getElementById('exportDeckBtn'),
    importDeckInput: document.getElementById('importDeckInput'),
    
    // Modals
    addCardModalBtn: document.getElementById('addCardModalBtn'),
    cardModal: document.getElementById('cardModal'),
    cardForm: document.getElementById('cardForm'),
    closeModalBtn: document.getElementById('closeModalBtn'),
    cancelModalBtn: document.getElementById('cancelModalBtn'),
    newCardDeck: document.getElementById('newCardDeck'),
    newCardCategory: document.getElementById('newCardCategory'),
    newCardDifficulty: document.getElementById('newCardDifficulty'),
    newCardQuestion: document.getElementById('newCardQuestion'),
    newCardAnswer: document.getElementById('newCardAnswer'),
    newCardCode: document.getElementById('newCardCode'),
    
    // Shortcuts Modal
    keyboardHelpBtn: document.getElementById('keyboardHelpBtn'),
    shortcutsModal: document.getElementById('shortcutsModal'),
    closeShortcutsBtn: document.getElementById('closeShortcutsBtn')
  };

  // --- INITIALIZATION ---
  function init() {
    loadSavedState();
    applyTheme(state.theme);
    updateSoundUI();
    populateDeckSelectors();
    renderActiveCard();
    updateStatsUI();
    bindEvents();
  }

  // --- THEME HANDLING ---
  function applyTheme(themeName) {
    state.theme = themeName;
    DOM.body.setAttribute('data-theme', themeName);
    if (DOM.themeSelect) {
      DOM.themeSelect.value = themeName;
    }
    saveCurrentState();
  }

  // --- SOUND TOGGLE ---
  function updateSoundUI() {
    if (state.soundEnabled) {
      DOM.soundIconOn.classList.remove('hidden');
      DOM.soundIconOff.classList.add('hidden');
    } else {
      DOM.soundIconOn.classList.add('hidden');
      DOM.soundIconOff.classList.remove('hidden');
    }
  }

  // --- DECK MANAGEMENT ---
  function getCurrentDeck() {
    return state.decks[state.currentDeckId] || state.decks[Object.keys(state.decks)[0]];
  }

  function populateDeckSelectors() {
    DOM.deckSelect.innerHTML = '';
    DOM.newCardDeck.innerHTML = '';

    Object.values(state.decks).forEach(deck => {
      const opt1 = document.createElement('option');
      opt1.value = deck.id;
      opt1.textContent = `${deck.name} (${deck.cards.length})`;
      if (deck.id === state.currentDeckId) opt1.selected = true;
      DOM.deckSelect.appendChild(opt1);

      const opt2 = document.createElement('option');
      opt2.value = deck.id;
      opt2.textContent = deck.name;
      if (deck.id === state.currentDeckId) opt2.selected = true;
      DOM.newCardDeck.appendChild(opt2);
    });
  }

  // --- RENDER CURRENT CARD ---
  function renderActiveCard() {
    const deck = getCurrentDeck();
    if (!deck || !deck.cards.length) {
      DOM.cardQuestion.textContent = 'This deck is currently empty.';
      DOM.cardAnswer.textContent = 'Click "+ New Card" to add cards to this deck.';
      DOM.cardCounter.textContent = '0 / 0';
      DOM.flipCard.classList.remove('is-flipped');
      state.isFlipped = false;
      return;
    }

    // Safety index boundary check
    if (state.currentCardIndex >= deck.cards.length) {
      state.currentCardIndex = 0;
    }
    if (state.currentCardIndex < 0) {
      state.currentCardIndex = deck.cards.length - 1;
    }

    const card = deck.cards[state.currentCardIndex];

    // Reset flip state on new card navigation
    DOM.flipCard.classList.remove('is-flipped');
    state.isFlipped = false;
    DOM.flipBtnText.textContent = 'Flip Card';

    // Metadata
    DOM.cardCategoryTag.textContent = card.category || 'General';
    DOM.cardDifficultyTag.textContent = card.difficulty || 'Medium';
    DOM.currentDeckLabel.textContent = deck.name;

    // Status Badge
    DOM.cardStatusBadge.className = 'tag tag-status';
    if (state.stats.masteredIds.has(card.id)) {
      DOM.cardStatusBadge.textContent = 'Mastered ⭐';
      DOM.cardStatusBadge.classList.add('status-mastered');
    } else if (state.stats.needsReviewIds.has(card.id)) {
      DOM.cardStatusBadge.textContent = 'Needs Review 🔄';
      DOM.cardStatusBadge.classList.add('status-review');
    } else {
      DOM.cardStatusBadge.textContent = 'Unreviewed';
    }

    // Question / Front
    DOM.cardQuestion.textContent = card.question;

    // Answer / Back
    DOM.cardAnswer.textContent = card.answer;

    // Optional Code Block
    if (card.code && card.code.trim()) {
      DOM.cardCodeBlockBack.classList.remove('hidden');
      DOM.cardCodeBack.textContent = card.code;
    } else {
      DOM.cardCodeBlockBack.classList.add('hidden');
      DOM.cardCodeBack.textContent = '';
    }

    // Optional Key Points
    if (card.keyPoints && card.keyPoints.length) {
      DOM.cardKeyPoints.classList.remove('hidden');
      DOM.keyPointsList.innerHTML = '';
      card.keyPoints.forEach(pt => {
        const li = document.createElement('li');
        li.textContent = pt;
        DOM.keyPointsList.appendChild(li);
      });
    } else {
      DOM.cardKeyPoints.classList.add('hidden');
    }

    // Counter & Progress
    const total = deck.cards.length;
    DOM.cardCounter.textContent = `${state.currentCardIndex + 1} / ${total}`;
    const progress = Math.round(((state.currentCardIndex + 1) / total) * 100);
    DOM.deckProgressBar.style.width = `${progress}%`;
    DOM.progressPercent.textContent = `${progress}%`;
  }

  // --- FLIP CARD INTERACTION ---
  function toggleCardFlip() {
    state.isFlipped = !state.isFlipped;
    DOM.flipCard.classList.toggle('is-flipped', state.isFlipped);
    DOM.flipBtnText.textContent = state.isFlipped ? 'Show Front' : 'Flip Card';
    playSound('flip');
  }

  // --- CARD NAVIGATION ---
  function goToNextCard() {
    const deck = getCurrentDeck();
    if (!deck || !deck.cards.length) return;
    state.currentCardIndex = (state.currentCardIndex + 1) % deck.cards.length;
    renderActiveCard();
    playSound('click');
  }

  function goToPrevCard() {
    const deck = getCurrentDeck();
    if (!deck || !deck.cards.length) return;
    state.currentCardIndex = (state.currentCardIndex - 1 + deck.cards.length) % deck.cards.length;
    renderActiveCard();
    playSound('click');
  }

  // --- SPACED REPETITION RATING ---
  function rateCard(rating) {
    const deck = getCurrentDeck();
    if (!deck || !deck.cards.length) return;
    const card = deck.cards[state.currentCardIndex];

    if (rating === 'easy') {
      state.stats.masteredIds.add(card.id);
      state.stats.needsReviewIds.delete(card.id);
      state.stats.streak++;
      playSound('success');
    } else if (rating === 'good') {
      state.stats.masteredIds.delete(card.id);
      state.stats.needsReviewIds.delete(card.id);
      state.stats.streak++;
      playSound('click');
    } else if (rating === 'hard') {
      state.stats.needsReviewIds.add(card.id);
      state.stats.masteredIds.delete(card.id);
      state.stats.streak = 0;
      playSound('click');
    }

    updateStatsUI();
    saveCurrentState();
    goToNextCard();
  }

  function updateStatsUI() {
    DOM.streakCounter.textContent = state.stats.streak;
    DOM.masteredCount.textContent = state.stats.masteredIds.size;
  }

  // --- SHUFFLE DECK ---
  function shuffleCurrentDeck() {
    const deck = getCurrentDeck();
    if (!deck || deck.cards.length <= 1) return;

    for (let i = deck.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck.cards[i], deck.cards[j]] = [deck.cards[j], deck.cards[i]];
    }

    state.currentCardIndex = 0;
    renderActiveCard();
    playSound('flip');
    saveCurrentState();
  }

  // --- RESET DECK PROGRESS ---
  function resetDeckProgress() {
    const deck = getCurrentDeck();
    if (!deck) return;
    deck.cards.forEach(c => {
      state.stats.masteredIds.delete(c.id);
      state.stats.needsReviewIds.delete(c.id);
    });
    state.currentCardIndex = 0;
    state.stats.streak = 0;
    renderActiveCard();
    updateStatsUI();
    saveCurrentState();
    playSound('click');
  }

  // --- DECK GALLERY (GRID VIEW) ---
  function renderGridView() {
    const deck = getCurrentDeck();
    DOM.cardsGridContainer.innerHTML = '';
    if (!deck || !deck.cards.length) {
      DOM.cardsGridContainer.innerHTML = '<p style="color: var(--text-muted); grid-column: 1/-1;">No cards in this deck yet.</p>';
      return;
    }

    const searchQuery = (DOM.gridSearchInput.value || '').toLowerCase().trim();

    const filtered = deck.cards.filter(c => {
      if (!searchQuery) return true;
      return (
        c.question.toLowerCase().includes(searchQuery) ||
        c.answer.toLowerCase().includes(searchQuery) ||
        (c.category && c.category.toLowerCase().includes(searchQuery))
      );
    });

    if (!filtered.length) {
      DOM.cardsGridContainer.innerHTML = `<p style="color: var(--text-muted); grid-column: 1/-1;">No cards match "${searchQuery}".</p>`;
      return;
    }

    filtered.forEach((card, idx) => {
      const cardEl = document.createElement('div');
      cardEl.className = 'mini-card';
      cardEl.innerHTML = `
        <div class="mini-card-inner">
          <div class="mini-card-face mini-card-front">
            <div>
              <span class="tag tag-category">${card.category || 'General'}</span>
              <h4 class="mini-card-question">${card.question}</h4>
            </div>
            <span class="hint-flip-pill">Click to flip ↺</span>
          </div>
          <div class="mini-card-face mini-card-back">
            <div>
              <span class="tag tag-difficulty">${card.difficulty || 'Medium'}</span>
              <p class="mini-card-answer">${card.answer}</p>
            </div>
            <span class="hint-flip-pill">Click to flip ↺</span>
          </div>
        </div>
      `;

      cardEl.addEventListener('click', () => {
        cardEl.classList.toggle('is-flipped');
        playSound('flip');
      });

      DOM.cardsGridContainer.appendChild(cardEl);
    });
  }

  // --- EXPORT / IMPORT DECK ---
  function exportDeck() {
    const deck = getCurrentDeck();
    if (!deck) return;
    const blob = new Blob([JSON.stringify(deck, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${deck.id}_deck.json`;
    a.click();
    URL.revokeObjectURL(url);
    playSound('success');
  }

  function importDeck(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const imported = JSON.parse(e.target.result);
        if (!imported.id || !Array.isArray(imported.cards)) {
          alert('Invalid deck format. File must contain an id and a cards array.');
          return;
        }
        state.decks[imported.id] = imported;
        state.currentDeckId = imported.id;
        state.currentCardIndex = 0;
        populateDeckSelectors();
        renderActiveCard();
        renderGridView();
        saveCurrentState();
        playSound('success');
        alert(`Successfully imported deck "${imported.name}" with ${imported.cards.length} cards!`);
      } catch (err) {
        alert('Failed to parse JSON file.');
      }
    };
    reader.readAsText(file);
  }

  // --- MODAL HANDLING ---
  function openAddCardModal() {
    DOM.newCardDeck.value = state.currentDeckId;
    DOM.cardModal.classList.remove('hidden');
    DOM.newCardQuestion.focus();
  }

  function closeAddCardModal() {
    DOM.cardModal.classList.add('hidden');
    DOM.cardForm.reset();
  }

  function handleCreateCardSubmit(e) {
    e.preventDefault();
    const targetDeckId = DOM.newCardDeck.value;
    const deck = state.decks[targetDeckId];
    if (!deck) return;

    const newCard = {
      id: `custom_${Date.now()}`,
      category: DOM.newCardCategory.value.trim() || 'General',
      difficulty: DOM.newCardDifficulty.value,
      question: DOM.newCardQuestion.value.trim(),
      answer: DOM.newCardAnswer.value.trim(),
      code: DOM.newCardCode.value.trim() || null
    };

    deck.cards.push(newCard);
    state.currentDeckId = targetDeckId;
    state.currentCardIndex = deck.cards.length - 1;

    populateDeckSelectors();
    renderActiveCard();
    renderGridView();
    saveCurrentState();
    closeAddCardModal();
    playSound('success');
  }

  // --- KEYBOARD SHORTCUTS ---
  function bindKeyboardShortcuts() {
    window.addEventListener('keydown', e => {
      // Ignore if user is typing in form inputs or modals
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
        if (e.key === 'Escape') {
          closeAddCardModal();
          DOM.shortcutsModal.classList.add('hidden');
        }
        return;
      }

      if (e.key === 'Escape') {
        closeAddCardModal();
        DOM.shortcutsModal.classList.add('hidden');
        return;
      }

      if (e.code === 'Space' || e.key === 'Enter') {
        e.preventDefault();
        toggleCardFlip();
      } else if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'j') {
        goToNextCard();
      } else if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'k') {
        goToPrevCard();
      } else if (e.key === '1') {
        rateCard('hard');
      } else if (e.key === '2') {
        rateCard('good');
      } else if (e.key === '3') {
        rateCard('easy');
      } else if (e.key.toLowerCase() === 's') {
        shuffleCurrentDeck();
      }
    });
  }

  // --- EVENT LISTENERS ---
  function bindEvents() {
    // Flip Card Click
    DOM.flipCard.addEventListener('click', toggleCardFlip);
    DOM.flipActionBtn.addEventListener('click', toggleCardFlip);

    // Prev / Next
    DOM.prevCardBtn.addEventListener('click', goToPrevCard);
    DOM.nextCardBtn.addEventListener('click', goToNextCard);

    // Rating
    DOM.rateHardBtn.addEventListener('click', () => rateCard('hard'));
    DOM.rateGoodBtn.addEventListener('click', () => rateCard('good'));
    DOM.rateEasyBtn.addEventListener('click', () => rateCard('easy'));

    // Shuffle & Reset
    DOM.shuffleDeckBtn.addEventListener('click', shuffleCurrentDeck);
    DOM.resetDeckBtn.addEventListener('click', () => {
      if (confirm('Reset your study progress for this deck?')) {
        resetDeckProgress();
      }
    });

    // Theme Switcher
    DOM.themeSelect.addEventListener('change', e => {
      applyTheme(e.target.value);
      playSound('click');
    });

    // Sound Toggle
    DOM.soundToggleBtn.addEventListener('click', () => {
      state.soundEnabled = !state.soundEnabled;
      updateSoundUI();
      saveCurrentState();
      playSound('click');
    });

    // Deck Selector
    DOM.deckSelect.addEventListener('change', e => {
      state.currentDeckId = e.target.value;
      state.currentCardIndex = 0;
      renderActiveCard();
      renderGridView();
      saveCurrentState();
      playSound('click');
    });

    // View Mode Toggle
    DOM.studyModeBtn.addEventListener('click', () => {
      DOM.studyModeBtn.classList.add('active');
      DOM.gridModeBtn.classList.remove('active');
      DOM.studyView.classList.remove('hidden');
      DOM.gridView.classList.add('hidden');
      playSound('click');
    });

    DOM.gridModeBtn.addEventListener('click', () => {
      DOM.gridModeBtn.classList.add('active');
      DOM.studyModeBtn.classList.remove('active');
      DOM.gridView.classList.remove('hidden');
      DOM.studyView.classList.add('hidden');
      renderGridView();
      playSound('click');
    });

    DOM.gridSearchInput.addEventListener('input', renderGridView);

    // Export & Import
    DOM.exportDeckBtn.addEventListener('click', exportDeck);
    DOM.importDeckInput.addEventListener('change', importDeck);

    // Add Card Modal
    DOM.addCardModalBtn.addEventListener('click', openAddCardModal);
    DOM.closeModalBtn.addEventListener('click', closeAddCardModal);
    DOM.cancelModalBtn.addEventListener('click', closeAddCardModal);
    DOM.cardForm.addEventListener('submit', handleCreateCardSubmit);

    // Shortcuts Modal
    DOM.keyboardHelpBtn.addEventListener('click', () => {
      DOM.shortcutsModal.classList.remove('hidden');
      playSound('click');
    });
    DOM.closeShortcutsBtn.addEventListener('click', () => {
      DOM.shortcutsModal.classList.add('hidden');
    });

    // Keyboard Shortcuts
    bindKeyboardShortcuts();
  }

  // Launch when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
