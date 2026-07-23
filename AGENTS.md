Obecný, nástrojově nezávislý zdroj instrukcí pro jakéhokoli AI coding agenta v tomto
repozitáři (Claude Code, Codex, Cursor, Copilot a další). Pokud tvůj nástroj čte i vlastní
soubor (např. `CLAUDE.md`), považuj tento dokument za nadřazený zdroj pravdy.

<!--
  Tenhle repozitář vznikl z šablony `project-template` (viz `.template-version`).
  Invariantní části (Postup práce, Konvence, Jazyk, footer) drž shodné s šablonou,
  ať jdou opravy backportovat. Projektově specifické části vyplň níže podle TODO.
-->

## Projektový kontext

<!-- TODO: Co se staví a proč. Jedna dvě věty. Stack. Co projekt NENÍ (žádný e-shop…). -->
{{PROJECT_NAME}} — <stručný popis>.

**Stav: projekt nezahájen.** <!-- aktualizuj, jak projekt roste -->

## Než začneš

1. Přečti si tento dokument.
2. <!-- TODO: odkaz na klíčovou rešerši/inventuru, bez které agent udělá špatná rozhodnutí. Smaž, pokud není. -->
3. Přečti si aktivní plán v [`memory/tasks/`](memory/tasks/).
4. Když si dokumentace nebo kód odporují, **ohlas to a nezačínej** — rozpor je vada
   zadání a rozhodnutí patří uživateli, ne odhadu.

## Tři věci, které musíš vědět předem

<!-- TODO: Projektově specifické pasti — věci, které nejsou vidět z kódu a agent je jinak
     nemůže tušit. Když žádné nejsou, celou sekci smaž. -->

## Postup práce

Z promptu vyčti, jestli jde o novou práci, opravu nebo revizi, a založ plán do
`memory/tasks/{feature,bugfix,revision}/`. Kdy plán zakládat a kdy ne: skill
`implementation-plan`.

Features implementuj test-first tam, kde je co testovat (datové transformace, logika).
U prezentačního markupu testy nevynucuj.

Když uděláš chybu, zapiš ji do `memory/mistakes.md` — co se stalo, jak jsi to napravil,
**a jak jí příště předejít**.

## Povinné příkazy po každé změně

Zatím nejsou — projekt nemá kód. **Doplň je sem, jakmile vznikne `package.json`**,
v pořadí typecheck → format+lint → test. Podrobnosti: skill `quality-gate`.

## Konvence

Struktura a workflow se řídí sdílenými skilly v `~/.claude/skills` (zrcadlené do
`~/.agents/skills` pro Codex). Přečti si relevantní skill, místo abys konvence odvozoval:

| Téma | Skill |
|---|---|
| Kam který soubor patří (`docs/` vs `memory/`) | `project-structure` |
| Plány, ADR, handoffy | `project-memory`, `implementation-plan` |
| Formát commitů (Zadání/Řešení, česky) | `conventional-commits` |
| Psaní a údržba tohoto souboru | `agent-instructions` |
| Kdy otevřít prohlížeč a kdy se zeptat | `browser-verification` |
| Povinné kontroly po změně kódu | `quality-gate` |
| Provozní runbook | `runbook` |
<!-- TODO: přidej skilly podle stacku projektu, např.:
| Sanity schémata, GROQ, TypeGen | `sanity-best-practices`, `nextjs-sanity` |
| Responzivní obrázky | `empirical-srcset` |
-->

- **Univerzální rešerše** (Next.js, Vercel, SEO, agentní workflow) jsou v `C:\_dev\_research\`.
  Přečti si relevantní soubor, když téma řešíš — nekopíruj je sem.
  `memory/research/` je jen pro věci specifické pro tenhle projekt.
- **Operační procedury:** `docs/runbook.md`. Aktualizuj ho ve stejném commitu, kdykoli
  se změní deploy, env proměnné nebo tok obsahu.
- Scratch soubory do `.tmp/`.

## Jazyk

Dokumentace, plány a commity **česky**. Kód, názvy souborů a identifikátory anglicky.
<!-- TODO: pokud je obsah/produkt v jiném jazyce, dopiš pravidlo (např. „obsah webu je
     anglický — nepřekládej ho"). -->

## Zakázáno

- Zavádět závislosti bez zápisu do `memory/decisions/` jako ADR.
<!-- TODO: projektově specifické zákazy (např. „sahat na produkci zápisem"). -->

Než začneš měnit tento soubor, vyžádej si od uživatele explicitní souhlas.
