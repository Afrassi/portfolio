import { useState } from 'react'
import {
  ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail, MapPin,
  Menu, X, ShieldCheck, Code2, Database, BarChart3, Network, GraduationCap,
  BriefcaseBusiness, ExternalLink, FileText
} from 'lucide-react'

const experiences = [
  {
    company: 'ONDA — Aéroport Oujda-Angad',
    role: 'Stage en développement d’applications',
    date: 'Juin – août 2026',
    points: [
      'Développement d’une application de gestion des congés du personnel de l’aéroport.',
      'Participation à la conception et à la définition des fonctionnalités avec la gestion administrative.',
    ],
    tools: 'Python · SQL · MySQL · HTML · CSS · JavaScript · Excel',
  },
  {
    company: 'MRAAI DAR EL HAJ SARL',
    role: 'Stage en support informatique et réseaux',
    date: 'Février – mai 2026',
    points: [
      'Assistance aux utilisateurs et résolution des problèmes informatiques courants.',
      'Diagnostic des problèmes de connexion réseau et participation au traitement des incidents d’accès.',
    ],
    tools: 'Windows · ping · ipconfig · Support utilisateur',
  },
  {
    company: 'TRANS ADVENT',
    role: 'Stage en analyse de données',
    date: 'Septembre 2025 – février 2026',
    points: [
      'Collecte, nettoyage et préparation des données de l’activité de l’entreprise.',
      'Analyse avec Python et SQL, création de tableaux de bord Power BI et rédaction de rapports de synthèse.',
    ],
    tools: 'Python · Pandas · NumPy · Matplotlib · SQL · Power BI · Excel',
  },
  {
    company: 'GOLDEN ALUMINIUM',
    role: 'Stage en gestion des données et développement informatique',
    date: 'Octobre 2023 – mars 2024',
    points: [
      'Saisie, organisation et mise à jour des données de l’entreprise ; participation aux activités de développement du service.',
    ],
    tools: 'Excel · SQL · MySQL · Python',
  },
  {
    company: 'CHU d’Oujda',
    role: 'Stage en développement — application de gestion de stock',
    date: 'Avril – juin 2023',
    points: [
      'Développement en équipe d’une application de gestion de stock pour le suivi et la mise à jour des stocks.',
    ],
    tools: 'Java · SQL · MySQL',
  },
  {
    company: 'Province de Nador',
    role: 'Stage en traitement de données administratives',
    date: 'Août 2022',
    points: ['Saisie, vérification et mise à jour de données administratives.'],
    tools: 'Excel · Word',
  },
]

const projects = [
  {
    number: '01',
    title: 'Gestion des congés',
    category: 'Développement d’application',
    description: 'Application de gestion des congés du personnel de l’aéroport, développée pendant mon stage à l’ONDA.',
    stack: ['Python', 'SQL', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    number: '02',
    title: 'Gestion hospitalière',
    category: 'Application métier',
    description: 'Projet académique de gestion hospitalière réalisé avec Java et MySQL.',
    stack: ['Java', 'MySQL'],
  },
  {
    number: '03',
    title: 'Application e-commerce',
    category: 'Développement web',
    description: 'Projet académique de création d’une application e-commerce avec Laravel.',
    stack: ['PHP', 'Laravel'],
  },
  {
    number: '04',
    title: 'Analyse et visualisation de données',
    category: 'Data & visualisation',
    description: 'Travaux d’analyse et de visualisation de données avec des bibliothèques Python et Power BI.',
    stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Power BI'],
  },
]

const skillGroups = [
  { icon: Code2, title: 'Développement', items: ['Python', 'Java', 'PHP / Laravel', 'JavaScript', 'HTML', 'CSS'] },
  { icon: Database, title: 'Bases de données', items: ['SQL', 'MySQL'] },
  { icon: BarChart3, title: 'Data & analyse', items: ['Pandas', 'NumPy', 'Matplotlib', 'Power BI', 'Excel'] },
  { icon: Network, title: 'Systèmes & réseaux', items: ['Windows', 'Linux', 'Diagnostic réseau', 'Support utilisateur'] },
  { icon: ShieldCheck, title: 'Cybersécurité', items: ['Formation MSc Cybersécurité', 'Réseaux', 'Administration Linux', 'Sécurité web'] },
  { icon: Github, title: 'Outils', items: ['Git', 'GitHub'] },
]

function SectionTitle({ eyebrow, title, intro }) {
  return <div className="section-heading">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {intro && <p>{intro}</p>}
  </div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const nav = [['À propos', '#about'], ['Compétences', '#skills'], ['Expériences', '#experience'], ['Projets', '#projects'], ['Formation', '#education'], ['Contact', '#contact']]

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">IA</span><span>Imane Afrassi<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" aria-label="Ouvrir le menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {nav.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cv" href="/cv.pdf" download="CV-Imane-Afrassi.pdf" onClick={closeMenu}><Download size={15} /> Mon CV</a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="pulse" /> Recherche un stage de 6 mois</div>
            <p className="hero-kicker">Bonjour, je suis</p>
            <h1>Imane <span>Afrassi</span></h1>
            <h2>Étudiante en MSc <em>Cybersécurité</em></h2>
            <p className="hero-text">Étudiante en M1 à Epitech Nancy, avec une expérience en développement d’applications, support informatique, réseaux et analyse de données. Curieuse et polyvalente, je souhaite contribuer à des projets concrets et approfondir mes compétences en cybersécurité.</p>
            <div className="hero-meta"><span><MapPin size={16} /> Nancy / Metz</span><span><BriefcaseBusiness size={16} /> Disponible dès novembre 2026</span></div>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Découvrir mes projets <ArrowUpRight size={17} /></a>
              <a className="button button-secondary" href="/cv.pdf" download="CV-Imane-Afrassi.pdf"><Download size={17} /> Télécharger mon CV</a>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/imane-afrassi" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <a href="mailto:imane.afrassi@epitech.eu" aria-label="Envoyer un e-mail"><Mail /></a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Illustration cybersécurité">
            <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
            <div className="visual-card">
              <div className="visual-top"><span className="window-dots"><i /><i /><i /></span><span>profil.exe</span><span className="status">● en ligne</span></div>
              <div className="shield"><ShieldCheck size={72} strokeWidth={1.15} /></div>
              <div className="terminal-line"><span>01</span> <b>Étudier</b><i>cybersécurité</i></div>
              <div className="terminal-line"><span>02</span> <b>Construire</b><i>solutions utiles</i></div>
              <div className="terminal-line"><span>03</span> <b>Apprendre</b><i>chaque jour</i></div>
              <div className="visual-footer"><span>EPITECH NANCY</span><span>2026 — 2028</span></div>
            </div>
            <div className="floating-tag tag-top"><Code2 size={16} /> Développement</div>
            <div className="floating-tag tag-bottom"><ShieldCheck size={16} /> Cybersecurity</div>
          </div>
          <a className="scroll-cue" href="#about"><ArrowDown size={16} /> Faire défiler</a>
        </section>

        <section className="section-wrap section-block" id="about">
          <SectionTitle eyebrow="01 / À PROPOS" title="Un profil polyvalent, une curiosité sans cesse renouvelée." intro="Mon parcours associe informatique, analyse de données et découverte de la cybersécurité." />
          <div className="about-grid">
            <div className="about-card about-main"><span className="card-icon"><GraduationCap /></span><h3>De l’informatique à la cybersécurité</h3><p>Je suis étudiante en première année du MSc Cybersécurité à Epitech Nancy, après une licence en Analytique des Données et Informatique Décisionnelle et un DUT Informatique de Gestion.</p><p>Mes expériences dans des environnements variés — aéroport, hôpital, administration et entreprises privées — m’ont permis de développer une approche adaptable et concrète de l’informatique.</p></div>
            <div className="about-stat"><strong>18<span>+</span></strong><p>mois d’expériences en stages</p><div className="stat-line" /></div>
            <div className="about-card about-note"><span className="card-icon"><ShieldCheck /></span><h3>Mon objectif</h3><p>Rejoindre une équipe pour contribuer à des projets informatiques concrets, apprendre auprès de professionnels et renforcer mes compétences, notamment en cybersécurité.</p></div>
          </div>
        </section>

        <section className="section-wrap section-block" id="skills">
          <SectionTitle eyebrow="02 / COMPÉTENCES" title="Mes outils & technologies" intro="Des compétences acquises en formation, en projets académiques et lors de mes expériences professionnelles." />
          <div className="skills-grid">
            {skillGroups.map(({ icon: Icon, title, items }) => <article className="skill-card" key={title}><div className="skill-title"><span className="card-icon"><Icon size={19} /></span><h3>{title}</h3></div><div className="chips">{items.map(item => <span className="chip" key={item}>{item}</span>)}</div></article>)}
          </div>
          <div className="language-row"><span className="language-label">LANGUES</span><span>Arabe <b>Langue maternelle</b></span><span>Français <b>B2</b></span><span>Anglais <b>B2</b></span></div>
        </section>

        <section className="section-wrap section-block" id="experience">
          <SectionTitle eyebrow="03 / EXPÉRIENCES" title="Apprendre sur le terrain" intro="Des expériences variées qui m’ont permis de développer ma polyvalence et mon sens du service." />
          <div className="timeline">
            {experiences.map((item, index) => <article className="timeline-item" key={item.company}><div className="timeline-marker">{String(index + 1).padStart(2, '0')}</div><div className="timeline-content"><div className="timeline-head"><div><h3>{item.company}</h3><p>{item.role}</p></div><span className="date">{item.date}</span></div><ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul><div className="tool-line"><span>OUTILS</span>{item.tools}</div></div></article>)}
          </div>
        </section>

        <section className="section-wrap section-block" id="projects">
          <SectionTitle eyebrow="04 / PROJETS" title="Quelques réalisations" intro="Une sélection de projets professionnels et académiques mentionnés dans mon parcours." />
          <div className="projects-grid">
            {projects.map(project => <article className="project-card" key={project.number}><div className="project-top"><span>{project.number} / PROJET</span><span className="project-arrow"><ArrowUpRight size={19} /></span></div><span className="project-category">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><div className="chips">{project.stack.map(tag => <span className="chip" key={tag}>{tag}</span>)}</div></article>)}
          </div>
          <p className="project-note"><FileText size={16} /> Les liens vers les dépôts GitHub et les démonstrations pourront être ajoutés lorsque les projets seront publiés.</p>
        </section>

        <section className="section-wrap section-block" id="education">
          <SectionTitle eyebrow="05 / FORMATION" title="Mon parcours académique" />
          <div className="education-list">
            {[
              ['2026 – 2028', 'Master of Science en Cybersécurité (M1)', 'Epitech Nancy'],
              ['2024 – 2025', 'Licence en Analytique des Données et Informatique Décisionnelle', 'EST Oujda'],
              ['2021 – 2023', 'DUT Informatique de Gestion', 'EST Oujda'],
              ['2021', 'Baccalauréat Sciences Physiques', 'Lycée Ibn Sina, Zeghanghan'],
            ].map(([date, title, school]) => <article className="education-item" key={title}><span>{date}</span><div><h3>{title}</h3><p>{school}</p></div><GraduationCap size={20} /></article>)}
          </div>
          <div className="online-training"><span className="card-icon"><Network /></span><div><h3>Formations en ligne — OpenClassrooms</h3><p>Réseaux · Systèmes Linux · Sécurité web</p></div></div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <span className="eyebrow">06 / CONTACT</span>
            <h2>Et si nous <span>échangions</span> ?</h2>
            <p>Je suis à la recherche d’un stage de 6 mois en informatique, à Nancy ou Metz, avec un rythme alterné de 6 semaines en entreprise et 2 semaines à l’école. N’hésitez pas à me contacter.</p>
            <a className="button button-primary contact-button" href="mailto:imane.afrassi@epitech.eu">Me contacter par e-mail <ArrowUpRight size={17} /></a>
            <div className="contact-details"><a href="mailto:imane.afrassi@epitech.eu"><Mail size={17} /> imane.afrassi@epitech.eu</a><a href="https://www.linkedin.com/in/imane-afrassi" target="_blank" rel="noreferrer"><Linkedin size={17} /> linkedin.com/in/imane-afrassi</a><span><MapPin size={17} /> Vandoeuvre-lès-Nancy (54)</span></div>
          </div>
        </section>
      </main>

      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">IA</span><span>Imane Afrassi<span className="brand-dot">.</span></span></a><p>Conçu avec React · © {new Date().getFullYear()} Imane Afrassi</p><a href="#home" className="back-top">Retour en haut ↑</a></footer>
    </>
  )
}

export default App
