
import React, { useState, useEffect } from 'react';
import { ASSETS } from './assetsData';
import ThreeBackground from './ThreeBackground';
import { 
  User, Cpu, Briefcase, FolderGit2, HelpCircle, BookOpen, Award, Activity, Mail, Terminal, Download, Brain, Layers, Radio, FileText
} from 'lucide-react';

export default function App() {
  const [showSideNav, setShowSideNav] = useState(false);
  const [showTopPill, setShowTopPill] = useState(true);
  const [activeSection, setActiveSection] = useState('top');
  const [aboutTab, setAboutTab] = useState('brief');
  const [cliOpen, setCliOpen] = useState(false);
  const [cliLogs, setCliLogs] = useState([
    "Welcome to Gourav System Console.",
    "Type 'help' for available commands."
  ]);
  const [cliInputVal, setCliInputVal] = useState('');
  const [openNote, setOpenNote] = useState(null);

  // Active section scroll tracker & top pill visibility (ONLY show top pill on hero front page)
  useEffect(() => {
    const handleScroll = () => {
      // Top header pill bar disappears when scrolling past hero front page (window.scrollY > 120)
      if (window.scrollY < 120) {
        setShowTopPill(true);
      } else {
        setShowTopPill(false);
        setShowSideNav(false);
      }

      const sections = ['about', 'skills', 'experience', 'work', 'questions', 'notes', 'certifications', 'log', 'resume', 'contact'];
      let current = 'top';
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 200;
          if (window.scrollY >= top) current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const downloadResume = () => {
    const pdfB64 = ASSETS.pdfB64;
    if (!pdfB64) return;
    const byteChars = atob(pdfB64);
    const byteArray = new Uint8Array(byteChars.length);
    for (let i = 0; i < byteChars.length; i++) byteArray[i] = byteChars.charCodeAt(i);
    const blob = new Blob([byteArray], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'GOURAV_RESUME.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // CLI Command Execution
  const handleCliSubmit = (e) => {
    if (e.key === 'Enter') {
      const cmd = cliInputVal.trim().toLowerCase();
      setCliInputVal('');
      if (!cmd) return;

      let response = "";
      if (cmd === 'help') response = "Available: bio, projects, skills, awards, questions, clear";
      else if (cmd === 'bio') response = "A Gourav — CS Engineer fusing AI/ML with edge hardware & biosignals.";
      else if (cmd === 'projects') response = "001.PhysioShift | 002.Confaxis | 003.Vis-Anchor | 004.LakeGuard AI | 005.PhaseSAR-Net";
      else if (cmd === 'skills') response = "PyTorch, Python, Scikit-Learn, OpenCV, RAG, ESP32, Docker, FastAPI";
      else if (cmd === 'awards') response = "4th Place, KSRSAC State Award (₹15,000 out of 147 teams with LakeGuard AI)";
      else if (cmd === 'questions') response = "RQ-001: Can physiological model learn signal without device?";
      else if (cmd === 'clear') { setCliLogs([]); return; }
      else response = `Unknown command: '${cmd}'`;

      setCliLogs((prev) => [...prev, `> ${cmd}`, response]);
    }
  };

  return (
    <div>
      {/* 3D WebGL Background Canvas */}
      <ThreeBackground />

      {/* FLOATING SIDE NAV DOCK (ONLY SHOWN WHEN USER CLICKS MENU ☰ ON HERO/HEADER) */}
      <nav className={`side-nav-dock ${!showSideNav ? 'hidden' : ''}`}>
        <a href="#about" onClick={() => setShowSideNav(false)} className={`side-tab-btn ${activeSection === 'about' ? 'active' : ''}`}>
          <User size={16} /> <span>About</span>
        </a>
        <a href="#skills" onClick={() => setShowSideNav(false)} className={`side-tab-btn ${activeSection === 'skills' ? 'active' : ''}`}>
          <Cpu size={16} /> <span>Skills</span>
        </a>
        <a href="#experience" onClick={() => setShowSideNav(false)} className={`side-tab-btn ${activeSection === 'experience' ? 'active' : ''}`}>
          <Briefcase size={16} /> <span>Experience</span>
        </a>
        <a href="#work" onClick={() => setShowSideNav(false)} className={`side-tab-btn ${activeSection === 'work' ? 'active' : ''}`}>
          <FolderGit2 size={16} /> <span>Work</span>
        </a>
        <a href="#questions" onClick={() => setShowSideNav(false)} className={`side-tab-btn ${activeSection === 'questions' ? 'active' : ''}`}>
          <HelpCircle size={16} /> <span>Research</span>
        </a>
        <a href="#log" onClick={() => setShowSideNav(false)} className={`side-tab-btn ${activeSection === 'log' ? 'active' : ''}`}>
          <BookOpen size={16} /> <span>System Log</span>
        </a>
        <a href="#certifications" onClick={() => setShowSideNav(false)} className={`side-tab-btn ${activeSection === 'certifications' ? 'active' : ''}`}>
          <Award size={16} /> <span>Certs</span>
        </a>
        <a href="#contact" onClick={() => setShowSideNav(false)} className={`side-tab-btn ${activeSection === 'contact' ? 'active' : ''}`}>
          <Mail size={16} /> <span>Contact</span>
        </a>
      </nav>

      {/* TOP FLOATING HEADER PILL BAR (ONLY SHOWN ON FIRST PAGE HERO, DISAPPEARS ON SCROLL DOWN MATCHING REQUEST) */}
      <header className={`top-pill-bar ${!showTopPill ? 'hidden-header' : ''}`}>
        <div className="top-pill-left">
          <img src={ASSETS.aboutProfileImg} alt="A Gourav" className="top-pill-avatar" />
          <span className="top-pill-name">A Gourav.</span>
        </div>
        <button className="top-pill-menu" onClick={() => setShowSideNav(!showSideNav)}>
          Menu ☰
        </button>
      </header>

      {/* MAIN PORTFOLIO SECTIONS */}
      <div className="wrap">
        {/* FRONT PAGE HERO */}
        <section id="top" className="hero-front-page">
          <h1 className="hero-name-animated">A Gourav</h1>
          <div className="hero-sublinks">
            <a href="#contact" className="hero-sublink-item">Contact Me</a>
            <span className="hero-sublink-sep">|</span>
            <button onClick={downloadResume} className="hero-sublink-item btn-link">View Resume ↗</button>
          </div>
        </section>

        {/* 02 ABOUT (INTERACTIVE 4-TAB CARD MATCHING media_1790910366631.png & media_1790910366633.png) */}
        <section id="about">
          <div className="section-title-wrap">
            <span className="section-big-num">02</span>
            <h2 className="section-heading">ABOUT</h2>
          </div>

          <div className="about-split-container">
            {/* LEFT INTERACTIVE CARD */}
            <div className="about-interactive-card">
              {/* TOP INDEX COUNTER INDICATOR */}
              <div className="about-card-top-bar">
                <span className="about-card-kicker">
                  {aboutTab === 'brief' && '// PERSONAL BRIEF'}
                  {aboutTab === 'edu' && '// EDUCATION & BACKGROUND'}
                  {aboutTab === 'stats' && '// KEY HIGHLIGHTS & STATS'}
                  {aboutTab === 'quote' && '// CORE PHILOSOPHY'}
                </span>
                <span className="about-card-counter">
                  {aboutTab === 'brief' && '01 / 04'}
                  {aboutTab === 'edu' && '02 / 04'}
                  {aboutTab === 'stats' && '03 / 04'}
                  {aboutTab === 'quote' && '04 / 04'}
                </span>
              </div>

              <div className="about-card-divider" />

              {/* TAB CONTENT AREA */}
              <div className="about-card-body">
                {aboutTab === 'brief' && (
                  <p className="about-tab-text">
                    "I build things, break things, and occasionally fix things that weren't broken in the first place. Somewhere between bad ideas and too much curiosity, good software tends to happen."
                  </p>
                )}

                {aboutTab === 'edu' && (
                  <div>
                    <h3 className="about-edu-title">Bachelor of Engineering — Computer Science</h3>
                    <p className="about-edu-subtitle">Computer Science and Engineering</p>
                    <div className="about-edu-badge-row">
                      <span className="about-edu-badge">Batch: 2024 - 2028</span>
                      <span className="about-edu-sep">•</span>
                      <span className="about-edu-location">Bengaluru, Karnataka</span>
                    </div>
                  </div>
                )}

                {aboutTab === 'stats' && (
                  <div className="about-stats-grid">
                    <div className="about-stat-item">
                      <span className="about-stat-num">05+</span>
                      <span className="about-stat-label">Production & Research Projects</span>
                    </div>
                    <div className="about-stat-item">
                      <span className="about-stat-num">4th</span>
                      <span className="about-stat-label">KSRSAC State Exhibition (out of 147 teams)</span>
                    </div>
                    <div className="about-stat-item">
                      <span className="about-stat-num">Infosys</span>
                      <span className="about-stat-label">SupportPilot RAG AI Intern (2026)</span>
                    </div>
                    <div className="about-stat-item">
                      <span className="about-stat-num">PyTorch</span>
                      <span className="about-stat-label">Edge AI & Biosignal ML Research</span>
                    </div>
                  </div>
                )}

                {aboutTab === 'quote' && (
                  <div>
                    <h2 className="about-goated-quote">"Stay GOATED 🐐"</h2>
                    <div className="about-quote-author">— A Gourav</div>
                  </div>
                )}
              </div>

              {/* BOTTOM 4 TAB NAVIGATION BUTTONS */}
              <div className="about-card-nav-row">
                <button
                  className={`about-nav-btn ${aboutTab === 'brief' ? 'active' : ''}`}
                  onClick={() => setAboutTab('brief')}
                >
                  01 BRIEF
                </button>
                <button
                  className={`about-nav-btn ${aboutTab === 'edu' ? 'active' : ''}`}
                  onClick={() => setAboutTab('edu')}
                >
                  02 EDU
                </button>
                <button
                  className={`about-nav-btn ${aboutTab === 'stats' ? 'active' : ''}`}
                  onClick={() => setAboutTab('stats')}
                >
                  03 STATS
                </button>
                <button
                  className={`about-nav-btn ${aboutTab === 'quote' ? 'active' : ''}`}
                  onClick={() => setAboutTab('quote')}
                >
                  04 QUOTE
                </button>
              </div>
            </div>

            {/* RIGHT PHOTO CARD WITH CORNER RETICLE BRACKETS */}
            <div className="about-photo-wrapper">
              <div className="photo-reticle reticle-tl">┌</div>
              <div className="photo-reticle reticle-tr">┐</div>
              <div className="photo-reticle reticle-bl">└</div>
              <div className="photo-reticle reticle-br">┘</div>
              <img src={ASSETS.aboutProfileImg} alt="A Gourav" className="about-photo-img" />
            </div>
          </div>
        </section>

        {/* 03 SKILLS (TRUE 100VW FULLSCREEN BREAKOUT SECTION MATCHING media_1790876991069.png) */}
        <section id="skills" className="skills-fullscreen-section">
          <div className="skills-header-wrap">
            <div className="section-title-wrap section-title-right">
              <span className="section-big-num">03</span>
              <h2 className="section-heading">SKILLS</h2>
            </div>
          </div>

          <div className="skills-marquee-fullwidth">
            {/* ROW 1 */}
            <div className="marquee-track track-left">
              {[
                'MongoDB', 'PostgreSQL', 'MySQL', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Python',
                'MongoDB', 'PostgreSQL', 'MySQL', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Python',
                'MongoDB', 'PostgreSQL', 'MySQL', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Python',
                'MongoDB', 'PostgreSQL', 'MySQL', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Python'
              ].map((s, idx) => (
                <div key={idx} className="marquee-skill-pill"><Cpu size={16} color="var(--cyan)" /> <span>{s}</span></div>
              ))}
            </div>
            {/* ROW 2 */}
            <div className="marquee-track track-right">
              {[
                'Tailwind CSS', 'Node.js', 'Angular', 'Django', 'FastAPI', 'React', 'Next.js', 'Express.js',
                'Tailwind CSS', 'Node.js', 'Angular', 'Django', 'FastAPI', 'React', 'Next.js', 'Express.js',
                'Tailwind CSS', 'Node.js', 'Angular', 'Django', 'FastAPI', 'React', 'Next.js', 'Express.js',
                'Tailwind CSS', 'Node.js', 'Angular', 'Django', 'FastAPI', 'React', 'Next.js', 'Express.js'
              ].map((s, idx) => (
                <div key={idx} className="marquee-skill-pill"><Layers size={16} color="var(--blue)" /> <span>{s}</span></div>
              ))}
            </div>
            {/* ROW 3 */}
            <div className="marquee-track track-left">
              {[
                'Gemini', 'ChromaDB', 'Vector Embeddings', 'PyTorch', 'LangChain', 'Ollama', 'Groq / VAPI',
                'Gemini', 'ChromaDB', 'Vector Embeddings', 'PyTorch', 'LangChain', 'Ollama', 'Groq / VAPI',
                'Gemini', 'ChromaDB', 'Vector Embeddings', 'PyTorch', 'LangChain', 'Ollama', 'Groq / VAPI',
                'Gemini', 'ChromaDB', 'Vector Embeddings', 'PyTorch', 'LangChain', 'Ollama', 'Groq / VAPI'
              ].map((s, idx) => (
                <div key={idx} className="marquee-skill-pill"><Brain size={16} color="var(--violet)" /> <span>{s}</span></div>
              ))}
            </div>
            {/* ROW 4 */}
            <div className="marquee-track track-right">
              {[
                'Postman', 'Supabase', 'AWS', 'Git', 'GitHub', 'Docker', 'ESP32', '3D Drone',
                'Postman', 'Supabase', 'AWS', 'Git', 'GitHub', 'Docker', 'ESP32', '3D Drone',
                'Postman', 'Supabase', 'AWS', 'Git', 'GitHub', 'Docker', 'ESP32', '3D Drone',
                'Postman', 'Supabase', 'AWS', 'Git', 'GitHub', 'Docker', 'ESP32', '3D Drone'
              ].map((s, idx) => (
                <div key={idx} className="marquee-skill-pill"><Radio size={16} color="var(--emerald)" /> <span>{s}</span></div>
              ))}
            </div>
          </div>
        </section>

        {/* 04 EXPERIENCE */}
        <section id="experience">
          <div className="section-title-wrap">
            <span className="section-big-num">04</span>
            <h2 className="section-heading">Experience</h2>
          </div>

          <div className="glass-panel">
            <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.4rem' }}>SUPPORTPILOT RAG · IT Support Automation</h3>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.85rem', color: 'var(--cyan)', marginBottom: '1rem' }}>Infosys Intern · 2026</div>
            <p style={{ color: 'var(--ink-dim)', lineHeight: '1.7', fontSize: '1rem' }}>
              RAG-powered ticket resolution system using TF-IDF and semantic embeddings. Implements ticket analysis, enterprise knowledge retrieval, context augmentation, and automated troubleshooting generation — with a confidence threshold and citation engine for IT support automation.
            </p>
          </div>
        </section>

        {/* 05 WORK */}
        <section id="work">
          <div className="section-title-wrap">
            <span className="section-big-num">05</span>
            <h2 className="section-heading" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700 }}>Work</h2>
          </div>

          <div className="work-grid-container">
            {/* 001 PHYSIOSHIFT */}
            <div className="work-card-large">
              <div className="work-orb-banner"><div className="work-orb orb-yellow" /></div>
              <div className="work-card-body">
                <div className="work-badge">PHYSIOSHIFT</div>
                <p className="work-text">Self-supervised representation learning for physiological time-series (ECG, PPG, GSR). Built to stay robust across sensor hardware domains — powers VitalDrift and Follicular downstream apps.</p>
                <div className="work-tags-row">
                  {['PyTorch', 'Self-Supervised', 'Time-Series', 'Edge AI'].map(t => <span key={t} className="work-tag-item">{t}</span>)}
                </div>
                <div className="work-footer"><span className="work-num">001</span><span>IN PROGRESS · TEAM</span></div>
              </div>
            </div>

            {/* 002 CONFAXIS */}
            <div className="work-card-large">
              <div className="work-orb-banner"><div className="work-orb orb-purple" /></div>
              <div className="work-card-body">
                <div className="work-badge">CONFAXIS</div>
                <p className="work-text">Mechanistic interpretability research: testing whether model overconfidence under distribution shift stems from a single causally-editable linear direction in representation space.</p>
                <div className="work-tags-row">
                  {['PyTorch', 'ResNet', 'CIFAR-100-C', 'Probing'].map(t => <span key={t} className="work-tag-item">{t}</span>)}
                </div>
                <div className="work-footer"><span className="work-num">002</span><span>SOLO RESEARCH</span></div>
              </div>
            </div>

            {/* 003 VIS-ANCHOR EDGE */}
            <div className="work-card-large">
              <div className="work-orb-banner"><div className="work-orb orb-blue" /></div>
              <div className="work-card-body">
                <div className="work-badge">VIS-ANCHOR EDGE</div>
                <p className="work-text">Robustness audit of Qwen2.5-VL-7B (full vs 4-bit) on diagnostic ECG / biosignal chart grounding. Evaluating counterfactual sensitivity and contrastive decoding mitigation.</p>
                <div className="work-tags-row">
                  {['VLM', 'Quantization', 'PhysioNet', 'Robustness'].map(t => <span key={t} className="work-tag-item">{t}</span>)}
                </div>
                <div className="work-footer"><span className="work-num">003</span><span>SOLO RESEARCH</span></div>
              </div>
            </div>

            {/* 004 LAKEGUARD AI */}
            <div className="work-card-large">
              <div className="work-orb-banner"><div className="work-orb orb-green" /></div>
              <div className="work-card-body">
                <div className="work-badge">LAKEGUARD AI</div>
                <p className="work-text">AI sentinel fusing live IoT sensor swarms with ML to catch water-quality anomalies early in Karnataka's lakes. Placed 4th of 147 teams at KSRSAC State-Level Exhibition.</p>
                <div className="work-tags-row">
                  {['React', 'FastAPI', 'ESP32', 'IoT'].map(t => <span key={t} className="work-tag-item">{t}</span>)}
                </div>
                <div className="work-footer"><span className="work-num">004</span><span>LIVE · 4TH / 147</span></div>
              </div>
            </div>

            {/* 005 PHASESAR-NET */}
            <div className="work-card-large work-card-full">
              <div className="work-orb-banner"><div className="work-orb orb-pink" /></div>
              <div className="work-card-body">
                <div className="work-badge">PHASESAR-NET</div>
                <p className="work-text">Phase-aware complex-valued neural network for SAR automatic target recognition. Preserves amplitude + phase (I/Q) instead of collapsing to magnitude-only inputs.</p>
                <div className="work-tags-row">
                  {['PyTorch', 'Complex CNN', 'SAR', 'Streamlit'].map(t => <span key={t} className="work-tag-item">{t}</span>)}
                </div>
                <div className="work-footer"><span className="work-num">005</span><span>SOLO RESEARCH</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* 06 RESEARCH QUESTIONS */}
        <section id="questions">
          <div className="section-title-wrap">
            <span className="section-big-num">06</span>
            <h2 className="section-heading">Research Questions</h2>
          </div>

          <div className="research-questions-grid">
            <div className="rq-card">
              <div className="rq-tag">RQ-001 · PhysioShift</div>
              <p className="rq-quote">"Can a physiological model learn the signal without learning the device?"</p>
            </div>

            <div className="rq-card">
              <div className="rq-tag">RQ-002 · Phase</div>
              <p className="rq-quote">"Can a SAR model preserve phase information—and still recognize a scene when the signal is corrupted?"</p>
            </div>

            <div className="rq-card">
              <div className="rq-tag">RQ-003 · Magnitude</div>
              <p className="rq-quote">"What does a model lose when it sees only SAR magnitude, but not phase?"</p>
            </div>

            <div className="rq-card">
              <div className="rq-tag">RQ-004 · Physics</div>
              <p className="rq-quote">"Can physics-aware constraints make SAR predictions more reliable than accuracy alone?"</p>
            </div>
          </div>
        </section>

        {/* 07 SYSTEM LOG (SEPARATE INDIVIDUAL CARDS WITH DESCRIPTIONS) */}
        <section id="log">
          <div className="section-title-wrap">
            <span className="section-big-num">07</span>
            <h2 className="section-heading">System Log</h2>
          </div>

          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div className="glass-panel" style={{ borderLeft: '3px solid var(--cyan)' }}>
              <span style={{ fontFamily: 'var(--mono)', color: 'var(--cyan)', fontSize: '0.8rem', display: 'block', marginBottom: '0.4rem' }}>AUGUST 2026 — PRESENT</span>
              <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '0.6rem' }}>SupportPilot · Infosys Intern</h3>
              <p style={{ color: 'var(--ink-dim)', lineHeight: '1.65', fontSize: '0.98rem' }}>
                Engineered an AI-driven support automation pipeline incorporating RAG architecture, semantic document chunking, and confidence-scored classification for automated enterprise ticketing.
              </p>
            </div>

            <div className="glass-panel" style={{ borderLeft: '3px solid var(--amber)' }}>
              <span style={{ fontFamily: 'var(--mono)', color: 'var(--amber)', fontSize: '0.8rem', display: 'block', marginBottom: '0.4rem' }}>APRIL 2026</span>
              <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '0.6rem' }}>4th Place, KSRSAC State Award (₹15,000 Prize)</h3>
              <p style={{ color: 'var(--ink-dim)', lineHeight: '1.65', fontSize: '0.98rem' }}>
                Presented LakeGuard AI water-quality monitoring IoT swarm system at Karnataka State Remote Sensing Applications Centre exhibition, securing 4th place out of 147 state teams.
              </p>
            </div>

            <div className="glass-panel" style={{ borderLeft: '3px solid var(--violet)' }}>
              <span style={{ fontFamily: 'var(--mono)', color: 'var(--violet)', fontSize: '0.8rem', display: 'block', marginBottom: '0.4rem' }}>APRIL 2026</span>
              <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '0.6rem' }}>Scaler × Meta PyTorch OpenEnv Hackathon</h3>
              <p style={{ color: 'var(--ink-dim)', lineHeight: '1.65', fontSize: '0.98rem' }}>
                Constructed physics-aware neural network constraints and computer vision benchmark evaluation workflows in PyTorch during Meta's open environment hackathon.
              </p>
            </div>
          </div>
        </section>

        {/* 08 CERTIFICATIONS */}
        <section id="certifications">
          <div className="section-title-wrap">
            <span className="section-big-num">08</span>
            <h2 className="section-heading">Certifications</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            <div className="glass-panel">
              <div style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--red)' }}>ISSUED JAN 2026</div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', margin: '0.4rem 0' }}>Oracle AI Foundations Associate</h3>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--ink-dimmer)' }}>Credential ID: 3249309880CI25AICFA</p>
            </div>

            <div className="glass-panel">
              <div style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--red)' }}>ISSUED JAN 2026</div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', margin: '0.4rem 0' }}>GeeksForGeeks SkillUp Program</h3>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--ink-dimmer)' }}>Python, Data Analytics, AI Tools & Git</p>
            </div>

            <div className="glass-panel">
              <div style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--emerald)' }}>HARDWARE</div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', margin: '0.4rem 0' }}>3D Drone Making Certification</h3>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--ink-dimmer)' }}>Fabrication, Embedded Systems & Sensors</p>
            </div>
          </div>
        </section>

        {/* 09 CONTACT (WITH RESUME PDF DOWNLOAD & SINGLE-LINE CALLIGRAPHY FOOTER NAME) */}
        <section id="contact" style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>
          <div className="section-title-wrap">
            <span className="section-big-num">09</span>
            <h2 className="section-heading">Contact</h2>
          </div>

          <div className="glass-panel" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '4rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.4rem' }}>Download Verified Resume</h3>
              <p style={{ color: 'var(--ink-dim)', maxWidth: '550px' }}>A one-page snapshot of my education, projects, and skills — updated as new things ship.</p>
            </div>
            <button onClick={downloadResume} style={{
              background: 'linear-gradient(135deg, var(--cyan), #0088ff)',
              color: '#000',
              fontFamily: 'var(--mono)',
              fontWeight: 700,
              fontSize: '0.9rem',
              padding: '0.85rem 1.8rem',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Download size={16} /> <span>Download Resume PDF</span>
            </button>
          </div>

          <div className="footer-end-container">
            <div className="footer-columns-grid">
              <div className="footer-col">
                <span className="footer-col-title">NAVIGATION</span>
                <a href="#top" className="footer-nav-link">HOME</a>
                <a href="#about" className="footer-nav-link">ABOUT</a>
                <a href="#skills" className="footer-nav-link">SKILLS</a>
                <a href="#work" className="footer-nav-link">PROJECTS</a>
                <a href="#experience" className="footer-nav-link">EXPERIENCE</a>
                <a href="#contact" className="footer-nav-link">CONTACT</a>
              </div>

              <div className="footer-col">
                <span className="footer-col-title">SOCIAL</span>
                <a href="https://github.com/arisu2006" target="_blank" rel="noreferrer" className="footer-nav-link">GITHUB</a>
                <a href="https://linkedin.com/in/gourav-a-450148360" target="_blank" rel="noreferrer" className="footer-nav-link">LINKEDIN</a>
                <a href="mailto:amdggourav@gmail.com" className="footer-nav-link">EMAIL</a>
              </div>

              <div className="footer-col">
                <span className="footer-col-title">LET'S CONNECT ✦</span>
                <p className="footer-connect-desc">I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                <a href="mailto:amdggourav@gmail.com" className="footer-say-hello-btn">SAY HELLO</a>
              </div>
            </div>

            {/* GIANT CALLIGRAPHY SINGLE-LINE NAME (MATCHING SCREENSHOT) */}
            <div className="footer-giant-single-wrapper">
              <h1 className="giant-calligraphy-name">A Gourav</h1>
            </div>

            <div className="footer-bottom-bar">
              <div className="footer-line" />
              <span className="signature-tag">A Gourav</span>
              <div className="footer-line" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
