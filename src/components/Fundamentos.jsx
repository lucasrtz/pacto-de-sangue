import { FUNDAMENTOS, FUNDAMENTOS_LEDE } from "../content/fundamentos.js";

export default function Fundamentos() {
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
                {card.items.map(([dt, dd]) => (
                  <div key={dt}>
                    <dt>{dt}</dt>
                    <dd>{dd}</dd>
                  </div>
                ))}
              </dl>
            )}
            {card.builds && (
              <div className="builds">
                {card.builds.map(([name, items]) => (
                  <div key={name} className="build">
                    <h3>{name}</h3>
                    <ol className="build-path">
                      {items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ol>
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
