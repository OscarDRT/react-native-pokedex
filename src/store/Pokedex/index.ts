import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'

export interface PokedexState {
  pokedex: { [key: string]: Pokemon }
  count: number
}

const initialState: PokedexState = { pokedex: {}, count: 0 }

export const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {
    setPokemon: (state, action: PayloadAction<Pokemon>) => {
      state.pokedex = {
        ...current(state.pokedex),
        [action.payload.id]: action.payload,
      }
      state.count += 1
    },
    removePokemon: (state, action: PayloadAction<string>) => {
      delete state.pokedex[action.payload]
      state.count = state.count - 1 >= 0 ? state.count - 1 : 0
    },
    removeAllPokemons: state => {
      state = initialState
    },
  },
})

export const pokedexActionsSlice = pokedexSlice.actions
export const pokedexReducer = pokedexSlice.reducer
