import { createElement } from 'react'

interface TitleProps {
  as?: 'h1' | 'h2' | 'h3'
  size?: keyof typeof sizes
  theme?: keyof typeof themes
  className?: string
  children: string
}

const themes = {
  light: 'text-slate-900',
  dark: 'text-slate-100'
}

const sizes = {
  xs: 'text-sm',
  sm: 'text-lg',
  md: 'text-[32px]',
  lg: 'text-[40px]'
}

export default function Title({
  children,
  className = '',
  size = 'md',
  theme = 'light',
  as = 'h2'
}: TitleProps) {
  return createElement(
    as,
    { className: `font-semibold ${themes[theme]} ${sizes[size]} ${className}` },
    children
  )
}
