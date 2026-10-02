# A Gourav — 3D WebGL Portfolio & Research

<div align="center">

[![Live Demo](https://img.shields.io/badge/LIVE_DEMO-00F0FF?style=for-the-badge&logo=vercel&logoColor=000)](https://portfolio-lime-six-9sktsk3gk.vercel.app)
[![React 19](https://img.shields.io/badge/REACT_19-61DAFB?style=for-the-badge&logo=react&logoColor=000)](https://react.dev)
[![Three.js](https://img.shields.io/badge/THREE.JS-000000?style=for-the-badge&logo=three.js&logoColor=fff)](https://threejs.org)
[![Vite 8](https://img.shields.io/badge/VITE_8-646CFF?style=for-the-badge&logo=vite&logoColor=fff)](https://vitejs.dev)
[![PyTorch](https://img.shields.io/badge/PYTORCH-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=fff)](https://pytorch.org)

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

> **"Stay GOATED 🐐"** — *A Gourav*

<p>Built with 💙 by <b>A Gourav</b> • Deployed on <b>Vercel</b></p>

</div>
