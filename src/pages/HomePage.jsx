import About from '../components/ui/About'
import Booking from '../components/ui/Booking'
import Contact from '../components/ui/Contact'
import Footer from '../components/ui/Footer'
import Hero from '../components/ui/Hero'
import Navbar from '../components/ui/Navbar'

function HomePage() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Booking />
        <Contact />
        <Footer />
    </div>
  )
}

export default HomePage