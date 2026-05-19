import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"

function App() {
  return (
    <>
      <div className="bg-[#0F172A] text-white min-h-screen font-sans scroll-smooth">
        <Navbar />
        <Hero/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Footer/>
      </div>

    </>

  )
}

export default App