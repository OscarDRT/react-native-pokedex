import { apiUrl } from '.'

const getPokemons = (params: { limit: number; offset: number }) => {
  return apiUrl.get<User>('pokemon', {
    params,
  })
}

export { getPokemons }
