import { configureStore } from '@reduxjs/toolkit'
import { pokedexReducer, PokedexState } from './Pokedex'

export interface AplicationState {
  pokedex: PokedexState
}

export const store = configureStore({
  reducer: {
    pokedex: pokedexReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
