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
  */
  sprites: Sprites
  types: Type[]
  weight: number
}

type Sprites = {
  front_default: string
}

type Type = {
  slot: number
  type: Type2
}

type Type2 = {
  name: string
  url: string
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
