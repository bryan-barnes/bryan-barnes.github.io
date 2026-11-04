# jbryanbarnes.com

Personal portfolio site. Astro + Tailwind CSS. Live at [jbryanbarnes.com](https://jbryanbarnes.com) (GitLab Pages); a public mirror builds to [bryan-barnes.github.io](https://bryan-barnes.github.io) from this repo on GitHub. Canonical URLs point to jbryanbarnes.com.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:4321.

## Editing resume content

All resume data lives in `src/data/resume.ts`. Both the homepage experience section and the `/resume` page render from this single file. Update it there and everything stays in sync.

## Adding a case study

1. Create a new `.astro` file in `src/pages/case-studies/`.
2. Import the `Base` layout and follow the structure of the existing case studies (problem, what I built, results).
3. Add a card for it in `src/pages/case-studies/index.astro` and optionally on the homepage in `src/pages/index.astro`.

## Adding a project

1. Create a new `.astro` file in `src/pages/projects/`.
2. Add an entry to the projects array in `src/pages/projects/index.astro`.

## Build

```bash
npm run build
```

Static output goes to `dist/`.

## Deploy

The live site is on GitLab Pages. Pushing `main` to the `gitlab` remote triggers `.gitlab-ci.yml`, which builds the site and moves `dist/` to `public/` for GitLab Pages.

```bash
git push gitlab main
```

The `origin` and `github` remotes are mirrors. Pushing to them does not deploy.

## Remotes

| Remote   | URL                                                      | Purpose      |
| -------- | -------------------------------------------------------- | ------------ |
| `gitlab` | `https://gitlab.com/jbryanbarnes/portfolio.git`          | Deploy (live site) |
| `origin` | `https://github.com/jbryanbarnes/jbryanbarnes.github.io` | Mirror       |
| `github` | `https://github.com/bryan-barnes/bryan-barnes.github.io` | Mirror       |

## Theme switcher

The site has seasonal color themes (Orioles spring/summer, Ravens fall, Terps winter) plus an Off mode. Controlled by a floating button in the bottom-right corner. Implemented with CSS custom properties and a small vanilla JS script.
