# Pacto de Sangue (v2)

Guia de matchups de Vladimir mid baseado no conteúdo público do Guaxi. Vite + React, site estático.

## Rodar

```bash
npm install
npm run dev
```

`npm run build` gera `dist/` (base relativa: funciona em Vercel, Netlify ou GitHub Pages).

## Onde mexer

- `data/matchups.json`: os confrontos (fonte única; a v2 lê direto daqui).
- `src/content/fundamentos.js`: aba Fundamentos.
- `src/config.js`: chave Pix, nome/cidade do recebedor, canais do Guaxi.
- `src/lib/ddragon.js`: URLs de Data Dragon, CommunityDragon e METAsrc.

## Estatísticas do patch (API da Riot)

1. Coloque a chave em `.env` (`RIOT_API_KEY=...`). A chave de desenvolvimento expira em 24h.
2. Rode a coleta (pode interromper e rodar de novo; o progresso fica em `data/.cache/`):

```bash
npm run stats -- --platforms br1,kr,euw1,na1 --minutes 120
```

3. Gera `data/stats.json`, que aparece no guia de cada confronto ("No patch X"). Depois é só `npm run build` e publicar.

A chave nunca vai pro site: o script roda na tua máquina e só o `stats.json` (números agregados) é publicado.

## Rotas (hash)

`#/` rota · `#/mid` seleção · `#/mid/<campeao>` guia · `#/fundamentos` · `#/arena`
