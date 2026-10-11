# Portfolio

Professional single-page portfolio for **Everton Afonso** — Frontend / Full Stack developer (React, TypeScript, e-commerce/VTEX, integrations and web performance).

Modern, responsive, accessible and bilingual (PT-BR / EN-US).

## Stack

| Tool                              | Purpose                                           |
| --------------------------------- | ------------------------------------------------- |
| React 19                          | UI library                                        |
| TypeScript                        | Type safety (strict mode)                         |
| Vite                              | Dev server and build                              |
| Tailwind CSS 3                    | Design system and styling                         |
| shadcn/ui (copy/paste components) | Reusable primitives (Button, Card, Badge, Sheet…) |
| react-i18next / i18next           | Internationalization (pt-BR, en-US)               |
| Lucide React                      | Icons                                             |
| ESLint + Prettier                 | Lint and formatting                               |

No Next.js. No unnecessary libraries.

## Installation

```bash
npm install
```

Optional environment variables:

```bash
cp .env.example .env
```

| Variable             | Description                                       |
| -------------------- | ------------------------------------------------- |
| `VITE_SITE_URL`      | Production URL used for the canonical tag         |
| `VITE_CONTACT_EMAIL` | E-mail used by the contact form (mailto fallback) |
| `VITE_GITHUB_URL`    | GitHub profile URL                                |
| `VITE_LINKEDIN_URL`  | LinkedIn profile URL                              |

Empty values render a visible `TODO: ADD REAL INFORMATION` placeholder instead of broken links.

## Development

```bash
npm run dev
```

Other scripts:

```bash
npm run lint          # ESLint
npm run lint:fix      # ESLint with autofix
npm run format        # Prettier write
npm run format:check  # Prettier check
npm run typecheck     # TypeScript (no emit)
npm run build         # Typecheck + production build
npm run preview       # Serve the production build
npm run smoke         # Render the app with react-dom/server (fast sanity check)
```

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Preview

```bash
npm run preview
```

## Project Structure

```text
public/
├── favicon.svg
├── robots.txt
├── sitemap.xml
└── resume/
    ├── resume-pt.pdf
    └── resume-en.pdf

src/
├── assets/
│   ├── icons/
│   └── images/
├── components/
│   ├── ui/            # shadcn/ui style primitives
│   ├── layout/        # Section, SectionHeading, Reveal, SocialLinks
│   ├── navigation/    # Header, NavMenu, MobileMenu, LanguageSwitcher
│   ├── hero/          # Hero, HeroVisual, HeroMetrics
│   ├── technologies/
│   ├── about/
│   ├── projects/      # Projects, ProjectCard
│   ├── experience/
│   ├── expertise/
│   ├── performance/
│   ├── resume/
│   ├── contact/
│   ├── footer/
│   └── icons/         # Brand icons (GitHub, LinkedIn)
├── data/              # Content (projects, experience, technologies…)
├── hooks/             # Reusable behavior (useReveal, useScrollSpy…)
├── i18n/              # i18next setup + locales
├── lib/               # utils (cn), constants (SITE, CONTACT, NAV_ITEMS)
├── pages/             # Home
├── styles/            # Design tokens (globals.css)
├── types/             # Contracts (Project, Experience, Technology…)
├── App.tsx
└── main.tsx
```

Architecture rules:

- **Component** = presentation
- **/data** = content
- **i18n** = visible text
- **/types** = contracts
- **/hooks** = reusable behavior
- **/lib** = utilities and configuration

## Internationalization

- Languages: `pt-BR` (default) and `en-US`
- UI text lives in `src/i18n/locales/<locale>/common.json`
- Long-form content (projects, experience, metrics) lives in `src/data` as `LocalizedText`:

```ts
description: {
  'pt-BR': 'Texto em português',
  'en-US': 'English text',
}
```

Components resolve it with `useLocalizedText()`:

```tsx
const localized = useLocalizedText()
<p>{localized(project.description)}</p>
```

The chosen language is persisted in `localStorage` (`portfolio:locale`) and reflected on `<html lang>`.

## Adding Projects

1. Open `src/data/projects.ts`.
2. Append an entry to `projects` (featured) or `inProgressProjects`:

```ts
{
  id: 'my-project',
  title: 'My Project',
  category: 'frontend', // ecommerce | frontend | performance | developer-tools | chrome-extension | web-applications
  description: {
    'pt-BR': 'Descrição em português',
    'en-US': 'Description in English',
  },
  technologies: ['React', 'TypeScript'],
  githubUrl: 'https://github.com/user/repo', // optional
  liveUrl: 'https://example.com',            // optional
  status: 'completed',                       // or 'in-progress'
}
```

No component changes are required.

## Adding Experience

1. Open `src/data/experience.ts`.
2. Append an entry:

```ts
{
  id: 'company-id',
  company: 'Company',
  role: { 'pt-BR': 'Cargo', 'en-US': 'Role' },
  period: { 'pt-BR': '2023 — Presente', 'en-US': '2023 — Present' },
  description: [
    { 'pt-BR': 'Responsabilidade 1', 'en-US': 'Responsibility 1' },
  ],
  technologies: ['React', 'TypeScript'],
}
```

Never invent dates, roles or metrics — keep `TODO: ADD REAL INFORMATION` until real data is available.

## Changing Theme

Design tokens live in two places:

1. `tailwind.config.ts` — colors mapping, fonts, radius, shadows, animations
2. `src/styles/globals.css` — HSL variables (`:root`) such as `--primary`, `--foreground`, `--border`

The accent color is `--primary` (orange). It is intentionally used only for CTAs, badges, icons, highlights and small decorative details.

```css
:root {
  --primary: 28 100% 50%; /* orange */
  --foreground: 0 0% 15%; /* graphite */
  --muted-foreground: 0 0% 46%; /* secondary text */
}
```

## Deploy

1. Set the environment variables (`.env` or in your hosting dashboard).
2. Build:

```bash
npm run build
```

3. Publish the `dist/` folder (Netlify, Vercel, Cloudflare Pages, GitHub Pages, nginx…).
4. Update `public/robots.txt` and `public/sitemap.xml` with the real production URL.
5. Replace the placeholder resumes in `public/resume/` with the real PDFs.

## Performance & accessibility notes

- Mobile-first responsive layout (360px → 1920px)
- Semantic HTML, visible focus states, keyboard navigation, ARIA labels
- `prefers-reduced-motion` respected
- No layout shifts: visuals are pure CSS/SVG (no large images in the critical path)
- Lazy reveal animations via `IntersectionObserver`
- SEO: title, description, Open Graph, Twitter Card, canonical, JSON-LD, `robots.txt`, `sitemap.xml`
