import { useState } from 'react'
import { Reveal, RevealLines } from '../ui/Reveal.jsx'
import { Arrow } from './Nav.jsx'

const KINDS = ['Instalacja wodna', 'Kanalizacja', 'Ogrzewanie', 'Ciepła woda', 'Instalacja gazowa', 'Naprawa', 'Inne']

export default function Contact() {
  const [kind, setKind] = useState('Nowa instalacja')
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    // Demo: brak backendu. Tutaj podłącz wysyłkę formularza.
    setSent(true)
  }

  return (
    <section className="ct" id="kontakt" aria-labelledby="ct-h">
      <div className="wrap grid12 ct__inner">
        <div className="ct__aside">
          <RevealLines
            tag="h2"
            id="ct-h"
            className="display ct__title"
            lines={['POROZMAWIAJMY', 'O TWOJEJ', 'INSTALACJI.']}
          />
          <Reveal delay={0.12}>
            <p className="lead ct__lead">
              Masz instalację do wykonania albo naprawy?
              Skontaktuj się i powiedz, czego potrzebujesz.
            </p>

            <div className="ct__alt">
              <p className="tech ct__alt-h">Telefon</p>
              <a href="tel:+48000000000" className="ct__tel">+48 XXX XXX XXX</a>
              <p className="ct__alt-note is-placeholder">Numer telefonu do uzupełnienia.</p>
            </div>

            <dl className="ct__facts">
              <div>
                <dt className="tech">Firma</dt>
                <dd>Jacek Czuber<br />Zakład Hydrauliczny</dd>
              </div>
              <div>
                <dt className="tech">Adres</dt>
                <dd>ul. Stefana Jaracza 76<br />90-251 Łódź</dd>
                <a
                  className="ctrl ct__map"
                  href="https://www.google.com/maps/search/?api=1&query=ul.+Stefana+Jaracza+76%2C+90-251+%C5%81%C3%B3d%C5%BA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pokaż na mapie
                </a>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal className="ct__formwrap" delay={0.1} y={26}>
          <form className="form" onSubmit={onSubmit}>
            <div className="form__grid">
              <div className="field">
                <label className="tech" htmlFor="f-name">Imię</label>
                <input id="f-name" name="name" type="text" autoComplete="given-name" required
                  placeholder="Jan" />
              </div>
              <div className="field">
                <label className="tech" htmlFor="f-tel">Telefon</label>
                <input id="f-tel" name="tel" type="tel" autoComplete="tel" required
                  placeholder="+48 XXX XXX XXX" />
              </div>
              <div className="field field--full">
                <label className="tech" htmlFor="f-mail">E-mail</label>
                <input id="f-mail" name="email" type="email" autoComplete="email"
                  placeholder="adres@poczta.pl" />
              </div>
            </div>

            <div className="chips" role="radiogroup" aria-labelledby="kind-label">
              <p className="tech" id="kind-label">Temat</p>
              <div className="chips__row">
                {KINDS.map((k) => (
                  <label key={k} className="chip">
                    <input type="radio" name="kind" value={k} checked={kind === k}
                      onChange={() => setKind(k)} />
                    <span className={`ctrl ${kind === k ? 'is-on' : ''}`}>{k}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="field field--full">
              <label className="tech" htmlFor="f-msg">Wiadomość</label>
              <textarea id="f-msg" name="message" rows={5}
                placeholder="Napisz krótko, co trzeba zrobić." />
            </div>

            <div className="form__foot">
              <button type="submit" className="btn btn--dark btn--lg">
                <span>Wyślij</span>
                <Arrow />
              </button>
              <p className="form__note">
                Im więcej szczegółów, tym łatwiej wycenić pracę.
              </p>
            </div>

            <p className="form__ok tech" role="status" aria-live="polite">
              {sent ? 'To wersja demonstracyjna. Wiadomość nie została wysłana.' : ''}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
