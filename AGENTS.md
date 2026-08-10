# DM.Landpage.Frontend - Agent Instructions

## Overview
Next.js 15 (App Router) landing page for Data Mastery (Portuguese content). TypeScript (strict), Tailwind CSS v4. Package manager: npm.

## Commands
```bash
npm run dev       # next dev --turbopack
npm run build     # next build (typechecks + lints)
npm run start     # next start
npm run lint      # next lint
npx tsc --noEmit  # typecheck (no npm script for this)
```
There is **no** `typecheck` script. `build` is the full verification gate.

## Routes & Structure
- `/` (`app/page.tsx`) — composes `Home`, `Acordeon`, `Service`, `Contact` templates in order
- `/about` (`app/about/page.tsx`) — renders `templates/homeAbout`

```
app/
├── components/
│   ├── acordeon/       # Client accordion (clients & partners), inline data array
│   ├── dropdown/       # Select dropdown (uses hooks but has NO "use client")
│   └── SmoothScrollLink.tsx  # Client anchor link, JS scroll with 80px offset
├── templates/          # Page sections
│   ├── header/  home/  services/  contact/  footer/  homeAbout/
├── about/page.tsx
├── layout.tsx          # Root layout + next/font setup
├── page.tsx
└── globals.css         # Tailwind v4 @theme tokens, keyframes, @layer utilities
```
`cores.css` at repo root is **not imported anywhere** — ignore it.

## Conventions

### Components
- `"use client"` at the top of any component with hooks/state that is itself a server-boundary entry (contact, acordeon, SmoothScrollLink).
- `dropdown` deliberately lacks the directive — it only works inside client parents (`templates/contact`). Keep that pattern if it works; add the directive if you import it from a server component.
- Default export only; PascalCase components.

### Styling (Tailwind v4)
- No `tailwind.config.js`. All tokens live in `globals.css` `@theme` block (oklch values): `--color-ui-colors-background`, `--color-secondary-purple-heart`, `--color-grey-scale-onyx`, `--color-purple-scale-stroke`, etc. → utilities like `bg-ui-colors-background`, `text-secondary-purple-heart`.
- Custom animation utilities in `@layer utilities` (e.g. `animation-slide-menu`, `animation-text`, `animation-rotate-90` + reverse variants, `bg-vignette` for the page radial-gradient overlay). Toggle via conditional className.
- Accordion switches to vertical layout under `@media (max-width: 1689px)` in globals.css — keep these rules in CSS, not JS.
- Don't add `@layer components`.

### Fonts
`layout.tsx` defines `Lexend`/`Inter`/`DM_Sans` via `next/font/google` with CSS variables `--Lexend`, `--Inter`, `--DMSans`. `@theme` maps these to utilities `font-Lexend`, `font-Inter`, `font-DMSans` via `--font-*: var(--Lexend)` (etc.) — don't hardcode font stacks in `@theme`. **Case matters** in the utility names.

### Icons
Both icon sets are in active use — pick per file:
- `react-icons/fa` (footer, contact): `FaWhatsapp`, `FaEnvelope`, `FaYoutube`, `FaDiscord`, `FaInstagram`, `FaLinkedin`
- `lucide-react` imported as `import * as I from "lucide-react"` (acordeon, dropdown), used as `<I.ChevronDown />`

### Section IDs & Scroll
IDs are passed via `id` prop in `page.tsx`: `#empresa` (Home), `#clientes` (Acordeon), `#servicos` (Service), `#contato` (Contact).
Footer links via `SmoothScrollLink` to `#servicos`, `#clientes`, and `#empresa`. `scroll-behavior: smooth` is in globals.css.

### Contact Links
- WhatsApp: `https://wa.me/5511989639090`
- Email: `mailto:eduardo@ascending.solutions`
- External links: `target="_blank" rel="noopener noreferrer"`

## Gotchas
- **Both `yarn.lock` and `package-lock.json` are tracked.** Use npm for installs; don't delete either without the user's OK.
- **Path alias `@/*` → `./src/*` in tsconfig does not exist** (`src/` is not present). All imports are relative — don't use `@/` imports.
- TS strict mode is on; don't disable it.
- Images use `next/image` with `fill` (`/images/logoPurple.svg`); footer sets `unoptimized`.
- Don't commit `node_modules`, `.next`, or `*.tsbuildinfo`.
