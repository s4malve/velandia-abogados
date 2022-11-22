import type Icon from '@/types/icon'

import sizes from '@/utils/iconSize'

export default function Exclamation({ className, size = 'md' }: Icon) {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      viewBox='0 0 512 512'
      xmlSpace='preserve'
    >
      <path
        d='M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256c.153 141.322 114.678 255.847 256 256zm-21.333-384c0-11.782 9.551-21.333 21.333-21.333 11.782 0 21.333 9.551 21.333 21.333v170.667c0 11.782-9.551 21.333-21.333 21.333-11.782 0-21.333-9.551-21.333-21.333V128zM256 384c11.782 0 21.333 9.551 21.333 21.333s-9.551 21.333-21.333 21.333c-11.782 0-21.333-9.551-21.333-21.333S244.218 384 256 384z'
        data-original='#000000'
      />
    </svg>
  )
}
