# Chyby a jak se jim příště vyhnout

Když agent udělá chybu, zapiš sem: **co se stalo**, **jak se to napravilo**,
**jak jí příště předejít**. Nejnovější nahoře.

## 2026-10-28 — Aktualizovaný screenshot se nepromítl do náhledu

- Problém: `next/image` držel optimalizovanou verzi screenshotu, který byl během přípravy nahrazen souborem bez cookie lišty.
- Náprava: screenshoty se importují staticky, takže nová binárka vytvoří novou adresu s hashem obsahu.
- Prevence: po odmítnutí cookies počkat na zmizení dialogu, zkontrolovat výsledný snímek a u lokálních referenčních obrázků používat statické importy.
