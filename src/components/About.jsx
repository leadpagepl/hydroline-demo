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
            Imię i nazwisko — do uzupełnienia
          </p>
        </Reveal>

        <div className="about__body">
          <RevealLines
            tag="h2"
            id="about-h"
            className="display about__title"
            lines={['O NAS']}
          />
          <Reveal delay={0.12}>
            <p className="lead about__lead">
              Robimy hydraulikę w domach, mieszkaniach i małych firmach.
              Zajmujemy się naprawami, montażem i nowymi instalacjami.
            </p>
            <p className="about__p">
              Pracujemy czysto, dokładnie i na czas. Jeśli w trakcie wyjdzie
              dodatkowy problem, najpierw o nim mówimy.
            </p>
            <ul className="about__pts">
              <li><span className="tech">Jasne zasady</span></li>
              <li><span className="tech">Dobry kontakt</span></li>
              <li><span className="tech">Dokładna praca</span></li>
              <li><span className="tech">Bez zbędnych kosztów</span></li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
