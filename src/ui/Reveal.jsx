import { m } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

/** Fade + short rise on first entry. Framer Motion honours prefers-reduced-motion
 *  through MotionConfig in App. */
export function Reveal({ children, delay = 0, y = 26, className = '', as = 'div', ...rest }) {
  const M = m[as] ?? m.div
  return (
    <M
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.85, delay, ease: EASE }}
      className={className}
      {...rest}
    >
      {children}
    </M>
  )
}

/** Headline mask: each line wipes up from behind a clipping edge. */
export function RevealLines({ lines, className = '', delay = 0, tag = 'h2', id }) {
  const Tag = m[tag] ?? m.h2
  return (
    <Tag
      id={id}
      className={className}
      initial="hide"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ staggerChildren: 0.075, delayChildren: delay }}
    >
      {lines.map((line, i) => (
        <span className="line" key={i}>
          <m.span
            className="line__inner"
            variants={{
              hide: { y: '110%' },
              show: { y: '0%', transition: { duration: 0.95, ease: EASE } },
            }}
          >
            {line}
          </m.span>
        </span>
      ))}
    </Tag>
  )
}
