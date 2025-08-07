import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from './baseApi'

export const Authenticate = createApi({
  reducerPath: 'Authenticate',
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/Authenticate/Login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
})

export const { useLoginMutation } = Authenticate
