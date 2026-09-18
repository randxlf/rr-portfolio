import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, ArrowDown, Menu, X, Linkedin, Facebook, Instagram, MessageCircle, Mail, MapPin, Code2, Lightbulb, Scan, Box, Users, ChevronDown, Plus, ZoomIn } from 'lucide-react';
import { PROJECTS, OPS_EXPERIENCE, RESUME_PDF } from './content';
import ProjectDialog from './ProjectDialog';
import './refinement.css';
const NAV = [['home', 'Home'], ['work', 'Projects'], ['about', 'About'], ['experience', 'Experience'], ['contact', 'Contact']];
const TECH = [['HTML5', 'html5'], ['CSS3', 'css3'], ['JavaScript', 'javascript'], ['TypeScript', 'typescript'], ['React', 'react'], ['Next.js', 'nextjs'], ['Tailwind CSS', 'tailwindcss'], ['Node.js', 'nodejs'], ['Git', 'git'], ['GitHub', 'github'], ['PostgreSQL', 'postgresql'], ['Vite', 'vitejs'], ['Express', 'express'], ['Prisma', 'prisma'], ['SQLite', 'sqlite'], ['Vercel', 'vercel']];
const PORTRAIT = '/images/randolf-portrait.webp';
const CARDS = [{
  project: PROJECTS[2],
  title: 'Forge & Fade',
  kind: 'forge',
  imageAlt: 'Forge and Fade barber supply products',
  description: 'A full-stack barber supply storefront, built for the craft.',
  image: '/projects/forge-and-fade/hero.png',
  tags: ['Next.js', 'TypeScript', 'Prisma'],
  category: 'E-COMMERCE'
}, {
  project: PROJECTS[1],
  title: 'Course Data Manager',
  kind: 'data',
  imageAlt: 'Course Data Manager records dashboard',
  description: 'From complex course data to clear, actionable records. Built for the Google Career Certificates program.',
  image: '/projects/gcc/screenshot-2-full.png',
  tags: ['React', 'Node.js', 'Turso'],
  category: 'DATA & AUTOMATION'
}, {
  project: PROJECTS[0],
  title: 'WAYV',
  kind: 'wayv',
  imageAlt: 'WAYV assistive wearable hardware prototype',
  description: 'Wearable assistive technology for more independent everyday movement.',
  image: '/projects/wayv/hardware.jpg',
  tags: ['YOLO', 'Computer Vision'],
  category: 'ASSISTIVE TECHNOLOGY'
}];
const PARTICLE_COUNT = 14;
function LoadingScreen({
  visible
}) {
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const particles = React.useMemo(() => Array.from({
    length: PARTICLE_COUNT
  }, (_, i) => {
    const angle = i / PARTICLE_COUNT * Math.PI * 2 + Math.random() * 0.4;
    const dist = 58 + Math.random() * 34;
    return {
      ex: Math.cos(angle) * dist,
      ey: Math.sin(angle) * dist,
      delay: Math.random() * 1.4,
      duration: 1.1 + Math.random() * 0.9
    };
  }), []);
  return <div className={`loading-screen ${visible ? '' : 'loading-hidden'}`} role="status" aria-live="polite" aria-label="Loading portfolio" aria-hidden={!visible}>
    <div className="loading-stream">
      {!reduced && particles.map((p, i) => <span key={i} className="loading-particle" style={{
          '--ex': `${p.ex}px`,
          '--ey': `${p.ey}px`,
          animationDelay: `${p.delay}s`,
          animationDuration: `${p.duration}s`
        }} />)}
      <svg width="46" height="46" viewBox="0 0 42 42" aria-hidden="true" className="loading-mark"><path d="M5 34V7h12c13 0 13 16 0 16H5M16 23l10 11M17 7h11c13 0 13 16 0 16l10 11" stroke="#d5f86b" strokeWidth="3.4" fill="none" strokeLinejoin="round" strokeLinecap="round" /></svg>
    </div>
  </div>;
}
function PortraitLightbox({
  open,
  onClose
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return <div className="lightbox" role="dialog" aria-modal="true" aria-label="Randolf Rivera's original portrait" onClick={onClose}><button className="lightbox-close icon-button" onClick={onClose} aria-label="Close zoomed image"><X /></button><img src="/images/randolf-portrait.jpg" alt="Randolf Rivera in a white polo shirt, seated at a café" onClick={e => e.stopPropagation()} /></div>;
}
function Brand({
  footer = false
}) {
  return <a href="#home" className="brand" aria-label="Randolf Rivera — home"><svg viewBox="0 0 42 42" aria-hidden="true"><path d="M5 34V7h12c13 0 13 16 0 16H5M16 23l10 11M17 7h11c13 0 13 16 0 16l10 11" /></svg><span>RANDOLF RIVERA{footer && <small>WEB DEVELOPER / PHILIPPINES</small>}</span></a>;
}
function Socials() {
  return <div className="socials">{[[Linkedin, 'LinkedIn', 'https://www.linkedin.com/in/randolf-r-8b12a8bb'], [Facebook, 'Facebook', 'https://www.facebook.com/randxlf'], [Instagram, 'Instagram', 'https://www.instagram.com/randxlf/'], [MessageCircle, 'Discord', 'https://discord.com/users/589795913262956566'], [Mail, 'Email', 'mailto:ranrivera15@gmail.com']].map(([Icon, label, href]) => <a href={href} key={label} aria-label={label} title={label} target={label === 'Email' ? undefined : '_blank'} rel="noopener noreferrer"><Icon size={19} /></a>)}</div>;
}
function SectionHeading({
  number,
  title,
  aside
}) {
  return <div className="section-heading" data-reveal><div className="heading-label"><span className="section-number">{number} /</span><h2>{title}</h2></div>{aside}</div>;
}
function usePageMotion() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const nodes = [...document.querySelectorAll('[data-reveal]')];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08
    });
    const apply = () => {
      nodes.forEach(node => {
        if (preference.matches) {
          node.classList.remove('will-reveal');
          observer.unobserve(node);
        } else if (!node.classList.contains('is-visible') && node.getBoundingClientRect().top > window.innerHeight) {
          node.classList.add('will-reveal');
          observer.observe(node);
        }
      });
    };
    apply();
    preference.addEventListener('change', apply);
    return () => {
      observer.disconnect();
      preference.removeEventListener('change', apply);
    };
  }, []);
}
export default function Portfolio() {
  const [navOpen, setNavOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [portraitZoom, setPortraitZoom] = useState(false);
  const menuButton = useRef(null);
  usePageMotion();
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const minDelay = new Promise(resolve => setTimeout(resolve, reduced ? 200 : 3200));
    const ready = document.readyState === 'complete' ? Promise.resolve() : new Promise(resolve => window.addEventListener('load', resolve, {
      once: true
    }));
    Promise.all([minDelay, ready]).then(() => setLoading(false));
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = 'forest';
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const sections = NAV.map(([id]) => document.getElementById(id)).filter(Boolean);
      let current = 'home';
      for (const section of sections) if (section.getBoundingClientRect().top <= 180) current = section.id;
      if (window.innerHeight + y >= document.documentElement.scrollHeight - 5) current = 'contact';
      setActive(current);
      setScrolled(y > 35);
      const height = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty('--scroll-progress', height > 0 ? Math.min(y / height, 1) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape' && navOpen) {
        setNavOpen(false);
        menuButton.current?.focus();
      }
    };
    const onClick = e => {
      if (navOpen && !e.target.closest('.header')) setNavOpen(false);
    };
    const query = window.matchMedia('(min-width: 801px)');
    const resize = () => {
      if (query.matches) setNavOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onClick);
    query.addEventListener('change', resize);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onClick);
      query.removeEventListener('change', resize);
    };
  }, [navOpen]);
  return <>
    <LoadingScreen visible={loading} />
    <a className="skip-link" href="#main">Skip to content</a>
    <header className={`header ${scrolled ? 'scrolled' : ''} ${navOpen ? 'menu-open' : ''}`}>
      <div className="container header-inner"><Brand /><nav aria-label="Main navigation" id="main-nav" className={`navigation ${navOpen ? 'open' : ''}`}>{NAV.map(([id, label]) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} aria-current={active === id ? 'location' : undefined} onClick={() => setNavOpen(false)}>{label}</a>)}</nav><span className="header-location"><i />BASED IN THE PHILIPPINES</span><button ref={menuButton} className="menu-toggle icon-button" onClick={() => setNavOpen(!navOpen)} aria-label={navOpen ? 'Close menu' : 'Open menu'} aria-expanded={navOpen} aria-controls="main-nav">{navOpen ? <X /> : <Menu />}</button></div><div className="reading-progress" />
    </header>
    <main id="main">
      <section id="home" className="hero">
        <div className="hero-art" aria-hidden="true" /><div className="hero-grid-lines" aria-hidden="true" />
        <div className="container hero-content"><div className="eyebrow hero-kicker"><span />CODE / CREATE / CONTRIBUTE</div><h1>IDEAS INTO<br /><span>REALITY.</span></h1><div className="hero-identity"><img src={PORTRAIT} width="54" height="54" alt="Randolf Rivera" fetchPriority="high" /><div><h2>RANDOLF RIVERA</h2><span>FULL STACK DEVELOPER</span></div></div><p>Thoughtful interfaces. Reliable code.<br className="mobile-break" /> Real impact.</p><div className="hero-actions"><a className="button" href="#work">View Projects <ArrowUpRight size={19} /></a><a className="button secondary" href="#contact">Get in Touch <ArrowRight size={17} /></a></div><div className="hero-proof"><span><b>5+</b> LANGUAGES &amp; FRAMEWORKS</span><span><b>3</b> FULL-STACK PROJECTS</span></div></div>
        <div className="hero-side-note" aria-hidden="true">ONE IDEA.<br />ONE STEP.<br /><span>FORWARD.</span></div><div className="container hero-bottom"><span><MapPin size={13} /> CALOOCAN CITY, PHILIPPINES</span><a href="#skills">SCROLL TO EXPLORE <ArrowDown size={15} /></a></div>
      </section>

      <section id="skills" className="section skills"><div className="container"><div className="tools-heading" data-reveal><div><span className="eyebrow">THE TOOLKIT</span><h2>Tools behind the work<span>.</span></h2></div><p>From the first pixel<br />to the last database query.</p></div><div className="tech-grid" data-reveal>{TECH.map(([name, slug]) => <div className="tech" key={slug}><img src={`/logos/${slug}.svg`} className={['nextjs', 'github', 'express', 'prisma', 'vercel'].includes(slug) ? 'logo-light' : ''} width="29" height="29" alt="" loading="lazy" /><span>{name}</span></div>)}</div></div></section>

      <section id="work" className="section work"><div className="container"><SectionHeading number="01" title="Featured projects" aside={<p className="section-note">REAL PROJECTS.<br />MEANINGFUL SOLUTIONS.</p>} /><div className="project-grid">{CARDS.map((card, index) => <article key={card.title} className={`project-card project-${index}`} data-reveal style={{
              '--reveal-delay': `${index * 75}ms`
            }}><button className="card-open" onClick={() => setProject(card.project)} aria-label={`View ${card.title} project details`}><div className="card-copy"><span className="card-index">0{index + 1} <span>/ {card.category}</span></span><h3>{card.title}</h3><div className="tags">{card.tags.map(tag => <span key={tag}>{tag}</span>)}</div><p>{card.description}</p><span className="card-link">EXPLORE PROJECT <ArrowUpRight size={17} /></span></div><div className={`card-image card-image-${card.kind}`}>{card.kind === 'data' && <div className="browser-bar"><span /><span /><span /><small>COURSE DATA MANAGER</small></div>}<img src={card.image} alt={card.imageAlt} loading="lazy" />{card.kind === 'forge' && <span className="forge-wordmark">FORGE<br /><i>&</i> FADE<small>SUPPLY CO.</small></span>}</div><span className="project-corner"><Plus size={15} /></span></button></article>)}</div><div className="work-footnote" data-reveal><Code2 size={16} /><p>Built to solve a problem. Refined to make it feel simple.</p><span>DESIGN → DEVELOP → DELIVER</span></div></div></section>

      <section id="about" className="section about"><div className="container"><SectionHeading number="02" title="The person behind the pixels" /><div className="about-grid"><figure className="portrait-frame" data-reveal><button type="button" className="zoomable-photo" onClick={() => setPortraitZoom(true)} aria-label="View Randolf Rivera's original portrait"><img src={PORTRAIT} width="1000" height="1000" alt="Randolf Rivera in a white polo shirt, seated at a café" loading="lazy" /><span className="zoom-hint"><ZoomIn size={16} /></span></button><figcaption><span>RANDOLF RIVERA<small>DEVELOPER. THINKER. MAKER.</small></span><ArrowUpRight size={23} /></figcaption><span className="photo-corner corner-tl" /><span className="photo-corner corner-br" /></figure><div className="about-copy" data-reveal><span className="eyebrow">A LITTLE ABOUT ME</span><h3>CURIOUS MIND.<br /><span>INTENTIONAL WORK.</span></h3><p>I'm Randolf, a full-stack web developer based in the Philippines. I turn ideas into practical, thoughtful digital experiences that feel good to use.</p><p>From e-commerce and data tools to assistive technology, I enjoy connecting clean design with reliable code. My experience in inventory and operations keeps me focused on the people and processes behind every interface.</p><div className="traits">{[[Lightbulb, 'Problem solver'], [Scan, 'Detail oriented'], [Box, 'Always learning'], [Users, 'Team player']].map(([Icon, label]) => <span key={label}><Icon size={20} />{label}</span>)}</div><a href={RESUME_PDF} className="text-link" target="_blank" rel="noopener noreferrer">Get to know my work <span>— View résumé</span><ArrowUpRight size={17} /></a><details className="about-details"><summary>Education & credentials <ChevronDown size={15} /></summary><dl><div><dt>Education</dt><dd>BS Computer Science · Our Lady of Fatima University, 2019–2023</dd></div><div><dt>Certifications</dt><dd>Google Data Analytics · Google UX Design</dd></div><div><dt>Trainer credentials</dt><dd>CSARC — LEGO Robotics (Spike Prime) & Minecraft Education</dd></div></dl></details></div></div></div></section>

      <section id="experience" className="section experience"><div className="container"><SectionHeading number="03" title="Fueled by..." aside={<a className="text-link" href={RESUME_PDF} target="_blank" rel="noopener noreferrer">Full résumé <ArrowUpRight size={17} /></a>} /><div className="exp-stats"><div className="exp-stat"><span className="exp-stat-n">9,312</span><span className="exp-stat-l">☕ CUPS OF COFFEE</span></div><div className="exp-stat"><span className="exp-stat-n">4,700+</span><span className="exp-stat-l">🐛 BUGS SQUASHED</span></div><div className="exp-stat"><span className="exp-stat-n">∞</span><span className="exp-stat-l">😤 "WHY ISN'T THIS WORKING"</span></div></div></div></section>

      <section id="contact" className="contact"><div className="container contact-inner"><div data-reveal><span className="eyebrow">LET'S BUILD SOMETHING MEANINGFUL</span><h2>GOOD WORK.<br /><span>GREAT PEOPLE.</span></h2></div><div className="contact-copy" data-reveal><span className="contact-star" aria-hidden="true">✳︎</span><p>Have an idea worth building?<br />I'd love to hear about it.</p><a className="contact-email" href="mailto:ranrivera15@gmail.com">ranrivera15@gmail.com <ArrowUpRight size={23} /></a><Socials /></div></div></section>
    </main><footer className="footer"><div className="container footer-inner"><Brand footer /><span className="footer-note">© {new Date().getFullYear()} Randolf Rivera.<br />BUILT WITH INTENT.</span><a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={17} /></a></div></footer><ProjectDialog project={project} onClose={() => setProject(null)} /><PortraitLightbox open={portraitZoom} onClose={() => setPortraitZoom(false)} />
  </>;
}
