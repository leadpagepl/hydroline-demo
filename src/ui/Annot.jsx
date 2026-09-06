import { m } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

/**
 * Drawing-style callout: a dot on the photograph, a 1px leader arm that runs out
 * past the image edge, and the label set in the surrounding margin. Below the
 * desktop breakpoint the arms are dropped and the labels are listed under the plate.
 */
export function Annot({ n, label, x, y, side = 'right', accent = 'cold', delay = 0 }) {
  return (
    <m.div
      className={`annot annot--${side} annot--${accent}`}
      style={{ top: `${y}%`, '--x': `${x}%` }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '0px 0px -18% 0px' }}
      transition={{ duration: 0.5, delay, ease: EASE }}
    >
      <span className="annot__dot" />
      <m.span
        className="annot__arm"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '0px 0px -18% 0px' }}
        transition={{ duration: 0.7, delay: delay + 0.1, ease: EASE }}
      />
      <span className="annot__label tech">
        <i>{n}</i>
        {label}
      </span>
    </m.div>
  )
}

export function AnnotList({ items }) {
  return (
    <ul className="annot-list">
      {items.map((a) => (
        <li key={a.n} className={`annot-list__i annot-list__i--${a.accent}`}>
          <span className="tech annot-list__n">{a.n}</span>
          <span className="tech annot-list__l">{a.label}</span>
        </li>
      ))}
    </ul>
  )
}
