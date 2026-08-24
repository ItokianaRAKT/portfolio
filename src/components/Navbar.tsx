import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { ThemeToggle } from './ThemeToggle'

const NAV_LINKS = [
  { href: '#home', label: 'ACCUEIL' },
  { href: '#about', label: 'À PROPOS' },
  { href: '#project', label: 'PROJETS' },
  { href: '#skills', label: 'COMPÉTENCES & OUTILS' },
  { href: '#contact', label: 'CONTACT' },
] as const

const SECTION_IDS = NAV_LINKS.map(link => link.href.slice(1))

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight

      let currentSection = SECTION_IDS[0]

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= viewportHeight * 0.1) {
          currentSection = id
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border-light bg-background-light/80 backdrop-blur-sm dark:border-border-dark dark:bg-background-dark/80">
      <div className="mx-auto flex h-12 max-w-[1440px] items-center justify-between px-6 md:px-11">
        <a
          href="#home"
          className="text-[16px] font-semibold uppercase tracking-widest text-text-primary-light dark:text-text-primary-dark"
        >
          R.I.T
        </a>

        <nav aria-label="Navigation principale" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 text-[12px] font-medium uppercase tracking-widest text-text-secondary-light transition-colors hover:text-text-primary-light dark:text-text-secondary-dark dark:hover:text-text-primary-dark"
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-0 right-0 mx-auto h-[2px] w-3 bg-primary-light dark:bg-primary-dark"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center">
          <ThemeToggle />

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 text-text-primary-light dark:text-text-primary-dark" />
            ) : (
              <Menu className="h-5 w-5 text-text-primary-light dark:text-text-primary-dark" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            aria-label="Navigation mobile"
            className="overflow-hidden border-t border-border-light bg-background-light dark:border-border-dark dark:bg-background-dark md:hidden"
          >
            <div className="flex flex-col px-6 py-4">
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-3 text-[13px] font-medium uppercase tracking-widest text-text-secondary-light transition-colors hover:text-text-primary-light dark:text-text-secondary-dark dark:hover:text-text-primary-dark"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
