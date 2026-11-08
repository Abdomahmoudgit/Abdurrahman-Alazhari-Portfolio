<div align="center">

<a href="https://abdurrahmanalazhari.vercel.app">
  <img src="public/og-preview.webp" alt="Abdurrahman Al-Azhari — Frontend Engineer | React.js & Next.js" width="100%" />
</a>

# Abdurrahman Al-Azhari — Portfolio

**Frontend Engineer · React.js & Next.js · Cairo, Egypt**

[**Live site**](https://abdurrahmanalazhari.vercel.app) · [النسخة العربية](https://abdurrahmanalazhari.vercel.app/ar) · [LinkedIn](https://www.linkedin.com/in/abdolrahman-alazhary) · [Download CV](https://abdurrahmanalazhari.vercel.app/Abdurrahman-Alazhari-CV.pdf)

</div>

---

My personal portfolio: a fast, bilingual (English / Arabic) single-page site with a light and dark theme, detail pages for each project, and a working contact form. It shows my experience building production web apps with React, Next.js, TypeScript and modern state management.

## Features

- **English + Arabic** — `/` and `/ar`, with a full right-to-left layout, an Arabic font and translated content. `hreflang` links connect the two versions.
- **Dark and light mode** — dark by default; the choice is saved. All colors come from theme tokens, so every section works in both.
- **Project pages** — `/projects/[slug]` (and `/ar/projects/[slug]`) with an overview, my role, key features, the tech stack and live / GitHub links. They're statically generated.
- **Contact form** — sends messages straight to my inbox through Web3Forms, with spam protection.
- **Performance** — WebP images through `next/image`, heavy 3D effects loaded only when needed, animations paused off screen, and self-hosted fonts.
- **SEO** — per-page metadata, a generated Open Graph share image, a sitemap with language alternates, robots.txt, and JSON-LD `Person` data.
- **Accessible** — one `<h1>`, labeled controls, reduced-motion support and good contrast in both themes.

### Lighthouse (mobile)

| Page | Performance | Accessibility | Best Practices | SEO |
| --- | :---: | :---: | :---: | :---: |
| English `/` | 86 | 100 | 96 | 100 |
| Arabic `/ar` | 89 | 100 | 96 | 100 |

## Tech stack

**Next.js 14 (App Router)** · **React 18** · **TypeScript** · **Tailwind CSS** · Framer Motion · Three.js / React Three Fiber · next-themes · Web3Forms · Vercel (hosting, Analytics, Speed Insights)

## Getting started

```bash
git clone https://github.com/Abdomahmoudgit/Abdurrahman-Alazhari-Portfolio.git
cd Abdurrahman-Alazhari-Portfolio
npm install
npm run dev        # http://localhost:3000  (Arabic: /ar)
```

Other commands:

```bash
npm run build      # production build
npm run start      # serve the build
npm run lint
npx tsc --noEmit   # type-check
```

## Project structure

```
app/
  (en)/                English root layout, home page, /projects/[slug]
  (ar)/ar/             Arabic root layout (RTL), home page, /ar/projects/[slug]
  _shell.tsx           shared <html>/<body>, theme provider, analytics
  og/route.tsx         generated share image (/og)
  sitemap.ts, robots.ts
components/            page sections (Hero, Projects, Experience, Skills, ...)
components/ui/         animated building blocks (bento grid, globe, navbar, ...)
data/
  en.ts, ar.ts         all site text, one file per language
  shared.ts            links, images and settings shared by both languages
lib/                   metadata and project-page helpers
public/                images, icons and the CV PDF
```

### Editing content

All text lives in **`data/en.ts`** and **`data/ar.ts`**, which have the same shape (see `data/types.ts`). Links, image paths and the contact-form key are in `data/shared.ts`. Components only render what they receive, so you don't need to touch them to change the content.

## Credits

The original design is based on the [JavaScript Mastery](https://www.youtube.com/@javascriptmastery) "Modern Next.js Portfolio" tutorial. I extended it with my own content and added the bilingual setup, theming, project pages, contact form, performance work and SEO.

## Contact

- Email: [abdolrahmanalazhary@gmail.com](mailto:abdolrahmanalazhary@gmail.com)
- LinkedIn: [abdolrahman-alazhary](https://www.linkedin.com/in/abdolrahman-alazhary)
- GitHub: [Abdomahmoudgit](https://github.com/Abdomahmoudgit)
