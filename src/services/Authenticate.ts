import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from './baseApi'
import type { UserData } from '@/types/userdata'

type ApiResponse<T> = {
  data: T;
};

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

    getUserData: builder.query<UserData , void>({
      query: () => ({
        url: '/Authenticate/GetCurrentUserData',
        method: 'POST',
      }),
      transformResponse: (response: ApiResponse<UserData>) => response.data,
    }),
  }),
  
})

export const { useLoginMutation  , useGetUserDataQuery } = Authenticate
