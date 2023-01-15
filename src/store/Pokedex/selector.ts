import { createSelector } from 'reselect'
import { RootState } from '..'

export const pokemonsSelector = createSelector(
  ({ pokedex }: RootState) => pokedex.pokedex,
  pokedex => Object.keys(pokedex)
)

export const pokemonSelector = createSelector(
  ({ pokedex }: RootState) => pokedex.pokedex,
  (_: any, id: string) => id,
  (pokedex, id) => pokedex[id]
)
