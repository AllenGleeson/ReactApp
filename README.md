# Portfolio website
## https://www.allen-gleeson.com/

Created using React and Bootstrap and hosted on Heroku.

## Development

Requires Node 24 (see `engines` in `package.json`).

```bash
npm install
npm run dev      # dev server (Vite)
npm test         # tests (Vitest)
npm run build    # production build into build/
npm run preview  # serve the production build locally
```

Heroku runs `npm run build` on deploy and serves `build/` with `serve` (see `Procfile`). The app should be on the `heroku-24` stack.

## Structure

```
src/
  main.jsx            entry point
  App.jsx             routes and light/dark theme
  pages/              one component per route (HomePage, ProjectsPage, ProjectPage, NotFoundPage)
  layout/             Header, Footer, RootLayout, BackToTop
  features/home/      sections used on the home page (AboutMe, Skills, Timeline, ...)
  features/projects/  project UI (FeaturedProjects, ProjectCard, Highlight, ...) and projectUtils.js
  components/         shared components (DeviceViewer)
  hooks/              shared React hooks
  styles/global.css   theme colours (light and dark) and shared buttons, tags and sections
  data/               all site content as JSON
  assets/             profile photo and CV
  test/setup.js       test environment setup
```

- Each component's styles sit next to it (`ProjectCard.jsx` + `ProjectCard.css`).
- Add a project by adding an entry to `src/data/projects.json`; its images go in `public/data/images/overview/`.

## Pages

- **Home**: intro, featured projects carousel, in-development project with a live device preview, experience timeline, then skills and qualifications.
- **Projects**: every project as a card, with a filter for common technologies.
- **Project**: overview, technologies, optional video, live device preview, highlights, goal/challenges/final thoughts, and links to the previous and next project. Each project's `colorTheme[0]` sets its accent colour.

The light/dark toggle remembers the visitor's choice and otherwise follows their system setting.
