<div align="center">

  <!-- ANIMATED GLOWING HEADER SVG -->
  <svg width="100%" height="160" viewBox="0 0 800 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <style>
      .glow-text {
        font-family: 'Space Grotesk', 'Orbitron', 'Segoe UI', sans-serif;
        font-weight: 900;
        font-size: 52px;
        fill: #ffffff;
        text-anchor: middle;
        letter-spacing: 4px;
        filter: drop-shadow(0 0 15px #00F0FF) drop-shadow(0 0 30px #0077FF);
        animation: pulse 3s infinite alternate ease-in-out;
      }
      .sub-text {
        font-family: 'JetBrains Mono', monospace;
        font-size: 16px;
        fill: #00F0FF;
        text-anchor: middle;
        letter-spacing: 6px;
        opacity: 0.9;
      }
      .cyber-line {
        stroke: url(#cyan-grad);
        stroke-width: 2;
        stroke-dasharray: 10 5;
        animation: dash 20s linear infinite;
      }
      @keyframes pulse {
        0% { filter: drop-shadow(0 0 8px #00F0FF) drop-shadow(0 0 20px #0055FF); transform: scale(0.99); }
        100% { filter: drop-shadow(0 0 25px #00F0FF) drop-shadow(0 0 50px #00F0FF); transform: scale(1.01); }
      }
      @keyframes dash {
        to { stroke-dashoffset: -1000; }
      }
    </style>
    <defs>
      <linearGradient id="cyan-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#00F0FF" stop-opacity="0.1" />
        <stop offset="50%" stop-color="#00F0FF" stop-opacity="1" />
        <stop offset="100%" stop-color="#0077FF" stop-opacity="0.1" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" rx="16" fill="#050811" />
    <line x1="20" y1="20" x2="780" y2="20" class="cyber-line" />
    <text x="400" y="88" class="glow-text">A GOURAV</text>
    <text x="400" y="128" class="sub-text">⚡ 3D WEBGL PORTFOLIO & EDGE AI RESEARCH ⚡</text>
    <line x1="20" y1="145" x2="780" y2="145" class="cyber-line" />
  </svg>

  <br />

  <!-- BADGES ROW -->
  <p align="center">
    <a href="https://portfolio-lime-six-9sktsk3gk.vercel.app">
      <img src="https://img.shields.io/badge/LIVE_DEMO-00F0FF?style=for-the-badge&logo=vercel&logoColor=000&labelColor=fff" alt="Live Demo" />
    </a>
    <a href="https://react.dev">
      <img src="https://img.shields.io/badge/REACT_19-61DAFB?style=for-the-badge&logo=react&logoColor=000" alt="React 19" />
    </a>
    <a href="https://threejs.org">
      <img src="https://img.shields.io/badge/THREE.JS-000000?style=for-the-badge&logo=three.js&logoColor=fff" alt="Three.js" />
    </a>
    <a href="https://vitejs.dev">
      <img src="https://img.shields.io/badge/VITE_8-646CFF?style=for-the-badge&logo=vite&logoColor=fff" alt="Vite 8" />
    </a>
    <a href="https://pytorch.org">
      <img src="https://img.shields.io/badge/PYTORCH-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=fff" alt="PyTorch" />
    </a>
  </p>

</div>

---

### 🌐 3D Aurora Experience Architecture

```mermaid
flowchart TD
    %% Styling
    classDef webgl fill:#050B18,stroke:#00F0FF,stroke-width:2px,color:#00F0FF
    classDef react fill:#091224,stroke:#0077FF,stroke-width:2px,color:#FFFFFF
    classDef fx fill:#0A1B2A,stroke:#38BDF8,stroke-width:2px,color:#E0F2FE

    %% Nodes
    Canvas["🌌 WebGL Three.js Canvas<br/>(Dynamic Shader Waves)"] ::: webgl
    Core["⚡ React 19 Core Engine<br/>(State Sync & Viewport Tracker)"] ::: react
    Nav["🛸 Auto-Hiding Top Bar<br/>(Hero Front Page Dynamic Lock)"] ::: fx
    Card["🃏 02 ABOUT Interactive 4-Tab Deck<br/>([01 BRIEF] [02 EDU] [03 STATS] [04 QUOTE])"] ::: fx
    Marquee["♾️ 03 SKILLS Fullscreen Marquee<br/>(100vw Gapless Infinite Loop)"] ::: fx
    Footer["✒️ Calligraphy Signature<br/>(Alex Brush Script & Touch Interaction)"] ::: fx

    %% Edges
    Canvas --> Core
    Core --> Nav
    Core --> Card
    Core --> Marquee
    Core --> Footer
```

---

<div align="center">

### ✨ 3D Visual Highlights

| Feature | Dynamic 3D Behavior | Implementation Details |
| :--- | :--- | :--- |
| **🌌 Fast Cyan Aurora Background** | Non-blocking WebGL Shader rendering smooth fluid drifting wave motion. | Custom Three.js geometry & GPU fragment shaders |
| **🛸 Smart Header Auto-Hide** | Floating top pill bar auto-hides past hero threshold (`scrollY > 120`) & re-appears on scroll top. | React Scroll Listeners with CSS translate3d transitions |
| **🃏 Interactive 4-Tab About Card** | Switch between `01 BRIEF`, `02 EDU` (Batch 2024-2028), `03 STATS`, and `04 QUOTE` ("Stay GOATED 🐐"). | Modern corner reticle brackets `[ ]` & state deck |
| **♾️ Continuous 100vw Skills Marquee** | Full edge-to-edge infinite marquee scrolling without box clipping or side gaps. | 4x duplicated track arrays & CSS Keyframe translateX |
| **✒️ Calligraphy & Touch Interface** | Authentic script typography for signature with native touch-screen feel. | `Alex Brush` Google font & direct touch physics |

</div>

---

### 🛠️ Quick Start

```bash
# 1. Clone Repository
git clone https://github.com/arisu2006/portfolio.git

# 2. Install Dependencies
npm install

# 3. Launch Local Dev Server
npm run dev

# 4. Build for Production
npm run build
```

---

<div align="center">

  <svg width="100%" height="80" viewBox="0 0 800 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" rx="12" fill="#050811" />
    <text x="400" y="48" font-family="'JetBrains Mono', monospace" font-size="18" fill="#00F0FF" text-anchor="middle" letter-spacing="3">
      "Stay GOATED 🐐" — A Gourav
    </text>
  </svg>

  <br />
  <p>Built with 💙 by <b>A Gourav</b> • Deployed on <b>Vercel</b></p>
</div>
