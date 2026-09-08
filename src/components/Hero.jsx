import { m } from 'framer-motion'
import XRay from '../ui/XRay.jsx'
import { HeroFlow } from '../ui/Flow.jsx'
import { Arrow } from './Nav.jsx'

const EASE = [0.22, 1, 0.36, 1]
const LINES = ['INSTALACJE', 'ZROBIONE', 'PORZĄDNIE.']

export default function Hero() {
  return (
    <section className="hero" id="top">
      <HeroFlow />

      <div className="wrap hero__inner">
        <m.div
          className="hero__rail"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
        >
          <p className="tech hero__eyebrow">
            <span className="dot dot--cold" />
            Zakład hydrauliczny
            <span className="sep">•</span>Łódź
          </p>
          <a href="tel:+48000000000" className="hero__tel tech">+48 XXX XXX XXX</a>
        </m.div>

        <h1 className="display hero__title">
          {LINES.map((line, i) => (
            <span className="line" key={line}>
              <m.span
                className="line__inner"
                initial={{ y: '108%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1.05, delay: 0.26 + i * 0.085, ease: EASE }}
              >
                {line}
              </m.span>
            </span>
          ))}
        </h1>

        <m.div
          className="hero__foot"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.66, ease: EASE }}
        >
          <div className="hero__foot-copy">
            <p className="lead hero__lead">
              Woda, kanalizacja, ogrzewanie i instalacje gazowe.
              Od małych prac po większe instalacje w budynkach.
            </p>
            <p className="hero__since">
              Zakład Hydrauliczny Jacek Czuber działa od 1997 roku.
            </p>
          </div>

          <div className="hero__ctas">
            <a href="#kontakt" className="btn btn--dark btn--lg">
              <span>Zapytaj o wycenę</span>
              <Arrow />
            </a>
            <a href="#realizacje" className="btn btn--ghost btn--lg">
              <span>Zobacz realizacje</span>
              <Arrow />
            </a>
          </div>
        </m.div>
      </div>

      <m.div
        className="hero__media"
        initial={{ opacity: 0, y: 34 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.5, ease: EASE }}
      >
        <XRay
          top="hero-plumbing-finished"
          under="hero-plumbing-installation"
          topAlt="Gotowa łazienka po zakończeniu prac"
          underAlt="Ta sama łazienka na etapie instalacji, przed zabudową ściany"
          sizes="100vw"
        />
        <p className="hero__hint tech">
          <span className="hero__hint-line" />
          Przesuń kursorem, żeby zobaczyć instalację
        </p>
      </m.div>
    </section>
  )
}
