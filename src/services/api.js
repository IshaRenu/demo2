import axios from 'axios'

import { API_KEY, BASE_URL } from '../config/api_config'
import { useCallback } from 'react'



export const getMovies = async query => {
  const url = BASE_URL+query

  try {
    const response = await axios.get(url, {
      params: {
        //q: searchQuery,
        //app_id: APP_ID,
        api_key: API_KEY,
        //language: 'en-US',
        //page='1'
      }
    })

    const movies = response.results

    return movies
  } catch (error) {
    throw error
  }
}
