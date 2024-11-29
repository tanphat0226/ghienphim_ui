import axios from 'axios'
import { API_ROOT } from '../utils/constants'

export const categoriesApi = axios.get(`${API_ROOT}/the-loai`).then(function (response) {
  // handle success
  return response.data
})

export const countriesApi = axios.get(`${API_ROOT}/quoc-gia`).then(function (response) {
  // handle success
  return response.data
})
