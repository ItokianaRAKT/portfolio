import { PenLine, Music, Pencil, Guitar, Gamepad2, Cat } from 'lucide-react'
import type { ComponentType } from 'react'

export interface Hobby {
  id: string
  label: string
  icon: ComponentType<{ className?: string }>
}

export const hobbies: Hobby[] = [
  { id: 'writing', label: 'ÉCRITURE', icon: PenLine },
  { id: 'music', label: 'MUSIQUE', icon: Music },
  { id: 'drawing', label: 'DESSIN', icon: Pencil },
  { id: 'guitar', label: 'GUITARE', icon: Guitar },
  { id: 'gaming', label: 'JEUX VIDÉO', icon: Gamepad2 },
  { id: 'cats', label: 'CHATS', icon: Cat },
]
