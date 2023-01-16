import { userSelector } from '@root/store/user/selector'
import { useAppDispatch } from '@root/utils/commons'
import { useSelector } from 'react-redux'
import { userActions } from '@root/store/user/action'

export const useUserState = () => {
  return useSelector(userSelector)
}

export const useUserActions = () => {
  const dispatch = useAppDispatch()
  return userActions(dispatch)
}
