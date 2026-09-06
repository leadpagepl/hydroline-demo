import { Reveal } from '../ui/Reveal.jsx'
import { Motif } from '../ui/Flow.jsx'

const VALUES = [
  { t: 'Szybki kontakt', d: 'Odpowiadamy sprawnie i jasno.' },
  { t: 'Dokładna robota', d: 'Robimy to porządnie i schludnie.' },
  { t: 'Jasna wycena', d: 'Wiesz, za co płacisz.' },
  { t: 'Doświadczenie', d: 'Znamy się na instalacjach i naprawach.' },
]

export default function Values() {
  return (
    <section className="vals" aria-labelledby="vals-h">
      <div className="wrap">
        <Reveal className="sec-head">
          <p className="tech sec-head__eyebrow">Zasady</p>
          <h2 className="h-section" id="vals-h">Dlaczego my</h2>
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
