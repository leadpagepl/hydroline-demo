import { useState } from 'react'
import { Reveal } from '../ui/Reveal.jsx'

const SERVICES = [
  { n: '01', t: 'Instalacje wodne', a: 'cold',
    d: 'Nowe instalacje zimnej i ciepłej wody. Wymiana starych rur i podłączeń.' },
  { n: '02', t: 'Kanalizacja', a: 'cold',
    d: 'Odpływy, piony kanalizacyjne i podłączenia urządzeń.' },
  { n: '03', t: 'Centralne ogrzewanie', a: 'hot',
    d: 'Nowe instalacje grzewcze oraz wymiana i modernizacja istniejących.' },
  { n: '04', t: 'Instalacje gazowe', a: 'hot',
    d: 'Montaż i modernizacja instalacji gazowych.' },
  { n: '05', t: 'Ciepła woda', a: 'hot',
    d: 'Instalacje ciepłej wody w mieszkaniach i większych budynkach.' },
  { n: '06', t: 'Większe instalacje', a: 'cold',
    d: 'Prace instalacyjne także w budynkach wielorodzinnych i większych obiektach.' },
]

export default function Services() {
  const [open, setOpen] = useState(null)

  return (
    <section className="svc" id="uslugi" aria-labelledby="svc-h">
      <div className="wrap">
        <Reveal className="sec-head">
          <p className="tech sec-head__eyebrow">Zakres</p>
          <h2 className="h-section" id="svc-h">Czym się zajmujemy</h2>
          <p className="lead sec-head__lead">
            Robimy nowe instalacje, wymieniamy stare i poprawiamy te,
            które wymagają naprawy.
          </p>
        </Reveal>

        <ul className="svc__list">
          {SERVICES.map((s, i) => (
            <Reveal as="li" key={s.n} delay={Math.min(i, 4) * 0.045} y={18}
              className={`svc__row svc__row--${s.a} ${open === i ? 'is-open' : ''}`}>
              <button
                type="button"
                className="svc__btn"
                aria-expanded={open === i}
                aria-controls={`svc-d-${s.n}`}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="svc__n tech">{s.n}</span>
                <span className="svc__t">{s.t}</span>
                <span className="svc__rule" aria-hidden="true" />
                <span className="svc__plus" aria-hidden="true" />
              </button>
              <div className="svc__wrapd" id={`svc-d-${s.n}`}>
                <div className="svc__inner">
                  <p className="svc__d">{s.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
