import { NAV_LINKS } from './Nav.jsx'

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ft__texture" aria-hidden="true" />
      <div className="wrap">
        <div className="ft__top">
          <div className="ft__brand">
            <span className="ft__name">JACEK CZUBER</span>
            <span className="ft__sub tech">Zakład Hydrauliczny</span>
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
            <p className="tech ft__h">Adres</p>
            <ul>
              <li>ul. Stefana Jaracza 76</li>
              <li>90-251 Łódź</li>
              <li><a href="tel:+48000000000">+48 XXX XXX XXX</a></li>
            </ul>
          </div>

          <div className="ft__col">
            <p className="tech ft__h">Zakres</p>
            <ul>
              <li>Instalacje wodne</li>
              <li>Kanalizacja</li>
              <li>Ogrzewanie</li>
              <li>Gaz</li>
            </ul>
          </div>
        </div>

        <div className="ft__bottom">
          <p className="tech">© {new Date().getFullYear()} Jacek Czuber „Zakład Hydrauliczny”</p>
          <p className="tech">NIP 5571294322 • REGON 471474084</p>
          <p className="ft__credit">
            Strona wykonana przez{' '}
            <a href="https://leadpage.pl" target="_blank" rel="noopener noreferrer">leadpage.pl</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
