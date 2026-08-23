import { ThemeProvider } from './context/ThemeContext'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background-light text-text-primary-light dark:bg-background-dark dark:text-text-primary-dark">
        <Navbar />
        <main className="pt-12">
          <section id="home" className="flex min-h-[80vh] items-center justify-center">
            <p className="text-text-secondary-light dark:text-text-secondary-dark">
              Portfolio en cours de construction...
            </p>
          </section>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
