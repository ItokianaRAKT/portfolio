import type { Principle } from '../data/principles'

interface AboutPrincipleCardProps {
  principle: Principle
}

export function AboutPrincipleCard({ principle }: AboutPrincipleCardProps) {
  return (
    <div className="group flex items-center gap-4 rounded-md border border-border-light p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-light/40 dark:border-border-dark dark:bg-white/[0.025] dark:hover:border-primary-dark/40">
      <principle.icon className="h-6 w-6 shrink-0 text-primary-light dark:text-primary-dark" />
      <div>
        <p className="text-[12px] font-semibold uppercase tracking-wider text-text-primary-light dark:text-text-primary-dark">
          {principle.title}
        </p>
        <p className="text-[11px] text-text-secondary-light dark:text-text-secondary-dark">
          {principle.description}
        </p>
      </div>
    </div>
  )
}
