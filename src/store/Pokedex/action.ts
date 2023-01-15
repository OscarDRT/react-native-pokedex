import { AppDispatch } from '..'
import { pokedexActionsSlice } from './index'

export const pokedexActions = (dispatch: AppDispatch) => {
  const actions = {
    setPokemon: (params: { pokemon: Pokemon }) => {
      return dispatch(pokedexActionsSlice.setPokemon(params.pokemon))
    },
    removePokemon: (params: { pokemonId: string }) => {
      return dispatch(pokedexActionsSlice.removePokemon(params.pokemonId))
    },
    removeAllPokemons: () => {
      return dispatch(pokedexActionsSlice.removeAllPokemons())
    },
  }
  return actions
}
