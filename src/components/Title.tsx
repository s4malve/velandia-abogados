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
  xs: {
    min: '0.875rem',
    max: '0.875rem'
  },
  sm: {
    min: '1.125rem',
    max: '1.125rem'
  },
  md: {
    min: '1.5rem',
    max: '2rem'
  },
  lg: {
    min: '2rem',
    max: '2.5rem'
  }
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
    {
      style: {
        fontSize: `clamp(${sizes[size].min},4vw,${sizes[size].max})`
      },
      className: `font-semibold ${themes[theme]} ${sizes[size]} ${className}`
    },
    children
  )
}
