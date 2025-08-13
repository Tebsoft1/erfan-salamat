import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from './baseApi'
import type { UserData } from '@/types/userdata'
import type {
  SendOTPType,
  SignupType,
} from '@/types/servicesTypes/Authenticate'

type ApiResponse<T> = {
  data: T
}

export const Authenticate = createApi({
  reducerPath: 'Authenticate',
  baseQuery,
  endpoints: (builder) => ({
    sendOTP: builder.mutation({
      query: (sendOTPFormData: SendOTPType) => ({
        url: 'Authenticate/SendOtp',
        method: 'POST',
        body: sendOTPFormData,
      }),
    }),
    signup: builder.mutation({
      query: (signupFormData: SignupType) => ({
        url: 'Authenticate/RegisterCustumer',
        method: 'POST',
        body: signupFormData,
      }),
    }),

    getUserData: builder.query<UserData, void>({
      query: () => ({
        url: 'Authenticate/GetCurrentUserData',
        method: 'POST',
      }),
      transformResponse: (response: ApiResponse<UserData>) => response.data,
    }),
  }),
})

export const { useSendOTPMutation, useSignupMutation, useGetUserDataQuery } =
  Authenticate
