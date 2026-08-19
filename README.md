# Rabanne | The New Million

Jednoduchá statická produktová stránka představující nové vůně Rabanne 1 Million Black a Million Red for Her. Připravená pro Cloudflare Pages.

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
5. Pole **Deploy command** nech úplně prázdné. U Cloudflare Pages se po buildu nasazení provede automaticky; příkaz `npx wrangler deploy` je určený pro Workers a tady by omylem nahrával i `node_modules`.
6. Spusť deployment.

Protože jde o čistý statický web, Cloudflare nepotřebuje žádný framework ani server.

## Úpravy

- Texty, struktura a produktové odkazy: `index.html`
- Vzhled a responzivita: `styles.css`
- Navigace: `script.js`
