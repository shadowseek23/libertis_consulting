# project-template

Šablona repozitáře pro AI-asistované projekty (Claude Code + Codex). Sjednocuje
instrukce pro agenty, strukturu `docs/`/`memory/`, konvence commitů, git hooky
a konfiguraci MCP serverů, aby každý nový projekt začínal ze stejného základu.

Označ tento repozitář na GitHubu jako **Template repository** (Settings → General →
„Template repository").

## Založení nového projektu

```powershell
scripts/new-project.ps1 -Name muj-web
# → vytvoří C:\_dev\muj-web z této šablony
```

Skript:
- zkopíruje šablonu se **zachovanou git historií** (kvůli 3-way merge při updatech),
- nastaví remote `template` na tento repozitář (rodičovství),
- zapíše [`.template-version`](.template-version) s URL a commitem rodiče,
- nahradí `{{PROJECT_NAME}}` v `AGENTS.md` a `README.md`,
- zapne commit-msg hook (`git config core.hooksPath .githooks`).

Pak potomkovi nastavíš vlastní `origin` a odkomituješ.

## Lineage a přenos změn

Jak potomek pozná rodiče a jak se přenášejí opravy oběma směry:
**[`TEMPLATE.md`](TEMPLATE.md)**.

## Co je uvnitř

```
AGENTS.md            nadřazené instrukce pro agenty (invariant + TODO placeholdery)
CLAUDE.md            @AGENTS.md
.mcp.json            MCP servery pro Claude Code (uprav podle stacku)
.codex/config.toml   tytéž servery pro Codex
.claude/settings*    permissions a povolené MCP servery
.githooks/           commit-msg hook (conventional commits + Zadání/Řešení)
.gitmessage          šablona commit zprávy
docs/                dokumentace pro člověka — kostra
memory/              paměť agentů — kostra
scripts/             new-project.ps1, template-update.ps1
```

Konvence samotné nejsou v tomto repu — jsou ve sdílených skillech v `~/.claude/skills`.
Viz `AGENTS.md`.
