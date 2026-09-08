import Img from '../ui/Img.jsx'
import { Reveal, RevealLines } from '../ui/Reveal.jsx'

export default function About() {
  return (
    <section className="about" id="o-nas" aria-labelledby="about-h">
      <div className="wrap grid12 about__inner">
        <Reveal className="about__media" y={30}>
          <Img
            name="about-master-plumber"
            alt="Instalator przy pracy przy kotle"
            sizes="(max-width: 900px) 92vw, 38vw"
            className="about__img"
          />
          <p className="about__cap tech">
            <span className="dot dot--cold" />
            Jacek Czuber — Zakład Hydrauliczny
          </p>
        </Reveal>

        <div className="about__body">
          <RevealLines
            tag="h2"
            id="about-h"
            className="display about__title"
            lines={['O FIRMIE']}
          />
          <Reveal delay={0.12}>
            <p className="lead about__lead">
              Od 1997 roku zajmuję się instalacjami hydraulicznymi w Łodzi.
            </p>
            <p className="about__p">
              Montaż, naprawa i wymiana instalacji.
            </p>
            <ul className="about__pts">
              <li><span className="tech">Instalacje wodne</span></li>
              <li><span className="tech">Ogrzewanie</span></li>
              <li><span className="tech">Kanalizacja</span></li>
              <li><span className="tech">Naprawy</span></li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
