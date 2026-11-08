# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal bilingual portfolio (Next.js 14.2 App Router, React 18, TypeScript, Tailwind, Framer Motion, Three.js). Originally based on the JavaScript Mastery "Modern Next.js Portfolio" tutorial, customized with the owner's own content. Deployed on Vercel at https://abdurrahmanalazhari.vercel.app.

## Commands

```bash
npm run dev      # dev server at http://localhost:3000 (Arabic at /ar)
npm run build    # production build (type-checks + lints)
npm run start    # serve the production build
npm run lint     # next lint (extends next/core-web-vitals)
npm run deploy   # npx vercel --prod
npx tsc --noEmit # type-check only (delete .next/types first if it complains about removed routes)
```

There is no test suite.

## Architecture

- **Two languages, two root layouts.** English lives at `/` (`app/(en)/`), Arabic at `/ar` (`app/(ar)/ar/`, `dir="rtl"`). There is no `app/layout.tsx`; both layouts render the shared `<html>/<body>` in [app/_shell.tsx](app/_shell.tsx) (theme provider + Vercel Analytics/Speed Insights). Metadata for both comes from `buildMetadata(locale)` in [lib/metadata.ts](lib/metadata.ts) (hreflang alternates, canonical, Google Search Console verification tag — keep it).
- **Content is per-language data.** All text lives in [data/en.ts](data/en.ts) and [data/ar.ts](data/ar.ts), both typed by `Content` in [data/types.ts](data/types.ts); keep the two files in sync. Language-neutral values (links, image paths, `siteUrl`, `cvPath`, `web3formsKey`, grid layout, project slugs/links/tech) are in [data/shared.ts](data/shared.ts). `getContent(locale)` in `data/index.ts` returns one language. Content should match the owner's CV (`public/Abdurrahman-Alazhari-CV.pdf`).
- **Components get content as props.** [components/HomePage.tsx](components/HomePage.tsx) loads `getContent(locale)` and passes slices to each section. Client components must import only *types* from `@/data` (values from `@/data/shared`), otherwise both languages' text ends up in the client bundle. `socialMedia` stores an icon key; the footer maps it to a react-icons component.
- **Project pages:** `/projects/[slug]` and `/ar/projects/[slug]` are statically generated via [lib/projectPage.tsx](lib/projectPage.tsx) and rendered by [components/ProjectDetail.tsx](components/ProjectDetail.tsx). Project detail copy (`details.overview/role/features`) was drafted from the CV — don't invent numbers. `projects[].github` is optional (only public repos).
- **Theme (light/dark):** `next-themes`, `defaultTheme="dark"`, no system mode. Colors are CSS variables (RGB channels) in [app/globals.css](app/globals.css) — `:root` = light, `.dark` = dark — mapped in [tailwind.config.ts](tailwind.config.ts) to `page`, `fg`, `fg-muted`, `fg-soft`, `line`, `chip`; the legacy names `black-100`, `white-100/200`, `blue-100`, `purple` also point at the variables. Use these tokens (and the `.card-surface` utility for card backgrounds) instead of hard-coded colors like `text-white` or `rgb(4,7,29)`. Keep `text-white` only on text over always-dark artwork. Toggle: [components/ui/ThemeToggle.tsx](components/ui/ThemeToggle.tsx).
- **RTL:** prefer logical classes (`ms-/me-`, `start-/end-`, `text-start`). Flip directional arrows with `rtl:-scale-x-100`. Letter-spacing breaks Arabic joining — add `rtl:tracking-normal` next to any `tracking-*`. Careful: `dir="ltr"` on an element makes its own `start/end` resolve LTR.
- **Fonts are self-hosted** in `app/fonts/` via `next/font/local` ([app/fonts.ts](app/fonts.ts)): Inter (Latin) and IBM Plex Sans Arabic (400/700 only). Google Fonts downloads hung the build on the owner's network — don't switch back to `next/font/google`.
- **Share image** is a route handler at `/og` ([app/og/route.tsx](app/og/route.tsx), edge runtime) — not `opengraph-image.tsx`, which gets a hashed URL inside a route group. `app/sitemap.ts` lists both languages and all project pages.
- **Bento grid behavior is keyed on `gridItems[].id`** in [components/ui/BentoGrid.tsx](components/ui/BentoGrid.tsx) (1 = photo tile, `priority` image because it's the mobile LCP; 2 = globe; 3 = tech-stack chips; 5 = code image; 6 = copy-email). Renumbering moves those features.
- **Heavy JS is loaded lazily — keep it that way:** the Three.js globe mounts only in view on desktop without reduced motion; `CanvasRevealEffect` is a `next/dynamic` import rendered on hover/tap. Lottie confetti and the Tidio chat widget were intentionally removed by the owner — don't add them back. Don't reintroduce a full-page loader that waits for `window.load`.
- **Animation cost:** continuous animations are the main mobile perf cost. `MovingBorder` only animates while in view, `PinPerspective` mounts only on hover, `GradientBg` uses plain CSS blur. Keep new effects to the same rule.
- **Contact form** ([components/ContactForm.tsx](components/ContactForm.tsx)) posts to Web3Forms with `web3formsKey`; when the key is empty the footer shows a mailto button instead.
- **Headings:** one `<h1>` per page (Hero intro / project title); section titles use [components/SectionHeading.tsx](components/SectionHeading.tsx) (`h2.heading`), card titles `h3`.
- **Images:** use `next/image` and WebP assets in `public/`. Don't add multi-MB SVGs with embedded bitmaps — convert to WebP first.
- `cn()` lives in [lib/utils.ts](lib/utils.ts). [components/MagicButton.tsx](components/MagicButton.tsx) renders an `<a>` when given `href` (don't wrap it in another link). Path alias: `@/*` maps to the repo root.

## Gotchas

- `three-globe` is pinned to `2.31.0`; newer versions import `three/webgpu`, which `three@0.163` doesn't export, and the build fails.
- Stay on Next 14.x / React 18: `@react-three/fiber@8` needs React 18.
- Avoid `Math.random()` during render (caused hydration mismatches in `Experience` and `GridGlobe`).
