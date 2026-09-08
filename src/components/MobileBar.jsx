import { useEffect, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'

/** Compact call / quote bar for small screens. Steps aside at the contact form
 *  so it never sits on top of the thing it points at. */
export default function MobileBar() {
  const [show, setShow] = useState(false)

  const [atContact, setAtContact] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // Step aside once the contact form itself is on screen.
  useEffect(() => {
    const target = document.getElementById('kontakt')
    if (!target) return
    const io = new IntersectionObserver(
      ([e]) => setAtContact(e.isIntersecting),
      { rootMargin: '0px 0px -35% 0px' }
    )
    io.observe(target)
    return () => io.disconnect()
  }, [])

  return (
    <AnimatePresence>
      {show && !atContact && (
        <m.div
          className="mbar"
          initial={{ y: '130%' }}
          animate={{ y: 0 }}
          exit={{ y: '130%' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <a href="tel:+48508324246" className="mbar__b mbar__b--ghost">Zadzwoń</a>
          <a href="#kontakt" className="mbar__b mbar__b--dark">Kontakt</a>
        </m.div>
      )}
    </AnimatePresence>
  )
}
