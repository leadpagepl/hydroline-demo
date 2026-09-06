import { useState } from 'react'
import { Reveal } from '../ui/Reveal.jsx'

const SERVICES = [
  { n: '01', t: 'Naprawa przecieków', a: 'cold',
    d: 'Szybko znajdujemy wyciek i usuwamy problem.' },
  { n: '02', t: 'Montaż baterii i WC', a: 'cold',
    d: 'Montujemy baterie, umywalki, WC i kabiny.' },
  { n: '03', t: 'Udrażnianie odpływów', a: 'cold',
    d: 'Czyścimy zapchane odpływy i rury.' },
  { n: '04', t: 'Wymiana rur', a: 'cold',
    d: 'Wymieniamy stare rury na nowe i szczelne.' },
  { n: '05', t: 'Montaż bojlerów i podgrzewaczy', a: 'hot',
    d: 'Podłączamy nowy bojler albo wymieniamy stary.' },
  { n: '06', t: 'Instalacje wodne i kanalizacyjne', a: 'cold',
    d: 'Robimy nową instalację od początku do końca.' },
  { n: '07', t: 'Ogrzewanie podłogowe', a: 'hot',
    d: 'Układamy pętle i podłączamy rozdzielacz.' },
  { n: '08', t: 'Modernizacja instalacji', a: 'hot',
    d: 'Przerabiamy starą instalację na nową.' },
]

export default function Services() {
  const [open, setOpen] = useState(null)

  return (
    <section className="svc" id="uslugi" aria-labelledby="svc-h">
      <div className="wrap">
        <Reveal className="sec-head">
          <p className="tech sec-head__eyebrow">Zakres</p>
          <h2 className="h-section" id="svc-h">Usługi</h2>
          <p className="lead sec-head__lead">
            Małe naprawy i całe instalacje. Robimy jedno i drugie.
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
