import { fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const EXCLUDED_URLS = ['Authenticate/VerifyOtp']

const baseQueryCore = fetchBaseQuery({
  baseUrl: window.APP_CONFIG.API_BASE_URL,
  timeout: 30000,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token')
    const tokenExpiration = localStorage.getItem('tokenExpiration')

    if (token) {
      if (tokenExpiration) {
        const now = Date.now()
        const tokenTime = new Date(tokenExpiration).getTime()

        if (tokenTime <= now) {
          localStorage.removeItem('token')
          localStorage.removeItem('tokenExpiration')
          window.location.href = '/auth/login'
          return headers
        }
      }

      headers.set('Authorization', `Bearer ${token}`)
    }

    return headers
  },
})

const baseQuery = async (args: any, api: any, extraOptions: any) => {
  const result = await baseQueryCore(args, api, extraOptions)

  const isExcluded = EXCLUDED_URLS.some((url) => args.url?.includes(url))

  if (!isExcluded && result.error && result.error.status === 401) {
    localStorage.removeItem('token')
    localStorage.removeItem('tokenExpiration')
    window.location.href = '/auth/login'
  }

  return result
}

export default retry(baseQuery, { maxRetries: 1 })
