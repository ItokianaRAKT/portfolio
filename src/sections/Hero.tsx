import { ArrowDown, MapPin, Calendar } from 'lucide-react'
import { motion } from 'motion/react'
import { SectionLabel } from '../components/SectionLabel'
import { Button } from '../components/Button'
import { FloatingParticles } from '../components/FloatingParticles'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[calc(100vh-48px)] items-center overflow-hidden">
      <FloatingParticles />

      <div className="relative z-10 mx-auto w-full max-w-360 px-6 md:px-11">
        <div className="max-w-2xl">
          <SectionLabel number="01" label="INTRODUCTION" />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[42px] font-medium leading-[1.1] tracking-tight text-text-primary-light dark:text-text-primary-dark md:text-[48px]"
          >
            Rakotoarivelo
            <br />
            Itokiana Tsiorisoa
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="my-5 h-0.5 w-7 origin-left bg-primary-light dark:bg-primary-dark"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-70 text-[16px] leading-relaxed text-text-secondary-light dark:text-text-secondary-dark"
          >
            Étudiante en informatique,
            <br />
            Je cherche a mieux comprendre
            <br />
            les systèmes avant de les mettre en place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-5 flex items-center gap-5 text-[14px] text-text-secondary-light dark:text-text-secondary-dark"
          >
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3" />
              Madagascar
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3 w-3" />
              2026
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8"
          >
            <Button href="#projects" icon={<ArrowDown className="h-3.5 w-3.5" />}>
              Découvrir mon travail
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
