import { z } from 'zod'

const ContactFormSchema = z.object({
  email: z
    .string({
      required_error: 'Tu correo es obligatorio'
    })
    .email({ message: 'Tu correo es obligatorio' }),
  name: z
    .string({
      required_error: 'Tu nombre es obligatorio',
      invalid_type_error: 'Tu nombre solo puede contener letras'
    })
    .min(3, 'Tu nombre debe tener al menos 3 caracteres'),
  message: z
    .string({
      required_error: 'El mensaje es obligatorio',
      invalid_type_error: 'Tu mensaje solo puede contener letras'
    })
    .min(20, 'Tu mensaje debe tener al menos 20 caracteres')
})

export default ContactFormSchema
