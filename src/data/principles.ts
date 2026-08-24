import { ScanSearch, Code2, Box, Mountain } from 'lucide-react'
import type { ComponentType } from 'react'

export interface Principle {
  id: string
  title: string
  description: string
  icon: ComponentType<{ className?: string }>
}

export const principles: Principle[] = [
  {
    id: 'comprendre',
    title: 'COMPRENDRE',
    description: 'Analyser, explorer et aller au fond des choses.',
    icon: ScanSearch,
  },
  {
    id: 'concevoir',
    title: 'CONCEVOIR',
    description: 'Structurer des solutions simples, claires et évolutives.',
    icon: Code2,
  },
  {
    id: 'construire',
    title: 'CONSTRUIRE',
    description: 'Développer des applications utiles et fiables.',
    icon: Box,
  },
  {
    id: 'progresser',
    title: 'PROGRESSER',
    description: 'Apprendre en continu, relever des défis plus complexes.',
    icon: Mountain,
  },
]
