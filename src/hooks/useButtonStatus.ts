import { useState } from 'react'

type ButtonStatus = 'secondary' | 'loading' | 'error' | 'success'

export default function useButtonStatus() {
  const [buttonStatus, setButtonStatus] = useState<ButtonStatus>('secondary')

  return { buttonStatus, setButtonStatus }
}
