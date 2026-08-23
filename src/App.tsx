import { ThemeProvider } from './context/ThemeContext'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background-light text-text-primary-light dark:bg-background-dark dark:text-text-primary-dark">
        <Navbar />
        <main className="pt-12">
          <Hero />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
