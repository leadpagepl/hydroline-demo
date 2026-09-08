import { useState } from 'react'
import { Reveal } from '../ui/Reveal.jsx'

const SERVICES = [
  { n: '01', t: 'Instalacje wodne', a: 'cold',
    d: 'Montaż nowych instalacji wodnych.' },
  { n: '02', t: 'Ogrzewanie', a: 'cold',
    d: 'Montaż i naprawa instalacji grzewczych.' },
  { n: '03', t: 'Kanalizacja', a: 'hot',
    d: 'Naprawa i wymiana instalacji kanalizacyjnych.' },
  { n: '04', t: 'Montaż armatury', a: 'hot',
    d: 'Montaż baterii, umywalek, WC i innych urządzeń.' },
  { n: '05', t: 'Naprawy', a: 'hot',
    d: 'Naprawa przecieków i usterek.' },
  { n: '06', t: 'Wymiana instalacji', a: 'cold',
    d: 'Wymiana starych rur i instalacji.' },
]

export default function Services() {
  const [open, setOpen] = useState(null)

  return (
    <section className="svc" id="uslugi" aria-labelledby="svc-h">
      <div className="wrap">
        <Reveal className="sec-head">
          <p className="tech sec-head__eyebrow">Usługi</p>
          <h2 className="h-section" id="svc-h">Usługi</h2>
          <p className="lead sec-head__lead">
            Montaż, naprawa i wymiana instalacji.
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
