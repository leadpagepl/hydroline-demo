import { useCallback, useEffect, useRef, useState } from 'react'
import Img from './Img.jsx'
import Compare from './Compare.jsx'

/* The cursor X-ray needs a real pointer and enough canvas to aim at; anything
   smaller or touch-driven gets the drag slider instead. */
const XRAY_QUERY = '(hover: hover) and (pointer: fine) and (min-width: 901px)'

export function useFinePointer() {
  const [fine, setFine] = useState(null)
  useEffect(() => {
    const mq = window.matchMedia(XRAY_QUERY)
    const on = () => setFine(mq.matches)
    on()
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return fine
}

/**
 * Hero X-ray. The finished room is the visible layer; a soft-edged hole follows
 * the pointer and exposes the installation photograph underneath. Nothing is
 * painted into the hole and nothing is left behind — the mask is the only effect.
 * Coarse pointers get a draggable reveal instead.
 */
export default function XRay({ top, under, topAlt, underAlt, sizes, label = 'Pod spodem' }) {
  const fine = useFinePointer()
  const boxRef = useRef(null)
  const probeRef = useRef(null)
  const [held, setHeld] = useState(false)

  const state = useRef({ x: 0, y: 0, r: 0, tx: 0, ty: 0, tr: 0, on: false, raf: 0, R: 170 })

  const measure = useCallback(() => {
    const el = boxRef.current
    if (!el) return
    state.current.R = Math.min(210, Math.max(130, el.clientWidth * 0.145))
  }, [])

  useEffect(() => {
    if (!fine) return
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [fine, measure])

  const tick = useCallback(() => {
    const s = state.current
    const el = boxRef.current
    if (!el) return
    s.x += (s.tx - s.x) * 0.2
    s.y += (s.ty - s.y) * 0.2
    s.r += (s.tr - s.r) * 0.14
    el.style.setProperty('--xr-x', `${s.x.toFixed(1)}px`)
    el.style.setProperty('--xr-y', `${s.y.toFixed(1)}px`)
    el.style.setProperty('--xr-r', `${Math.max(0.001, s.r).toFixed(1)}px`)
    if (probeRef.current) {
      probeRef.current.style.transform = `translate3d(${s.x - s.r}px, ${s.y - s.r}px, 0)`
      probeRef.current.style.width = probeRef.current.style.height = `${s.r * 2}px`
      probeRef.current.style.opacity = String(Math.min(1, s.r / (s.R * 0.7)))
    }
    if (s.on || s.r > 0.5) s.raf = requestAnimationFrame(tick)
    else s.raf = 0
  }, [])

  const wake = useCallback(() => {
    if (!state.current.raf) state.current.raf = requestAnimationFrame(tick)
  }, [tick])

  const onMove = (e) => {
    const s = state.current
    const r = boxRef.current.getBoundingClientRect()
    s.tx = e.clientX - r.left
    s.ty = e.clientY - r.top
    if (!s.on) { s.on = true; s.x = s.tx; s.y = s.ty }
    s.tr = s.R
    wake()
  }

  const onLeave = () => {
    state.current.on = false
    state.current.tr = 0
    wake()
  }

  useEffect(() => () => cancelAnimationFrame(state.current.raf), [])

  if (fine === false) {
    return (
      <Compare
        before={under}
        after={top}
        beforeAlt={underAlt}
        afterAlt={topAlt}
        labels={['Przed', 'Po']}
        sizes={sizes}
        start={38}
        className="cmp--hero"
        ariaLabel="Przesuń, aby porównać"
      />
    )
  }

  return (
    <figure
      ref={boxRef}
      className={`xray ${held ? 'is-held' : ''}`}
      onPointerMove={fine ? onMove : undefined}
      onPointerLeave={fine ? onLeave : undefined}
    >
      <Img name={under} alt={underAlt} sizes={sizes} priority className="xray__layer" />
      <Img name={top} alt={topAlt} sizes={sizes} priority className="xray__layer xray__top" />

      <div ref={probeRef} className="xray__probe" aria-hidden="true">
        <span className="xray__ring" />
        <span className="xray__cross" />
        <span className="xray__label tech">{label}</span>
      </div>

      <button
        type="button"
        className="ctrl ctrl--over xray__toggle"
        aria-pressed={held}
        onClick={() => setHeld((v) => !v)}
      >
        <span className="ctrl__dot" />
        {held ? 'Ukryj instalację' : 'Pokaż instalację'}
      </button>
    </figure>
  )
}
