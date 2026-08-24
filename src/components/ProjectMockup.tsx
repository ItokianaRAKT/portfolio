import { useTheme } from '../context/ThemeContext'

export function ProjectMockup() {
  const { theme } = useTheme()

  const bgColor = theme === 'dark' ? '#111415' : '#F5F5F3'
  const screenColor = theme === 'dark' ? '#1a1d1e' : '#ffffff'
  const borderColor = theme === 'dark' ? '#292D2D' : '#E2E2E0'
  const accentColor = theme === 'dark' ? '#8BAF36' : '#6D3DF5'
  const textMuted = theme === 'dark' ? '#9A9D9C' : '#666666'

  return (
    <div className="relative w-full max-w-[600px]" aria-hidden="true">
      <svg viewBox="0 0 650 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <defs>
          <clipPath id="clip-laptop">
            <rect x="51" y="37" width="548" height="320" rx="7" />
          </clipPath>
          <clipPath id="clip-smartphone">
            <rect x="10" y="60" width="148" height="274" rx="12" />
          </clipPath>
          <clipPath id="clip-tablet">
            <rect x="425" y="118" width="215" height="255" rx="8" />
          </clipPath>
        </defs>

        {/* Laptop */}
        <g>
          <rect x="51" y="5" width="548" height="352" rx="16" fill={screenColor} stroke={borderColor} strokeWidth="1.5" />
          <rect x="51" y="5" width="548" height="32" rx="16" fill={bgColor} />
          <circle cx="325" cy="21" r="5" fill={borderColor} />
          <image href="/tsinjo_desktop.png" x="51" y="37" width="548" height="320" clipPath="url(#clip-laptop)" preserveAspectRatio="xMidYMid slice" />
          {/* Laptop base */}
          <path d="M31 357 L619 357 L639 385 L11 385 Z" fill={bgColor} stroke={borderColor} strokeWidth="1.5" />
          <rect x="285" y="363" width="80" height="4" rx="2" fill={borderColor} opacity="0.6" />
        </g>

        {/* Smartphone */}
        <g>
          <rect x="10" y="40" width="148" height="294" rx="18" fill={screenColor} stroke={borderColor} strokeWidth="1.5" />
          <rect x="10" y="40" width="148" height="20" rx="18" fill={bgColor} />
          <rect x="70" y="44" width="28" height="7" rx="3.5" fill={borderColor} />
          <image href="/tsinjo_mobile.png" x="10" y="60" width="148" height="274" clipPath="url(#clip-smartphone)" preserveAspectRatio="xMidYMid slice" />
          <rect x="72" y="334" width="24" height="5" rx="2.5" fill={borderColor} opacity="0.5" />
        </g>

        {/* Tablet */}
        <g>
          <rect x="425" y="100" width="215" height="273" rx="16" fill={screenColor} stroke={borderColor} strokeWidth="1.5" />
          <rect x="425" y="100" width="215" height="18" rx="16" fill={bgColor} />
          <circle cx="532" cy="107" r="4" fill={borderColor} />
          <image href="/tsinjo_tablet.png" x="425" y="118" width="215" height="255" clipPath="url(#clip-tablet)" preserveAspectRatio="xMidYMid slice" />
          <rect x="518" y="373" width="28" height="5" rx="2.5" fill={borderColor} opacity="0.5" />
        </g>
      </svg>
    </div>
  )
}
