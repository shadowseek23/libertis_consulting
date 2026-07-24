# Runbook

<!-- TODO: Provozní postupy pro nasazený projekt. Osnovu drž podle skillu `runbook`.
     Aktualizuj ve stejném commitu, kdykoli se změní deploy, env proměnné nebo tok obsahu. -->

## Deploy

Vercel, napojený na git repo. **Root directory projektu ve Vercelu nastav na `apps/web`**
(monorepo). Push do main → produkční deploy; PR → preview deploy.

## Env proměnné

- `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET` — čtení obsahu ze Sanity
- `SANITY_API_READ_TOKEN` — jen pokud čteš draft/preview obsah
<!-- TODO: doplň skutečné proměnné projektu -->


## Rollback

<postup>

## Diagnostika podle symptomu

<tabulka symptom → příčina → náprava>
