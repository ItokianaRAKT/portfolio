import { BackToTop } from './BackToTop'

export function Footer() {
  return (
    <footer className="border-t border-border-light dark:border-border-dark">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 md:px-11">
        <p className="text-[13px] text-text-secondary-light dark:text-text-secondary-dark">
          © 2026 Rakotoarivelo Itokiana Tsiorisoa. Tous droits réservés.
        </p>
        <BackToTop />
      </div>
    </footer>
  )
}
