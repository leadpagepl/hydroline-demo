import Compare from '../ui/Compare.jsx'
import { Reveal } from '../ui/Reveal.jsx'

export default function Projects() {
  return (
    <section className="proj" id="realizacje" aria-labelledby="proj-h">
      <div className="wrap">
        <Reveal className="sec-head sec-head--split">
          <div>
            <p className="tech sec-head__eyebrow">Nasze prace</p>
            <h2 className="h-section" id="proj-h">Od małej naprawy<br />po większą<br />instalację</h2>
          </div>
          <p className="lead">
            Pracujemy przy mieszkaniach, domach i większych budynkach.
            Przesuń suwak, aby porównać.
          </p>
        </Reveal>
      </div>

      <article className="case wrap" aria-labelledby="case-1">
        <header className="case__head">
          <span className="case__n tech">Realizacja 01</span>
          <h3 className="case__t" id="case-1">Modernizacja kotłowni</h3>
          <p className="case__cat tech"><span className="dot dot--hot" />Ogrzewanie</p>
        </header>

        <Compare
          before="project-boiler-room-before"
          after="project-boiler-room-after"
          beforeAlt="Kotłownia przed modernizacją — rozbudowany układ starych przewodów"
          afterAlt="Ta sama kotłownia po modernizacji — prostszy i czytelniejszy układ"
          sizes="(max-width: 900px) 92vw, 88vw"
          className="cmp--wide"
          start={50}
          ariaLabel="Kotłownia: przesuń, aby porównać"
        />

        <dl className="case__meta">
          <div>
            <dt className="tech">Co było</dt>
            <dd>Stary, rozbudowany układ. Trudno było dojść do zaworów.</dd>
          </div>
          <div>
            <dt className="tech">Co jest teraz</dt>
            <dd>Prostszy układ. Widać, co gdzie idzie, i da się to obsłużyć.</dd>
          </div>
          <div>
            <dt className="tech">Zakres</dt>
            <dd>Centralne ogrzewanie i ciepła woda.</dd>
          </div>
        </dl>
      </article>

      <article className="case case--split wrap" aria-labelledby="case-2">
        <div className="case__col">
          <header className="case__head">
            <span className="case__n tech">Realizacja 02</span>
            <h3 className="case__t" id="case-2">Nowa instalacja wodna</h3>
            <p className="case__cat tech"><span className="dot dot--cold" />Woda i kanalizacja</p>
          </header>
          <p className="case__body">
            Instalacja działała, ale rury szły bez ładu i nie dało się do nich dojść.
          </p>
          <dl className="case__meta case__meta--stack">
            <div>
              <dt className="tech">Co zrobiliśmy</dt>
              <dd>Wymiana zużytych elementów, nowe zawory i poprawione połączenia.</dd>
            </div>
            <div>
              <dt className="tech">Zakres</dt>
              <dd>Instalacja wodna i kanalizacyjna.</dd>
            </div>
          </dl>
          <p className="case__hint tech">Przesuń w pionie, aby porównać</p>
        </div>

        <Compare
          before="project-plumbing-before"
          after="project-plumbing-after"
          beforeAlt="Instalacja wodna przed pracami — przewody poprowadzone bez ładu"
          afterAlt="Ta sama instalacja po pracach — równe przebiegi i nowe mocowania"
          orientation="v"
          sizes="(max-width: 900px) 92vw, 46vw"
          start={45}
          ariaLabel="Instalacja: przesuń w pionie, aby porównać"
        />
      </article>
    </section>
  )
}
