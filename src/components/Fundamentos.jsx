import { FUNDAMENTOS, FUNDAMENTOS_LEDE } from "../content/fundamentos.js";
import { useGameData, itemsInText, runesInText, runeIcon } from "../lib/gamedata.js";
import { ItemPath, RunePage } from "./Loadout.jsx";

// A página completa de Aery do PDF (primária Feitiçaria + secundária Precisão).
const AERY_PAGE = "Invocar Aery, Manto de Nimbus, Transcendência, Chamuscar, Lenda: Aceleração, Até a Morte";

export default function Fundamentos({ version }) {
  const data = useGameData(version);

  return (
    <section className="wrap page">
      <p className="eyebrow">Do "PDF do Vlad" público do Guaxi</p>
      <h1 className="display">Fundamentos</h1>
      <p className="lede">{FUNDAMENTOS_LEDE}</p>
      <div className="fund">
        {FUNDAMENTOS.map((card) => (
          <section key={card.title} className="card">
            <h2 className="card-title">{card.title}</h2>
            {card.items && (
              <dl className="card-list">
                {card.items.map(([dt, dd]) => {
                  const rune = card.title === "Runas" ? runesInText(data, dt)[0] : null;
                  return (
                    <div key={dt}>
                      <dt className={rune ? "with-icon" : ""}>
                        {rune && <img src={runeIcon(rune.icon)} alt="" width="26" height="26" />}
                        {dt}
                      </dt>
                      <dd>{dd}</dd>
                      {card.title === "Runas" && dt === "Aery" && (
                        <div className="fund-runepage">
                          <RunePage data={data} runeIds={runesInText(data, AERY_PAGE).map((r) => r.id)} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </dl>
            )}
            {card.builds && (
              <div className="builds">
                {card.builds.map(([name, items]) => (
                  <div key={name} className="build">
                    <h3>{name}</h3>
                    {data ? (
                      <ItemPath items={items.flatMap((n) => itemsInText(data, n).slice(0, 1))} version={version} />
                    ) : (
                      <p className="fine">{items.join(" → ")}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </section>
  );
}
