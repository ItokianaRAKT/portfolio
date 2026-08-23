import { ThemeProvider } from './context/ThemeContext'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Projects } from './sections/Projects'
import { Exploration } from './sections/Exploration'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background-light text-text-primary-light dark:bg-background-dark dark:text-text-primary-dark">
        <Navbar />
        <main className="pt-12">
          <Hero />
          <About />
          <Projects />
          <Exploration />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
