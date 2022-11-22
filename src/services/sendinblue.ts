import type { TContactForm } from '@/components/ContactForm'
import SibApiV3Sdk from 'sib-api-v3-typescript'

export async function sendEmail(sendSmtpEmail: SibApiV3Sdk.SendSmtpEmail) {
  try {
    const Sendinblue = new SibApiV3Sdk.TransactionalEmailsApi()
    Sendinblue.setApiKey(
      SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
      import.meta.env.SENDINBLUE_API_KEY
    )

    const res = await Sendinblue.sendTransacEmail(sendSmtpEmail)

    return res.body
  } catch (error) {
    return await Promise.reject(error)
  }
}
