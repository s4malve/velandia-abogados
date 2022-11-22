import { useState } from 'react'

type Status = {
  loading: boolean
  data: string
  error?: string
}

export default function useStatus() {
  const [status, setStatus] = useState<Status>({
    data: '',
    error: undefined,
    loading: false
  })

  function setStartLoading() {
    setStatus((prev) => ({ ...prev, error: undefined, loading: true }))
  }

  function setEndLoading() {
    setStatus((prev) => ({ ...prev, loading: false }))
  }

  function setData(data: any) {
    setStatus((prev) => ({ ...prev, data }))
  }

  function setError(error: string) {
    setStatus((prev) => ({ ...prev, error }))
  }

  return { status, setStartLoading, setEndLoading, setData, setError }
}
