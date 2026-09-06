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
            Awarie i naprawy
          </p>
          <RevealLines
            tag="h2"
            id="emg-h"
            className="display emg__title"
            lines={['AWARIA?', 'ZADZWOŃ.']}
          />
          <Reveal delay={0.12}>
            <p className="lead emg__lead">
              Cieknie, nie ma ciepłej wody albo zapchał się odpływ?
              Przyjedziemy i sprawdzimy, co się dzieje.
            </p>
            <div className="emg__ctas">
              <a href="#kontakt" className="btn btn--light btn--lg">
                <span>Zgłoś awarię</span>
                <Arrow />
              </a>
              <a href="tel:+48000000000" className="emg__tel tech">
                +48 XXX XXX XXX
              </a>
            </div>
            <ul className="emg__list">
              <li><span className="tech">Najpierw szukamy przyczyny</span></li>
              <li><span className="tech">Odcinamy wodę i zabezpieczamy miejsce</span></li>
              <li><span className="tech">Mówimy, co trzeba wymienić</span></li>
            </ul>
          </Reveal>
        </div>

        <Reveal className="emg__media" delay={0.1} y={30}>
          <Img
            name="emergency-leak-service"
            alt="Szukanie przyczyny przecieku pod umywalką"
            sizes="(max-width: 900px) 92vw, 44vw"
            className="emg__img"
          />
        </Reveal>
      </div>
    </section>
  )
}
