import type ContactFormSchema from '@/schema/contactForm'
import type { z } from 'zod'

type TContactForm = z.infer<typeof ContactFormSchema>

export default TContactForm
