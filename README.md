# Portfolio-2

[README.md](https://github.com/user-attachments/files/29404422/README.md)
# Jiya Jaiswal — Portfolio

A premium, animated personal portfolio built with Next.js 15, React 19, TypeScript, Tailwind CSS, and Framer Motion. Inspired by the layout rhythm and premium feel of enterprise product sites — not copied from any single source.

## ✨ Design notes

- **Palette**: deep void black (`#05060A`) and navy panels, with an electric violet→blue gradient accent (`#6C5CE7` → `#4361EE`).
- **Type**: Space Grotesk for display headlines, Inter for body copy, JetBrains Mono for labels/eyebrows and data.
- **Signature element**: the "neural thread" — a single continuous gradient path with pulsing nodes that runs down the page background, a quiet nod to the AI/ML subject matter instead of generic floating blobs.
- **Motion**: Framer Motion for scroll reveals, layout transitions, and the tilt/spotlight project cards; Lenis for smooth scrolling; native `prefers-reduced-motion` respected throughout.

## 🚀 Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint     # lint
```

## 📁 Project structure

```
portfolio/
├── app/
│   ├── layout.tsx        # Root layout: fonts, metadata, JSON-LD, global providers
│   ├── page.tsx          # Homepage — assembles all sections
│   ├── globals.css        # Design tokens, glassmorphism, cursor, grain texture
│   ├── loading.tsx        # App Router loading state
│   ├── sitemap.ts         # Dynamic sitemap.xml
│   └── robots.ts          # robots.txt rules
│
├── components/
│   ├── Navbar.tsx            # Sticky glass navbar, active-section indicator, mobile menu
│   ├── Hero.tsx               # Landing section, typewriter roles, CTAs, profile image
│   ├── About.tsx               # Bio, quick-fact cards, animated stat counters
│   ├── Skills.tsx               # Tabbed skill categories with animated progress bars
│   ├── Experience.tsx            # Vertical timeline (internships, hackathons, etc.)
│   ├── Projects.tsx                # Filterable project grid
│   ├── ProjectCard.tsx              # Tilt + spotlight hover card
│   ├── Contact.tsx                   # Contact form (EmailJS) + socials + toast
│   ├── Footer.tsx                     # Socials, copyright, back-to-top
│   ├── ThemeToggle.tsx                 # Dark/light toggle, persisted in localStorage
│   ├── AnimatedBackground.tsx          # The "neural thread" signature visual
│   ├── SectionHeading.tsx               # Reusable eyebrow + title + description
│   ├── Cursor.tsx                        # Custom magnetic cursor (desktop only)
│   ├── ScrollProgress.tsx                 # Top-of-page scroll progress bar
│   ├── SmoothScrollProvider.tsx            # Client wrapper initializing Lenis
│   └── UI/
│       └── Toast.tsx                        # Success/error toast notification
│
├── hooks/
│   ├── useActiveSection.ts   # IntersectionObserver-based active nav link
│   ├── useCountUp.ts          # Animated number counter for stats
│   └── useLenis.ts             # Smooth-scroll initializer
│
├── lib/
│   └── utils.ts    # `cn()` class merge helper
│
├── data/
│   ├── profile.ts     # Name, bio, socials, nav links, stats — EDIT THIS FIRST
│   ├── projects.ts     # Project cards content
│   ├── experience.ts    # Timeline entries
│   └── skills.ts          # Skill categories + proficiency levels
│
└── public/
    ├── profile.svg     # Placeholder avatar — replace with profile.png/jpg
    ├── favicon.svg      # Placeholder favicon
    ├── resume.pdf        # ⚠️ Add your real resume PDF here (referenced by Navbar)
    └── projects/          # Drop project screenshots here, then update data/projects.ts
```

## ✏️ Editing your content

Everything you'll want to personalize lives in **`/data`**:

1. **`data/profile.ts`** — your name, bio, role taglines, social links, email, stats.
2. **`data/projects.ts`** — add real GitHub/demo links and swap in real screenshots (drop images into `public/projects/` and update the `image` field — note: the current `ProjectCard` renders a gradient placeholder instead of `<img>`; swap in a Next.js `<Image>` once real screenshots are ready for the best performance).
3. **`data/experience.ts`** — internships, hackathons, leadership roles.
4. **`data/skills.ts`** — add/remove skills and adjust proficiency percentages.
5. **`public/resume.pdf`** — replace the placeholder with your real resume; the navbar's "Resume" button downloads this file directly.
6. **`public/profile.svg`** — replace with a real photo (`profile.png` or `.jpg`) and update the `src` in `components/Hero.tsx`.

## 📧 Contact form setup (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com) so it works without a backend.

1. Create a free EmailJS account, an email service, and a template with `from_name`, `from_email`, and `message` variables.
2. Copy `.env.example` to `.env.local` and fill in your IDs:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Until these are set, submitting the form will show a graceful error toast pointing people to your email instead of failing silently.

## 🎨 Theming

Dark mode is the primary design (the violet-glow/glass effects are tuned for it). The toggle in the navbar swaps a `dark`/`light` class on `<html>` and persists the choice in `localStorage`. To extend the light theme further, add `.light` overrides in `globals.css` alongside the existing dark-first styles.

## ☁️ Deploying to Vercel

1. Push this repo to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
3. Framework preset: **Next.js** (auto-detected).
4. Add environment variables (the three `NEXT_PUBLIC_EMAILJS_*` keys) under **Settings → Environment Variables**.
5. Deploy. Vercel will give you a `*.vercel.app` URL; add a custom domain under **Settings → Domains** if you have one.
6. Update `metadataBase` in `app/layout.tsx` and the URLs in `app/sitemap.ts` / `app/robots.ts` to match your real domain once deployed.

## 🧩 Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI library | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Smooth scroll | Lenis |
| Icons | Lucide React |
| Contact form | EmailJS |
| Hosting | Vercel |

## ♿ Accessibility & performance

- Visible focus rings on all interactive elements.
- `prefers-reduced-motion` disables Lenis smoothing and shortens all animations.
- Semantic landmarks (`header`, `main`, `footer`) and labeled form inputs.
- Custom cursor is disabled automatically on touch/coarse-pointer devices.
- Images should be swapped to `next/image` once real assets are added, for automatic optimization and lazy loading.
