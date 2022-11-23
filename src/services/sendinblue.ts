import type SibApiV3Sdk from 'sib-api-v3-typescript'

export async function sendEmail(sendSmtpEmail: SibApiV3Sdk.SendSmtpEmail) {
  try {
    const res = await fetch('https://api.sendinblue.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'api-key': import.meta.env.SENDINBLUE_API_KEY
      },
      body: JSON.stringify(sendSmtpEmail)
    })

    return await res.json()
  } catch (error) {
    return await Promise.reject(error)
  }
}
