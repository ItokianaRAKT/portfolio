import { ChevronRight } from 'lucide-react'
import { motion } from 'motion/react'
import type { Skill } from '../data/skills'

interface SkillCardProps {
  skill: Skill
}

export function SkillCard({ skill }: SkillCardProps) {
  const Icon = skill.icon

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="group rounded-md border border-border-light bg-white/45 p-4 transition-all duration-200 hover:border-primary-light/40 dark:border-border-dark dark:bg-white/[0.025] dark:hover:border-primary-dark/40"
    >
      <Icon
        className="mb-3 h-6 w-6 text-primary-light dark:text-primary-dark"
        aria-hidden="true"
      />

      <h3 className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-text-primary-light dark:text-text-primary-dark">
        {skill.title}
      </h3>

      <ul className="space-y-1">
        {skill.items.map(item => (
          <li
            key={item}
            className="flex items-center gap-1.5 text-[11px] text-text-secondary-light dark:text-text-secondary-dark"
          >
            <ChevronRight className="h-3 w-3 shrink-0 text-primary-light dark:text-primary-dark" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
