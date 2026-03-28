# 🚀 Ahmed's 3D Interactive QA Portfolio — Implementation Plan

## Stack

| Tool | Version | Role |
|------|---------|------|
| **Next.js** | 15 (App Router) | Framework, routing, SSG |
| **Tailwind CSS** | v4 | Utility-first styling with `@theme` design tokens |
| **@react-three/fiber** | latest | React renderer for Three.js |
| **@react-three/drei** | latest | Helpers: stars, text, float, environment |
| **Framer Motion** | latest | Section reveal animations, card hover effects |
| **GSAP** | latest | Typewriter effect, counter animations |
| **three** | latest | Core 3D engine |
| **Lenis** | latest | Smooth scroll library |

---

## 🎨 Design System (Tailwind v4 `@theme`)

```css
@theme {
  --color-bg:        #0a0e17;   /* deep navy-black */
  --color-surface:   #111827;   /* card backgrounds */
  --color-emerald:   #06d6a0;   /* primary — "PASS" */
  --color-blue:      #118ab2;   /* secondary — analysis */
  --color-coral:     #ef476f;   /* danger — bugs found */
  --color-gold:      #ffd166;   /* award — certifications */
  --color-muted:     #94a3b8;   /* secondary text */
  --font-sans: "Inter", sans-serif;
  --font-display: "Outfit", sans-serif;
  --font-mono: "JetBrains Mono", monospace;
}
```

Effects: **glassmorphism** panels (`backdrop-blur`), glow `box-shadow`, animated gradient borders.

---

## 📐 Project Structure

```
src/
├── app/
│   ├── layout.tsx         ← RootLayout: fonts, smooth scroll init, Nav, Footer
│   ├── page.tsx           ← Home page: all sections assembled
│   └── globals.css        ← @import tailwindcss; @theme tokens; base styles
├── components/
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Certifications.tsx
│   │   ├── Reviews.tsx
│   │   └── Contact.tsx
│   ├── three/
│   │   ├── HeroScene.tsx      ← Particle field + floating shapes (r3f)
│   │   └── SkillConstellation.tsx ← Interactive 3D skill nodes (r3f)
│   └── ui/
│       ├── SectionReveal.tsx  ← Framer Motion scroll reveal wrapper
│       ├── StatCounter.tsx    ← GSAP count-up
│       ├── ProjectCard.tsx    ← 3D tilt on mouse move
│       ├── CertCard.tsx
│       └── TimelineCard.tsx
└── lib/
    ├── data.ts            ← All portfolio content (skills, projects, experience, etc.)
    └── utils.ts
public/
└── assets/
    ├── images/ … (already copied)
    └── resume.pdf
```

---

## 🏗️ Sections

### Hero
- **Three.js Canvas** (`HeroScene`): floating particle field with mouse parallax, slow-rotating icosahedron + torus wireframes, glowing connection lines between particles
- Avatar image with a glowing emerald ring
- Name, typewriter-cycled title ("Software Tester | QC Engineer"), tagline chips (ISTQB Certified, 500+ Bugs, 2yr Exp)
- CTAs: "View My Work" + "Download CV"
- LinkedIn / GitHub / HackerRank icon links

### About
- Two-column: 3D avatar left, summary + stats right
- Intersecting animated stat counters: **500+** Defects · **15+** Projects · **2** Certs · **2yr** Exp

### Skills
- Interactive `SkillConstellation` (r3f): sphere nodes in 3D space, color-coded clusters, hover tooltips, click-to-zoom-cluster
- Fallback grid of skill pills categorized: Testing, Tools, Automation, Languages, CI/CD

### Experience Timeline
- Vertical timeline, alternating left/right cards on desktop, stacked on mobile
- Expandable sub-project chips per role
- Key metric badges per project

### Projects
- Filter tabs: All | Healthcare | FinTech | E-Commerce | Automation
- Cards with screenshots (lazy-loaded), 3D mouse-tilt effect
- Featured: Tabib, Storeus, Medicta, Indstrz, Logic + text cards for others

### Certifications
- Horizontal scroll carousel with glowing gold card borders
- Certificate images + ID + date badges

### Reviews
- Khamsat review screenshots in draggable carousel

### Contact
- Contact method cards (email, phone, LinkedIn, GitHub, HackerRank)
- Minimal contact form (`<form action="mailto:...">`)
- "Download CV" CTA

---

## ⚡ Performance

- Three.js canvas **pauses** when tab not visible (`document.visibilitychange`)
- Particle count: **300** desktop → **100** mobile (check `window.innerWidth`)
- `next/image` for all project/certificate images (automatic optimization)
- `"use client"` only on interactive components, everything else is RSC
- Fonts loaded via `next/font/google`

---

## 📋 Implementation Phases

1. **Scaffold**: `create-next-app` + install deps + Tailwind v4 config
2. **Design system + layout**: `globals.css` tokens, `layout.tsx`, `Nav`, `Footer`
3. **Hero section**: `HeroScene.tsx` (r3f) + content overlay
4. **Content sections**: About → Skills → Experience → Projects → Certifications → Reviews → Contact
5. **Polish**: Framer Motion reveals, GSAP counters, responsive tuning
6. **Verification**: dev server review, responsive testing, performance check

> [!IMPORTANT]
> Tailwind v4 uses a **CSS-first config** (`@theme` in `globals.css`) — no `tailwind.config.js` needed. The `@tailwindcss/vite` / PostCSS plugin handles it automatically with Next.js via `@tailwindcss/postcss`.

> [!NOTE]
> Three.js components must be wrapped in `dynamic(() => import(...), { ssr: false })` in Next.js to avoid `window` SSR errors.
