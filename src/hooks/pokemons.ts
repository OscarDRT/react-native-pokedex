import { getPokemons } from '@root/api/pokemon'
import { useEffect } from 'react'
import { useState } from './useState'

const removeDuplicates = (
  currentList: Array<Result>,
  newList: Array<Result>
) => {
  return [...new Set([...currentList, ...newList])]
}

export const useGetPokemons = () => {
  const [state, setState] = useState<{
    pokemonList: Result[]
    offset: number
    isLoading: boolean
  }>({
    pokemonList: [],
    offset: 2,
    isLoading: false,
  })

  useEffect(() => {
    console.log(state)
  }, [state.pokemonList])

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setState({ isLoading: true })
        const response = await getPokemons({ limit: 2, offset: state.offset })
        setState({
          pokemonList: removeDuplicates(
            state.pokemonList,
            response.data.results
          ),
          isLoading: false,
        })
      } catch (error) {
        console.error(error)
      }
    }
    fetchPokemon()
  }, [state.offset])

  const handleLoadMore = () => {
    setState({ offset: state.offset + 2 })
  }

  return { state, handleLoadMore }
}
