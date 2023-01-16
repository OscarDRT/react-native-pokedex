import { createSlice } from '@reduxjs/toolkit'

export interface UserState {
  name: string
  birthdate: string
  avatar: string
}

const initialState: UserState = {
  name: '',
  birthdate: '',
  avatar: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
    setBirthdate: (state, action) => {
      state.birthdate = action.payload
    },
    setAvatar: (state, action) => {
      state.avatar = action.payload
    },
  },
})

export const userActionsSlice = userSlice.actions
export const userReducer = userSlice.reducer
