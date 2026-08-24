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
        {project.device === 'phone' ? (
          <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <defs>
              {project.image && (
                <clipPath id={`clip-card-${project.id}`}>
                  <rect x="110" y="24" width="100" height="166" rx="6" />
                </clipPath>
              )}
            </defs>
            <rect width="320" height="200" fill={bgColor} />
            <rect x="110" y="10" width="100" height="180" rx="14" fill={screenColor} stroke={borderColor} strokeWidth="1.5" />
            <rect x="110" y="10" width="100" height="14" rx="14" fill={bgColor} />
            <circle cx="160" cy="17" r="3" fill={borderColor} />
            {project.image ? (
              <image href={project.image} x="110" y="24" width="100" height="166" clipPath={`url(#clip-card-${project.id})`} preserveAspectRatio="xMidYMid slice" />
            ) : (
              <>
                <rect x="122" y="36" width="56" height="5" rx="1.5" fill={accentColor} opacity="0.8" />
                <rect x="122" y="46" width="36" height="3" rx="1" fill={borderColor} opacity="0.5" />
                <rect x="122" y="56" width="76" height="2.5" rx="1" fill={borderColor} opacity="0.3" />
                <rect x="122" y="63" width="76" height="2.5" rx="1" fill={borderColor} opacity="0.3" />
                <rect x="122" y="74" width="36" height="10" rx="2" fill={accentColor} opacity="0.9" />
                <rect x="164" y="74" width="36" height="10" rx="2" fill={borderColor} opacity="0.3" />
              </>
            )}
            <rect x="150" y="184" width="20" height="3" rx="1.5" fill={borderColor} opacity="0.5" />
          </svg>
        ) : (
          <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            <defs>
              {project.image && (
                <clipPath id={`clip-card-${project.id}`}>
                  <rect x="60" y="30" width="200" height="110" rx="3" />
                </clipPath>
              )}
            </defs>
            <rect width="320" height="200" fill={bgColor} />
            <rect x="60" y="20" width="200" height="120" rx="6" fill={screenColor} stroke={borderColor} strokeWidth="1" />
            <rect x="60" y="20" width="200" height="10" rx="6" fill={bgColor} />
            <circle cx="160" cy="25" r="2" fill={borderColor} />
            {project.image ? (
              <image href={project.image} x="60" y="30" width="200" height="110" clipPath={`url(#clip-card-${project.id})`} preserveAspectRatio="xMidYMid slice" />
            ) : (
              <>
                <rect x="75" y="40" width="80" height="6" rx="2" fill={accentColor} opacity="0.8" />
                <rect x="75" y="52" width="50" height="4" rx="1" fill={borderColor} opacity="0.5" />
                <rect x="75" y="64" width="170" height="3" rx="1" fill={borderColor} opacity="0.3" />
                <rect x="75" y="72" width="170" height="3" rx="1" fill={borderColor} opacity="0.3" />
                <rect x="75" y="84" width="50" height="14" rx="3" fill={accentColor} opacity="0.9" />
                <rect x="135" y="84" width="50" height="14" rx="3" fill={borderColor} opacity="0.3" />
              </>
            )}
            <rect x="40" y="140" width="240" height="8" rx="4" fill={bgColor} stroke={borderColor} strokeWidth="1" />
            <rect x="145" y="143" width="30" height="2" rx="1" fill={borderColor} opacity="0.5" />
            <rect x="90" y="160" width="140" height="20" rx="4" fill={screenColor} stroke={borderColor} strokeWidth="0.5" />
            <rect x="100" y="165" width="40" height="4" rx="1" fill={accentColor} opacity="0.6" />
            <rect x="100" y="173" width="80" height="2" rx="1" fill={borderColor} opacity="0.3" />
          </svg>
        )}
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
