import { sizes, variants } from '@/data/button'
import { createElement, ReactNode } from 'react'

interface Props {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  type?: 'button' | 'submit'
  children: ReactNode
  fit?: boolean
  href?: string
  as?: 'button' | 'a'
  disabled?: boolean
  onClick?: () => void
}

export default function Button({
  href,
  onClick,
  children,
  disabled,
  fit,
  type = 'button',
  as = 'button',
  size = 'md',
  variant = 'primary'
}: Props) {
  const className = `rounded-xl font-semibold transition-colors flex gap-x-2 items-center justify-center rounded-xl disabled:cursor-not-allowed ${
    variants[variant]
  } ${sizes[size]} ${fit ? 'w-fit' : ''}`
  return createElement(
    as,
    { type, href, onClick, className, disabled },
    children
  )
}
