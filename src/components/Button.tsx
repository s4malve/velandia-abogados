import { createElement, ReactNode } from 'react'

import contact from '@/data/contact'

const variants = {
  primary:
    'bg-primary text-slate-100 shadow-lg shadow-primary/40 hover:bg-primary/90 active:hover:bg-primary/80',
  secondary:
    'bg-slate-100 enabled:hover:bg-slate-200 enabled:active:bg-slate-300 text-slate-900',
  success:
    'bg-green-400 enabled:hover:bg-green-500 enabled:active:bg-green-600',
  loading:
    'bg-indigo-400 enabled:hover:bg-indigo-500 enabled:active:bg-indigo-600',
  error: 'bg-rose-400 enabled:hover:bg-rose-500 enabled:active:bg-rose-600'
}

const sizes = {
  sm: 'px-6 text-sm',
  md: 'px-6 py-2 text-base',
  lg: 'px-6 py-3'
}

const whenExternal = {
  target: '_blank',
  rel: 'noopener noreferrer'
}

const contactUsLink = contact.find(({ name }) => name === 'whatsapp')?.to ?? ''
interface Props {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  type?: 'button' | 'submit'
  children: ReactNode
  fit?: boolean
  href?: string
  as?: 'button' | 'a'
  external?: boolean
  className?: string
  contactUs?: boolean
  disabled?: boolean
  onClick?: () => void
}

export default function Button({
  href,
  onClick,
  children,
  disabled,
  fit,
  external,
  contactUs,
  type,
  className,
  as = 'button',
  size = 'md',
  variant = 'primary'
}: Props) {
  const styles = `rounded-xl font-semibold transition-colors flex gap-x-2 items-center justify-center rounded-xl disabled:cursor-not-allowed ${
    variants[variant]
  } ${sizes[size]} ${fit ? 'w-fit' : ''}`
  return createElement(
    as,
    {
      type,
      href: contactUs ? contactUsLink : href,
      onClick,
      className: `${styles} ${className}`,
      disabled,
      ...((external || contactUs) && { ...whenExternal })
    },
    children
  )
}
