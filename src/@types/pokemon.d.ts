type Pokemon = {
  /* abilities: Ability[] */
  base_experience: number
  /* forms: Form[] */
  /* game_indices: GameIndice[] */
  height: number
  held_items: any[]
  id: number
  is_default: boolean
  location_area_encounters: string
  /* moves: Move[] */
  name: string
  order: number
  past_types: any[]
  /*   species: Species
  sprites: Sprites
  stats: Stat[]
  types: Type[] */
  weight: number
}

type Result = {
  name: string
  url: string
}

type PokemonListResponse = {
  count: number
  next: string
  previous?: any
  results: Result[]
}
