import { ArrowRight } from 'lucide-react'
import { type ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  icon?: ReactNode
  variant?: 'outline' | 'solid'
  className?: string
}

export function Button({
  children,
  href,
  onClick,
  icon,
  variant = 'outline',
  className = '',
}: ButtonProps) {
  const baseStyles =
    'group inline-flex items-center gap-2 transition-all duration-200 text-[13px] uppercase tracking-wide'

  const variantStyles =
    variant === 'outline'
      ? 'border border-border-light dark:border-border-dark px-4 py-2.5 hover:border-primary-light dark:hover:border-primary-dark text-text-primary-light dark:text-text-primary-dark'
      : 'bg-primary-light dark:bg-primary-dark text-white px-6 py-3 hover:opacity-90'

  const classes = `${baseStyles} ${variantStyles} ${className}`

  const content = (
    <>
      {children}
      {icon ?? (
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  )
}
