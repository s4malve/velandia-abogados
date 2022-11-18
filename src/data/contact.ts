import Whatsapp from '@/components/icons/Whatsapp.astro'
import Gmail from '@/components/icons/Gmail'
import Location from '@/components/icons/Location.astro'

export default [
  {
    icon: Whatsapp,
    content: '(+57) 320 378 9546',
    to: 'https://api.whatsapp.com/send?phone=573203789546&text=Hola%20Luz...',
    name: 'whatsapp'
  },
  {
    icon: Gmail,
    content: 'yovese@gmail.com',
    to: null,
    name: 'gmail'
  },
  {
    icon: Location,
    content: 'Cra 19 # 6 - 28',
    to: 'https://g.page/LuzVelandiaAbogados?share',
    name: 'location'
  }
]
