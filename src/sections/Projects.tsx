import { motion } from 'motion/react'
import { SectionLabel } from '../components/SectionLabel'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <section id="projects" className="border-t border-border-light dark:border-border-dark">
      <div className="mx-auto max-w-360 px-6 py-16 md:px-11 md:py-24">
        <SectionLabel number="04" label="AUTRES PROJETS" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
