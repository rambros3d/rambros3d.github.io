# AGENTS.md

## Project Overview

This is the RamBros 3D website — a static site for open-source 3D printable scale models. It contains webpages, documentation, and a blog.

**Tech Stack:** Astro, Tailwind CSS, DaisyUI, MDX, Starlight (for docs).

## Fonts

Loaded from `api.fonts.coollabs.io`.

| Font | Use |
|------|-----|
| Belanosima | Titles/headings |
| Inter | Body text (default) |
| Exo 2 | Hero tagline |
| Changa | UI labels |
| Martian Mono | Code blocks |

## Build & Commands

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview the build locally |
| `run.sh` | Git submodule update + dev server on port 8686 |

## Project Structure

```
src/
  assets/          — fonts, images
  components/      — Astro components (Header, Footer, Navbar, etc.)
  content/
    blog/          — Markdown/MDX blog posts
    docs/
      railway/     — Dragon Railway documentation
      trucks/      — Dragon Trucks documentation
  layouts/         — BlogPost, LandingLayout
  pages/           — Astro page routes
public/            — static assets (favicon, logos)
themes/            — CSS theme files (rambros.css, rambros-light.css)
dist/              — build output (do not edit)
```

## Key Conventions

- **Pages** go in `src/pages/` as `.astro` files. File name = route.
- **Blog posts** go in `src/content/blog/` as `.md` or `.mdx`. Frontmatter requires: `title`, `description`, `pubDate`. Optional: `updatedDate`, `heroImage`.
- **Docs** go in `src/content/docs/` using MDX (Starlight).
- **Components** go in `src/components/` as `.astro` files.
- **Static assets** (images, fonts) go in `public/` or `src/assets/`.
- **CSS** uses Tailwind v4 + DaisyUI. Global styles in `src/styles/global.css`. Themes in `themes/`.

## Design Principles

- **Lightweight builds**: HTML/CSS preferred. Minimize JavaScript. The site should be static-first.
- **No unnecessary JS**: Avoid adding JS dependencies unless absolutely required. Astro handles what little interactivity is needed.

## Adding New Content

- **Blog post:** Create a `.md`/`.mdx` file in `src/content/blog/` with proper frontmatter.
- **Doc page:** Create a `.mdx` file in `src/content/docs/railway/` or `src/content/docs/trucks/` following Starlight conventions.
- **New page:** Add a `.astro` file in `src/pages/`.

## Site Config

- Site URL is set in `astro.config.mjs` (currently `https://example.com` — update before deploy).
- Site title/description in `src/consts.ts`.
