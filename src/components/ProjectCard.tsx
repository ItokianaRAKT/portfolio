import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { useTheme } from '../context/ThemeContext'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { theme } = useTheme()

  const bgColor = theme === 'dark' ? '#111415' : '#F5F5F3'
  const screenColor = theme === 'dark' ? '#1a1d1e' : '#ffffff'
  const borderColor = theme === 'dark' ? '#292D2D' : '#E2E2E0'
  const accentColor = theme === 'dark' ? '#8B5CF6' : '#6D3DF5'

  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="group flex flex-col border border-border-light transition-colors duration-200 hover:border-primary-light dark:border-border-dark dark:hover:border-primary-dark"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-light dark:bg-surface-dark">
        <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <defs>
            {project.image && (
              <clipPath id={`clip-card-${project.id}`}>
                <rect x="8" y="20" width="304" height="124" rx="4" />
              </clipPath>
            )}
          </defs>
          <rect width="320" height="200" fill={bgColor} />
          <rect x="8" y="4" width="304" height="140" rx="8" fill={screenColor} stroke={borderColor} strokeWidth="2" />
          <rect x="8" y="4" width="304" height="16" rx="8" fill={bgColor} />
          <circle cx="160" cy="12" r="3" fill={borderColor} />
          {project.image ? (
            <image href={project.image} x="8" y="20" width="304" height="124" clipPath={`url(#clip-card-${project.id})`} preserveAspectRatio="xMidYMid slice" />
          ) : (
            <>
              <rect x="24" y="32" width="120" height="8" rx="2" fill={accentColor} opacity="0.8" />
              <rect x="24" y="46" width="75" height="5" rx="1" fill={borderColor} opacity="0.5" />
              <rect x="24" y="60" width="264" height="4" rx="1" fill={borderColor} opacity="0.3" />
              <rect x="24" y="70" width="264" height="4" rx="1" fill={borderColor} opacity="0.3" />
              <rect x="24" y="86" width="75" height="18" rx="3" fill={accentColor} opacity="0.9" />
              <rect x="110" y="86" width="75" height="18" rx="3" fill={borderColor} opacity="0.3" />
            </>
          )}
          <rect x="0" y="144" width="320" height="12" rx="0" fill={bgColor} stroke={borderColor} strokeWidth="2" />
          <rect x="130" y="148" width="60" height="3" rx="1.5" fill={borderColor} opacity="0.6" />
          <rect x="80" y="164" width="160" height="24" rx="4" fill={screenColor} stroke={borderColor} strokeWidth="1.5" />
          <rect x="120" y="170" width="80" height="5" rx="1" fill={accentColor} opacity="0.5" />
          <rect x="120" y="179" width="50" height="2" rx="1" fill={borderColor} opacity="0.3" />
        </svg>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <span className="mb-1 text-[12px] text-text-secondary-light dark:text-text-secondary-dark">
          {project.number}
        </span>
        <h3 className="mb-1 text-[16px] font-semibold uppercase tracking-wider text-text-primary-light dark:text-text-primary-dark">
          {project.title}
        </h3>
        <p className="mb-3 flex-1 text-[14px] leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
          {project.description}
        </p>

        {project.stack.length > 0 && (
          <p className="mb-3 text-[12px] text-text-secondary-light dark:text-text-secondary-dark">
            {project.stack.join(' · ')}
          </p>
        )}

        <div className="flex items-center gap-1 text-[14px] text-text-secondary-light transition-colors group-hover:text-primary-light dark:text-text-secondary-dark dark:group-hover:text-primary-dark">
          {project.id === 'others' ? (
            <span>Voir plus</span>
          ) : (
            <span>Consulter</span>
          )}
          <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
        </div>
      </div>
    </motion.article>
  )
}
