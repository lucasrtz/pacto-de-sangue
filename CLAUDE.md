# Pacto de Sangue — guia de matchups de Vladimir (Guaxi)

Site público de fã com as matchups de Vladimir mid baseadas no conteúdo público do Guaxi (YouTube @guaxilol1 e @CanalGuaxi). Vai ser apresentado ao próprio Guaxi.

## O que já existe nesta pasta
- `prototipo-v1.html` — primeira versão (HTML único): grade de inimigos, filtros por classe/dificuldade, painel do confronto, aba Fundamentos. Serve de referência de conteúdo e fluxo, não de visual final.
- `data/matchups.json` — 58 confrontos: classe, dificuldade 1–5 (tier list de jun/2026), resumo, setup (runa/feitiços/build), dicas de lane e links dos vídeos de origem. `onlyTierList: true` = só tem a opinião da tier list, sem vídeo de lane.
- `data/fundamentos-pdf-vlad.md` — runas, itens, builds, botas e feitiços do "PDF do Vlad" público do Guaxi.
- `data/tierlist-2026.md` — anotações da tier list em vídeo.
- **v2 (Vite + React)**: `src/` — `App.jsx` (shell + rotas por hash), `components/` (RoleSelect, ChampSelect, MatchupGuide, Fundamentos, Arena, PixModal, VolumeControl, Footer), `lib/` (ddragon, audio, pix, router, matchups), `config.js` (Pix). Ver README.md.

## Objetivo da v2
Experiência de "seleção de campeões" inspirada no client do LoL.
1. Tela inicial: escolher a rota (começar só com MID; deixar TOP/ADC como "em breve").
2. Tela "Escolhe teu inimigo": grade com o ícone de cada campeão, filtros (classe, dificuldade 1–5, só com guia), busca, ordenação, botão Aleatório e LOCK IN.
3. Ao selecionar: toca a fala de seleção do campeão e um som de clique/hover do client; ao dar LOCK IN abre o guia do confronto (splash art ao fundo, dificuldade, setup, dicas, vídeos).
4. Aba **Fundamentos** (conteúdo de `data/fundamentos-pdf-vlad.md`).
5. Aba **Arena**: só a build de Arena do **Vladimir** (augments por raridade, build principal, situacionais, como jogar). As escolhas ficam em `data/arena-vlad.json` (nomes em pt-BR); ícones/textos vêm do CommunityDragon (`cdragon/arena/pt_br.json`) e do Data Dragon (itens com `maps["30"]`). Sem links nem raspagem do MetaSrc.
6. Botão de **apoio via Pix**: mostra a chave em texto, botão de copiar e QR code gerado no cliente. A chave fica numa constante de config (preencher depois).
7. Controle de volume / mudo, lembrado em localStorage. Sons só tocam depois da primeira interação.

8. **Estatísticas do patch**: `scripts/collect-stats.mjs` usa a API oficial da Riot (chave em `.env`, nunca em `src/`) e gera `data/stats.json` com números agregados de Vlad mid por inimigo (Mestre+). O guia mostra isso como complemento às dicas do Guaxi, marcando "igual/diferente do vídeo".

## Regras importantes
- Não raspar METAsrc, OP.GG, Blitz etc. (termos proíbem coleta automatizada). Dados atualizados vêm da API da Riot.
- **Não copiar código, layout, textos ou arquivos do courtesy.com.br.** Ele é só inspiração de conceito; tudo deve ser feito do zero.
- Assets de jogo só de fontes oficiais/públicas:
  - Ícones e splashes: Riot Data Dragon (`https://ddragon.leagueoflegends.com/`, pegar a versão atual em `/api/versions.json`).
  - Falas de seleção e sons do client: CommunityDragon (`https://raw.communitydragon.org/`).
- Rodapé obrigatório (Riot "Legal Jibber Jabber"): "Pacto de Sangue isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc."
- Conferir a política de fan projects da Riot sobre doações antes de publicar o Pix.
- Creditar o Guaxi e linkar os vídeos em cada confronto; deixar claro que o resumo vem de legendas automáticas.
- Não usar conteúdo do curso pago dele.

## Stack sugerida
Vite + React (ou HTML/JS puro), site estático, deploy na Vercel/Netlify/GitHub Pages. Responsivo (celular), tema escuro estilo client.
