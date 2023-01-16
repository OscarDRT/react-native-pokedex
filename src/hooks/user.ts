import { userSelector } from '@root/store/user/selector'
import { useSelector } from 'react-redux'

export const useUserState = () => {
  return useSelector(userSelector)
}
