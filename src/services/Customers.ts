import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from './baseApi'
import type { ApiResponse } from '@/types/servicesTypes/globalSerivicesType'
import type {
  ServiceGroupType,
  ServiceItemType,
  WalletTransactionType,
} from '@/types/servicesTypes/Customers'

export type Order = {
  id: number
  type?: number
  orderId: string | number
  serviceStartDate?: string | Date | null
  sPers?: string | number | null
  status: 'ثبت شده' | 'کنسل شده' | 'انتصاب داده شده' | 'انجام شده' | string
}

const orderTypes = [1, 2, 3, 4]

export const Customers = createApi({
  reducerPath: 'Customers',
  baseQuery,
  endpoints: (builder) => ({
    getAllOrders: builder.query<Order[], void>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        try {
          const requests = orderTypes.map((type) =>
            fetchWithBQ({
              url: `/Customers/GetOrdersForCustomerByType?type=${type}`,
              method: 'POST',
            })
          )

          const responses = await Promise.all(requests)

          const mergedOrders: Order[] = responses?.flatMap((res, idx) => {
            if (res.error) throw res.error
            const apiRes = res?.data as ApiResponse<Order[]>
            return (
              apiRes?.data?.map((order) => ({
                ...order,
                type: orderTypes[idx],
              })) ?? []
            )
          })

          return { data: mergedOrders }
        } catch (err: any) {
          return { error: err }
        }
      },
    }),
    getServicesByGroupId: builder.query<ApiResponse<ServiceItemType[]>, string>(
      {
        query: (typeId: string) => ({
          url: `Customers/GetServicesByGroupId?typeId=${typeId}`,
          method: 'POST',
        }),
      }
    ),
    getServicesIspopular: builder.query<ApiResponse<ServiceItemType[]>, void>({
      query: () => ({
        url: `Customers/GetServicesIspopular`,
        method: 'POST',
      }),
    }),
    getServicesDetailById: builder.query<
      ApiResponse<ServiceItemType>,
      { typeId: string; serviceId: string }
    >({
      query: ({ typeId, serviceId }) => ({
        url: `Customers/GetServicesDetailById?typeId=${typeId}&serviceId=${serviceId}`,
        method: 'POST',
      }),
    }),
    getServiceGroup: builder.query<ApiResponse<ServiceGroupType[]>, void>({
      query: () => ({
        url: `Customers/GetServiceGroup`,
        method: 'POST',
      }),
    }),
    getWalletTrns: builder.query<ApiResponse<WalletTransactionType[]>, void>({
      query: () => ({
        url: `Customers/GetWalletTrns`,
        method: 'POST',
      }),
    }),
    addOnlineOrder: builder.mutation<ApiResponse<string>, FormData>({
      query: (body) => ({
        url: `Customers/AddOnlineOrder`,
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const {
  useGetAllOrdersQuery,
  useGetServicesByGroupIdQuery,
  useGetServicesIspopularQuery,
  useGetServicesDetailByIdQuery,
  useGetServiceGroupQuery,
  useGetWalletTrnsQuery,
  useAddOnlineOrderMutation,
} = Customers
