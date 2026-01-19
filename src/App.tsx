import { About } from './components/About'
import { Contact } from './components/Contact'
import { Engagements } from './components/Engagements'
import { CustomInsoles } from './components/CustomInsoles'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <Services />
        <CustomInsoles />
        <About />
        <Engagements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
