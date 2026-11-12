import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, FileDown, ExternalLink, ChevronRight, BriefcaseBusiness, GraduationCap, Code2, Sparkles } from 'lucide-react'
import { projects, skillGroups } from './data/content'

const profile = {
  name: 'Divija Jain', email: 'jain.divija012@gmail.com', github: 'https://github.com/divijalabsX', linkedin: 'https://www.linkedin.com/in/divijaai0', resume: '/resume.pdf'
}
const sections = [
  { label: 'Home', path: '/', short: 'Home' },
  { label: 'About', path: '/about', short: 'About' },
  { label: 'Projects', path: '/work', short: 'Projects' },
  { label: 'Experience', path: '/experience', short: 'Experience' },
  { label: 'Skills', path: '/skills', short: 'Skills' },
  { label: 'Contact', path: '/contact', short: 'Contact' },
]
const projectTabs = ['Overview', 'Workflow', 'Decisions', 'Challenges', 'Next Steps']
const transition = { duration: 0.34, ease: [0.22, 1, 0.36, 1] }

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const current = sections.find(s => s.path === location.pathname) || (location.pathname.startsWith('/work/') ? sections[2] : null)
  useEffect(() => setMenuOpen(false), [location.pathname])
  return <header className="site-header">
    <Link className="wordmark" to="/" aria-label="Divija Jain, home">dj<span>.</span></Link>
    <button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X/> : <Menu/>}</button>
    <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
      {sections.map(item => <NavLink key={item.path} to={item.path} end={item.path === '/'} className={() => current?.path === item.path ? 'nav-link active' : 'nav-link'}>{item.label}</NavLink>)}
    </nav>
    {profile.resume ? <a className="resume-button" href={profile.resume} target="_blank" rel="noreferrer"><FileDown size={14}/> Resume</a> : <button className="resume-button resume-pending" type="button" title="Add your PDF to public and set profile.resume in App.jsx"><FileDown size={14}/> Resume</button>}
  </header>
}

function Eyebrow({ children }) { return <p className="eyebrow">{children}</p> }
function PageFrame({ children, title, className = '' }) {
  const reduce = useReducedMotion()
  const headingRef = useRef(null)
  useEffect(() => { headingRef.current?.focus({ preventScroll: true }) }, [])
  return <motion.main ref={headingRef} tabIndex={-1} aria-label={title || 'Portfolio page'} className={`page ${className}`} initial={reduce ? { opacity: 0 } : { opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={reduce ? { opacity: 0 } : { opacity: 0, x: -20 }} transition={reduce ? { duration: .12 } : transition}>{children}</motion.main>
}
function Footer() { return <footer className="site-footer"><span>DIVIJA JAIN · CSE (AI & ML)</span><span>BUILT WITH CURIOSITY & CODE</span><span>© {new Date().getFullYear()}</span></footer> }
function PageHeading({ title }) { return <div className="page-heading"><h1>{title}</h1></div> }

function Home() {
  return <PageFrame title="Home" className="home-view">
    <div className="home-hub">
      <section className="home-intro">
        <p className="hello-line">Hello, I'm</p><h1>Divija<br/><span>Jain.</span></h1>
        <p className="home-position">AI Engineer <i>·</i> Software Developer <i>·</i> Intelligent Systems</p>
        <p className="home-copy">I'm a computer science engineering student interested in building useful software and applying AI to real-world problems. Here’s a look at what I’ve worked on and what I’m learning.</p>
        <div className="availability"><span className="availability-dot"/> Open to internships and entry-level opportunities</div>
        <div className="home-actions"><Link className="button button-blue" to="/work">Explore projects <ArrowUpRight size={16}/></Link><Link className="text-link" to="/contact">Get in touch <ArrowUpRight size={15}/></Link></div>
        <div className="social-row">{profile.github && <a href={profile.github} aria-label="GitHub"><Github size={17}/></a>}{profile.linkedin && <a href={profile.linkedin} aria-label="LinkedIn"><Linkedin size={17}/></a>}{profile.email && <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17}/></a>}<span>INDIA · AVAILABLE TO CONNECT</span></div>
      </section>
      <aside className="hub-panel">
        <div className="hub-panel-head"><span>EXPLORE THE PORTFOLIO</span></div>
        <div className="hub-links">
          {sections.slice(1).map((item, i) => {
            const icons = [<Sparkles/>, <Code2/>, <BriefcaseBusiness/>, <GraduationCap/>, <Mail/>]
            const notes = ['Background & interests', 'Selected engineering work', 'Internship & education', 'Tools I work with', 'Let’s start a conversation']
            return <Link to={item.path} className="hub-link" key={item.path}><span className="hub-link-icon">{icons[i]}</span><span className="hub-link-copy"><strong>{item.label}</strong><small>{notes[i]}</small></span><ArrowUpRight size={17}/></Link>
          })}
        </div>
      </aside>
    </div>
  </PageFrame>
}

function About() {
  return <PageFrame title="About">
    <PageHeading number="01" label="ABOUT" title={<>Curious by nature.<br/><span>Engineering by practice.</span></>}/>
    <div className="about-screen">
      <div className="about-copy"><Eyebrow>A LITTLE ABOUT ME</Eyebrow><p className="about-lead">I'm a final-year Computer Science & Engineering student specialising in Artificial Intelligence & Machine Learning at <strong>JSS Academy of Technical Education.</strong></p><p>My interests sit across applied AI and software development. I've worked on document intelligence, retrieval-augmented generation and early explorations of agentic workflows. I enjoy understanding a problem, making considered engineering choices and turning an idea into something that works.</p><p>I'm still learning, and I value that process: being deliberate about what I build, honest about what I know, and willing to dig into the parts I don't understand yet.</p><div className="about-education"><Eyebrow>EDUCATION</Eyebrow><div><strong>Senior Secondary Education</strong><span>Apeejay School Noida · PCM · 2023</span></div><div><strong>Secondary Education</strong><span>Apeejay School Noida · 2021</span></div></div></div>
      <aside className="about-side"><div className="about-portrait-wrap"><img className="about-portrait" src="/images/profile.png" alt="Portrait of Divija Jain" /></div><div className="quick-facts"><div><small>COLLEGE</small><strong>JSS Academy of Technical Education</strong></div><div><small>GRADUATION</small><strong>2027 · B.Tech</strong></div><div><small>FOCUS</small><strong>AI systems & software engineering</strong></div></div></aside>
    </div>
  </PageFrame>
}

function Work() {
  return <PageFrame title="Projects">
    <PageHeading title={<>Selected work<span>.</span></>}/>
    <div className="work-grid simple-work-grid">{projects.map((p,i)=><article className="work-card" key={p.slug}>
      <Link to={`/work/${p.slug}`} className={`work-art art-${i}`} aria-label={`View ${p.name} case study`}><span className="work-index">0{i+1} / PROJECT</span><img className="project-thumbnail" src={p.image} alt={`${p.name} application interface`} loading="lazy" /><span className="work-open"><ArrowUpRight size={18}/></span></Link>
      <div className="work-info"><div className="work-meta"><span>{p.category}</span><span>{p.status}</span></div><h2>{p.name}</h2><p>{p.shortDescription}</p><div className="work-card-actions"><Link to={`/work/${p.slug}`} className="work-card-link">Case study <ArrowUpRight size={14}/></Link><div><a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.name} GitHub`}><Github size={16}/></a>{p.video&&<a href={p.video} target="_blank" rel="noreferrer" aria-label={`${p.name} recorded demo`}><ExternalLink size={16}/></a>}</div></div></div>
    </article>)}</div>
  </PageFrame>
}

function ProjectDetail() {
  const { slug } = useParams()
  const [tab, setTab] = useState('Overview')
  const project = projects.find(p => p.slug === slug)
  const projectIndex = projects.findIndex(p => p.slug === slug)
  const nextProject = projects[projectIndex + 1]
  useEffect(() => setTab('Overview'), [slug])
  if (!project) return <PageFrame title="Not found"><p>Project not found.</p><Link to="/work">Back to projects</Link></PageFrame>
  const details = {
    Overview: <div className="case-content"><div><Eyebrow>THE PROJECT</Eyebrow><h2>{project.summary}</h2><h3>Problem</h3><p>{project.problem}</p><h3>Approach</h3><p>{project.solution}</p></div><div className="case-fact"><small>MY ROLE</small><p>{project.role}</p><small>CONTRIBUTION</small><p>{project.contribution}</p><small>TIMELINE · TEAM</small><p>{project.timeline} · {project.team}</p><small>STATUS</small><p>{project.status}</p></div></div>,
    Workflow: <div className="architecture-section"><div className="architecture-intro"><Eyebrow>PROJECT WORKFLOW</Eyebrow><h2>From input to outcome.</h2><p>{project.name==='NexusAI'?'A structure-aware retrieval pipeline that prepares document context before local generation.':'A transaction risk-analysis pipeline that preprocesses transaction features, detects anomalies and serves risk-oriented results.'}</p></div><div className="architecture-horizontal">{project.architecture.map(([title,caption],i)=><React.Fragment key={title}><article className="architecture-stage"><span>0{i+1}</span><strong>{title}</strong><p>{caption}</p></article>{i<project.architecture.length-1&&<ArrowRight className="architecture-arrow" size={18}/>}</React.Fragment>)}</div><p className="architecture-note">{project.name==='NexusAI'?'Storage: PostgreSQL. Model inference: locally through Ollama.':'Model artefacts and preprocessing are persisted for reuse; Flask exposes prediction functionality to the Streamlit interface.'}</p></div>,
    Decisions: <div className="decision-grid">{project.decisions.map((d,i)=><article className="decision-card" key={d.title}><span>0{i+1} / DECISION</span><h3>{d.title}</h3><p><b>Choice</b> {d.choice}</p><p><b>Why</b> {d.why}</p><p><b>Trade-off</b> {d.tradeoff}</p></article>)}</div>,
    Challenges: <div className="challenge-grid">{project.challenges.map((c,i)=><article className="challenge-card" key={c.title}><span>0{i+1} / CHALLENGE</span><h3>{c.title}</h3><p><b>Problem</b> {c.problem}</p><p><b>Approach</b> {c.approach}</p><p><b>Outcome</b> {c.result}</p></article>)}</div>,
    'Next Steps': <div className="case-content"><div><Eyebrow>LIMITATIONS & ROADMAP</Eyebrow><h2>What I'd improve next.</h2><p>These are planned improvements, not claims about functionality already delivered.</p><ul className="next-steps-list">{project.nextSteps.map(x=><li key={x}>{x}</li>)}</ul></div><div className="case-fact"><small>KEY TAKEAWAY</small><p>{project.takeaways}</p></div></div>
  }
  return <PageFrame title={`${project.name} case study`} className="case-page">
    <div className="breadcrumbs"><Link to="/work"><ArrowLeft size={14}/> All projects</Link><ChevronRight size={13}/><span>{project.name}</span></div>
    <div className="case-heading"><div><Eyebrow>CASE STUDY / {project.number}</Eyebrow><h1>{project.name}<span>.</span></h1><p>{project.category}</p></div><div className="case-mark">{project.name==='NexusAI'?'NX':'FS'}</div></div>
    <div className="case-fixed-meta"><div className="case-stack"><small>TECH STACK</small><div>{project.stack.map(s=><span key={s}>{s}</span>)}</div></div><div className="case-header-links"><a href={project.github} target="_blank" rel="noreferrer"><Github size={15}/> GitHub</a>{project.demo&&<a href={project.demo} target="_blank" rel="noreferrer"><ExternalLink size={15}/> Live demo</a>}{project.video&&<a href={project.video} target="_blank" rel="noreferrer"><ExternalLink size={15}/> Recorded demo</a>}</div></div>
    <div className="case-tabs" role="tablist" aria-label="Project case study sections">{projectTabs.map(t=><button role="tab" aria-selected={tab===t} className={tab===t?'case-tab active':'case-tab'} key={t} onClick={()=>setTab(t)}>{t}</button>)}</div>
    <AnimatePresence mode="wait"><motion.section key={tab} className="case-panel" role="tabpanel" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-5}} transition={{duration:.2}}>{details[tab]}</motion.section></AnimatePresence>
    <div className="case-bottom"><Link to="/work"><ArrowLeft size={15}/> All projects</Link>{nextProject&&<Link to={`/work/${nextProject.slug}`}>{nextProject.name} <ArrowRight size={15}/></Link>}</div>
    <div className="case-takeaway"><b>KEY TAKEAWAY</b><p>{project.takeaways}</p></div>
  </PageFrame>
}

function Experience() {
  const [expanded, setExpanded] = useState('rategain')
  const items = [
    { id:'rategain', type:'INTERNSHIP', title:'AI Intern', org:'RateGain', meta:'Industry experience', icon:<BriefcaseBusiness/>, body:'Worked on NexusAI, a hybrid document intelligence project. The work involved document parsing, hierarchical indexing, knowledge representation, retrieval and model integration.', tags:['Python','FastAPI','RAG','LLMs'], link:'/work/nexusai', linkText:'Explore NexusAI' },
    { id:'education', type:'EDUCATION', title:'B.Tech — Computer Science & Engineering', org:'JSS Academy of Technical Education · AKTU', meta:'AI & ML specialisation', icon:<GraduationCap/>, body:'Bachelor of Technology in Computer Science (AI & ML), expected graduation July 2027.', tags:['Computer Science','AI & ML'] },
    { id:'senior-secondary', type:'EDUCATION', title:'Senior Secondary Education · PCM', org:'Apeejay School Noida', meta:'2023', icon:<GraduationCap/>, body:'Completed Senior Secondary Education with Physics, Chemistry and Mathematics (PCM).', tags:['CBSE','PCM','2023'] },
    { id:'volunteer', type:'VOLUNTEERING', title:'Volunteer · 60 hours', org:'Binary Foundation', meta:'Community contribution', icon:<Sparkles/>, body:'Contributed 60 hours of volunteer service teaching children. This helped me practise communicating ideas clearly and taking responsibility for a shared goal.', tags:['Teaching','Communication'] },
  ]
  return <PageFrame title="Experience">
    <PageHeading number="03" label="EXPERIENCE" title={<>Where I've learned<br/><span>by doing.</span></>}/>
    <div className="experience-cards">{items.map((item,i)=><article className={`experience-card ${expanded===item.id?'expanded':''}`} key={item.id}><button className="experience-trigger" onClick={()=>setExpanded(expanded===item.id?'':item.id)} aria-expanded={expanded===item.id}><span className="experience-icon">{item.icon}</span><span className="experience-type">{item.type}</span><span className="experience-title"><strong>{item.title}</strong><small>{item.org}</small></span><span className="experience-meta">{item.meta}</span><span className="expand-mark">{expanded===item.id?'−':'+'}</span></button><AnimatePresence initial={false}>{expanded===item.id&&<motion.div className="experience-expanded" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.22}}><p>{item.body}</p><div className="tag-row">{item.tags.map(t=><span key={t}>{t}</span>)}</div>{item.link&&<Link to={item.link} className="text-link">{item.linkText} <ArrowUpRight size={14}/></Link>}</motion.div>}</AnimatePresence></article>)}</div>
  </PageFrame>
}

function Skills() {
  const [active, setActive] = useState(skillGroups[0].name)
  const group = skillGroups.find(g=>g.name===active) || skillGroups[0]
  const skillEvidence = {
    'SQL': { status: 'Used in project', projects: ['nexusai'] },
    'Java': { status: 'Learning', projects: [] },
    'TypeScript': { status: 'Explored', projects: [] },
    'Machine Learning': { status: 'Used in project', projects: ['fraudshieldai'] },
    'Hierarchical Retrieval': { status: 'Used in project', projects: ['nexusai'] },
    'LLM Applications': { status: 'Learning', projects: [] },
    'MCP': { status: 'Used in project', projects: ['nexusai'] },
    'FastMCP': { status: 'Exploring', projects: [] },
    'OCR': { status: 'Exploring', projects: [] },
    'Spring Boot': { status: 'Learning', projects: [] },
    'React.js': { status: 'Used in project', projects: ['nexusai'] },
    'Git': { status: 'Explored', projects: [] },
    'GitHub': { status: 'Used in projects', projects: ['nexusai', 'fraudshieldai'] },
    'Postman': { status: 'Explored', projects: [] }
  }
  const related = (skill) => {
    const explicit = skillEvidence[skill]
    if (explicit) return explicit.projects.map(slug => projects.find(p => p.slug === slug)).filter(Boolean)
    return projects.filter(p => p.stack.some(s => s.toLowerCase() === skill.toLowerCase()) || `${p.summary} ${p.problem} ${p.solution} ${p.shortDescription}`.toLowerCase().includes(skill.toLowerCase()))
  }
  const evidenceLabel = (skill) => skillEvidence[skill]?.status || (related(skill).length ? `${related(skill).length} related project${related(skill).length>1?'s':''}` : 'Explored / learning')
  return <PageFrame title="Skills">
    <PageHeading number="04" label="SKILLS & TOOLS" title={<>The tools I use<br/><span>to make things work.</span></>}/>
    <div className="skills-view"><div className="skill-categories" role="tablist" aria-label="Skill categories">{skillGroups.map(g=><button role="tab" aria-selected={active===g.name} className={active===g.name?'skill-category active':'skill-category'} onClick={()=>setActive(g.name)} key={g.name}>{g.name}<ArrowUpRight size={14}/></button>)}</div><div className="skill-detail"><Eyebrow>SELECTED CATEGORY</Eyebrow><h2>{group.name}</h2><div className="skill-chip-grid">{group.items.map(s=><div className="skill-chip" key={s}><span>{s}</span><small>{evidenceLabel(s)}</small>{related(s).length>0&&<div className="skill-related">{related(s).map(p=><Link to={`/work/${p.slug}`} key={p.slug}>{p.name} <ArrowUpRight size={12}/></Link>)}</div>}</div>)}</div></div></div>
  </PageFrame>
}

function Contact() {
  return <PageFrame title="Contact" className="contact-view">
    <div className="contact-main">
      <h1>Have something<br/>in <span>mind?</span></h1>
      <p>I'm open to conversations about entry-level opportunities, interesting engineering problems, collaborations and ideas worth exploring.</p>
      {profile.email ? <a className="button button-blue" href={`mailto:${profile.email}?subject=${encodeURIComponent("Connection request from your portfolio")}&body=${encodeURIComponent("Hello Divija,\n\nI would like to connect with you.\n\nName: \nEmail: \nMessage: ")}`}>Email me <Mail size={16}/></a> : <span className="pending-link">Professional email will be added here.</span>}
    </div>
    <aside className="contact-side">
      <Eyebrow>ELSEWHERE ON THE INTERNET</Eyebrow>
      {profile.email && <a href={`mailto:${profile.email}`}><Mail/><span>Email</span><ArrowUpRight/></a>}
      {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin/><span>LinkedIn</span><ArrowUpRight/></a>}
      {profile.github && <a href={profile.github} target="_blank" rel="noreferrer"><Github/><span>GitHub</span><ArrowUpRight/></a>}
      
    </aside>
  </PageFrame>
}

function AnimatedRoutes() {
  const location=useLocation()
  useEffect(()=>{window.scrollTo({top:0,behavior:'instant'})},[location.pathname])
  return <AnimatePresence mode="wait" initial={false}><Routes location={location} key={location.pathname}><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/work" element={<Work/>}/><Route path="/work/:slug" element={<ProjectDetail/>}/><Route path="/experience" element={<Experience/>}/><Route path="/skills" element={<Skills/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<PageFrame title="Not found"><div className="not-found"><h1>Page not found.</h1><Link to="/">Back home</Link></div></PageFrame>}/></Routes></AnimatePresence>
}
function AppShell(){
  return <div className="app-shell"><Header/><div className="content-frame"><AnimatedRoutes/></div><Footer/></div>
}
export default function App(){return <BrowserRouter><AppShell/></BrowserRouter>}
