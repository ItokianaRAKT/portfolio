import { motion } from 'motion/react'
import { SectionLabel } from '../components/SectionLabel'
import { ExplorationCard } from '../components/ExplorationCard'
import { technologies } from '../data/technologies'

export function Exploration() {
  return (
    <section id="explore" className="border-t border-border-light dark:border-border-dark">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-11 md:py-24">
        <SectionLabel number="06" label="ACTUELLEMENT EN EXPLORATION" />

        <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ExplorationCard technology={tech} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
