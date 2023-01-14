import { getPokemons } from '@root/api/pokemon'
import { useEffect, useState } from 'react'

export const useExample = () => {
  const [state, setState] = useState()

  return { state, setState }
}

export const useGetPokemons = () => {
  const [state, setState] = useState<PokemonListResponse>()

  useEffect(() => {
    getPokemons({ limit: 10, offset: 0 })
      .then(r => setState(r.data))
      .catch(console.log)
  }, [])

  return { state }
}
