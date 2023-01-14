import { useState } from 'react'

export const useExample = () => {
  const [state, setState] = useState()

  return { state, setState }
}
