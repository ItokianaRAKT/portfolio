import { BookOpen, Music, Pencil, Guitar, Cat } from 'lucide-react'
import type { ComponentType } from 'react'

export interface Hobby {
  id: string
  label: string
  icon: ComponentType<{ className?: string }>
}

export const hobbies: Hobby[] = [
  { id: 'reading', label: 'LECTURE', icon: BookOpen },
  { id: 'music', label: 'MUSIQUE', icon: Music },
  { id: 'drawing', label: 'DESSIN', icon: Pencil },
  { id: 'guitar', label: 'GUITARE', icon: Guitar },
  { id: 'cats', label: 'CHATS', icon: Cat },
]
