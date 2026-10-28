# Changelog

Formát podle [Keep a Changelog](https://keepachangelog.com/cs/1.1.0/),
verzování podle [SemVer](https://semver.org/lang/cs/).

## [Nezveřejněno]

### Added

- Český web Libertis Consulting: strategie, služby, reference a kontakt na Daniela Sýkoru.
- Bílý vizuální styl, fonty Manrope a Instrument Serif, petrolejový motiv křídla a jemné interakce.
- Sedm skutečných screenshotů a popisy referencí, responzivní navigace a omezení pohybu.

### Removed

- Sanity Studio, jeho závislosti, proměnné a projektová registrace MCP.

## Historie zděděné šablony

### Changed

- Instrukce pro agenty výslovně preferují `bun run` a `bunx` před `npm`, `npx` a
  `yarn`; binárky workspace se tak spouštějí ze správného kontextu.

### Added

- Stack vrstva nad `project-template`: bun workspaces monorepo (`apps/web` Next.js 16
  App Router + `apps/studio` Sanity), config scaffold (next/tsconfig/eslint/postcss/
  components.json, sanity config), quality-gate a stack sekce v AGENTS.md. Bez aplikačního
  kódu — ten si doplní projekt.
