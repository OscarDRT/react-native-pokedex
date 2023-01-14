import { API_URL } from '@env'
import Axios from 'axios'

export const apiUrl = Axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
})
