import type TContactForm from '@/types/contactForm'

export default function sendMessage(contactForm: TContactForm) {
  return fetch('https://velandia-abogados-api.up.railway.app/send-message', {
    method: 'POST',
    body: JSON.stringify(contactForm),
    headers: { 'Content-Type': 'application/json' }
  })
}
