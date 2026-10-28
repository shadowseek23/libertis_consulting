# Libertis Consulting

Český prezentační web kreativního studia Daniela Sýkory. Strategie značky, obsahová komunikace a digitální prezentace. Next.js App Router ze sdílené šablony, bez Sanity.

## Spuštění

```sh
bun install --frozen-lockfile
bun run dev
```

Vývojový náhled: [http://localhost:5600](http://localhost:5600).

```sh
bun run build
bun run start
```

Produkční náhled: [http://localhost:5601](http://localhost:5601). Žádné povinné proměnné prostředí nejsou potřeba. Volitelný `SITE_URL` nastavuje základ absolutních URL pro sdílení; příklad je v `.env.example`.

## Kontroly

```sh
bun run typecheck
bun run format
bun run lint
bun run build
```

## Obsah a vzhled

- Hlavní texty a služby: `apps/web/src/app/page.tsx`.
- Sedm referencí a jejich popisy: `apps/web/src/data/projects.ts`.
- Skutečné screenshoty: `apps/web/public/references/`.
- Dodané logo a hlavní vizuál: `apps/web/public/brand/`.
- Lokální fonty Manrope a Instrument Serif včetně OFL licencí: `apps/web/src/assets/fonts/`.
- Styly: `apps/web/src/app/globals.css`.
- [Popisy, zdroje a screenshoty referencí](docs/references.md).
- [Architektura](docs/design/architecture.md) a [provozní postupy](docs/runbook.md).

Web má přirozený scroll bez blokování nebo skrývání obsahu. Jemný pohyb hlavního vizuálu a hover efekty respektují nastavení omezeného pohybu. Kontaktní odkazy otevřou e-mailového nebo telefonního klienta; web neodesílá formulář a nepoužívá analytiku.

Jde o lokální návrh, zatím s `noindex`. Produkční hosting ani kanonická doména nejsou nastaveny. Původ ze šablony je zachován v historii, remote `template` a `.template-version`. `git push` provádí výhradně uživatel.
