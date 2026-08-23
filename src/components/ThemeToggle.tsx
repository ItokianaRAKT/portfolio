import { Sun, Moon } from 'lucide-react'
import { motion } from 'motion/react'
import { useTheme } from '../context/ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Passer en mode sombre' : 'Passer en mode clair'}
      className="relative flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-border-light dark:hover:bg-border-dark"
    >
      <motion.div
        key={theme}
        initial={{ scale: 0, rotate: -90, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        exit={{ scale: 0, rotate: 90, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {theme === 'light' ? (
          <Sun className="h-[18px] w-[18px] text-text-secondary-light" />
        ) : (
          <Moon className="h-[18px] w-[18px] text-text-secondary-dark" />
        )}
      </motion.div>
    </button>
  )
}
