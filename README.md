# Sudarshan Rijal — Portfolio

A premium personal portfolio website built with Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, and React Three Fiber.

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 15 (App Router) | Framework |
| React | 19 | UI Library |
| TypeScript | 5.7 | Type Safety |
| Tailwind CSS | 3.4 | Styling |
| Framer Motion | 11 | Animations |
| React Three Fiber | 8 | 3D Background |
| Drei | 9 | R3F Helpers |
| Lenis | 1.1 | Smooth Scroll |
| next-themes | 0.4 | Dark/Light Mode |
| Lucide React | 0.468 | Icons |
| shadcn/ui | — | UI Primitives |

---

## Quick Start

### Prerequisites

- Node.js 18.17+ (20+ recommended)
- npm, yarn, or pnpm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/imrizal7/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# 4. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API
│   ├── layout.tsx                # Root layout + metadata
│   ├── page.tsx                  # Main page
│   ├── sitemap.ts                # Auto-generated sitemap
│   └── opengraph-image.tsx       # Dynamic OG image
│
├── components/
│   ├── ui/
│   │   ├── Button.tsx            # Magnetic button component
│   │   ├── CustomCursor.tsx      # Custom cursor with trail
│   │   ├── LoadingScreen.tsx     # Animated loading screen
│   │   ├── Monogram.tsx          # SR animated logo
│   │   ├── ScrollProgress.tsx    # Top progress bar
│   │   ├── SectionHeader.tsx     # Reusable section titles
│   │   └── ThemeToggle.tsx       # Dark/Light mode toggle
│   │
│   ├── sections/
│   │   ├── Navbar.tsx            # Floating glass navbar
│   │   ├── Hero.tsx              # Hero with typewriter
│   │   ├── About.tsx             # About me section
│   │   ├── Education.tsx         # Education cards
│   │   ├── Skills.tsx            # Skills grid
│   │   ├── Journey.tsx           # Engineering timeline
│   │   ├── Axon.tsx              # AXON project showcase
│   │   ├── GitHub.tsx            # GitHub stats & repos
│   │   ├── Contact.tsx           # Contact form
│   │   └── Footer.tsx            # Site footer
│   │
│   └── three/
│       └── Background.tsx        # R3F aurora background
│
├── animations/
│   └── variants.ts               # Framer Motion variants
│
├── data/
│   └── site.ts                   # All site content & config
│
├── hooks/
│   ├── useLenis.ts               # Smooth scroll init
│   ├── useMousePosition.ts       # Mouse tracking
│   ├── useScrollProgress.ts      # Scroll state
│   └── useTypewriter.ts          # Typewriter effect
│
├── lib/
│   └── utils.ts                  # Utility functions
│
├── styles/
│   └── globals.css               # Global styles + CSS vars
│
├── types/
│   └── index.ts                  # TypeScript types
│
└── public/
    ├── icon.svg                  # SVG favicon
    ├── robots.txt
    └── site.webmanifest
```

---

## Configuration

All site content lives in `data/site.ts`. To personalize:

```ts
// data/site.ts
export const siteConfig = {
  name: "Your Name",
  email: "you@example.com",
  github: "https://github.com/yourusername",
  // ...
};
```

Update `education`, `skills`, `journeySteps`, `axonProject`, and `githubStats` in the same file.

---

## Setting Up the Contact Form

The contact form submits to `/api/contact`. By default it logs to the console. To send real emails:

1. Sign up at [resend.com](https://resend.com) (free tier: 3,000 emails/month)
2. Add your API key to `.env.local`
3. Uncomment the Resend block in `app/api/contact/route.ts`

```bash
# .env.local
RESEND_API_KEY=re_your_key_here
CONTACT_TO_EMAIL=you@example.com
```

---

## Deployment

### Vercel (Recommended — zero config)

```bash
npm i -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) — it will auto-detect Next.js.

Add your environment variables in the Vercel dashboard under **Settings → Environment Variables**.

### Other Platforms

```bash
npm run build
npm start
```

---

## Performance Notes

- The 3D background is lazy-loaded and renders at capped `dpr: [1, 1.5]` for consistent 60fps
- Heavy animations respect `prefers-reduced-motion` via Framer Motion defaults  
- All images use Next.js `<Image>` for automatic optimization
- Web fonts (Geist) are loaded via the `geist` package — no external requests

---

## Updating Content Over Time

This portfolio is designed to grow with you. Key files to update as your career progresses:

| What changed | File to update |
|---|---|
| New project | `data/site.ts` → add to `axonProject` or a new array |
| New skills | `data/site.ts` → `skills` object |
| New education | `data/site.ts` → `education` array |
| Journey milestone | `data/site.ts` → `journeySteps` |
| Contact info | `data/site.ts` → `siteConfig` |
| Color palette | `styles/globals.css` + `tailwind.config.ts` |

---

## License

MIT — Feel free to fork and adapt for your own portfolio. Attribution appreciated but not required.

---

Built by Sudarshan Rijal · Nepal 🇳🇵 · [sudarshanrijal.dev](https://sudarshanrijal.dev)
