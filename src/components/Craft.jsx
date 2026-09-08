import Img from '../ui/Img.jsx'
import { Annot, AnnotList } from '../ui/Annot.jsx'
import { Reveal } from '../ui/Reveal.jsx'

const PLATE_A = [
  { n: '01', label: 'Połączenie', x: 52, y: 51, accent: 'cold' },
  { n: '02', label: 'Armatura', x: 69, y: 17, accent: 'hot' },
  { n: '03', label: 'Rura', x: 86, y: 78, accent: 'cold' },
]

const PLATE_B = [
  { n: '04', label: 'Zasilanie', x: 43, y: 20, accent: 'hot' },
  { n: '05', label: 'Powrót', x: 43, y: 62, accent: 'cold' },
  { n: '06', label: 'Rozdział instalacji', x: 20, y: 79, accent: 'hot' },
]

export default function Craft() {
  return (
    <section className="craft" aria-labelledby="craft-h">
      <div className="wrap">
        <Reveal className="sec-head sec-head--split">
          <div>
            <p className="tech sec-head__eyebrow">Detale</p>
            <h2 className="h-section" id="craft-h">Porządek<br />w instalacji<br />ma znaczenie</h2>
          </div>
          <p className="lead">
            Dobra instalacja powinna być dobrze połączona i łatwa
            do późniejszego serwisu.
          </p>
        </Reveal>

        <div className="craft__plate craft__plate--a">
          <figure className="plate">
            <div className="plate__frame">
              <Img
                name="detail-press-fitting"
                alt="Zaciskanie kształtki na rurze wielowarstwowej praską elektryczną"
                sizes="(max-width: 900px) 92vw, 62vw"
                className="plate__img"
              />
              <div className="plate__annots" aria-hidden="true">
                {PLATE_A.map((a, i) => (
                  <Annot key={a.n} {...a} side="right" delay={0.1 + i * 0.12} />
                ))}
              </div>
            </div>
            <figcaption className="plate__cap tech">
              Zaciskanie połączenia na rurze
            </figcaption>
          </figure>
          <AnnotList items={PLATE_A} />
        </div>

        <p className="craft__note">
          Czerwony to zasilanie, niebieski to powrót. Trzymamy ten sam porządek
          na całej instalacji, żeby dało się ją później obsłużyć.
        </p>

        <div className="craft__plate craft__plate--b">
          <div className="craft__aside">
            <AnnotList items={PLATE_B} />
          </div>
          <figure className="plate">
            <div className="plate__frame">
              <Img
                name="detail-manifold-system"
                alt="Rozdzielacz instalacji grzewczej z przepływomierzami i manometrami w szafce"
                sizes="(max-width: 900px) 92vw, 48vw"
                className="plate__img"
              />
              <div className="plate__annots" aria-hidden="true">
                {PLATE_B.map((a, i) => (
                  <Annot key={a.n} {...a} side="left" delay={0.1 + i * 0.12} />
                ))}
              </div>
            </div>
            <figcaption className="plate__cap tech">
              Rozdzielacz instalacji grzewczej
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
