import { Reveal } from '../ui/Reveal.jsx'
import { Motif } from '../ui/Flow.jsx'

const VALUES = [
  { t: 'Od 1997 roku', d: 'Firma działa na rynku od wielu lat.' },
  { t: 'Większe realizacje', d: 'Doświadczenie przy instalacjach w budynkach wielorodzinnych.' },
  { t: 'Szeroki zakres', d: 'Woda, kanalizacja, ogrzewanie i gaz.' },
  { t: 'Nowe i modernizacje', d: 'Robimy nowe instalacje i modernizujemy stare.' },
]

export default function Values() {
  return (
    <section className="vals" aria-labelledby="vals-h">
      <div className="wrap">
        <Reveal className="sec-head">
          <p className="tech sec-head__eyebrow">Firma</p>
          <h2 className="h-section" id="vals-h">Doświadczenie,<br />które można sprawdzić</h2>
        </Reveal>

        <ul className="vals__grid">
          {VALUES.map((v, i) => (
            <Reveal as="li" key={v.t} className="val" delay={i * 0.08} y={22}>
              <Motif variant={i} />
              <h3 className="val__t">{v.t}</h3>
              <p className="val__d">{v.d}</p>
              <span className="val__n tech">{String(i + 1).padStart(2, '0')}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
