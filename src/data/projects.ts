export interface Project {
  id: string
  number: string
  title: string
  description: string
  stack: string[]
  href?: string
}

export const projects: Project[] = [
  {
    id: 'capsule',
    number: '02',
    title: 'CAPSULE',
    description: 'Capsules temporelles numériques.',
    stack: ['React', 'TypeScript'],
  },
  {
    id: 'sosmada',
    number: '03',
    title: 'SOSMADA',
    description: "Informations d'urgence accessibles hors ligne.",
    stack: ['Android', 'Java', 'SQLite'],
  },
  {
    id: 'exam-hub',
    number: '04',
    title: 'EXAM HUB',
    description: "Plateforme d'examens en ligne par QCM.",
    stack: ['React', 'TypeScript', 'Express', 'PostgreSQL'],
  },
  {
    id: 'over-the-wire',
    number: '05',
    title: 'OVER THE WIRE',
    description: 'Write-up des challenges Linux et sécurité des niveaux Bandit.',
    stack: ['Linux', 'Bash', 'SSH'],
  },
  {
    id: 'others',
    number: '06',
    title: 'AUTRES PROJETS',
    description: 'Petits projets, POC, et expérimentations.',
    stack: [],
  },
]
