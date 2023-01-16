import { combineReducers, configureStore } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { pokedexReducer, PokedexState } from './Pokedex'
import persistReducer from 'redux-persist/es/persistReducer'
import thunk from 'redux-thunk'
import persistStore from 'redux-persist/es/persistStore'
import { userReducer } from './user'

export interface AplicationState {
  pokedex: PokedexState
  user: UserState
}

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
}

const pokedexPersistConfig = {
  key: 'pokedex',
  storage: AsyncStorage,
  blacklist: [],
}

const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
  blacklist: [],
  whitelist: ['avatar'],
}

const rootApplicationReducerMap = {
  pokedex: persistReducer<PokedexState>(pokedexPersistConfig, pokedexReducer),
  user: persistReducer<UserState>(userPersistConfig, userReducer),
}

const rootReducer = combineReducers<AplicationState>(rootApplicationReducerMap)

const persistedReducer = persistReducer<AplicationState>(
  rootPersistConfig,
  rootReducer
)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})

export const persistor = persistStore(store)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
