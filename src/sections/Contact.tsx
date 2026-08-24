import { Globe, GitBranch, Mail } from 'lucide-react'
import { motion } from 'motion/react'
import { SectionLabel } from '../components/SectionLabel'
import { ContactForm } from '../components/ContactForm'

const socialLinks = [
  { icon: Globe, label: 'LINKEDIN', href: 'https://www.linkedin.com/in/itokiana-rakotoarivelo-281726374', value: 'linkedin.com/in/itokiana-rakotoarivelo' },
  { icon: GitBranch, label: 'GITHUB', href: 'https://github.com/ItokianaRAKT', value: 'github.com/ItokianaRAKT' },
  { icon: Mail, label: 'EMAIL', href: 'mailto:itokianarakt@gmail.com', value: 'itokianarakt@gmail.com' },
]

export function Contact() {
  return (
    <section id="contact" className="border-t border-border-light dark:border-border-dark">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-11 md:py-24">
        <SectionLabel number="07" label="CONTACT" />

        <div className="grid gap-12 md:grid-cols-3 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-[28px] font-medium uppercase tracking-tight text-text-primary-light dark:text-text-primary-dark md:text-[34px]">
              Contactez-moi.
            </h2>
            <p className="max-w-[200px] text-[15px] leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
              Un projet, une opportunité,
              <br />
              une idée ou simplement
              <br />
              une discussion ?
              <br />
              <br />
              Écrivons-nous.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ul className="space-y-6">
              {socialLinks.map(link => {
                const Icon = link.icon
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-3 transition-colors"
                    >
                      <Icon className="mt-0.5 h-4 w-4 text-text-secondary-light group-hover:text-primary-light dark:text-text-secondary-dark dark:group-hover:text-primary-dark" />
                      <div>
                        <p className="text-[13px] font-semibold uppercase tracking-widest text-text-primary-light dark:text-text-primary-dark">
                          {link.label}
                        </p>
                        <p className="text-[14px] text-text-secondary-light dark:text-text-secondary-dark">
                          {link.value}
                        </p>
                      </div>
                    </a>
                  </li>
                )
              })}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
