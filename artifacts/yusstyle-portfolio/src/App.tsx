import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ExternalLink,
  Github,
  Mail,
  Menu,
  Phone,
  X,
} from 'lucide-react';
import heroBackground from '@assets/generated_images/yusstyle-hero-background.jpg';
import aiWorkflowBackground from '@assets/generated_images/ai-workflow-background.jpg';
import portraitPhoto from '@assets/WhatsApp_Image_2026-08-21_at_09.39.53_1787955883670.jpeg';
import twoTorConnectImage from '@assets/2torconnect-dashboard.png';
import campusLoopImage from '@assets/generated_images/project-campusloop.jpg';
import blockDagVaultImage from '@assets/blockdagvault-dashboard.png';
import dagforgeHubImage from '@assets/generated_images/project-dagforge-hub.jpg';
import rescueDagImage from '@assets/generated_images/project-rescuedag.jpg';
import portraitStudyOne from '@assets/image_1788044913663.png';
import portraitStudyTwo from '@assets/image_1788044938635.png';
import portraitStudyThree from '@assets/image_1788044966801.png';
import portraitStudyFour from '@assets/image_1788045003798.png';
import portraitStudyFive from '@assets/image_1788045028826.png';

type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  role: string;
  tone: 'green' | 'gold' | 'ink';
  mark: string;
  image: string;
  imageKind?: 'art' | 'screenshot';
  link?: string;
};

const projects: Project[] = [
  {
    number: '01',
    name: '2torConnect',
    category: 'EDTECH / SOCIAL PLATFORM / FULL-STACK',
    description:
      'A university ecosystem designed to connect students, tutors, learning resources and academic communities in one digital environment.',
    role: 'Founder · Product Designer · Full-Stack Developer',
    tone: 'green',
    mark: '2t',
    image: twoTorConnectImage,
    imageKind: 'screenshot',
    link: 'https://2torconnect1.vercel.app/',
  },
  {
    number: '02',
    name: 'CampusLoop',
    category: 'EDTECH / COMMUNITY / WEB APPLICATION',
    description:
      'A digital platform built around university life, student interaction, tutoring and access to academic resources.',
    role: 'Software Developer',
    tone: 'gold',
    mark: 'cl',
    image: campusLoopImage,
  },
  {
    number: '03',
    name: 'BlockDAGVault',
    category: 'SECURITY / WEB3 / DIGITAL STORAGE',
    description:
      'An encrypted file-storage concept exploring secure digital asset management and blockchain-oriented infrastructure.',
    role: 'Developer',
    tone: 'ink',
    mark: 'bd',
    image: blockDagVaultImage,
    imageKind: 'screenshot',
    link: 'https://blockdagvault.vercel.app/',
  },
  {
    number: '04',
    name: 'Dagforge-Hub',
    category: 'WEB3 / TESTNET / GAMIFICATION',
    description:
      'A Web3 ecosystem platform designed around testnet discovery, progress tracking, rewards, leaderboards, badges, wallet connectivity and AI-powered guidance.',
    role: 'Web3 Developer · Product Builder',
    tone: 'green',
    mark: 'df',
    image: dagforgeHubImage,
  },
  {
    number: '05',
    name: 'RescueDag',
    category: 'BLOCKCHAIN / HACKATHON / INNOVATION',
    description:
      'A blockchain-focused solution developed through Team LynkBlock, exploring practical applications of decentralized technology.',
    role: 'Developer · Team LynkBlock',
    tone: 'gold',
    mark: 'rd',
    image: rescueDagImage,
  },
];

const tasking = [
  {
    name: 'OUTLIER',
    category: 'AI TRAINING · EVALUATION · QUALITY',
    text: 'Experience with structured AI-training workflows involving model-output evaluation, prompts, ranking and quality-focused tasks.',
  },
  {
    name: 'HANDSHAKE AI',
    category: 'AI EVALUATION · DATA · HUMAN FEEDBACK',
    text: 'Experience with project-based AI workflows focused on evaluating and improving AI-generated outputs.',
  },
  {
    name: 'ONEFORMA',
    category: 'ANNOTATION · SEARCH · CONTENT',
    text: 'Experience with task-oriented data workflows including annotation, evaluation and content-related projects.',
  },
  {
    name: 'RWS / TRAINAI',
    category: 'DATA · ANNOTATION · MULTIMODAL AI',
    text: 'Experience with professional AI-data workflows involving annotation, classification, evaluation and validation.',
  },
];

const personalGallery = [
  { image: portraitStudyOne, alt: 'Yusuf Hussaini working at a laptop', label: 'FOCUS / 001', layout: 'gallery-photo-one' },
  { image: portraitStudyTwo, alt: 'Yusuf Hussaini outdoors', label: 'MOMENTUM / 002', layout: 'gallery-photo-two' },
  { image: portraitStudyThree, alt: 'Yusuf Hussaini taking notes beside a laptop', label: 'PROCESS / 003', layout: 'gallery-photo-three' },
  { image: portraitStudyFour, alt: 'Yusuf Hussaini working at a desk', label: 'BUILD / 004', layout: 'gallery-photo-four' },
  { image: portraitStudyFive, alt: 'Yusuf Hussaini standing in a creative workspace', label: 'PRESENCE / 005', layout: 'gallery-photo-five' },
];

const stack = [
  {
    group: 'FRONTEND',
    items: 'React · JavaScript · HTML · CSS · Tailwind CSS',
    detail: 'Interfaces that give structure to complex ideas.',
    position: 'top-[4%] left-[18%]',
    color: 'gold',
  },
  {
    group: 'BACKEND',
    items: 'Node.js · Python · PHP',
    detail: 'Practical systems from the interface down.',
    position: 'top-[33%] left-[3%]',
    color: 'green',
  },
  {
    group: 'DATA & INFRASTRUCTURE',
    items: 'PostgreSQL · Firebase · REST APIs · Git · GitHub · Vercel',
    detail: 'The connective tissue that keeps products moving.',
    position: 'top-[68%] left-[15%]',
    color: 'ivory',
  },
  {
    group: 'WEB3',
    items: 'Solidity · EVM · MetaMask · BlockDAG',
    detail: 'Exploring useful applications of decentralized technology.',
    position: 'top-[30%] right-[2%]',
    color: 'gold',
  },
  {
    group: 'CREATIVE & VISUAL',
    items: 'Three.js · Chart.js · UI/UX Design',
    detail: 'A visual layer for data, products and stories.',
    position: 'top-[68%] right-[12%]',
    color: 'green',
  },
  {
    group: 'AI',
    items: 'Prompt Engineering · AI Evaluation · Data Annotation · Human Feedback',
    detail: 'Building and checking the data that trains it.',
    position: 'top-[15%] right-[28%]',
    color: 'ivory',
  },
];

function SectionLabel({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <div className={`flex items-center gap-3 font-mono-ui text-[10px] tracking-[0.22em] ${dark ? 'text-[#d5ae61]' : 'text-[#536b5c]'}`}>
      <span className={`h-px w-8 ${dark ? 'bg-[#d5ae61]' : 'bg-[#b89453]'}`} />
      <span>{children}</span>
    </div>
  );
}

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.8, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

function GlassNav({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (value: boolean) => void }) {
  const links = [
    ['01', 'Work', '#work'],
    ['02', 'AI data', '#ai'],
    ['03', 'Stack', '#stack'],
    ['04', 'About', '#about'],
  ];
  const goTo = () => setMenuOpen(false);
  return (
    <header className="fixed left-1/2 top-5 z-40 w-[calc(100%-2rem)] max-w-[1240px] -translate-x-1/2">
      <nav className="glass-nav flex items-center justify-between rounded-full px-4 py-3 shadow-[0_18px_60px_rgba(31,52,42,0.08)] sm:px-6" aria-label="Primary navigation">
        <a href="#top" onClick={goTo} className="flex items-center gap-2.5" data-testid="link-brand">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#19372b] font-display text-lg italic text-[#e8ca8e]">Y</span>
          <span className="font-mono-ui text-[11px] font-medium tracking-[0.13em] text-[#19372b]">YUS’STYLE™</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([number, label, href]) => (
            <a key={href} href={href} className="group flex items-center gap-2 text-[11px] font-semibold tracking-[0.08em] text-[#536056] transition-colors hover:text-[#19372b]" data-testid={`link-nav-${label.toLowerCase().replace(' ', '-')}`}>
              <span className="font-mono-ui text-[9px] text-[#b89453]">{number}</span>
              <span>{label}</span>
            </a>
          ))}
        </div>
        <a href="#contact" className="hidden items-center gap-2 rounded-full bg-[#19372b] px-4 py-2.5 text-[10px] font-bold tracking-[0.11em] text-[#f4efdf] transition-transform hover:-translate-y-0.5 md:flex" data-testid="link-nav-contact">
          LET’S TALK <ArrowUpRight size={13} />
        </a>
        <button className="rounded-full p-2 text-[#19372b] md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} data-testid="button-mobile-menu">
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="glass-nav mt-2 rounded-[1.5rem] p-4 shadow-[0_18px_60px_rgba(31,52,42,0.12)] md:hidden">
            {links.map(([number, label, href]) => (
              <a key={href} href={href} onClick={goTo} className="flex items-center justify-between border-b border-[#19372b]/10 px-2 py-4 text-sm font-semibold text-[#19372b]" data-testid={`link-mobile-${label.toLowerCase().replace(' ', '-')}`}>
                <span>{label}</span><span className="font-mono-ui text-[10px] text-[#b89453]">{number}</span>
              </a>
            ))}
            <a href="#contact" onClick={goTo} className="mt-3 flex items-center justify-between rounded-full bg-[#19372b] px-4 py-3 text-[11px] font-bold tracking-[0.1em] text-[#f4efdf]" data-testid="link-mobile-contact">LET’S TALK <ArrowUpRight size={14} /></a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function EditorialPortrait() {
  return (
    <div className="portrait-frame relative aspect-[4/5] w-full max-w-[370px] overflow-hidden rounded-[14rem_14rem_1.5rem_1.5rem] border border-[#d5ae61]/65 bg-[#234638]" data-testid="image-editorial-portrait" aria-label="Portrait of Yusuf Hussaini">
      <img src={portraitPhoto} alt="Yusuf Hussaini working at a laptop" className="absolute inset-0 h-full w-full origin-top scale-[1.16] object-cover object-[center_top] saturate-[.82] contrast-[1.04]" />
      <div className="absolute inset-0 bg-[linear-gradient(155deg,rgba(21,45,37,.18),rgba(21,45,37,.08)_40%,rgba(16,28,27,.58))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_26%,rgba(224,192,125,.36),transparent_16%)] mix-blend-screen" />
      <div className="absolute -right-16 top-9 h-64 w-64 rounded-full border border-[#e8ca8e]/30" />
      <div className="absolute -right-4 top-24 h-48 w-48 rounded-full border border-[#e8ca8e]/20" />
      <div className="absolute bottom-[14%] left-6 font-mono-ui text-[9px] tracking-[0.18em] text-[#e8ca8e]">YH / DIGITAL ENGINEERING</div>
      <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#e8ca8e]/60 font-display text-2xl italic text-[#e8ca8e]">Y</div>
    </div>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  const tone = project.tone === 'green' ? '#1d4033' : project.tone === 'gold' ? '#b99457' : '#202b2a';
  const isScreenshot = project.imageKind === 'screenshot';
  return (
    <div className="project-art relative h-full min-h-[310px] overflow-hidden" style={{ backgroundColor: tone }}>
      <img src={project.image} alt={isScreenshot ? `Screenshot of the ${project.name} website` : `${project.name} visual study`} className={`absolute inset-0 h-full w-full object-cover ${isScreenshot ? 'opacity-100' : 'opacity-80 mix-blend-soft-light'}`} />
      <div className={`absolute inset-0 ${isScreenshot ? 'bg-[linear-gradient(145deg,rgba(15,36,29,.08),rgba(15,36,29,.28))]' : 'bg-[linear-gradient(145deg,rgba(15,36,29,.25),rgba(15,36,29,.72))]'}`} />
      <div className="absolute inset-0 opacity-60" style={{ backgroundImage: 'linear-gradient(125deg, transparent 35%, rgba(236,211,154,.34) 35.2%, transparent 35.6%), linear-gradient(25deg, transparent 54%, rgba(236,211,154,.18) 54.2%, transparent 54.6%)' }} />
      <div className="absolute left-[15%] top-[18%] h-44 w-44 rounded-full border border-[#ecd39a]/45" />
      <div className="absolute left-[23%] top-[26%] h-28 w-28 rounded-full border border-[#ecd39a]/30" />
      <div className="absolute bottom-[-18%] right-[-8%] h-64 w-64 rounded-full border-[1px] border-[#ecd39a]/25" />
      <div className="absolute left-7 top-7 font-mono-ui text-[10px] tracking-[0.16em] text-[#f0ddb1]/80">PROJECT / {project.number}</div>
      <div className="absolute bottom-8 left-7 font-display text-[5rem] italic leading-none text-[#f0ddb1]/80">{project.mark}</div>
      <div className="absolute bottom-8 right-7 flex h-10 w-10 items-center justify-center rounded-full border border-[#f0ddb1]/50 text-[#f0ddb1]"><ArrowUpRight size={17} /></div>
    </div>
  );
}

function ProjectCard({ project, onSelect }: { project: Project; onSelect: (project: Project) => void }) {
  return (
    <motion.button whileHover={{ y: -6 }} transition={{ duration: .45 }} onClick={() => onSelect(project)} className="project-card group grid w-full overflow-hidden rounded-[1.4rem] border border-[#19372b]/10 bg-[#e6dfce] text-left md:grid-cols-[.92fr_1.08fr]" data-testid={`card-project-${project.name}`}>
      <div className="order-2 flex flex-col justify-between p-6 sm:p-8 md:order-1 md:p-10">
        <div>
          <div className="mb-10 flex items-center justify-between">
            <span className="font-mono-ui text-[10px] tracking-[0.2em] text-[#b89453]">{project.number}</span>
            <span className="font-mono-ui text-[9px] tracking-[0.1em] text-[#657167]">SELECTED WORK</span>
          </div>
          <h3 className="font-display text-5xl italic leading-[.9] text-[#19372b] sm:text-6xl">{project.name}</h3>
          <p className="mt-6 max-w-md text-sm leading-7 text-[#536056]">{project.description}</p>
        </div>
        <div className="mt-12 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono-ui text-[9px] tracking-[0.13em] text-[#b89453]">{project.category}</p>
            <p className="mt-2 text-xs font-semibold text-[#19372b]">{project.role}</p>
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#19372b]/20 text-[#19372b] transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-[#19372b] group-hover:text-[#e6dfce]"><ArrowUpRight size={16} /></span>
        </div>
      </div>
      <div className="order-1 min-h-[310px] overflow-hidden md:order-2"><ProjectVisual project={project} /></div>
    </motion.button>
  );
}

function AIWorkflow() {
  const steps = ['DATA', 'ANNOTATION', 'EVALUATION', 'MODEL'];
  const [active, setActive] = useState(2);
  return (
    <div className="ai-workflow relative overflow-hidden rounded-[1.5rem] border border-[#d5ae61]/25 bg-[#19372b] p-5 sm:p-8" style={{ backgroundImage: `linear-gradient(135deg, rgba(25,55,43,.91), rgba(13,29,29,.88)), url(${aiWorkflowBackground})` }} data-testid="display-ai-workflow">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#d5ae61]/20" />
      <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full border border-[#d5ae61]/10" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="font-mono-ui text-[9px] tracking-[0.2em] text-[#d5ae61]">HUMAN-IN-THE-LOOP / 001</span>
          <span className="flex items-center gap-2 font-mono-ui text-[9px] text-[#bdcbbd]"><span className="h-1.5 w-1.5 rounded-full bg-[#d5ae61]" /> ACTIVE LOOP</span>
        </div>
        <div className="my-12 grid grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-y-0">
          {steps.map((step, index) => (
            <button key={step} onClick={() => setActive(index)} className="group relative text-left" data-testid={`button-ai-step-${step.toLowerCase()}`}>
              {index < steps.length - 1 && <span className="absolute left-[54%] top-5 hidden h-px w-[92%] bg-[#d5ae61]/25 sm:block" />}
              <span className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border font-mono-ui text-[10px] transition-colors ${active === index ? 'border-[#d5ae61] bg-[#d5ae61] text-[#19372b]' : 'border-[#d5ae61]/45 bg-[#19372b] text-[#d5ae61] group-hover:bg-[#2d5545]'}`}>{String(index + 1).padStart(2, '0')}</span>
              <span className={`mt-4 block font-display text-3xl italic transition-colors ${active === index ? 'text-[#f4efdf]' : 'text-[#8ca094] group-hover:text-[#d8e2d3]'}`}>{step}</span>
            </button>
          ))}
        </div>
        <div className="border-t border-[#d5ae61]/20 pt-5">
          <p className="max-w-xl text-sm leading-7 text-[#c7d3c6]">
            {active === 0 && 'Raw information enters the workflow as text, images, audio and other forms of digital data.'}
            {active === 1 && 'Information is transformed into structured, labeled data suitable for machine-learning workflows.'}
            {active === 2 && 'Prompts and model outputs are assessed for relevance, accuracy, reasoning quality and instruction adherence.'}
            {active === 3 && 'The loop supports human feedback and model improvement through reliable, guideline-driven data work.'}
          </p>
        </div>
      </div>
    </div>
  );
}

function StackConstellation() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="relative min-h-[620px] overflow-hidden rounded-[1.6rem] border border-[#19372b]/15 bg-[#d8d5c5] p-5 sm:p-8" data-testid="display-stack-constellation">
      <div className="absolute inset-0 opacity-40 hero-grid" />
      <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 800 620" fill="none" preserveAspectRatio="none" aria-hidden="true">
        <path d="M165 102 L400 297 L642 190 M110 334 L400 297 L662 420 M174 515 L400 297 L610 534" stroke="#19372b" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="400" cy="297" r="110" stroke="#b89453" strokeOpacity=".5" />
        <circle cx="400" cy="297" r="170" stroke="#19372b" strokeOpacity=".18" />
      </svg>
      <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#b89453] bg-[#19372b] text-center shadow-[0_16px_40px_rgba(25,55,43,.18)]">
        <span className="font-mono-ui text-[9px] tracking-[0.16em] text-[#d5ae61]">THE STACK</span>
        <span className="mt-2 font-display text-4xl italic text-[#f4efdf]">in motion</span>
      </div>
      {stack.map((item, index) => (
        <button key={item.group} onClick={() => setSelected(index)} className={`constellation-node absolute z-10 w-[42%] rounded-xl border p-3 text-left sm:w-[32%] sm:p-4 ${item.position} ${selected === index ? 'border-[#b89453] bg-[#19372b] text-[#f4efdf] shadow-[0_12px_30px_rgba(25,55,43,.15)]' : 'border-[#19372b]/15 bg-[#e7e3d5]/85 text-[#19372b]'}`} data-testid={`button-stack-${item.group.toLowerCase().replace(/[^a-z]+/g, '-')}`}>
          <span className={`font-mono-ui text-[8px] tracking-[0.12em] ${selected === index ? 'text-[#d5ae61]' : 'text-[#657167]'}`}>{item.group}</span>
          <span className="mt-2 block text-[10px] font-semibold leading-4 sm:text-[11px]">{item.items}</span>
          {selected === index && <span className="mt-2 block text-[9px] leading-4 text-[#bdcbbd]">{item.detail}</span>}
        </button>
      ))}
      <div className="absolute bottom-5 left-5 font-mono-ui text-[9px] tracking-[0.12em] text-[#657167] sm:bottom-8 sm:left-8">CLICK A NODE TO TRACE THE THINKING</div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener('hashchange', closeMenu);
    return () => window.removeEventListener('hashchange', closeMenu);
  }, []);

  return (
    <main id="top" className="site-shell min-h-[100dvh] bg-[#e9e4d5] text-[#19372b]">
      <GlassNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <section className="hero-section relative flex min-h-[100dvh] items-end overflow-hidden bg-[#e9e4d5] px-5 pb-14 pt-36 sm:px-10 sm:pb-16 lg:px-16" style={{ backgroundImage: `linear-gradient(90deg, rgba(233,228,213,.98) 0%, rgba(233,228,213,.9) 38%, rgba(233,228,213,.38) 76%, rgba(233,228,213,.55) 100%), url(${heroBackground})` }} aria-labelledby="hero-title">
        <div className="hero-grid absolute inset-0 opacity-50" />
        <div className="hero-orb" />
        <div className="relative z-10 mx-auto grid w-full max-w-[1240px] gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <div className="line-reveal"><div className="delay-1"><SectionLabel>YUS’STYLE™ / DIGITAL ENGINEERING</SectionLabel></div></div>
            <div className="mt-8 line-reveal"><h1 id="hero-title" className="delay-2 max-w-[950px] font-display text-[clamp(3.8rem,9.6vw,9.5rem)] italic leading-[.79] tracking-[-.045em] text-[#19372b]">I build digital<br /><span className="text-[#b89453]">systems</span> that move<br />ideas forward.</h1></div>
            <div className="mt-10 flex max-w-xl items-start gap-5 line-reveal">
              <div className="delay-3 mt-2 h-px w-16 shrink-0 bg-[#b89453]" />
              <p className="delay-3 text-pretty text-sm leading-7 text-[#536056]">Software Engineer. Full-Stack Developer. AI Data Specialist. Product Builder. I design and build digital experiences at the intersection of software engineering, artificial intelligence, data, and emerging technology.</p>
            </div>
            <div className="mt-9 flex flex-wrap gap-3 line-reveal">
              <a href="#work" className="delay-4 inline-flex items-center gap-3 rounded-full bg-[#19372b] px-5 py-3 text-[10px] font-bold tracking-[0.13em] text-[#f4efdf] transition-transform hover:-translate-y-1" data-testid="link-hero-work">EXPLORE MY WORK <ArrowDownRight size={15} /></a>
              <a href="#contact" className="delay-4 inline-flex items-center gap-3 rounded-full border border-[#19372b]/25 px-5 py-3 text-[10px] font-bold tracking-[0.13em] text-[#19372b] transition-colors hover:border-[#19372b] hover:bg-[#19372b]/5" data-testid="link-hero-contact">LET’S WORK TOGETHER <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <div className="relative flex justify-end lg:pb-3">
              <div className="relative w-full max-w-[370px]">
              <EditorialPortrait />
                <div className="absolute -bottom-5 -left-3 rounded-full border border-[#19372b]/20 bg-[#e9e4d5]/85 px-4 py-3 font-mono-ui text-[9px] tracking-[0.13em] text-[#536056] backdrop-blur-sm sm:-left-12"><span className="mr-2 text-[#b89453]">●</span>YUSUF HUSSAINI / PORTRAIT</div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-5 right-6 hidden items-center gap-3 font-mono-ui text-[9px] tracking-[0.16em] text-[#657167] lg:flex"><span className="h-8 w-px bg-[#b89453]" />SCROLL TO EXPLORE</div>
      </section>

      <section id="work" className="bg-[#19372b] px-5 py-24 text-[#f4efdf] sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-[1240px]">
          <Reveal><SectionLabel dark>01 / SELECTED WORK</SectionLabel></Reveal>
          <div className="mt-8 grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
            <Reveal delay={.08}><h2 className="max-w-xl font-display text-[clamp(3.5rem,7vw,7rem)] italic leading-[.82] tracking-[-.04em]">Ideas,<br /><span className="text-[#d5ae61]">made</span><br />usable.</h2></Reveal>
            <Reveal delay={.15}><p className="max-w-md text-sm leading-7 text-[#b8c7b9] lg:justify-self-end">From university technology platforms to Web3 products, these are the digital systems I’m shaping across the layers required to turn an idea into a functional digital experience.</p></Reveal>
          </div>
          <div className="mt-20 space-y-5">
            {projects.map((project, index) => <Reveal key={project.name} delay={index * .05}><ProjectCard project={project} onSelect={setSelectedProject} /></Reveal>)}
          </div>
        </div>
      </section>

      <section id="ai" className="relative overflow-hidden bg-[#e9e4d5] px-5 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-[1240px]">
          <Reveal><SectionLabel>02 / BEYOND CODE</SectionLabel></Reveal>
          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-24">
            <Reveal delay={.08}><h2 className="font-display text-[clamp(3.4rem,7vw,7.6rem)] italic leading-[.8] tracking-[-.04em] text-[#19372b]">I don’t only<br />build <span className="text-[#b89453]">software.</span></h2></Reveal>
            <Reveal delay={.14}><div className="pt-3"><p className="max-w-lg text-[1.05rem] leading-8 text-[#536056]">I help build the <em className="font-display text-2xl text-[#19372b]">data</em> that trains it. My work extends into AI data annotation, AI evaluation and human-in-the-loop model improvement.</p><div className="mt-8 flex flex-wrap gap-2">{['ANNOTATE', 'EVALUATE', 'VALIDATE', 'IMPROVE'].map((item) => <span key={item} className="rounded-full border border-[#19372b]/15 px-3 py-2 font-mono-ui text-[9px] tracking-[0.14em] text-[#536056]">{item}</span>)}</div></div></Reveal>
          </div>
          <div className="mt-20 grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <Reveal><div><p className="font-mono-ui text-[10px] tracking-[0.18em] text-[#b89453]">AI DATA & MODEL EVALUATION</p><p className="mt-5 max-w-xs text-sm leading-7 text-[#536056]">Practical experience evaluating AI outputs, annotation, classification, quality assessment and guideline-driven data work.</p></div></Reveal>
            <Reveal delay={.1}><AIWorkflow /></Reveal>
          </div>
          <div className="mt-20 border-t border-[#19372b]/15 pt-7">
            <div className="mb-7 flex items-center justify-between"><p className="font-mono-ui text-[10px] tracking-[0.18em] text-[#b89453]">AI TASKING EXPERIENCE</p><span className="font-mono-ui text-[9px] tracking-[0.12em] text-[#657167]">04 WORKFLOWS</span></div>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-[#19372b]/10 bg-[#19372b]/10 md:grid-cols-2">{tasking.map((item, index) => <Reveal key={item.name} delay={index * .04} className="bg-[#e3ddcc] p-6 sm:p-8"><p className="font-display text-3xl italic text-[#19372b]">{item.name}</p><p className="mt-4 font-mono-ui text-[9px] tracking-[0.1em] text-[#b89453]">{item.category}</p><p className="mt-5 text-sm leading-6 text-[#536056]">{item.text}</p></Reveal>)}</div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-[#19372b]/10 bg-[#d5d0bf] py-5">
        <div className="marquee flex w-max items-center gap-10 whitespace-nowrap font-display text-3xl italic text-[#19372b]/70 sm:text-4xl">
          <span>DATA → ANNOTATION → EVALUATION → MODEL</span><span className="text-[#b89453]">·</span><span>DATA → ANNOTATION → EVALUATION → MODEL</span><span className="text-[#b89453]">·</span>
        </div>
      </section>

      <section id="stack" className="bg-[#d5d0bf] px-5 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-[1240px]">
          <Reveal><SectionLabel>03 / ENGINEERING STACK</SectionLabel></Reveal>
          <div className="mt-8 grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <Reveal delay={.08}><h2 className="font-display text-[clamp(3.6rem,7vw,7.5rem)] italic leading-[.8] tracking-[-.04em] text-[#19372b]">Many layers.<br /><span className="text-[#b89453]">One</span><br />point of view.</h2></Reveal>
            <Reveal delay={.14}><p className="max-w-md text-sm leading-7 text-[#536056] lg:justify-self-end">I work across the stack required to turn ideas into useful, considered digital experiences. Click a node to trace the thinking behind each layer.</p></Reveal>
          </div>
          <div className="mt-16"><Reveal><StackConstellation /></Reveal></div>
        </div>
      </section>

      <section id="about" className="bg-[#e9e4d5] px-5 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-[1240px]">
          <Reveal><SectionLabel>04 / THE TASKER BEHIND THE DATA</SectionLabel></Reveal>
          <div className="mt-8 grid gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-28">
            <Reveal delay={.08}><div><h2 className="font-display text-[clamp(3.5rem,7vw,7.2rem)] italic leading-[.8] tracking-[-.04em] text-[#19372b]">Precision<br />is the<br /><span className="text-[#b89453]">skill.</span></h2><p className="mt-10 max-w-sm text-sm leading-7 text-[#536056]">I approach task-based AI work with the same mindset I bring to software engineering. I am comfortable working with detailed guidelines, adapting to new task environments and maintaining consistency across large volumes of work.</p></div></Reveal>
            <Reveal delay={.15}><div className="relative pl-7 sm:pl-12"><div className="timeline-line absolute left-0 top-2 h-[calc(100%-1rem)] w-px" /><p className="font-display text-3xl italic text-[#19372b]">Understand <span className="text-[#b89453]">→</span> Analyze <span className="text-[#b89453]">→</span> Execute <span className="text-[#b89453]">→</span> Validate <span className="text-[#b89453]">→</span> Deliver</p><div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3">{['Detail-oriented.', 'Fast learner.', 'Technically minded.', 'Quality focused.', 'Adaptable.', 'Reliable.'].map((trait) => <div key={trait} className="flex items-center gap-2 text-sm font-semibold text-[#536056]"><Check size={14} className="text-[#b89453]" />{trait}</div>)}</div></div></Reveal>
          </div>

          <div className="mt-24 grid gap-12 border-t border-[#19372b]/15 pt-14 lg:grid-cols-[1.18fr_.82fr] lg:items-start">
            <Reveal>
              <div className="people-gallery" aria-label="Portraits of Yusuf Hussaini">
                {personalGallery.map((photo) => (
                  <figure key={photo.label} className={`people-gallery-item ${photo.layout}`}>
                    <img src={photo.image} alt={photo.alt} loading="lazy" />
                    <figcaption>{photo.label}</figcaption>
                  </figure>
                ))}
              </div>
            </Reveal>
            <Reveal delay={.12}>
              <div className="motivation-panel relative overflow-hidden rounded-[1.5rem] p-7 sm:p-10 lg:pt-10" style={{ backgroundImage: `linear-gradient(145deg, rgba(16,36,29,.9), rgba(16,36,29,.7)), url(${portraitStudyTwo})` }}>
                <SectionLabel dark>THE PERSON BEHIND THE BUILD</SectionLabel>
                <h3 className="mt-8 max-w-md font-display text-[clamp(3rem,5vw,5.2rem)] italic leading-[.86] tracking-[-.04em] text-[#f4efdf]">Keep learning.<br /><span className="text-[#d5ae61]">Keep building.</span><br />Keep moving.</h3>
                <p className="mt-8 max-w-md text-sm leading-7 text-[#d2dbd1]">Every idea starts somewhere. I keep showing up to understand the problem, learn the layer I do not know yet, and turn the next good question into something real.</p>
                <p className="mt-5 max-w-md border-l border-[#d5ae61] pl-5 font-display text-2xl italic leading-tight text-[#f4efdf]">Build with patience. Move with purpose. Let the work speak.</p>
                <div className="mt-8 flex flex-wrap gap-2">{['LEARN', 'MAKE', 'REFINE', 'REPEAT'].map((word) => <span key={word} className="rounded-full border border-[#d5ae61]/40 px-3 py-2 font-mono-ui text-[9px] tracking-[0.14em] text-[#e8ca8e]">{word}</span>)}</div>
              </div>
            </Reveal>
          </div>

          <div className="mt-28 grid gap-16 border-t border-[#19372b]/15 pt-14 md:grid-cols-3">
            <Reveal><SectionLabel>EXPERIENCE</SectionLabel><h3 className="mt-7 font-display text-4xl italic text-[#19372b]">Full-Stack Developer</h3><p className="mt-2 font-mono-ui text-[10px] tracking-[0.12em] text-[#b89453]">STEMLAB</p><p className="mt-5 text-sm leading-7 text-[#536056]">Building and contributing to software products using modern full-stack technologies, with an emphasis on practical digital solutions and user-focused experiences.</p></Reveal>
            <Reveal delay={.08}><SectionLabel>EDUCATION</SectionLabel><h3 className="mt-7 font-display text-4xl italic text-[#19372b]">Federal University Dutse</h3><p className="mt-2 font-mono-ui text-[10px] tracking-[0.12em] text-[#b89453]">B.SC. SOFTWARE ENGINEERING / EXPECTED GRADUATION — 2027</p><p className="mt-5 text-sm leading-7 text-[#536056]">My academic foundation spans software development, algorithms, computer architecture, data science, software design and modern application development.</p></Reveal>
            <Reveal delay={.16}><SectionLabel>CERTIFICATION</SectionLabel><h3 className="mt-7 font-display text-4xl italic text-[#19372b]">AI Prompt Engineering</h3><p className="mt-2 font-mono-ui text-[10px] tracking-[0.12em] text-[#b89453]">TECHCRUSH</p><div className="mt-10 border-t border-[#19372b]/15 pt-5"><p className="font-mono-ui text-[10px] tracking-[0.14em] text-[#b89453]">LEADERSHIP</p><p className="mt-3 text-sm leading-6 text-[#536056]">Class Representative · NACOS PRO · NASES P.R.O.</p><p className="mt-3 text-xs leading-6 text-[#536056]">These experiences strengthened my communication, coordination, teamwork and leadership abilities.</p></div></Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#19372b] px-5 py-24 text-[#f4efdf] sm:px-10 sm:py-32 lg:px-16">
        <div className="absolute right-[-10%] top-[-30%] h-[620px] w-[620px] rounded-full border border-[#d5ae61]/15" /><div className="absolute right-[5%] top-[-17%] h-[420px] w-[420px] rounded-full border border-[#d5ae61]/10" />
        <div className="relative mx-auto max-w-[1240px]">
          <Reveal><SectionLabel dark>05 / CURRENTLY BUILDING</SectionLabel></Reveal>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_.9fr]"><Reveal delay={.08}><h2 className="font-display text-[clamp(4rem,9vw,9.5rem)] italic leading-[.76] tracking-[-.05em]">Software.<br />AI.<br /><span className="text-[#d5ae61]">Products.</span><br />Ideas.</h2></Reveal><Reveal delay={.16} className="flex items-end"><div><p className="max-w-md text-sm leading-8 text-[#bdcbbd]">I am continuously exploring the intersection between software engineering, artificial intelligence, data and emerging technology.</p><p className="mt-10 border-l border-[#d5ae61] pl-5 font-display text-3xl italic leading-tight text-[#f4efdf]">The goal isn’t simply to write more code.<br /><span className="text-[#d5ae61]">The goal is to build things that matter.</span></p></div></Reveal></div>
        </div>
      </section>

      <footer id="contact" className="bg-[#e9e4d5] px-5 pb-8 pt-24 sm:px-10 sm:pt-32 lg:px-16">
        <div className="mx-auto max-w-[1240px]">
          <Reveal><SectionLabel>06 / YUS’STYLE™</SectionLabel></Reveal>
          <div className="mt-10 grid gap-14 lg:grid-cols-[1fr_.75fr] lg:items-end">
            <Reveal delay={.08}><div><h2 className="max-w-4xl font-display text-[clamp(4rem,10vw,10rem)] italic leading-[.75] tracking-[-.05em] text-[#19372b]">Let’s build<br /><span className="text-[#b89453]">something</span><br />exceptional.</h2><p className="mt-9 max-w-md text-sm leading-7 text-[#536056]">Yusuf Hussaini — Full-Stack Developer · AI Data Specialist · Product Builder</p></div></Reveal>
            <Reveal delay={.15}><div className="lg:justify-self-end"><p className="font-mono-ui text-[10px] tracking-[0.18em] text-[#b89453]">OPEN TO A GOOD PROBLEM</p><div className="mt-6 space-y-3"><a href="mailto:Yusufhussaini0904@gmail.com" className="group flex items-center gap-3 text-base text-[#19372b] hover:text-[#b89453]" data-testid="link-email"><Mail size={16} /> Yusufhussaini0904@gmail.com <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a><a href="tel:+2349136453820" className="flex items-center gap-3 text-sm text-[#536056] hover:text-[#19372b]" data-testid="link-phone-primary"><Phone size={15} /> +2349136453820</a><a href="tel:+2349047864019" className="flex items-center gap-3 text-sm text-[#536056] hover:text-[#19372b]" data-testid="link-phone-secondary"><Phone size={15} /> +2349047864019</a><a href="https://x.com/yusstyle13" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-[#536056] hover:text-[#19372b]" data-testid="link-social-x"><span className="font-mono-ui text-[14px]">𝕏</span> @yusstyle13 <ExternalLink size={13} /></a></div></div></Reveal>
          </div>
          <div className="mt-28 flex flex-col justify-between gap-5 border-t border-[#19372b]/15 pt-5 font-mono-ui text-[9px] tracking-[0.13em] text-[#657167] sm:flex-row"><span>YUS’STYLE™ / MORE THAN A NAME. IT’S A MOVEMENT.</span><span>SOFTWARE × AI × PRODUCT</span><span>© YUSUF HUSSAINI</span></div>
        </div>
      </footer>

      <AnimatePresence>
        {selectedProject && (
          <motion.div className="fixed inset-0 z-50 flex items-end justify-center bg-[#10231c]/50 p-4 backdrop-blur-sm sm:items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} data-testid="dialog-project-detail">
            <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 35 }} onClick={(event) => event.stopPropagation()} className="relative max-h-[90dvh] w-full max-w-2xl overflow-auto rounded-[1.5rem] bg-[#e9e4d5] p-7 text-[#19372b] shadow-[0_24px_90px_rgba(9,22,17,.25)] sm:p-10">
              <button onClick={() => setSelectedProject(null)} className="absolute right-5 top-5 rounded-full border border-[#19372b]/15 p-2 hover:bg-[#19372b]/5" aria-label="Close project detail" data-testid="button-close-project"><X size={17} /></button>
              <span className="font-mono-ui text-[10px] tracking-[0.18em] text-[#b89453]">{selectedProject.number} / {selectedProject.category}</span>
              <h3 className="mt-8 font-display text-6xl italic leading-[.82] sm:text-8xl">{selectedProject.name}</h3>
              <p className="mt-8 max-w-lg text-base leading-8 text-[#536056]">{selectedProject.description}</p>
              <div className="mt-10 border-t border-[#19372b]/15 pt-5"><span className="font-mono-ui text-[9px] tracking-[0.14em] text-[#b89453]">ROLE</span><p className="mt-2 text-sm font-semibold">{selectedProject.role}</p></div>
              {selectedProject.link && <a href={selectedProject.link} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#19372b] px-5 py-3 font-mono-ui text-[10px] font-bold tracking-[0.12em] text-[#f4efdf] transition-transform hover:-translate-y-0.5" data-testid="link-project-live">VIEW LIVE PROJECT <ArrowUpRight size={14} /></a>}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;