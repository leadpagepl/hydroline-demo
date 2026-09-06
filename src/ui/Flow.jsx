import { m } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

/* A run of pipe is a sequence of straight lengths and 90° elbows. These motifs
   are built the same way — 1px segments that draw themselves in order, so the
   corners stay square at every viewport instead of stretching like a scaled path. */

const seg = (delay, dur, axis) => ({
  initial: { [axis]: 0 },
  animate: { [axis]: 1 },
  transition: { duration: dur, delay, ease: EASE },
})

/** Two risers in the hero margins: cold down the left, hot down the right. */
export function HeroFlow() {
  return (
    <div className="riser" aria-hidden="true">
      <div className="riser__run riser__run--cold">
        <m.i className="riser__v" style={{ height: '34%' }} {...seg(0.45, 1.1, 'scaleY')} />
        <m.i className="riser__h" style={{ top: '34%' }} {...seg(1.45, 0.6, 'scaleX')} />
        <m.i className="riser__node riser__node--end" style={{ top: '34%' }}
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ delay: 2.05, duration: 0.45, ease: EASE }} />
      </div>

      <div className="riser__run riser__run--hot">
        <m.i className="riser__v" style={{ height: '20%' }} {...seg(0.7, 0.8, 'scaleY')} />
        <m.i className="riser__h" style={{ top: '20%' }} {...seg(1.4, 0.6, 'scaleX')} />
        <m.i className="riser__v riser__v--drop" style={{ top: '20%', height: '38%' }}
          {...seg(1.95, 0.85, 'scaleY')} />
        <m.i className="riser__node riser__node--drop" style={{ top: '58%' }}
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          transition={{ delay: 2.75, duration: 0.45, ease: EASE }} />
      </div>
    </div>
  )
}

/** Small routing motifs used instead of tick icons in the values section. */
export function Motif({ variant = 0 }) {
  const paths = [
    { c: 'M1 30 L30 30 L30 14 L46 14', h: 'M1 46 L62 46 L62 22 L110 22' },
    { c: 'M1 14 L34 14 L34 46 L74 46', h: 'M1 40 L18 40 L18 8 L110 8' },
    { c: 'M1 24 L44 24 M60 24 L110 24', h: 'M52 6 L52 42' },
    { c: 'M1 8 L86 8 L86 46', h: 'M1 40 L58 40 L58 18 L74 18' },
  ]
  const p = paths[variant % paths.length]
  return (
    <svg className="motif" viewBox="0 0 112 48" fill="none" aria-hidden="true">
      <path d={p.c} className="motif__p motif__p--cold" />
      <path d={p.h} className="motif__p motif__p--hot" />
    </svg>
  )
}
