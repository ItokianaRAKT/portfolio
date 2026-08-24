import { Monitor, Server, Database, Cloud, Wrench, BadgeCheck } from 'lucide-react'
import type { ComponentType } from 'react'

export interface Skill {
  id: string
  title: string
  icon: ComponentType<{ className?: string }>
  items: string[]
}

export const skills: Skill[] = [
  {
    id: 'frontend',
    title: 'FRONTEND',
    icon: Monitor,
    items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML / CSS'],
  },
  {
    id: 'backend',
    title: 'BACKEND',
    icon: Server,
    items: ['FastAPI', 'Python', 'Express', 'Java', 'Spring Boot'],
  },
  {
    id: 'data-api',
    title: 'DONNÉES & API',
    icon: Database,
    items: ['PostgreSQL', 'SQLite', 'SQL', 'REST API', 'JWT'],
  },
  {
    id: 'systemes',
    title: 'SYSTÈMES & INFRA',
    icon: Cloud,
    items: ['Linux', 'Bash', 'Réseaux', 'pfSense', 'Virtualisation (VMware)'],
  },
  {
    id: 'outils',
    title: 'OUTILS',
    icon: Wrench,
    items: ['Git', 'GitHub', 'IntelliJ IDEA', 'Zed', 'Postman'],
  },
  {
    id: 'competences',
    title: 'COMPÉTENCES',
    icon: BadgeCheck,
    items: ['Résolution de problèmes', 'Apprentissage autonome', 'Documentation', 'Travail en équipe', 'Gestion de projet'],
  },
]
