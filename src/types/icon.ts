import type sizes from '@/utils/iconSize'

type Icon = {
  size?: keyof typeof sizes
  className?: string
}

export default Icon
