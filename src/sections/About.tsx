import { motion } from 'motion/react'
import { SectionLabel } from '../components/SectionLabel'
import { AboutPrincipleCard } from '../components/AboutPrincipleCard'
import { principles } from '../data/principles'

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-border-light dark:border-border-dark">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-11 md:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel number="02" label="À PROPOS" />
        </motion.div>

        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2
              id="about-title"
              className="text-[32px] font-medium leading-[1.1] text-text-primary-light dark:text-text-primary-dark md:text-[36px]"
            >
              Comprendre avant
              <br />
              de construire.
            </h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mt-5 h-0.5 w-9 origin-left bg-primary-light dark:bg-primary-dark"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-[420px] space-y-4 text-[13px] leading-[1.7] text-text-secondary-light dark:text-text-secondary-dark md:text-[14px]"
            >
              <p>
                Étudiante en informatique, je cherche à comprendre les systèmes
                avant de les mettre en place.
              </p>
              <p>
                J'aime aller au-delà de l'interface pour comprendre ce qui se
                passe derrière : logique applicative, données, API, infrastructure
                et fonctionnement des systèmes.
              </p>
              <p>
                Je développe mes compétences à travers des projets concrets, en
                expérimentant, en documentant ce que j'apprends et en cherchant
                progressivement à construire des solutions plus fiables et mieux
                pensées.
              </p>
            </motion.div>
          </motion.div>

          <div className="flex flex-col self-center gap-2.5">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.25 + index * 0.07 }}
              >
                <AboutPrincipleCard principle={principle} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
