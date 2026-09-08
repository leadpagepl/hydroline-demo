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
            lines={['ZAKŁAD', 'HYDRAULICZNY', 'JACKA CZUBERA']}
          />
          <Reveal delay={0.12}>
            <p className="lead about__lead">
              Firma działa od 1997 roku. Siedziba zakładu znajduje się
              przy ul. Stefana Jaracza 76 w Łodzi.
            </p>
            <p className="about__p">
              Zajmujemy się instalacjami wodnymi, kanalizacyjnymi, grzewczymi
              i gazowymi. Robimy nowe instalacje oraz modernizujemy stare.
            </p>
            <ul className="about__pts">
              <li><span className="tech">Od 1997 roku</span></li>
              <li><span className="tech">Łódź, ul. Stefana Jaracza 76</span></li>
              <li><span className="tech">Nowe instalacje i modernizacje</span></li>
              <li><span className="tech">Mniejsze prace i większe instalacje</span></li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
