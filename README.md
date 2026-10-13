# 🃏 Flipcard Studio — Interactive 3D Card & Flashcard Hub

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" alt="Version" />
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License" />
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome" />
  <img src="https://img.shields.io/badge/Built%20With-HTML5%20%7C%20CSS3%203D%20%7C%20Vanilla%20JS-blueviolet" alt="Tech Stack" />
  <img src="https://img.shields.io/badge/Author-Ritesh%20Verma-purple" alt="Author" />
</p>

An ultra-modern, production-grade **3D Flip Card & Flashcard Study Platform** engineered with native **CSS 3D Transforms (`preserve-3d`)**, **Web Audio API sound synthesis**, **Spaced Repetition retention scoring**, and a dynamic **Custom Deck Studio**.

---

## 🌟 Key Features

### 1. 🔄 True 3D CSS Flip Mechanics
- Seamless perspective (`perspective: 1400px`) and realistic physics-based card flips on Y-axis.
- Zero layout jitter with GPU-accelerated transforms (`transform-style: preserve-3d`).
- Flip via click, button trigger, or keyboard spacebar.

### 2. 🧠 Spaced Repetition Study Engine
- **Three-tier retention rating**:
  - 🔄 **Needs Review** (Resets streak, flags card for revision)
  - 👍 **Understood** (Progresses retention counter)
  - ⭐ **Mastered** (Increments mastery milestones)
- Dynamic progress bar, real-time mastery counter, and active streak tracker.

### 3. 🎨 5 Designer Theme Presets
Switch visual styles on the fly with custom CSS variable color matrices:
- ⚡ **Cyber Neon** (Indigo & Cyan high-contrast glow)
- 🌌 **Aurora Borealis** (Emerald, Teal & Deep Arctic blue)
- 🖤 **Obsidian Luxe** (Amethyst & Fuchsia dark glass)
- 🌅 **Sunset Gradient** (Warm Orange, Coral & Magenta)
- 💎 **Emerald Matrix** (Deep jade with mint accents)

### 4. 📚 Built-in High-Yield Curated Decks
- **🌐 Full Stack Web Development**: Event Loop, React 19 Actions, TypeScript narrowing, 3D CSS mechanics.
- **⚡ Data Structures & Algorithms**: Dijkstra / A*, Dynamic Programming principles, Min-Heap indexing.
- **🏗️ System Design & Architecture**: CAP Theorem & PACELC, Caching patterns (Cache-Aside, Write-Back).
- **🤖 AI & Machine Learning Foundations**: Transformer Scaled Dot-Product Attention, RAG & Vector Embeddings.

### 5. 🛠️ Custom Deck & Card Creator
- Create custom cards with questions, answers, and optional syntax-highlighted code snippets.
- Real-time deck filtering and live search in the **Deck Gallery**.
- **JSON Import / Export** for backing up and sharing study decks.

### 6. 🔊 Web Audio API Sound Effects
- Synthesized audio feedback (no heavy external mp3 audio files required).
- Tactile flip clicks, success chimes, and streak triggers with one-click mute toggle.

### 7. ⌨️ Full Keyboard Navigation
| Key | Action |
| --- | --- |
| <kbd>Space</kbd> / <kbd>Enter</kbd> | Flip Active Card |
| <kbd>→</kbd> / <kbd>J</kbd> | Next Card |
| <kbd>←</kbd> / <kbd>K</kbd> | Previous Card |
| <kbd>1</kbd> | Rate: Needs Review |
| <kbd>2</kbd> | Rate: Understood |
| <kbd>3</kbd> | Rate: Mastered |
| <kbd>S</kbd> | Shuffle Deck |
| <kbd>Esc</kbd> | Close Modals |

---

## 💻 Technology Stack

- **Core Structure**: Semantic HTML5 with accessible landmarks & ARIA labels
- **Visual Styling**: Pure Vanilla CSS3 (Custom Properties, Glassmorphism, 3D Transforms, Responsive Flex/Grid)
- **Application Logic**: Vanilla Modern JavaScript (ES6+ Modules, Web Audio API, LocalStorage API)
- **Typography**: Google Fonts (*Inter*, *Outfit*, *JetBrains Mono*)

---

## 🚀 Quick Start & Installation

No complex build step or heavy bundlers required. Run locally in seconds:

### Option 1: Direct Browser Launch
Simply double-click or open `index.html` in any modern web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local HTTP Server (Recommended)
```bash
# Clone the repository
git clone https://github.com/RiteshVerma1102/Flipcard.git

# Navigate into project folder
cd Flipcard

# Run using any static server (Node.js npx serve)
npx serve . -l 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
Flipcard/
├── index.html         # Main semantic HTML5 interface & 3D card stage
├── style.css          # Design system, 3D perspectives, glassmorphism & themes
├── app.js             # State manager, 3D flip engine, spaced repetition, audio synthesis
├── package.json       # Metadata & local development scripts
├── .gitignore         # Clean repository ignore configuration
└── README.md          # Comprehensive documentation
```

---

## 🔒 Security & Privacy

- Runs **100% client-side** with zero tracking or external telemetry.
- All created custom cards and study progress are securely saved inside your browser's private `localStorage`.
- Zero sensitive keys, tokens, or credentials committed.

---

## 👤 Author & Acknowledgments

- **Author**: [Ritesh Verma](https://github.com/RiteshVerma1102)
- **GitHub**: [@RiteshVerma1102](https://github.com/RiteshVerma1102)
- **Reference Project**: [Ajson Studio](https://github.com/RiteshVerma1102/ajson-studio)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
