import sizes from '@/styles/iconSize'

import type Icon from '@/types/icon'

export default function Instagram({ className, size = 'md' }: Icon) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={sizes[size]}
      height={sizes[size]}
      className={className}
      viewBox='0 0 24 24'
      xmlSpace='preserve'
      fill='currentColor'
    >
      <path d='M12 2.162c3.204 0 3.584.012 4.849.07 1.308.06 2.655.358 3.608 1.311.962.962 1.251 2.296 1.311 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.059 1.301-.364 2.661-1.311 3.608-.962.962-2.295 1.251-3.608 1.311-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.291-.059-2.669-.371-3.608-1.311-.957-.957-1.251-2.304-1.311-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.059-1.296.367-2.664 1.311-3.608.96-.96 2.299-1.251 3.608-1.311 1.265-.058 1.645-.07 4.849-.07M12 0C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.668 3.36.157 5.198.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.853.603 3.7 1.942 5.038 1.345 1.345 3.186 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.854-.085 3.698-.602 5.038-1.942 1.347-1.347 1.857-3.184 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.085-1.855-.602-3.698-1.942-5.038C20.643.671 18.797.156 16.948.072 15.668.014 15.259 0 12 0z' />
      <path d='M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z' />
      <circle cx={18.406} cy={5.594} r={1.44} />
    </svg>
  )
}
