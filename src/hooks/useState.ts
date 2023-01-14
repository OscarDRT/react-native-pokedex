import { useCallback, useReducer } from 'react'

export const useState = <T>(initialState = {} as T) => {
  const reducer = useCallback(
    (state: T, payload: { [key in keyof T]?: T[key] }) => ({
      ...state,
      ...payload,
    }),
    []
  )
  return useReducer(reducer, initialState)
}
