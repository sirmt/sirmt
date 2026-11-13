import { ArrowDown, ArrowRight, ArrowUpRight, Code2, Github, Headset, Laptop, LifeBuoy, Mail, Menu, MessageCircle, Network, Phone, ShieldCheck, Wrench, X } from 'lucide-react';
import { useState } from 'react';
import profilePhoto from '../image/passport_sized-removebg-preview.png';

const capabilities = [
  {
    number: '01',
    icon: Code2,
    title: 'Software engineering',
    detail: 'Building and improving digital products with a thoughtful, problem-solving mindset.',
    tags: ['Web development', 'Problem solving', 'Software fundamentals'],
  },
  {
    number: '02',
    icon: Headset,
    title: 'ICT support',
    detail: 'Helping people get back to work with clear communication and practical technical support.',
    tags: ['User support', 'Troubleshooting', 'Technical guidance'],
  },
  {
    number: '03',
    icon: Network,
    title: 'IT operations',
    detail: 'Supporting the systems, devices, and day-to-day technology that keep teams moving.',
    tags: ['Device support', 'Systems assistance', 'Service mindset'],
  },
];

const approach = [
  { icon: LifeBuoy, title: 'Start with the person', text: 'Listen carefully, ask useful questions, and make the next step easy to understand.' },
  { icon: Wrench, title: 'Solve the real problem', text: 'Trace issues to their cause and choose a solution that works in the real world.' },
  { icon: ShieldCheck, title: 'Leave things better', text: 'Share what changed, document where it helps, and make technology more dependable.' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Takudzwa Mupfure, home">
          <span className="wordmark-mark">TM</span>
          <span>Takudzwa Mupfure</span>
        </a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#expertise" onClick={closeMenu}>Expertise</a>
          <a href="#approach" onClick={closeMenu}>How I work</a>
          <a className="nav-github" href="https://github.com/sirmt/sirmt" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s connect <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> SOFTWARE ENGINEERING · ICT SUPPORT</p>
          <h1>Technology should work <span>for people.</span></h1>
          <p className="hero-intro">I’m Takudzwa Mupfure, with a background in software engineering and ICT support. I enjoy solving problems from both sides of the screen.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#expertise">Explore my expertise <ArrowRight size={17} /></a>
            <a className="text-link" href="#about">A little about me <ArrowDown size={15} /></a>
          </div>
          <div className="hero-note"><span className="note-line" /> Open to opportunities in software and IT support</div>
        </div>
        <div className="hero-visual">
          <div className="photo-frame"><img src={profilePhoto} alt="Portrait of Takudzwa Mupfure" /></div>
          <div className="visual-caption"><span className="caption-icon"><Laptop size={17} /></span><span>Build with care.<br /><strong>Support with purpose.</strong></span></div>
          <div className="visual-index">01 <span>/</span> 03</div>
        </div>
        <a href="#about" className="scroll-cue" aria-label="Scroll to about section"><span /> SCROLL TO EXPLORE</a>
      </section>

      <section className="intro-section" id="about">
        <div className="section-label"><span>01</span> A PRACTICAL POINT OF VIEW</div>
        <div className="intro-content">
          <h2>One foot in <em>building.</em><br />One foot in <em>helping.</em></h2>
          <div className="intro-text">
            <p>My background brings together software engineering and hands-on ICT support. I’m interested in the full picture: how technology is made, how it behaves, and how people experience it when something needs to work.</p>
            <p>That combination helps me move between technical detail and human needs, whether I’m developing a solution or helping someone through a tricky issue.</p>
            <a className="underlined-link" href="#contact">Let’s make technology work better <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="expertise-section" id="expertise">
        <div className="section-heading">
          <div>
            <div className="section-label light-label"><span>02</span> WHERE I CAN HELP</div>
            <h2>Useful skills.<br /><em>Real-world focus.</em></h2>
          </div>
          <p>Technical curiosity meets a service-first mindset. Here are the areas I’m ready to contribute in.</p>
        </div>
        <div className="expertise-grid">
          {capabilities.map(({ number, icon: Icon, title, detail, tags }) => (
            <article className="expertise-card" key={number}>
              <div className="card-top"><span className="card-number">{number}</span><Icon size={23} strokeWidth={1.6} /></div>
              <h3>{title}</h3>
              <p>{detail}</p>
              <div className="tag-list">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
        <div className="expertise-foot"><span>ALWAYS LEARNING</span><span className="foot-rule" /><span>ALWAYS LOOKING FOR THE BETTER WAY</span></div>
      </section>

      <section className="approach-section" id="approach">
        <div className="approach-heading">
          <div className="section-label"><span>03</span> HOW I WORK</div>
          <h2>Good support is a<br /><em>technical skill, too.</em></h2>
          <p>Every good fix starts with understanding what someone actually needs.</p>
        </div>
        <div className="approach-list">
          {approach.map(({ icon: Icon, title, text }, index) => (
            <article className="approach-row" key={title}>
              <span className="approach-count">0{index + 1}</span>
              <span className="approach-icon"><Icon size={21} strokeWidth={1.6} /></span>
              <div><h3>{title}</h3><p>{text}</p></div>
              <ArrowUpRight className="approach-arrow" size={18} />
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-topline"><span>HAVE A ROLE OR A CHALLENGE IN MIND?</span><span>TAKUDZWA MUPFURE · 2026</span></div>
        <div className="contact-main">
          <div><p className="contact-kicker">LET’S BUILD SOMETHING THAT WORKS</p><h2>Good people.<br /><em>Good technology.</em></h2></div>
          <div className="contact-action">
            <p>I’m open to opportunities in software engineering, ICT support, and technical operations.</p>
            <a href="mailto:takudzwamupfure@gmail.com" className="button button-light"><Mail size={16} /> Email me <ArrowUpRight size={17} /></a>
            <div className="contact-links">
              <a href="https://wa.me/263785569021" target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp: 078 556 9021</a>
              <a href="tel:+263785569021"><Phone size={15} /> Call: 078 556 9021</a>
              <a href="https://github.com/sirmt/sirmt" target="_blank" rel="noreferrer"><Github size={16} /> GitHub profile <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </div>
        <footer className="site-footer"><a className="footer-mark" href="#home">TM</a><span>Thoughtful technology. Helpful by design.</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
      </section>
    </main>
  );
}

export default App;