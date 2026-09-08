import { m } from 'framer-motion'
import XRay from '../ui/XRay.jsx'
import { HeroFlow } from '../ui/Flow.jsx'
import { Arrow } from './Nav.jsx'

const EASE = [0.22, 1, 0.36, 1]
const LINES = ['INSTALACJE', 'HYDRAULICZNE', 'W ŁODZI']

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
            Jacek Czuber
            <span className="sep">•</span>Zakład Hydrauliczny
          </p>
          <a href="tel:+48508324246" className="hero__tel tech">508 324 246</a>
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
              Montaż i naprawa instalacji wodnych i grzewczych.
            </p>
            <p className="hero__since">
              Firma działa od 1997 roku.
            </p>
          </div>

          <div className="hero__ctas">
            <a href="#kontakt" className="btn btn--dark btn--lg">
              <span>Zadzwoń</span>
              <Arrow />
            </a>
            <a href="#uslugi" className="btn btn--ghost btn--lg">
              <span>Zobacz usługi</span>
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
          Przed i po
        </p>
      </m.div>
    </section>
  )
}
