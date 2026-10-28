# Runbook

Vlastník: Daniel Sýkora · Poslední revize: 2026-10-28.

## Rychlé odkazy

| Položka                 | Hodnota                                          |
| ----------------------- | ------------------------------------------------ |
| Vývojový náhled         | http://localhost:5600                            |
| Produkční náhled        | http://localhost:5601                            |
| Produkční hosting a URL | Nenastaveno                                      |
| Obsah                   | Zdrojové TSX a `src/data/projects.ts`            |
| Kontakt                 | hello@libertisconsulting.com · +420 724 587 758  |
| Proměnné prostředí      | Žádné povinné; volitelný `SITE_URL` pro metadata |

Porty jsou rezervované pro projekt `libertis.consulting` ve společném registru vývojových portů. Příkazy spouštěj z kořene projektu.

## Spuštění vývoje

1. Ověř existující server na http://localhost:5600. Pokud běží, použij jej.
2. Nainstaluj závislosti `bun install --frozen-lockfile`.
3. Spusť `bun run dev`.
4. Ověř HTTP 200 a hlavní sdělení „Vaše podnikání má duši.“

## Produkční build a lokální spuštění

```sh
bun run typecheck
bun run format
bun run lint
bun run build
bun run start
```

Očekávaný výsledek: hotový build a stránka na http://localhost:5601. Samostatný produkční server nekoliduje s dev serverem.

## Publikace

Hosting nebyl vytvořen. Případný Vercel projekt používá root directory `apps/web`; nevytvářet CMS ani proměnné pro Sanity. Před veřejným spuštěním nastavit skutečnou kanonickou URL, metadataBase, změnit `robots` z `noindex`, doplnit identifikaci provozovatele a ověřit aktuální obsah. `git push` provádí výhradně uživatel.

## Úpravy obsahu

Hlavní texty a kontakty jsou v `apps/web/src/app/page.tsx`. Reference v `apps/web/src/data/projects.ts`. Screenshoty v `apps/web/public/references/`. Po změně provést kontroly a build; produkční server následně restartovat. V dev režimu se změny promítají automaticky.

## Obnova

Zdrojové soubory, média a fonty jsou v Git historii, instalační stav v `bun.lock`. Pro návrat k předchozí verzi použít nový checkout požadovaného commitu, `bun install --frozen-lockfile`, `bun run build` a `bun run start`. Existující necommitované soubory nepřepisovat. Obnova databáze ani rotace tajemství se netýká této architektury.

## Diagnostika

| Příznak                       | Postup                                                                                   |
| ----------------------------- | ---------------------------------------------------------------------------------------- |
| Port je obsazený              | Ověřit existující proces; nepřepínat automaticky na jiný port ani nezabíjet cizí server. |
| `bun run start` nenajde build | Nejprve `bun run build`.                                                                 |
| Změna obsahu není vidět       | Ověřit adresu a režim; produkční build se musí sestavit a restartovat.                   |
| Obrázek chybí                 | Ověřit název souboru v `public/`, cestu v datech a HTTP stav.                            |
| Kontakt se neodeslal          | Odkaz otevře e-mailového klienta, sám zprávu neodesílá.                                  |

V případě nejasností kontaktovat vlastníka a přiložit konkrétní URL, čas a chybu z konzole; neposílat přístupové údaje.
