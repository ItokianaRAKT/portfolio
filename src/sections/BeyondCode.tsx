import { motion } from 'motion/react'
import { SectionLabel } from '../components/SectionLabel'
import { HobbyItem } from '../components/HobbyItem'
import { hobbies } from '../data/hobbies'

export function BeyondCode() {
  return (
    <section className="border-t border-border-light dark:border-border-dark">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-11 md:py-24">
        <SectionLabel number="06" label="EN DEHORS DU CODE" />

        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <HobbyItem hobby={hobby} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
