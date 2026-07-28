# DM.Landpage.Frontend - Agent Instructions

## Project Overview
Next.js 15 (App Router) landing page for Data Mastery. TypeScript, Tailwind CSS v4.

## Tech Stack
- **Framework**: Next.js 15.2.2 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 (@tailwindcss/postcss)
- **Fonts**: next/font/google (DM Sans, Inter, Lexend) via CSS variables
- **Icons**: react-icons (Font Awesome) — replaced lucide-react
- **Linting**: ESLint 9 with `next/core-web-vitals` + `next/typescript`
- **Package Manager**: npm

## Project Structure
```
app/
├── components/          # Reusable UI components
│   ├── acordeon/       # Accordion component (clients/partners)
│   ├── contact/        # Contact form component
│   └── dropdown/       # Select dropdown component
├── templates/          # Page sections (composed in page.tsx)
│   ├── header/
│   ├── home/
│   ├── services/
│   ├── contact/
│   └── footer/
├── globals.css         # Global styles, animations, Tailwind v4 import
├── layout.tsx          # Root layout, font setup
└── page.tsx            # Main page composing templates
```

## Key Conventions

### Components
- **Client components**: Use `"use client"` directive at top
- **Server components**: Default (no directive)
- **Props typing**: Inline `{ prop: Type }` or interface above component
- **Naming**: PascalCase for components, camelCase for props/functions
- **Export**: Default export only

### Styling (Tailwind v4)
- Import: `@import "tailwindcss";` in globals.css
- Custom colors via CSS variables (defined in globals.css `@theme` block)
- Custom animations with `@keyframes` and cubic-bezier easings
- Utility classes in `@layer utilities`
- **No** `tailwind.config.js` — all config in CSS

### Fonts
Defined in `layout.tsx` as CSS variables:
```tsx
const lexend = Lexend({ variable: "--Lexend", ... });
const inter = Inter({ variable: "--Inter", ... });
const dmsans = DM_Sans({ variable: "--DMSans", ... });
```
Used in CSS: `font-family: var(--Lexend)` or Tailwind `font-Lexend` (via @theme)

### Animations
Custom keyframes in `globals.css`:
- `rotate-90` / `-rotate-90` — chevron rotation
- `slideMenu` / `-slideMenu` — side panel slide
- `hiddenText` / `-hiddenText` — fade + slide up
- Responsive variants in `@media (max-width: 1689px)`

Easing curves:
- Enter: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (ease-out natural)
- Exit: `cubic-bezier(0.55, 0.055, 0.675, 0.19)` (ease-in natural)

### Icons
Use `react-icons/fa` (Font Awesome):
```tsx
import { FaWhatsapp, FaEnvelope, FaYoutube, FaDiscord, FaInstagram, FaLinkedin } from "react-icons/fa";
```
**Do not** use `lucide-react` — deprecated.

### Section IDs & Smooth Scroll
Sections in `page.tsx` pass `id` prop to templates:
- `#inicio` (Home)
- `#servicos` (Services)
- `#clientes` (Acordeon/Clients)
- `#contato` (Contact)

Footer links use these anchors. `scroll-behavior: smooth` in globals.css.

### Contact Links
- WhatsApp: `https://wa.me/5511989639090` (opens app)
- Email: `mailto:eduardo@ascending.solutions`
- Social: external links with `target="_blank" rel="noopener noreferrer"`

## Commands
```bash
npm run dev       # Development server
npm run build     # Production build (typechecks + lint)
npm run lint      # ESLint
npm run typecheck # tsc --noEmit (if configured)
```

## TypeScript
- Strict mode enabled
- Path alias: `@/*` → `./src/*` (but project uses `app/` directly)
- No `src/` directory — code lives in `app/`

## Common Patterns

### Client Component with Refs/State
```tsx
"use client";
import { useRef, useEffect, useState } from "react";

export default function Component() {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  // ...
}
```

### Animation Classes
Apply via conditional className:
```tsx
className={isOpen ? "animation-slide-menu" : "animation-reverse-slide-menu"}
```

### Responsive Breakpoints
Mobile-first. Custom breakpoint at `1689px` in globals.css for accordion layout.

## Do Not
- Don't create `tailwind.config.js` — use CSS `@theme`
- Don't use `lucide-react` — use `react-icons/fa`
- Don't add `@layer components` — prefer utility classes
- Don't commit `node_modules` or `.next`
- Don't disable `strict` in tsconfig