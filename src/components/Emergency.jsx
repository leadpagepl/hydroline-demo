import Img from '../ui/Img.jsx'
import { Reveal, RevealLines } from '../ui/Reveal.jsx'
import { Arrow } from './Nav.jsx'

export default function Emergency() {
  return (
    <section className="emg" id="serwis" aria-labelledby="emg-h">
      <div className="wrap grid12 emg__inner">
        <div className="emg__body">
          <p className="tech emg__badge">
            <span className="emg__pulse" aria-hidden="true" />
            Doświadczenie
          </p>
          <RevealLines
            tag="h2"
            id="emg-h"
            className="display emg__title"
            lines={['ROBIMY TEŻ', 'WIĘKSZE', 'INSTALACJE.']}
          />
          <Reveal delay={0.12}>
            <p className="lead emg__lead">
              Zakład wykonywał również prace instalacyjne w budynkach
              wielorodzinnych.
            </p>
            <div className="emg__ctas">
              <a href="#kontakt" className="btn btn--light btn--lg">
                <span>Zapytaj o wycenę</span>
                <Arrow />
              </a>
              <a href="tel:+48000000000" className="emg__tel tech">
                +48 XXX XXX XXX
              </a>
            </div>
            <ul className="emg__list">
              <li><span className="tech">Ogrzewanie</span></li>
              <li><span className="tech">Ciepła woda</span></li>
              <li><span className="tech">Instalacje wodne i kanalizacyjne</span></li>
            </ul>
          </Reveal>
        </div>

        <Reveal className="emg__media" delay={0.1} y={30}>
          <Img
            name="emergency-leak-service"
            alt="Prace instalacyjne przy podejściach wodnych i kanalizacyjnych"
            sizes="(max-width: 900px) 92vw, 44vw"
            className="emg__img"
          />
        </Reveal>
      </div>
    </section>
  )
}
