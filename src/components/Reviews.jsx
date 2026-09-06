import { Reveal } from '../ui/Reveal.jsx'

/* ————————————————————————————————————————————————————————————————
   PUSTE SLOTY NA OPINIE — nie ma tu żadnych wymyślonych wypowiedzi.
   `scope` to typ zlecenia (tekst redakcyjny, nie cytat). Żeby uzupełnić:
   dopisz `q` (treść opinii) i `who` (podpis) w danym slocie, np.

     { scope: 'Modernizacja kotłowni', q: '…', who: 'Marek, Ursynów' }

   Karta sama przełączy się z placeholdera na opinię. Jeśli opinii jeszcze
   nie ma, można całą sekcję wyłączyć — usuń <Reviews /> z src/App.jsx.
   ———————————————————————————————————————————————————————————————— */
const ROW_A = [
  { scope: 'Instalacja wodna i kanalizacyjna' },
  { scope: 'Modernizacja kotłowni' },
  { scope: 'Ogrzewanie podłogowe' },
  { scope: 'Diagnostyka' },
]

const ROW_B = [
  { scope: 'Modernizacja instalacji' },
  { scope: 'Instalacja w nowym domu' },
  { scope: 'Biały montaż' },
  { scope: 'Naprawa po awarii' },
]

function Card({ q, who, scope, accent }) {
  const empty = !q
  return (
    <figure className={`rev rev--${accent}`}>
      <span className="rev__quote" aria-hidden="true" />
      <blockquote className={`rev__q ${empty ? 'rev__q--empty' : ''}`}>
        {q || 'Miejsce na opinię klienta.'}
      </blockquote>
      <figcaption className="rev__meta">
        <span className={`rev__who ${empty ? 'is-placeholder' : ''}`}>
          {who || 'Podpis — do uzupełnienia'}
        </span>
        <span className="rev__scope tech">{scope}</span>
      </figcaption>
    </figure>
  )
}

function Row({ items, dir }) {
  return (
    <div className="mq" aria-hidden={dir === 'r' ? 'true' : undefined}>
      <div className={`mq__track mq__track--${dir}`}>
        {[0, 1].map((copy) => (
          <div className="mq__set" key={copy} aria-hidden={copy === 1 ? 'true' : undefined}>
            {items.map((it, i) => <Card key={i} {...it} accent={dir === 'l' ? 'cold' : 'hot'} />)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Reviews() {
  return (
    <section className="revs" id="opinie" aria-labelledby="revs-h">
      <div className="wrap">
        <Reveal className="sec-head sec-head--split">
          <div>
            <p className="tech sec-head__eyebrow">Opinie</p>
            <h2 className="h-section" id="revs-h">Opinie klientów</h2>
          </div>
          <p className="lead">
            Nie wpisujemy tu wymyślonych opinii ani ocen. Miejsca uzupełnimy wtedy, kiedy
            zbierzemy prawdziwe wypowiedzi z realizacji.
          </p>
        </Reveal>
      </div>

      <div className="revs__rows">
        <Row items={ROW_A} dir="l" />
        <Row items={ROW_B} dir="r" />
      </div>
    </section>
  )
}
