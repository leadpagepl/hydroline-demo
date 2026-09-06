import { useEffect, useRef, useState } from 'react'
import Img from '../ui/Img.jsx'
import { Reveal, RevealLines } from '../ui/Reveal.jsx'

const STEPS = [
  { n: '01', t: 'Kontakt', d: 'Piszesz lub dzwonisz.' },
  { n: '02', t: 'Oględziny', d: 'Sprawdzamy, co trzeba zrobić.' },
  { n: '03', t: 'Wycena', d: 'Mówimy, ile to będzie kosztować.' },
  { n: '04', t: 'Praca', d: 'Robimy to, co ustaliliśmy.' },
  { n: '05', t: 'Sprawdzenie', d: 'Na końcu sprawdzamy, czy wszystko działa.' },
]

export default function Process() {
  const [active, setActive] = useState(0)
  const refs = useRef([])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.dataset.i))
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )
    refs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  // stop the fill at the active step's marker rather than past it
  const pct = ((active + 0.24) / STEPS.length) * 100

  return (
    <section className="proc" aria-labelledby="proc-h">
      <div className="wrap proc__inner">
        <div className="proc__sticky">
          <RevealLines
            tag="h2"
            id="proc-h"
            className="display proc__title"
            lines={['JAK', 'PRACUJEMY']}
          />
          <Reveal className="proc__figure" delay={0.1}>
            <Img
              name="planning-installation"
              alt="Rysunek instalacji sanitarnej z kształtkami i narzędziami pomiarowymi"
              sizes="(max-width: 1024px) 92vw, 40vw"
              className="proc__img"
              position="50% 45%"
            />
            <span className="proc__cap tech">
              <span className="dot dot--cold" />
              Zakres ustalamy przed rozpoczęciem pracy
            </span>
          </Reveal>
        </div>

        <ol className="proc__steps">
          <div className="proc__track" aria-hidden="true">
            <span className="proc__fill" style={{ height: `${pct}%` }} />
          </div>
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              data-i={i}
              ref={(el) => (refs.current[i] = el)}
              className={`step ${i === active ? 'is-active' : ''} ${i < active ? 'is-past' : ''}`}
            >
              <span className="step__n tech">{s.n}</span>
              <h3 className="step__t">{s.t}</h3>
              <p className="step__d">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
