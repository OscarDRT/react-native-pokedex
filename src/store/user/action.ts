import { AppDispatch } from '..'
import { userActionsSlice } from './'

export const profileActions = (dispatch: AppDispatch) => {
  const actions = {
    setName: (params: { name: string }) => {
      return dispatch(userActionsSlice.setName(params.name))
    },
    setBirthdate: (params: { birthdate: string }) => {
      return dispatch(userActionsSlice.setBirthdate(params.birthdate))
    },
    setAvatar: (params: { avatar: string }) => {
      return dispatch(userActionsSlice.setAvatar(params.avatar))
    },
  }
  return actions
}
