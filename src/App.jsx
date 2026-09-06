import { domAnimation, LazyMotion, MotionConfig } from 'framer-motion'

import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Craft from './components/Craft.jsx'
import Projects from './components/Projects.jsx'
import Process from './components/Process.jsx'
import About from './components/About.jsx'
import Emergency from './components/Emergency.jsx'
// Sekcja opinii jest wyłączona, dopóki nie ma prawdziwych wypowiedzi klientów.
// Żeby ją włączyć: odkomentuj import i <Reviews /> niżej oraz przywróć pozycję
// OPINIE w NAV_LINKS (src/components/Nav.jsx). Komponent jest gotowy.
// import Reviews from './components/Reviews.jsx'
import Values from './components/Values.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import MobileBar from './components/MobileBar.jsx'

export default function App() {
  return (
    // `strict` keeps the full `motion.*` bundle from sneaking back in — every
    // animated element uses the lightweight `m.*` components.
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <a className="skip-link" href="#main">Przejdź do treści</a>
        <Nav />
        <main id="main">
          <Hero />
          <Services />
          <Craft />
          <Projects />
          <Process />
          <About />
          <Emergency />
          {/* <Reviews /> */}
          <Values />
          <Contact />
        </main>
        <Footer />
        <MobileBar />
      </MotionConfig>
    </LazyMotion>
  )
}
