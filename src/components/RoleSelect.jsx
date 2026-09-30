import { go } from "../lib/router.js";
import { positionIcon, splashUrl, SFX } from "../lib/ddragon.js";
import { playSfx, playHover } from "../lib/audio.js";

const ROLES = [
  { id: "top", pos: "top", label: "Top", ready: false },
  { id: "mid", pos: "middle", label: "Mid", ready: true },
  { id: "adc", pos: "bottom", label: "ADC", ready: false },
];

export default function RoleSelect() {
  return (
    <section className="role-screen">
      <div className="role-bg" style={{ backgroundImage: `url(${splashUrl("Vladimir", 0)})` }} aria-hidden="true" />
      <div className="wrap role-inner">
        <p className="eyebrow">Vladimir · segundo o Guaxi</p>
        <h1 className="display">
          Escolhe tua <em>rota</em>
        </h1>
        <p className="lede">
          Matchups do Vlad tiradas dos vídeos públicos do Guaxi: dificuldade, runa, feitiços, build e o que fazer na lane
          contra cada campeão.
        </p>
        <div className="roles">
          {ROLES.map((r) => (
            <button
              key={r.id}
              className="role-card"
              disabled={!r.ready}
              onPointerEnter={(e) => r.ready && e.pointerType === "mouse" && playHover(SFX.hover)}
              onClick={() => {
                playSfx(SFX.role);
                go("/" + r.id);
              }}
            >
              <img src={positionIcon(r.pos, r.ready ? "" : "disabled")} alt="" width="56" height="56" />
              <span className="role-label">{r.label}</span>
              <span className="role-status">{r.ready ? "Entrar" : "Em breve"}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
