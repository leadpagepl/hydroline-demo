import { useState } from 'react'
import { Reveal, RevealLines } from '../ui/Reveal.jsx'
import { Arrow } from './Nav.jsx'

const KINDS = ['Nowa instalacja', 'Modernizacja', 'Ogrzewanie', 'Kotłownia', 'Naprawa', 'Awaria', 'Inne']

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
            lines={['KONTAKT']}
          />
          <Reveal delay={0.12}>
            <p className="lead ct__lead">
              Masz problem z instalacją albo chcesz coś zrobić od nowa?
              Napisz lub zadzwoń.
            </p>

            <div className="ct__alt">
              <p className="tech ct__alt-h">Telefon</p>
              <a href="tel:+48000000000" className="ct__tel">+48 XXX XXX XXX</a>
              <p className="ct__alt-note">Możesz też zadzwonić. Jeśli nie odbieramy, oddzwonimy.</p>
            </div>

            <dl className="ct__facts">
              <div>
                <dt className="tech">Gdzie jeździmy</dt>
                <dd className="is-placeholder">Miasto i okolice — do uzupełnienia</dd>
              </div>
              <div>
                <dt className="tech">E-mail</dt>
                <dd className="is-placeholder">kontakt@domena.pl — do uzupełnienia</dd>
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
                Przy awarii lepiej zadzwonić.
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
