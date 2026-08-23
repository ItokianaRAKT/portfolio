import { ThemeProvider } from './context/ThemeContext'
import { ThemeToggle } from './components/ThemeToggle'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background-light text-text-primary-light dark:bg-background-dark dark:text-text-primary-dark">
        <header className="flex items-center justify-end px-6 py-3">
          <ThemeToggle />
        </header>
        <main className="flex min-h-[80vh] items-center justify-center">
          <p className="text-text-secondary-light dark:text-text-secondary-dark">
            Portfolio en cours de construction...
          </p>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
