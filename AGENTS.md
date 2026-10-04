# AGENTS.md

Angular 18 standalone-components portfolio app (project name `first-project-angular`), no modules, no environment files, no NgModules.

## Commands
- `npm start` / `npm run watch` — dev server on :4200 (`ng serve`, development config)
- `npm run build` — production build; default output path is **`docs/`** (not `dist/`), via the `application` builder
- `npm test` — Karma + Jasmine, needs Chrome/Chromium; no `--watch=false` shortcut is configured, so pass flags explicitly for CI runs
- Single spec: `ng test --include='**/about.component.spec.ts'`
- After changing code that ships, rebuild into `docs/` and commit it — GitHub Pages serves the committed `docs/` folder.

## Gotchas
- `angular.json` sets `outputPath: "docs"` and `base href` in `src/index.html` is `/` — no `--base-href` flag anywhere, so Pages project-site paths may 404 unless the custom domain serves root.
- `docs/` is generated build output tracked in git; don't hand-edit it, regenerate with `npm run build`.
- `angular.json` polyfills include `@angular/localize/init` and `main.ts` has the localize reference; keep both in place.
- Bootstrap 5 CSS is loaded globally in `angular.json` styles; `ng-bootstrap` is a dependency but styling is plain Bootstrap — no global ng-bootstrap config in `app.config.ts`.
- Routing: `app.routes.ts` has routes for `home/portfolio/resume/contact`; the catch-all `{path: '**', ..., pathMatch: 'full'}` points at HomeComponent and effectively never matches non-empty unknown paths — treat it as broken if you touch routing. `AboutComponent` exists but is not routed.
- Data is hardcoded in `src/app/_services/projects.service.ts` (no HTTP/backend); models in `src/app/_models/`.
- Style budgets are tiny (2kb/4kb per component); large inline styles fail production builds.
- `angular-cli-ghpages` is installed but no `deploy` npm script wraps it.
