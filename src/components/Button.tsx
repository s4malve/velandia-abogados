import { createElement, ReactNode } from 'react'

import { sizes, variants } from '@/data/button'
import contact from '@/data/contact'

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
  as = 'button',
  size = 'md',
  variant = 'primary'
}: Props) {
  const className = `rounded-xl font-semibold transition-colors flex gap-x-2 items-center justify-center rounded-xl disabled:cursor-not-allowed ${
    variants[variant]
  } ${sizes[size]} ${fit ? 'w-fit' : ''}`
  return createElement(
    as,
    {
      type,
      href: contactUs ? contactUsLink : href,
      onClick,
      className,
      disabled,
      ...((external || contactUs) && { ...whenExternal })
    },
    children
  )
}
