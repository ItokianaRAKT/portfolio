import { ArrowUp } from 'lucide-react'

export function BackToTop() {
  return (
    <a
      href="#home"
      aria-label="Retour en haut"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-light text-text-secondary-light transition-colors hover:border-primary-light hover:text-primary-light dark:border-border-dark dark:text-text-secondary-dark dark:hover:border-primary-dark dark:hover:text-primary-dark"
    >
      <ArrowUp className="h-4 w-4" />
    </a>
  )
}
