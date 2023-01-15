import { apiUrl } from '.'

const getPokemons = (params: { limit: number; offset: number }) => {
  return apiUrl.get<PokemonListResponse>('pokemon', {
    params,
  })
}

const getPokemonById = ({ pokemonId }: { pokemonId: string }) => {
  return apiUrl.get<Pokemon>(`pokemon/${pokemonId}`)
}

export { getPokemons, getPokemonById }
