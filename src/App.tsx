import { ThemeProvider } from './context/ThemeContext'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { MainProject } from './sections/MainProject'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Exploration } from './sections/Exploration'
import { BeyondCode } from './sections/BeyondCode'
import { Contact } from './sections/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background-light text-text-primary-light dark:bg-background-dark dark:text-text-primary-dark">
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus-100 focus:bg-primary-light focus:px-4 focus:py-2 focus:text-white"
        >
          Aller au contenu principal
        </a>
        <Navbar />
        <main className="pt-12">
          <Hero />
          <About />
          <MainProject />
          <Projects />
          <Skills />
          <Exploration />
          <BeyondCode />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
