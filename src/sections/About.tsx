import { motion } from 'motion/react'
import { SectionLabel } from '../components/SectionLabel'
import { Button } from '../components/Button'

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
            <p className="mb-8 text-[24px] leading-relaxed text-text-primary-light dark:text-text-primary-dark md:text-[28px]">
              Comprendre pourquoi ça fonctionne
              <br />
              afin de développer des compétences solides,
              <br />
              construire des solutions fiables
              <br />
              et relever des défis plus complexes.
            </p>

            <div className="mb-8 space-y-6">
              <div>
                <p className="mb-1 text-[12px] font-semibold uppercase tracking-widest text-text-primary-light dark:text-text-primary-dark">
                  Rôle
                </p>
                <p className="text-[15px] text-text-secondary-light dark:text-text-secondary-dark">
                  Développement full-stack
                </p>
              </div>

              <div>
                <p className="mb-1 text-[12px] font-semibold uppercase tracking-widest text-text-primary-light dark:text-text-primary-dark">
                  Stack
                </p>
                <p className="text-[15px] text-text-secondary-light dark:text-text-secondary-dark">
                  React · TypeScript · FastAPI · Django · PostgreSQL
                </p>
              </div>

              <div>
                <p className="mb-1 text-[12px] font-semibold uppercase tracking-widest text-text-primary-light dark:text-text-primary-dark">
                  Statut
                </p>
                <p className="text-[15px] text-text-secondary-light dark:text-text-secondary-dark">
                  En développement
                </p>
              </div>
            </div>

            <Button href="#projects">Explorer le projet</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
