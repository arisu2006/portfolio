<div align="center">

  <!-- 3D ANIMATED HERO BANNER LINKED TO VERCEL -->
  <a href="https://portfolio-lime-six-9sktsk3gk.vercel.app" target="_blank">
    <img src="./banner.svg" width="100%" alt="A Gourav 3D Portfolio Banner" />
  </a>

  <br /><br />

  <!-- BADGES ROW WITH PROMINENT VERCEL DEPLOYMENT BADGES -->
  <a href="https://portfolio-lime-six-9sktsk3gk.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/LIVE_PORTFOLIO-00F0FF?style=for-the-badge&logo=vercel&logoColor=000" alt="Live Portfolio Vercel" />
  </a>
  <a href="https://vercel.com/gourav16/portfolio" target="_blank">
    <img src="https://img.shields.io/badge/VERCEL_PROJECT-000000?style=for-the-badge&logo=vercel&logoColor=fff" alt="Vercel Dashboard" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src="https://img.shields.io/badge/REACT_19-61DAFB?style=for-the-badge&logo=react&logoColor=000" alt="React 19" />
  </a>
  <a href="https://threejs.org" target="_blank">
    <img src="https://img.shields.io/badge/THREE.JS-000000?style=for-the-badge&logo=three.js&logoColor=fff" alt="Three.js" />
  </a>
  <a href="https://vitejs.dev" target="_blank">
    <img src="https://img.shields.io/badge/VITE_8-646CFF?style=for-the-badge&logo=vite&logoColor=fff" alt="Vite 8" />
  </a>

</div>

---

### 🌐 System Architecture

```mermaid
flowchart TD
    Canvas["WebGL Three.js Canvas - Dynamic Shader Waves"]
    Core["React 19 Core Engine - State Sync and Viewport Tracker"]
    Nav["Auto-Hiding Top Bar - Hero Front Page Dynamic Lock"]
    Card["02 ABOUT Interactive 4-Tab Deck"]
    Marquee["03 SKILLS Fullscreen Marquee - 100vw Infinite Loop"]
    Footer["Calligraphy Signature - Alex Brush Script and Touch Controls"]

    Canvas --> Core
    Core --> Nav
    Core --> Card
    Core --> Marquee
    Core --> Footer
```

---

### ✨ Key Visual & Interactive Features

| Feature | Dynamic Behavior | Implementation Details |
| :--- | :--- | :--- |
| **🌌 Fast Cyan Aurora Background** | Non-blocking WebGL Shader rendering smooth fluid drifting wave motion. | Custom Three.js geometry & GPU fragment shaders |
| **🛸 Smart Header Auto-Hide** | Floating top pill bar auto-hides past hero threshold (`scrollY > 120`) & re-appears on scroll top. | React Scroll Listeners with CSS translate3d transitions |
| **🃏 Interactive 4-Tab About Card** | Switch between `01 BRIEF`, `02 EDU` (Batch 2024-2028), `03 STATS`, and `04 QUOTE` ("Stay GOATED 🐐"). | Modern corner reticle brackets `[ ]` & state deck |
| **♾️ Continuous 100vw Skills Marquee** | Full edge-to-edge infinite marquee scrolling without box clipping or side gaps. | 4x duplicated track arrays & CSS Keyframe translateX |
| **✒️ Calligraphy & Touch Interface** | Authentic script typography for signature with native touch-screen feel. | `Alex Brush` Google font & direct touch physics |

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

  <!-- ANIMATED 3D FOOTER BANNER LINKED TO VERCEL -->
  <a href="https://portfolio-lime-six-9sktsk3gk.vercel.app" target="_blank">
    <img src="./footer_banner.svg" width="100%" alt="A Gourav 3D Footer Quote Banner" />
  </a>

  <br /><br />
  <p>Built with 💙 by <b>A Gourav</b> • Deployed Live on <a href="https://portfolio-lime-six-9sktsk3gk.vercel.app" target="_blank"><b>Vercel</b></a></p>

</div>
