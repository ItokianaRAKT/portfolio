import { motion } from 'motion/react'
import type { Technology } from '../data/technologies'

interface ExplorationCardProps {
  technology: Technology
}

export function ExplorationCard({ technology }: ExplorationCardProps) {
  const Icon = technology.icon

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="group border-t border-border-light py-6 transition-colors duration-200 hover:border-primary-light dark:border-border-dark dark:hover:border-primary-dark"
    >
      <Icon className="mb-4 h-5 w-5 text-primary-light dark:text-green-dark" />

      <h3 className="mb-2 text-[14px] font-semibold uppercase tracking-widest text-text-primary-light dark:text-text-primary-dark">
        {technology.title}
      </h3>

      <p className="mb-4 text-[14px] leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
        {technology.description}
      </p>

      <ul className="space-y-1">
        {technology.items.map(item => (
          <li
            key={item}
            className="flex items-center gap-1.5 text-[13px] text-text-secondary-light dark:text-text-secondary-dark"
          >
            <span className="text-primary-light dark:text-green-dark">→</span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
