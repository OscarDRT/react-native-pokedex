import { API_URL } from '@env'
import Axios from 'axios'

export const apiUrl = Axios.create({
  baseURL: 'baseURL',
})
