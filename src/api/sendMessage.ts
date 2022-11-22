import type TContactForm from '@/types/contactForm'

export default async function sendMessage(contactForm: TContactForm) {
  return await fetch('/send-message', {
    method: 'POST',
    body: JSON.stringify(contactForm),
    headers: { 'Content-Type': 'application/json' }
  })
}
