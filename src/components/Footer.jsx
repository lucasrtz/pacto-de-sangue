import { GUAXI_CHANNELS } from "../config.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <p>
          Conteúdo baseado nos vídeos públicos do Guaxi (
          {GUAXI_CHANNELS.map((c, i) => (
            <span key={c.url}>
              {i > 0 && " e "}
              <a href={c.url} target="_blank" rel="noopener noreferrer">
                {c.label}
              </a>
            </span>
          ))}
          ), na tier list de junho de 2026 e no "PDF do Vlad" que ele deixa na descrição. Os resumos vêm de legendas
          automáticas; cada confronto linka o vídeo de origem. Site de fã, sem vínculo com o Guaxi.
        </p>
        <p>
          Ícones, splashes e itens: Riot Data Dragon. Áudio do client e augments de Arena: CommunityDragon. Estatísticas
          do patch: cálculo próprio com a API oficial da Riot, só números agregados.
        </p>
        <p className="legal">
          Pacto de Sangue isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone
          officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties
          are trademarks or registered trademarks of Riot Games, Inc.
        </p>
      </div>
    </footer>
  );
}
