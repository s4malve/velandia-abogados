import type { APIContext } from 'astro'

import { sendEmail } from '@/services/sendinblue'
import ContactFormSchema from '@/schema/contactForm'

export async function post({ request }: APIContext) {
  const { headers } = request

  if (headers.get('content-type') === 'application/json') {
    try {
      const body = await request.json()
      const { email, message, name } = ContactFormSchema.parse(body)
      const res = await sendEmail({
        subject: `Mensaje de ${name} desde la página`,
        htmlContent: `<html><body><p>${message}</p></body></html>`,
        sender: { name, email },
        to: [{ email: 'yovese@gmail.com', name: 'Luz Velandia' }]
      })

      return new Response(JSON.stringify(res), { status: 200 })
    } catch (error) {
      return new Response(JSON.stringify(error), { status: 400 })
    }
  } else {
    return new Response(
      JSON.stringify({
        message: 'You must add an application/json content type'
      }),
      { status: 400 }
    )
  }
}
