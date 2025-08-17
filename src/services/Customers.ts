import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from './baseApi'
import type { ApiResponse } from '@/types/servicesTypes/globalSerivicesType'
import type { ServiceItemType } from '@/types/servicesTypes/Customers'

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
  }),
})

export const { useGetServicesByGroupIdQuery } = Customers
