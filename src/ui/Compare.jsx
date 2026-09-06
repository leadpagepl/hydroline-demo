import { useCallback, useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import Img from './Img.jsx'

const clamp = (n) => Math.min(100, Math.max(0, n))

/**
 * Before/after comparator.
 * The "after" image sits underneath; the "before" image is clipped back to
 * expose it. Works with pointer drag, keyboard (role="slider") and touch.
 */
export default function Compare({
  before,
  after,
  beforeAlt,
  afterAlt,
  labels = ['Przed', 'Po'],
  orientation = 'h',
  sizes = '100vw',
  ratio,
  start = 50,
  className = '',
  ariaLabel = 'Przesuń, aby porównać',
}) {
  const [value, setValue] = useState(start)
  const boxRef = useRef(null)
  const figRef = useRef(null)
  const handleRef = useRef(null)
  const inView = useInView(figRef, { once: true, margin: '0px 0px -15% 0px' })
  const raf = useRef(0)
  const vertical = orientation === 'v'

  const paint = useCallback(
    (v) => {
      const el = boxRef.current
      if (!el) return
      el.style.setProperty('--v', `${v}%`)
      handleRef.current?.setAttribute('aria-valuenow', String(Math.round(v)))
    },
    []
  )

  useEffect(() => paint(value), [value, paint])

  const fromEvent = useCallback(
    (e) => {
      const r = boxRef.current.getBoundingClientRect()
      return vertical
        ? clamp(((e.clientY - r.top) / r.height) * 100)
        : clamp(((e.clientX - r.left) / r.width) * 100)
    },
    [vertical]
  )

  const onPointerDown = (e) => {
    if (e.button != null && e.button !== 0) return
    // On touch, a vertical comparator only drags from the handle so the page
    // can still be scrolled over the image.
    if (vertical && e.pointerType === 'touch' && !e.target.closest('.cmp__handle')) return
    boxRef.current.setPointerCapture?.(e.pointerId)
    boxRef.current.dataset.dragging = 'true'
    paint(fromEvent(e))
  }

  const onPointerMove = (e) => {
    if (boxRef.current?.dataset.dragging !== 'true') return
    e.preventDefault()
    cancelAnimationFrame(raf.current)
    const v = fromEvent(e)
    raf.current = requestAnimationFrame(() => paint(v))
  }

  const endDrag = (e) => {
    if (boxRef.current?.dataset.dragging !== 'true') return
    boxRef.current.dataset.dragging = 'false'
    boxRef.current.releasePointerCapture?.(e.pointerId)
    setValue(fromEvent(e))
  }

  const onKeyDown = (e) => {
    const step = e.shiftKey ? 10 : 2
    const map = {
      ArrowLeft: -step, ArrowRight: step,
      ArrowUp: vertical ? -step : step,
      ArrowDown: vertical ? step : -step,
      Home: -100, End: 100,
    }
    if (!(e.key in map)) return
    e.preventDefault()
    setValue((v) => (e.key === 'Home' ? 0 : e.key === 'End' ? 100 : clamp(v + map[e.key])))
  }

  useEffect(() => () => cancelAnimationFrame(raf.current), [])

  return (
    <figure ref={figRef} className={`cmp cmp--${orientation} ${inView ? 'is-in' : ''} ${className}`}>
      <div
        ref={boxRef}
        className="cmp__box"
        style={{ '--v': `${start}%` }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <Img name={after} alt={afterAlt} sizes={sizes} ratio={ratio} className="cmp__img" />
        <div className="cmp__clip">
          <Img name={before} alt={beforeAlt} sizes={sizes} ratio={ratio} className="cmp__img" />
        </div>

        <span className="cmp__tag cmp__tag--a">{labels[0]}</span>
        <span className="cmp__tag cmp__tag--b">{labels[1]}</span>

        <div className="cmp__divider" aria-hidden="true" />

        <div
          ref={handleRef}
          className="cmp__handle"
          role="slider"
          tabIndex={0}
          aria-label={ariaLabel}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(value)}
          aria-orientation={vertical ? 'vertical' : 'horizontal'}
          aria-valuetext={`Widać ${Math.round(value)}% zdjęcia „${labels[0]}”`}
          onKeyDown={onKeyDown}
        >
          <Chevrons vertical={vertical} />
        </div>
      </div>
    </figure>
  )
}

function Chevrons({ vertical }) {
  return (
    <svg width="26" height="12" viewBox="0 0 26 12" aria-hidden="true"
      style={vertical ? { transform: 'rotate(90deg)' } : undefined}>
      <path d="M5.4 1.2 1.2 6l4.2 4.8M20.6 1.2 24.8 6l-4.2 4.8"
        fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
    </svg>
  )
}
