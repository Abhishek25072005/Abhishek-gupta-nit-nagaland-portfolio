# Abhishek Gupta — Futuristic Portfolio Website

A premium, futuristic personal portfolio website for **Abhishek Gupta** (Electrical & Electronics Engineering undergraduate at NIT Nagaland, CGPA: 9.11).

Built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide Icons**.

---

## 📁 Project Structure

```
portfolio/
├── dist/                   # Production build ready to deploy (HTML, CSS, JS)
├── public/                 # Static assets
│   ├── portrait.jpg        # Profile portrait of Abhishek
│   └── vite.svg
├── src/
│   ├── components/         # Modular React components
│   │   ├── About.jsx       # About section & animated counters
│   │   ├── Achievements.jsx# Certificates & Achievements dual-tab section
│   │   ├── Activities.jsx  # Bootcamps (Drone, 3D printing) & Leadership
│   │   ├── BackgroundEffect.jsx # Interactive cursor spotlight & particle swarm
│   │   ├── Chatbot.jsx     # AI portfolio assistant with resume knowledge
│   │   ├── Contact.jsx     # Contact form & direct contact details
│   │   ├── Education.jsx   # Academic trajectory timeline
│   │   ├── Experience.jsx  # Practical Experience & Projects timeline
│   │   ├── Footer.jsx      # Minimal futuristic footer
│   │   ├── Hero.jsx        # First page with portrait HUD & oscilloscope
│   │   ├── Navbar.jsx      # Navigation bar with Light/Dark toggle & audio
│   │   ├── Projects.jsx    # Project showcase & interactive HUD simulators
│   │   ├── ResumeModal.jsx # Full-screen printable CV modal
│   │   ├── ResumeSection.jsx # Document preview & download trigger
│   │   └── Skills.jsx      # Interactive glowing skills clusters
│   ├── utils/
│   │   └── soundEffects.js # Synthesized Web Audio API sound effects
│   ├── App.jsx             # Main application orchestrator
│   ├── index.css           # Deep obsidian, cream, cherry neon & light mode styles
│   └── main.jsx            # React root entry point
├── index.html              # HTML with Google Fonts & SEO metadata
├── package.json            # Project dependencies & scripts
├── postcss.config.js       # PostCSS plugins
├── tailwind.config.js      # Cherry red, obsidian & cyber color extensions
├── vite.config.js          # Vite configuration
└── start.bat               # 1-Click launcher for Windows
```

---

## ⚡ Quick Start (How to Run)

### Option 1: 1-Click Windows Launcher
Double-click `start.bat` in the project folder. It will install dependencies if needed, start the dev server, and open your browser automatically.

### Option 2: Using Terminal
```bash
# 1. Navigate to the project directory
cd portfolio

# 2. Install dependencies (if not already installed)
npm install

# 3. Start development server
npm run dev
```

Visit: `http://localhost:5173/`

---

## 🚀 How to Build & Deploy

### Building for Production
```bash
npm run build
```
This outputs an optimized, minified bundle in the `dist/` directory (~450 kB).

### Deploying to Vercel or Netlify
- **Vercel:** Run `npx vercel` or push to GitHub and import into Vercel.
- **Netlify / GitHub Pages:** Upload or publish the `dist/` folder directly.
