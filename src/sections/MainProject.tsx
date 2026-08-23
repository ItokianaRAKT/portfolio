import { motion } from 'motion/react'
import { SectionLabel } from '../components/SectionLabel'
import { ProjectMockup } from '../components/ProjectMockup'

export function MainProject() {
  return (
    <section className="border-t border-border-light dark:border-border-dark">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-11 md:py-24">
        <SectionLabel number="03" label="PROJET PRINCIPAL" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <ProjectMockup />
        </motion.div>
      </div>
    </section>
  )
}
