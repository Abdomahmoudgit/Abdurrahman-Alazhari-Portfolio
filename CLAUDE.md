# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal single-page portfolio (Next.js 14 App Router, React 18, TypeScript, Tailwind, Framer Motion, Three.js). Originally based on the JavaScript Mastery "Modern Next.js Portfolio" tutorial, customized with the owner's own content. Deployed on Vercel.

## Commands

```bash
npm run dev      # dev server at http://localhost:3000
npm run build    # production build (type-checks + lints)
npm run start    # serve the production build
npm run lint     # next lint (extends next/core-web-vitals)
npm run deploy   # npx vercel --prod
npx tsc --noEmit # type-check only
```

There is no test suite.

## Architecture

- **Single page, content-driven.** [app/page.tsx](app/page.tsx) is a server component that composes the sections (`Hero`, `Grid`, then `RecentProjects`, `Clients`, `Experience`, `Approach`, `Footer` loaded via `next/dynamic` to split chunks) plus `FloatingNav`. Don't reintroduce a full-page loader that waits for `window.load` — that was the main cause of slowness.
- **All copy and lists live in [data/index.ts](data/index.ts)** (`navItems`, `gridItems`, `projects`, `testimonials`, `companies`, `workExperience`, `socialMedia`). Edit content there, not in components. Content should match the owner's CV (`public/Abdurrahman-Alazhari-CV.pdf`, linked from the Hero "Download My CV" button). `companies` entries without `img` render a letter badge; `socialMedia` uses react-icons components (`Icon`).
- **Bento grid behavior is keyed on `gridItems[].id`.** [components/ui/BentoGrid.tsx](components/ui/BentoGrid.tsx) hard-codes special rendering by id (2 = globe, 3 = tech-stack lists, 5 = image styling, 6 = copy-email button). Renumbering grid items moves those features.
- **Section components vs. UI primitives.** `components/*.tsx` are page sections that read from `@/data`; `components/ui/*` are Aceternity-style animated primitives. `cn()` lives in [lib/utils.ts](lib/utils.ts). [components/MagicButton.tsx](components/MagicButton.tsx) renders an `<a>` when given `href` (don't wrap it in another link).
- **Heavy JS is loaded lazily — keep it that way:** the Three.js globe mounts only when in view (`useInView` in `GridGlobe.tsx`), and `CanvasRevealEffect` is a `next/dynamic` import in `Approach.tsx` (renders on hover). Lottie confetti and the Tidio chat widget were intentionally removed by the owner — don't add them back.
- **Images:** use `next/image` and WebP assets in `public/`. Don't add multi-MB SVGs with embedded bitmaps — convert to WebP first.
- **Theming**: `next-themes` provider in [app/provider.tsx](app/provider.tsx), default dark. Custom palette (`black-100`, `white-100`, `purple`, …) and animations are in [tailwind.config.ts](tailwind.config.ts); a custom `addVariablesForColors` plugin exposes every Tailwind color as a CSS variable.
- Path alias: `@/*` maps to the repo root.

## Gotchas

- `three-globe` is pinned to `2.31.0`; newer versions import `three/webgpu`, which `three@0.163` doesn't export, and the build fails.
- Avoid `Math.random()` during render (caused hydration mismatches in `Experience` and `GridGlobe`).
