import { fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const baseQueryCore = fetchBaseQuery({
  baseUrl: window.APP_CONFIG.API_BASE_URL,
  timeout: 15000,
  prepareHeaders: (headers) => {
    if (!headers.has('Authorization')) {
      const token = localStorage.getItem('token')
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
    }
    return headers
  },
})

const baseQuery = retry(baseQueryCore, {
  maxRetries: 3,
})
export default baseQuery
