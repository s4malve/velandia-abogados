import type Icon from '@/types/icon'

import sizes from '@/utils/iconSize'

export default function Shield({ className, size = 'md' }: Icon) {
  return (
    <svg
      width={sizes[size]}
      height={sizes[size]}
      className={className}
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#a)'>
        <path d='m16.264 32.012-.472-.21C15.267 31.573 3 26.033 3 16V7.301a3.977 3.977 0 0 1 2.735-3.776L16.333.012l10.599 3.513a3.977 3.977 0 0 1 2.735 3.776V16c0 11.436-12.384 15.673-12.912 15.85l-.491.162Zm.07-29.204L6.578 6.043A1.323 1.323 0 0 0 5.667 7.3V16c0 7.325 8.586 12.077 10.729 13.148C18.535 28.288 27 24.351 27 16V7.301a1.323 1.323 0 0 0-.912-1.258l-9.755-3.235Z' />
        <path d='M15.148 19.39h-.044a2.495 2.495 0 0 1-1.793-.8l-3.075-3.2 1.921-1.843 2.992 3.12 6.908-6.908 1.886 1.885-7.015 7.015a2.499 2.499 0 0 1-1.78.73Z' />
      </g>
      <defs>
        <clipPath id='a'>
          <path transform='translate(.333)' d='M0 0h32v32H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}
