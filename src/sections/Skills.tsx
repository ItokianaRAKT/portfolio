import { motion } from 'motion/react'
import { SectionLabel } from '../components/SectionLabel'
import { SkillCard } from '../components/SkillCard'
import { skills } from '../data/skills'

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="border-t border-border-light dark:border-border-dark"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-11 md:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <SectionLabel number="05" label="COMPÉTENCES" />
        </motion.div>

        <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2
              id="skills-title"
              className="text-[32px] font-medium leading-[1.1] text-text-primary-light dark:text-text-primary-dark md:text-[36px]"
            >
              Compétences
              <br />
              & outils
            </h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mt-5 h-0.5 w-9 origin-left bg-primary-light dark:bg-primary-dark"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-[250px] text-[13px] leading-[1.6] text-text-secondary-light dark:text-text-secondary-dark"
            >
              Un ensemble de technologies et d'outils que j'utilise pour concevoir,
              développer et déployer mes projets.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.25 + index * 0.07 }}
              >
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
