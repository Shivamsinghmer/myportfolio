
import BRXLabz from "../assets/BRX-Labz.png"
import Softwater from "../assets/Softwater.png"
import portfolio from "../assets/portfolio.png"
import resumind from "../assets/resumind.png"
import xora from "../assets/zora.png"
import apple from "../assets/apple.png"
import solanawallet from "../assets/Solana Wallet Services.jpg"
import securechat from "../assets/securechat.png"
import twitterdapp from "../assets/twitterdapp.png"
import orcstake from "../assets/orcstake.png"

export const roles = [
  {
    company: "BRX Labz",
    role: "Founder / Full Stack Engineer",
    date: "Nov 2025 — Present",
    logo: "BRX",
    description:
      "Founder and developer at BRX Labz, building modern, performance-driven websites and web applications while handling projects end-to-end — from planning and design to development, optimization, and deployment.",
  },
  {
    company: "Freelance",
    role: "Full Stack Engineer",
    date: "Jul 2024 — Oct 2025",
    logo: "FR",
    description:
      "Freelance web developer building modern, responsive websites and web applications, managing projects end-to-end with a focus on performance, usability, and real-world impact.",
  },
];

export const studies = [
  {
    school: "Dr. Virendra Swaroop Institute of Computer Studies",
    course: "Bachelor's degree, Computer Science",
    date: "Jul 2024 — Present",
    logo: "Dr. VSICS",
    grade: "8.0 (till 3rd Sem)",
    description:
      "Activities and societies: Presentation and public speaking.",
  },
  {
    school: "N.L. Memorial Public School",
    course: "Intermediate",
    date: "Apr 2023 — Feb 2024",
    logo: "NLMPS",
    grade: "87%",
    description:
      "Building foundational analytical and learning skills.",
  },
]

export const projects = [
  {
    id: "BRX Labz",
    title: "BRX Labz",
    role: "Full Stack Developer",
    description: "End-to-end digital agency website focused on performance, clarity, and scalability.",
    stack: ["Next.js", "Tailwind CSS", "Node.js", "Vercel", "GSAP", "Motion React"],
    gradient: "from-blue-500 to-indigo-500",
    bgColor: "#222",
    img: BRXLabz,
    live: "https://brxlabz.vercel.app/",
    github: "https://github.com/Shivamsinghmer/BRX-Labz"
  },

  {
    id: "Softwater Technologies",
    title: "Softwater Technologies",
    role: "Full Stack Developer",
    description: "Business website for a water treatment solutions provider.",
    stack: ["Next.js", "Tailwind CSS", "Node.js", "Vercel", "GSAP", "Motion React"],
    gradient: "from-blue-500 to-indigo-500",
    bgColor: "#ACD6F1",
    img: Softwater,
    live: "https://softwatertech.in",
    github: null
  },

  {
    id: "3d Portfolio",
    title: "3D Portfolio",
    role: "Frontend Developer",
    description: "Interactive portfolio website with immersive 3D elements.",
    stack: ["React", "Three.js", "Tailwind CSS", "Node.js", "Vercel", "GSAP", "Motion React"],
    gradient: "from-zinc-600 to-stone-600",
    bgColor: "#000000",
    img: portfolio,
    live: "https://shivamsinghmer.vercel.app/",
    github: "https://github.com/Shivamsinghmer/Portfolio-main"
  },


  {
    id: "OrcStake",
    title: "OrcStake",
    role: "Full Stack Web3 Developer",
    description: "Real-time private chat application using WebSockets.",
    stack: ["Next.js", "Tailwind CSS", "Wagmi", "Viem", "Ethereum", "Node.js", "Vercel", "GSAP", "Motion React"],
    gradient: "from-zinc-600 to-stone-600",
    bgColor: "#111111",
    img: orcstake,
    live: "https://orcstake.vercel.app/",
    github: "https://github.com/Shivamsinghmer/erc20-staking-contract-frontend"
  },

  {
    id: "SecureChat",
    title: "SecureChat",
    role: "Full Stack Developer",
    description: "Real-time private chat application using WebSockets.",
    stack: ["React", "Node.js", "Socket.io", "Tailwind CSS", "Vercel", "GSAP", "Motion React"],
    gradient: "from-zinc-600 to-stone-600",
    bgColor: "#111111",
    img: securechat,
    live: "https://securechat-zeta.vercel.app/",
    github: "https://github.com/Shivamsinghmer/Websocket-SecureChat"
  },

  {
    id: "Apple Landing Page",
    title: "Apple Landing Page",
    role: "Frontend Developer",
    description: "Apple-inspired product landing page with smooth animations.",
    stack: ["React", "Tailwind CSS", "GSAP", "Motion React", "Three.js"],
    gradient: "from-zinc-600 to-stone-600",
    bgColor: "#111111",
    img: apple,
    live: "https://iphone15propage.netlify.app/",
    github: "https://github.com/Shivamsinghmer/Apple_Website"
  },

  {
    id: "Xora",
    title: "Xora",
    role: "Frontend Developer",
    description: "Modern SaaS-style landing page with clean UI.",
    stack: ["React", "Tailwind CSS", "GSAP",],
    gradient: "from-zinc-600 to-stone-600",
    bgColor: "#301934",
    img: xora,
    live: "https://xoraweb.netlify.app/",
    github: "https://github.com/Shivamsinghmer/xora-main"
  },

  {
    id: "Resumind",
    title: "Resumind",
    role: "Full Stack Developer",
    description: "AI-powered resume analysis web application.",
    stack: ["React", "Node.js", "Gemini API", "Tailwind CSS", "Vercel", "GSAP"],
    gradient: "from-zinc-600 to-stone-600",
    bgColor: "#EBC",
    img: resumind,
    live: "https://ai-resume-analyzer-pied-nine.vercel.app/",
    github: "https://github.com/Shivamsinghmer/ai-ResumeAnalyzer"
  },

  {
    id: "Solana Wallet Services",
    title: "Solana Wallet Services",
    role: "Full Stack Web3 Developer",
    description: "Web-based utility services for Solana wallets.",
    stack: ["React", "Web3.js", "Tailwind CSS", "Vercel", "GSAP", "Solana"],
    gradient: "from-zinc-600 to-stone-600",
    bgColor: "#301934",
    img: solanawallet,
    live: null,
    github: "https://github.com/Shivamsinghmer/week-14-solana-services-wallet"
  },

  {
    id: "Twitter Dapp",
    title: "Twitter Dapp",
    role: "Full Stack Web3 Developer",
    description: "Decentralized Twitter-like social media application.",
    stack: ["React", "Web3.js", "Tailwind CSS", "Vercel", "GSAP", "Ethereum"],
    gradient: "from-zinc-600 to-stone-600",
    bgColor: "#002137",
    img: twitterdapp,
    live: "https://twitterdapp.netlify.app/",
    github: "https://github.com/Shivamsinghmer/Twitter-Dapp"
  },
];



export const techStack = [
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", url: "https://www.typescriptlang.org" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", url: "https://nodejs.org" },
  { name: "Bun", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bun/bun-original.svg", url: "https://bun.sh", invertDark: true },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", url: "https://react.dev" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", url: "https://nextjs.org", invertDark: true },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", url: "https://tailwindcss.com" },
  { name: "Shadcn UI", icon: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4", url: "https://ui.shadcn.com", invertDark: true },
  { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg", url: "https://threejs.org", invertDark: true },
  { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", url: "https://redux.js.org" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", url: "https://www.docker.com" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", url: "https://www.mongodb.com" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", url: "https://www.figma.com" },
  { name: "OpenAI", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg", url: "https://openai.com", invertDark: true },
  { name: "NeonDB", icon: "https://images.seeklogo.com/logo-png/48/1/neon-icon-logo-png_seeklogo-482127.png", darkIcon: "https://images.seeklogo.com/logo-png/48/1/neon-icon-logo-png_seeklogo-482127.png", url: "https://neon.tech" },
  { name: "Gemini API", icon: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg", url: "https://deepmind.google/technologies/gemini/" },
  { name: "Motion React", icon: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg", url: "https://motion.dev/" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", url: "https://expressjs.com", invertDark: true },
  { name: "Socket.io", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg", url: "https://socket.io/", invertDark: true },
  { name: "Zustand", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zustand/zustand-original.svg", url: "https://github.com/immerjs/zustand" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", url: "https://www.postgresql.org" },
  { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", url: "https://www.prisma.io" },
  { name: "express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", url: "https://expressjs.com", invertDark: true },
  { name: "GSAP", icon: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg", url: "http://gsap.com/" },
  { name: "Web3.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/web3js/web3js-original.svg", url: "https://web3js.org" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", url: "https://vercel.com", invertDark: true },
  { name: "Solana", icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png", url: "https://solana.com" },
  { name: "Wagmi", icon: "https://res.cloudinary.com/alchemy-website/image/upload/v1694675444/dapp-store/dapp-logos/Wagmi.png", url: "https://wagmi.sh" },
  { name: "Viem", icon: "https://viem.sh/icon-dark.png", url: "https://viem.sh"},
  { name: "Ethereum", icon: "https://ethereum.org/favicon.ico", url: "https://ethereum.org" },
];

export const socialLinks = {
  site: "https://shivammer.me",
  github: "https://github.com/ShivamSinghMer",
  twitter: "https://twitter.com/Shivamsinghmer",
  linkedin: "https://www.linkedin.com/in/shivam-singh-mer02112006",
  instagram: "https://instagram.com/bratt._rex",
  email: "mailto:mershivam02@gmail.com"
};
