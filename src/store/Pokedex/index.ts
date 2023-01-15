import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'

export interface PokedexState {
  pokedex: { [key: string]: Pokemon }
}

const initialState: PokedexState = { pokedex: {} }

export const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {
    setPokemon: (state, action: PayloadAction<Pokemon>) => {
      state.pokedex = {
        ...current(state.pokedex),
        [action.payload.id]: action.payload,
      }
    },
    removePokemon: (state, action: PayloadAction<string>) => {
      delete state.pokedex[action.payload]
    },
    removeAllPokemons: (state, action) => {
      state = initialState
    },
  },
})

export const actions = pokedexSlice.actions
export const pokedexReducer = pokedexSlice.reducer
