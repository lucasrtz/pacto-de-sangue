# Pacto de Sangue (v2)

Guia de matchups de Vladimir mid baseado no conteúdo público do Guaxi. Vite + React, site estático.

## Coletar mais partidas de Vlad

1. Chave nova da Riot em `.env` (`RIOT_API_KEY=...`); a de desenvolvimento expira em 24h.
2. Rode (continua de onde parou; pode interromper com Ctrl+C):

```bash
npm run stats -- --platforms br1,kr,euw1,na1 --minutes 120
```

Os números juntam todas as partidas desde o patch 16.19. Se sair um patch que mude o Vlad de verdade, troque `FROM_PATCH` em `scripts/collect-stats.mjs` (ou rode com `--from-patch 16.21`) para recomeçar a partir dele.
