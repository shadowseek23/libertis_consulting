# Lineage a přenos změn

Git-native mechanismus, jak potomek ví, že pochází z této šablony, a jak se přenášejí
opravy mezi šablonou a projekty.

## Jak potomek pozná rodiče

Dvě značky, redundantně:

1. **`.template-version`** (commitnutý soubor v potomkovi) — člověk i stroj přečtou původ:
   ```json
   {
     "template": "https://github.com/<user>/project-template",
     "ref": "<commit SHA šablony, ze kterého potomek vznikl>",
     "created": "2026-07-23"
   }
   ```
2. **git remote `template`** — ukazuje na repozitář šablony. Slouží k tažení novinek.
   (`origin` si potomek nastaví na svůj vlastní repozitář.)

## Novinky ze šablony → do projektu

V potomkovi:

```powershell
scripts/template-update.ps1        # git fetch template + náhled diffu
# po odsouhlasení:
git merge template/main
```

Protože potomek vznikl se zachovanou historií šablony, jde o normální 3-way merge —
git spáruje společné předky a nakonfliktní jen to, co se v projektu záměrně rozešlo.
Po merge přepiš `ref` v `.template-version` na nové SHA (`git rev-parse template/main`).

## Oprava v projektu → zpět do šablony (backport)

**Tento směr je vždy manuální** — žádný nástroj nemerguje změny potomka automaticky
nahoru. Drž opravy scaffoldu (AGENTS.md, hooky, skripty…) v samostatných commitech,
ať jdou vybrat:

```powershell
# v potomkovi
git fetch template
git checkout -b backport template/main
git cherry-pick <commit-se-scaffold-opravou>
git push template backport        # otevři PR na šabloně, nebo merge do main
```

Náhled, co se v projektu rozešlo od šablony:

```powershell
git fetch template
git diff template/main -- AGENTS.md CLAUDE.md .githooks .gitmessage .claude scripts
```

## Které soubory backportovat

Přenášej jen **invariantní scaffold** — části, co mají být ve všech projektech stejné:
`AGENTS.md` (sekce Postup práce, Konvence, Jazyk, footer), `.githooks/`, `.gitmessage`,
`scripts/`, kostry `docs/`/`memory/`.

**Neponášej** projektově specifické věci: Projektový kontext, „Tři věci", konkrétní
skilly podle stacku, obsah `memory/`, `.mcp.json` upravený pro daný projekt.
