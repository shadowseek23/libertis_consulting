# {{PROJECT_NAME}}

Web na **Next.js 16 (App Router) + Sanity CMS**, bun workspaces monorepo.
Repozitář vznikl z šablony `nextjs-sanity-template` (potomek `project-template`,
viz [`.template-version`](.template-version) a [`TEMPLATE.md`](TEMPLATE.md)).

> Config-only scaffold — konfigurace, závislosti a struktura složek jsou hotové,
> aplikační kód (layout, stránky, schémata) si doplní projekt.

## Spuštění

```bash
bun install
bun run dev       # Next.js web (apps/web)
bun run studio    # Sanity Studio (apps/studio)
```

Před spuštěním doplň `projectId`/`dataset` do `apps/studio/sanity.config.ts`
a `sanity.cli.ts` (hledej `TODO_PROJECT_ID`).

## Kontroly

```bash
bun run typecheck && bun run format && bun run lint
```

## Struktura

```
apps/web/     Next.js 16 App Router — veřejný web
apps/studio/  Sanity Studio — CMS
docs/         dokumentace pro člověka — požadavky, návrh, runbook
memory/       paměť agentů — plány, rozhodnutí, rešerše, chyby
```

Stack a konvence popisuje [`AGENTS.md`](AGENTS.md); samotné konvence jsou ve
sdílených skillech v `~/.claude/skills`, ne v tomto repu.
