import { useTheme } from '../context/ThemeContext'

export function ProjectMockup() {
  const { theme } = useTheme()

  const bgColor = theme === 'dark' ? '#111415' : '#F5F5F3'
  const screenColor = theme === 'dark' ? '#1a1d1e' : '#ffffff'
  const borderColor = theme === 'dark' ? '#292D2D' : '#E2E2E0'
  const accentColor = theme === 'dark' ? '#8BAF36' : '#6D3DF5'
  const textMuted = theme === 'dark' ? '#9A9D9C' : '#666666'

  return (
    <div className="relative w-full max-w-[500px]" aria-hidden="true">
      <svg viewBox="0 0 500 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        {/* Laptop */}
        <g>
          <rect x="120" y="20" width="280" height="180" rx="8" fill={screenColor} stroke={borderColor} strokeWidth="1.5" />
          <rect x="120" y="20" width="280" height="16" rx="8" fill={bgColor} />
          <circle cx="260" cy="28" r="3" fill={borderColor} />
          <rect x="135" y="48" width="120" height="8" rx="2" fill={accentColor} opacity="0.8" />
          <rect x="135" y="62" width="80" height="5" rx="2" fill={textMuted} opacity="0.4" />
          <rect x="135" y="74" width="250" height="4" rx="1" fill={borderColor} opacity="0.5" />
          <rect x="135" y="84" width="250" height="4" rx="1" fill={borderColor} opacity="0.5" />
          <rect x="135" y="94" width="250" height="4" rx="1" fill={borderColor} opacity="0.5" />
          <rect x="135" y="110" width="60" height="20" rx="4" fill={accentColor} opacity="0.9" />
          <rect x="205" y="110" width="60" height="20" rx="4" fill={borderColor} opacity="0.5" />
          <rect x="275" y="110" width="60" height="20" rx="4" fill={borderColor} opacity="0.5" />
          <rect x="135" y="145" width="100" height="30" rx="4" fill={accentColor} opacity="0.15" />
          <rect x="245" y="145" width="140" height="30" rx="4" fill={borderColor} opacity="0.3" />
          {/* Laptop base */}
          <path d="M100 200 L420 200 L440 220 L80 220 Z" fill={bgColor} stroke={borderColor} strokeWidth="1.5" />
          <rect x="230" y="205" width="60" height="3" rx="1.5" fill={borderColor} opacity="0.6" />
        </g>

        {/* Smartphone */}
        <g>
          <rect x="40" y="130" width="75" height="150" rx="10" fill={screenColor} stroke={borderColor} strokeWidth="1.5" />
          <rect x="40" y="130" width="75" height="12" rx="10" fill={bgColor} />
          <rect x="68" y="133" width="20" height="5" rx="2.5" fill={borderColor} />
          <rect x="48" y="152" width="55" height="6" rx="2" fill={accentColor} opacity="0.8" />
          <rect x="48" y="164" width="35" height="4" rx="1" fill={textMuted} opacity="0.4" />
          <rect x="48" y="176" width="55" height="3" rx="1" fill={borderColor} opacity="0.4" />
          <rect x="48" y="184" width="55" height="3" rx="1" fill={borderColor} opacity="0.4" />
          <rect x="48" y="192" width="55" height="3" rx="1" fill={borderColor} opacity="0.4" />
          <rect x="48" y="206" width="25" height="12" rx="3" fill={accentColor} opacity="0.9" />
          <rect x="78" y="206" width="25" height="12" rx="3" fill={borderColor} opacity="0.4" />
          <rect x="48" y="228" width="55" height="16" rx="4" fill={accentColor} opacity="0.12" />
          <rect x="70" y="262" width="15" height="3" rx="1.5" fill={borderColor} opacity="0.5" />
        </g>

        {/* Tablet */}
        <g>
          <rect x="360" y="200" width="110" height="140" rx="8" fill={screenColor} stroke={borderColor} strokeWidth="1.5" />
          <rect x="360" y="200" width="110" height="10" rx="8" fill={bgColor} />
          <circle cx="415" cy="206" r="2.5" fill={borderColor} />
          <rect x="372" y="218" width="70" height="6" rx="2" fill={accentColor} opacity="0.8" />
          <rect x="372" y="230" width="45" height="4" rx="1" fill={textMuted} opacity="0.4" />
          <rect x="372" y="242" width="86" height="3" rx="1" fill={borderColor} opacity="0.4" />
          <rect x="372" y="250" width="86" height="3" rx="1" fill={borderColor} opacity="0.4" />
          <rect x="372" y="262" width="35" height="14" rx="3" fill={accentColor} opacity="0.9" />
          <rect x="413" y="262" width="35" height="14" rx="3" fill={borderColor} opacity="0.4" />
          <rect x="372" y="286" width="86" height="20" rx="4" fill={accentColor} opacity="0.12" />
          <rect x="405" y="324" width="20" height="3" rx="1.5" fill={borderColor} opacity="0.5" />
        </g>
      </svg>
    </div>
  )
}
