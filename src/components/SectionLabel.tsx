interface SectionLabelProps {
  number: string
  label: string
}

export function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <p className="mb-4 text-[10px] font-medium uppercase tracking-widest">
      <span className="text-primary-light dark:text-primary-dark">{number}</span>
      <span className="ml-1 text-text-secondary-light dark:text-text-secondary-dark">
        / {label}
      </span>
    </p>
  )
}
