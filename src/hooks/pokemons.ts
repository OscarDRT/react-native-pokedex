import { getPokemonById, getPokemons } from '@root/api/pokemon'
import { AplicationState } from '@root/store'
import { pokedexActions } from '@root/store/Pokedex/action'
import { pokemonsSelector, pokemonSelector } from '@root/store/Pokedex/selector'
import { removeDuplicates, useAppDispatch } from '@root/utils/commons'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useState } from './useState'

export const usePokedexActions = () => {
  const dispatch = useAppDispatch()
  return pokedexActions(dispatch)
}

export const usePokemonsState = () => {
  return useSelector(pokemonsSelector)
}

export const usePokemonState = (id: string) => {
  return useSelector((state: AplicationState) => pokemonSelector(state, id))
}

export const useGetPokemons = () => {
  const [state, setState] = useState<{
    pokemonList: Result[]
    offset: number
    isLoading: boolean
  }>({
    pokemonList: [],
    offset: 20,
    isLoading: false,
  })

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setState({ isLoading: true })
        const response = await getPokemons({ limit: 20, offset: state.offset })
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
    fetchPokemons()
  }, [state.offset])

  const handleLoadMore = () => {
    setState({ offset: state.offset + 20 })
  }

  return { state, handleLoadMore }
}

export const useGetPokemonById = ({ pokemonId }: { pokemonId: string }) => {
  const [state, setState] = useState<{
    pokemon: Pokemon
    isLoading: boolean
  }>({
    pokemon: {} as Pokemon,
    isLoading: false,
  })

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setState({ isLoading: true })
        const response = await getPokemonById({ pokemonId })
        setState({ pokemon: response.data, isLoading: false })
      } catch (error) {
        console.error(error)
      }
    }
    fetchPokemon()
  }, [])

  return { state }
}
