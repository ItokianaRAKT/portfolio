import { ArrowRight } from 'lucide-react'

export function ContactForm() {
  return (
    <form onSubmit={e => e.preventDefault()} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-[10px] font-medium uppercase tracking-widest text-text-secondary-light dark:text-text-secondary-dark">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border border-border-light bg-transparent px-3 py-2.5 text-[12px] text-text-primary-light outline-none transition-colors placeholder:text-text-secondary-light focus:border-primary-light dark:border-border-dark dark:text-text-primary-dark dark:placeholder:text-text-secondary-dark dark:focus:border-primary-dark"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-[10px] font-medium uppercase tracking-widest text-text-secondary-light dark:text-text-secondary-dark">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border border-border-light bg-transparent px-3 py-2.5 text-[12px] text-text-primary-light outline-none transition-colors placeholder:text-text-secondary-light focus:border-primary-light dark:border-border-dark dark:text-text-primary-dark dark:placeholder:text-text-secondary-dark dark:focus:border-primary-dark"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1 block text-[10px] font-medium uppercase tracking-widest text-text-secondary-light dark:text-text-secondary-dark">
          Sujet
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full border border-border-light bg-transparent px-3 py-2.5 text-[12px] text-text-primary-light outline-none transition-colors placeholder:text-text-secondary-light focus:border-primary-light dark:border-border-dark dark:text-text-primary-dark dark:placeholder:text-text-secondary-dark dark:focus:border-primary-dark"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-[10px] font-medium uppercase tracking-widest text-text-secondary-light dark:text-text-secondary-dark">
          Votre message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full resize-none border border-border-light bg-transparent px-3 py-2.5 text-[12px] text-text-primary-light outline-none transition-colors placeholder:text-text-secondary-light focus:border-primary-light dark:border-border-dark dark:text-text-primary-dark dark:placeholder:text-text-secondary-dark dark:focus:border-primary-dark"
        />
      </div>

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 bg-primary-light px-6 py-3 text-[12px] font-medium uppercase tracking-wide text-white transition-opacity hover:opacity-90 dark:bg-primary-dark sm:w-auto"
      >
        Envoyer le message
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
      </button>
    </form>
  )
}
