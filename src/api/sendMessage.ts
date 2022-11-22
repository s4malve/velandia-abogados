import type TContactForm from '@/types/contactForm'

import { useState } from 'react'

type MessageStatus = {
  loading: boolean
  data: string
  error?: string
}

export default async function sendMessage(contactForm: TContactForm) {
  const [status, setStatus] = useState<MessageStatus>({
    data: '',
    error: undefined,
    loading: false
  })
  setStatus((prev) => ({ ...prev, error: undefined, loading: true }))
  try {
    const res = await fetch('/send-message', {
      method: 'POST',
      body: JSON.stringify(contactForm),
      headers: { 'Content-Type': 'application/json' }
    })

    if (res.ok) {
      const data = await res.json()
      setStatus((prev) => ({ ...prev, data }))
    }

    await Promise.reject(res)
  } catch (error) {
    setStatus((prev) => ({ ...prev, error: error as string }))
  } finally {
    setStatus((prev) => ({ ...prev, loading: false }))
  }

  return status
}
