# Rabanne Akademie

Jednoduchá statická webová stránka připravená pro Cloudflare Pages.

## Lokálně

```bash
npm run dev
```

Otevři adresu, kterou vypíše příkaz (obvykle `http://localhost:3000`).

## Nasazení na Cloudflare Pages

1. Nahraj projekt do GitHubu.
2. V Cloudflare otevři **Workers & Pages** a zvol **Create application > Pages > Connect to Git**.
3. Vyber tento repozitář.
4. Nastav **Build command** na `npm run build` a **Build output directory** na `.`.
5. Spusť deployment.

Protože jde o čistý statický web, Cloudflare nepotřebuje žádný framework ani server.

## Úpravy

- Texty a struktura: `index.html`
- Vzhled a responzivita: `styles.css`
- Chování formuláře: `script.js`
