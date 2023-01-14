import { apiUrl } from '.'

const getPokemons = (params: { limit: number; offset: number }) => {
  return apiUrl.get<PokemonListResponse>('pokemon', {
    params,
  })
}

export { getPokemons }
