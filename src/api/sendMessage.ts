import type TContactForm from '@/types/contactForm'

export default function sendMessage(contactForm: TContactForm) {
  return fetch('/send-message', {
    method: 'POST',
    body: JSON.stringify(contactForm),
    headers: { 'Content-Type': 'application/json' }
  })
}
