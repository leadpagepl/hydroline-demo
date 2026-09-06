import { NAV_LINKS } from './Nav.jsx'

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ft__texture" aria-hidden="true" />
      <div className="wrap">
        <div className="ft__top">
          <div className="ft__brand">
            <span className="ft__name">HYDROLINE</span>
            <span className="ft__sub tech">Instalacje wodne i grzewcze</span>
            <span className="ft__lines" aria-hidden="true">
              <i className="ft__line ft__line--cold" />
              <i className="ft__line ft__line--hot" />
            </span>
          </div>

          <nav className="ft__col" aria-label="Stopka">
            <p className="tech ft__h">Nawigacja</p>
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </nav>

          <div className="ft__col">
            <p className="tech ft__h">Kontakt</p>
            <ul>
              <li><a href="tel:+48000000000">+48 XXX XXX XXX</a></li>
              <li className="is-placeholder">kontakt@domena.pl</li>
              <li className="is-placeholder">Adres — do uzupełnienia</li>
            </ul>
          </div>

          <div className="ft__col">
            <p className="tech ft__h">Gdzie jeździmy</p>
            <ul>
              <li className="is-placeholder">Miasto — do uzupełnienia</li>
              <li className="is-placeholder">Zasięg dojazdu — do uzupełnienia</li>
            </ul>
          </div>
        </div>

        <div className="ft__bottom">
          <p className="tech">© {new Date().getFullYear()} HYDROLINE — strona demonstracyjna</p>
          <p className="tech is-placeholder">NIP / REGON — do uzupełnienia</p>
        </div>
      </div>
    </footer>
  )
}
