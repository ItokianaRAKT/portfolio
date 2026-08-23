import type { Hobby } from '../data/hobbies'

interface HobbyItemProps {
  hobby: Hobby
}

export function HobbyItem({ hobby }: HobbyItemProps) {
  const Icon = hobby.icon

  return (
    <div className="flex items-center gap-2">
      <Icon className="h-4 w-4 text-text-secondary-light dark:text-text-secondary-dark" />
      <span className="text-[10px] font-medium uppercase tracking-widest text-text-secondary-light dark:text-text-secondary-dark">
        {hobby.label}
      </span>
    </div>
  )
}
