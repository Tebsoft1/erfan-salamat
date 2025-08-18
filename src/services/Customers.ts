import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from './baseApi'
import type { ApiResponse } from '@/types/servicesTypes/globalSerivicesType'
import type {
  ServiceGroupType,
  ServiceItemType,
} from '@/types/servicesTypes/Customers'

export const Customers = createApi({
  reducerPath: 'Customers',
  baseQuery,
  endpoints: (builder) => ({
    getServicesByGroupId: builder.query<ApiResponse<ServiceItemType[]>, string>(
      {
        query: (typeId: string) => ({
          url: `Customers/GetServicesByGroupId?typeId=${typeId}`,
          method: 'POST',
        }),
      }
    ),
    getServicesIspopular: builder.query<ApiResponse<ServiceItemType[]>, void>(
      {
        query: () => ({
          url: `Customers/GetServicesIspopular`,
          method: 'POST',
        }),
      }
    ),
    getServiceGroup: builder.query<ApiResponse<ServiceGroupType[]>, void>({
      query: () => ({
        url: `Customers/GetServiceGroup`,
        method: 'POST',
      }),
    }),
  }),
})

export const { useGetServicesByGroupIdQuery, useGetServicesIspopularQuery,useGetServiceGroupQuery } =
  Customers
