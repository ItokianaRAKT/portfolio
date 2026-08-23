import { motion } from 'motion/react'
import { SectionLabel } from '../components/SectionLabel'

export function About() {
  return (
    <section id="about" className="border-t border-border-light dark:border-border-dark">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-11 md:py-24">
        <SectionLabel number="02" label="À PROPOS" />

        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-[24px] leading-relaxed text-text-primary-light dark:text-text-primary-dark md:text-[28px]">
              Comprendre avant de construire.
            </p>
            <p className="text-[15px] leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
              Comprendre pourquoi ça fonctionne
              <br />
              afin de développer des compétences solides,
              <br />
              construire des solutions fiables
              <br />
              et relever des défis plus complexes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
