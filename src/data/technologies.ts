import { Code, Zap, Server, Shield } from 'lucide-react'
import type { ComponentType } from 'react'

export interface Technology {
  id: string
  title: string
  description: string
  items: string[]
  icon: ComponentType<{ className?: string }>
}

export const technologies: Technology[] = [
  {
    id: 'java',
    title: 'JAVA',
    description: 'Construire des applications robustes et maintenables.',
    items: ['Exam Hub', 'Projets Spring'],
    icon: Code,
  },
  {
    id: 'express',
    title: 'EXPRESS',
    description: 'Créer des APIs simples, rapides et efficaces.',
    items: ['API REST', 'Mini projets'],
    icon: Zap,
  },
  {
    id: 'infrastructure',
    title: 'INFRASTRUCTURE',
    description: 'Comprendre les systèmes, réseaux et environnements.',
    items: ['Linux', 'pfSense', 'Virtualisation'],
    icon: Server,
  },
  {
    id: 'security',
    title: 'SECURITY',
    description: "Explorer la sécurité applicative et l'infrastructure.",
    items: ['OWASP Top 10', 'Labs & CTF'],
    icon: Shield,
  },
]
