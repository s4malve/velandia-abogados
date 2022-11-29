import sizes from '@/styles/iconSize'

import type Icon from '@/types/icon'

export default function ArrowLeft({ className, size = 'md' }: Icon) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      className={className}
      fill='currentColor'
      viewBox='0 0 24 24'
      xmlSpace='preserve'
    >
      <path d='M17.921 1.505a1.5 1.5 0 0 1-.44 1.06l-7.672 7.672a2.5 2.5 0 0 0 0 3.536l7.662 7.662a1.5 1.5 0 0 1-2.121 2.121L7.688 15.9a5.506 5.506 0 0 1 0-7.779L15.36.444a1.5 1.5 0 0 1 2.561 1.061Z' />
    </svg>
  )
}
