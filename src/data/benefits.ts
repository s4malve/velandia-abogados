import type { FC } from 'react'
import type Icon from '@/types/icon'

import People from '@/components/icons/People'
import Shield from '@/components/icons/Shield'
import GroupAdd from '@/components/icons/GroupAdd'

const benefits: {
  title: string
  content: string
  theme: 'dark' | 'light'
  icon: FC<Icon>
}[] = [
  {
    title: 'Siendo humanos',
    content:
      'Viendo que detras de cada proceso hay una persona, que quiere hacerce oir.',
    theme: 'light',
    icon: People
  },
  {
    title: 'Siendo humanos',
    content:
      'Viendo que detras de cada proceso hay una persona, que quiere hacerce oir.',
    theme: 'light',
    icon: Shield
  },
  {
    title: 'Siendo humanos',
    content:
      'Viendo que detras de cada proceso hay una persona, que quiere hacerce oir.',
    theme: 'light',
    icon: GroupAdd
  }
]

export default benefits
