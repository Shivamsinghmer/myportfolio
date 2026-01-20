# [Shivam Singh Mer](https://github.com/Shivamsinghmer) — Full Stack Developer

A high-performance, aesthetically driven personal portfolio built with cutting-edge web technologies. This project showcases my engineering journey, selected works, and live contributions with a focus on premium user experience, modern design patterns, and smooth motion design.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🚀 Tech Stack

### Core Framework
- **[Next.js 16](https://nextjs.org/)** - App Router, React Server Components, optimized build pipeline
- **[React 19](https://react.dev/)** - Latest React features with improved performance

### Styling & Design
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework with custom design tokens
- **[tailwind-scrollbar](https://www.npmjs.com/package/tailwind-scrollbar)** - Custom scrollbar styling
- **[clsx](https://github.com/lukeed/clsx)** & **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Dynamic class name management

### Animation & Interaction
- **[Framer Motion 12](https://www.framer.com/motion/)** - Production-ready animation library
- **[Lenis](https://lenis.darkroom.engineering/)** - Smooth scroll library for cinematic experiences

### UI Components
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon set
- **Custom Glassmorphic Components** - Handcrafted UI with premium aesthetics

### Utilities
- **[date-fns](https://date-fns.org/)** - Modern date utility library
- **[PostCSS](https://postcss.org/)** & **[Autoprefixer](https://github.com/postcss/autoprefixer)** - CSS processing

## ✨ Key Features

### Design & UX
- **🎨 Premium Glassmorphic UI** - Dark-themed design language with `backdrop-blur`, subtle gradients, and depth layering
- **✨ Micro-interactions** - Fluid animations, hover effects, and state transitions powered by Framer Motion
- **🌊 Smooth Scrolling** - Cinematic scroll experience implemented with Lenis
- **📱 Fully Responsive** - Optimized for mobile, tablet, and desktop with adaptive layouts
- **🌓 Theme Support** - System-aware dark/light mode with smooth transitions

### Content & Functionality
- **📊 Live GitHub Stats** - Real-time contribution graph and activity feed
- **⏰ Dynamic Clock** - Live time display with elegant typography
- **🛠️ Interactive Tech Stack** - Visual showcase of technologies with tooltips and animations
- **✅ Verified Badges** - Professional verification indicators
- **📧 Contact Form** - Integrated contact system with modal UI
- **🎯 SEO Optimized** - Semantic HTML, meta tags, and optimized assets

### Performance & Code Quality
- **⚡ Optimized Build** - Code splitting, lazy loading, and tree shaking
- **♿ Accessibility** - ARIA-compliant components and semantic HTML
- **🧹 ESLint Integration** - Code quality enforcement with React best practices
- **🎭 Component Architecture** - Well-organized, reusable, and maintainable code structure

## 🛠️ Project Structure

```bash
myportfolio/
├── public/              # Static assets (images, videos, fonts)
│   ├── bg.mp4          # Background video
│   └── ...
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── layout.jsx  # Root layout with global providers
│   │   ├── page.jsx    # Homepage
│   │   └── globals.css # Global styles and Tailwind imports
│   ├── components/
│   │   ├── features/   # Feature-specific components
│   │   │   ├── header/        # Hero section
│   │   │   ├── about/         # About section with persona
│   │   │   ├── experience/    # Work experience timeline
│   │   │   ├── projects/      # Project showcase
│   │   │   ├── github/        # GitHub activity section
│   │   │   └── contact/       # Contact form & footer
│   │   ├── layout/     # Layout components
│   │   │   ├── Navbar.jsx     # Navigation bar with theme toggle
│   │   │   ├── Footer.jsx     # Site footer
│   │   │   └── ClientLayout.jsx # Client-side layout wrapper
│   │   ├── ui/         # Reusable UI components
│   │   │   ├── background/    # Background effects (video, gradients)
│   │   │   ├── SmoothScroll.jsx # Lenis scroll wrapper
│   │   │   ├── Tooltip.jsx    # Custom tooltip component
│   │   │   └── ...
│   │   └── icons/      # Custom SVG icons
│   ├── context/        # React Context providers
│   │   └── ThemeContext.jsx   # Theme state management
│   ├── data/           # Static content
│   │   ├── projects.js        # Project portfolio data
│   │   └── experience.js      # Work experience data
│   └── lib/            # Utility functions
│       └── utils.js           # Helper functions (cn, etc.)
├── .env                # Environment variables (gitignored)
├── eslint.config.js    # ESLint configuration
├── next.config.mjs     # Next.js configuration
├── postcss.config.mjs  # PostCSS configuration
├── package.json        # Dependencies and scripts
└── README.md           # You are here!
```

## 🎨 Design Philosophy

The portfolio embodies a **"Polished & Minimal"** aesthetic with these principles:

### Visual Language
- **Glassmorphism**: Layers of translucent cards with `backdrop-blur-xl`, feathered borders, and subtle shadows create depth and hierarchy
- **Dark Mode First**: Carefully selected color palette with WCAG AA+ contrast ratios
- **Premium Typography**: Elegant **Instrument Serif** for headings combined with clean **Inter/Outfit** for body text

### Motion Design
- **Purposeful Animation**: Every transition serves a narrative purpose - staggered reveals, spring physics, and blur-to-clear effects
- **Performance Optimized**: GPU-accelerated transforms, will-change hints, and reduced motion support
- **Scroll-Driven**: Elements respond naturally to viewport position using intersection observers

### Component Design
- **Atomic Design System**: Building from atoms (buttons, inputs) to organisms (header, sections)
- **Composable Patterns**: Reusable components with clear APIs and predictable behavior
- **Accessible by Default**: Keyboard navigation, focus management, and screen reader support

## 🏁 Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18.17 or higher recommended) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** / **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Shivamsinghmer/myportfolio.git
   cd myportfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables** (if needed):
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Available Scripts

```bash
npm run dev      # Start development server (with hot reload)
npm run build    # Create optimized production build
npm run start    # Start production server
npm run lint     # Run ESLint for code quality checks
```

## 🚀 Deployment

This portfolio is optimized for deployment on modern hosting platforms:

### Vercel (Recommended for Next.js)
1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository on [Vercel](https://vercel.com)
3. Configure environment variables (if any)
4. Deploy! Vercel auto-detects Next.js and optimizes the build

### Other Platforms
- **Netlify**: Works seamlessly with Next.js
- **AWS Amplify**: Full Next.js support with SSR
- **Cloudflare Pages**: Static export compatible
- **Self-hosted**: Use `npm run build` then `npm run start` with a process manager like PM2

### Build Optimization
The production build includes:
- Automatic code splitting
- Image optimization with Next.js Image
- CSS minification and purging
- JavaScript tree shaking
- Static generation where possible

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Shivamsinghmer/myportfolio/issues).

## 📬 Contact

**Shivam Singh Mer**
- GitHub: [@Shivamsinghmer](https://github.com/Shivamsinghmer)
- Website: [Website](https://shivammer.me)
- Email: [Email](mailto:[EMAIL_ADDRESS])

---

Built with ❤️ and ☕ by [Shivam Singh Mer](https://github.com/Shivamsinghmer)
