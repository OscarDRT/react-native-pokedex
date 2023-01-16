import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: UserState = {
  name: '',
  birthdate: '',
  avatar: {
    height: 0,
    width: 0,
    type: '',
    fileName: '',
    fileSize: 0,
    uri: '',
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setBirthdate: (state, action: PayloadAction<string>) => {
      state.birthdate = action.payload
    },
    setAvatar: (state, action: PayloadAction<Asset>) => {
      state.avatar = action.payload
    },
  },
})

export const userActionsSlice = userSlice.actions
export const userReducer = userSlice.reducer
