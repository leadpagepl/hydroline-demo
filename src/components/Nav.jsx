import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'

export const NAV_LINKS = [
  { label: 'USŁUGI', href: '#uslugi' },
  { label: 'REALIZACJE', href: '#realizacje' },
  { label: 'O NAS', href: '#o-nas' },
  { label: 'AWARIE', href: '#serwis' },
  { label: 'KONTAKT', href: '#kontakt' },
]

export default function Nav() {
  const [stuck, setStuck] = useState(false)
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`nav ${stuck ? 'is-stuck' : ''}`}>
      <div className="nav__inner wrap">
        <a className="mark" href="#top" aria-label="HYDROLINE — strona główna">
          <span className="mark__name">HYDROLINE</span>
          <span className="mark__sub tech">Instalacje wodne i grzewcze</span>
        </a>

        <nav className="nav__links" aria-label="Główna">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav__link">
              <span>{l.label}</span>
            </a>
          ))}
        </nav>

        <div className="nav__end">
          <a href="#kontakt" className="btn btn--dark nav__cta">
            <span>Umów wizytę</span>
            <Arrow />
          </a>
          <button
            className="burger"
            aria-expanded={open}
            aria-controls="menu-panel"
            aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`burger__bar ${open ? 'is-x1' : ''}`} />
            <span className={`burger__bar ${open ? 'is-x2' : ''}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            id="menu-panel"
            ref={panelRef}
            className="menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="menu__inner wrap">
              <ul className="menu__list">
                {NAV_LINKS.map((l, i) => (
                  <li key={l.href}>
                    <m.a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.12 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <i className="tech">{String(i + 1).padStart(2, '0')}</i>
                      {l.label}
                    </m.a>
                  </li>
                ))}
              </ul>
              <div className="menu__foot">
                <a href="#kontakt" className="btn btn--dark" onClick={() => setOpen(false)}>
                  <span>Umów wizytę</span>
                  <Arrow />
                </a>
                <a href="tel:+48000000000" className="menu__tel tech">+48 XXX XXX XXX</a>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export function Arrow() {
  return (
    <svg className="arw" width="15" height="10" viewBox="0 0 15 10" aria-hidden="true">
      <path d="M0 5h13M9.2 1 13.5 5l-4.3 4" fill="none" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}
