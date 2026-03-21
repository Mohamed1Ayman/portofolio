import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Nav from './components/nav/Nav'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'
import Services from './components/services/Services'


const App = () => {
  return (
    <div>
      <Home />
      
      <About />
      <Skills />
      <Services/>
      <Projects />
      <Contact />
       <Nav/>
       <Footer />
    </div>
  )
}

export default App