import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from './baseApi'
import type { ApiResponse } from '@/types/servicesTypes/globalSerivicesType'
import type {
  ServiceGroupType,
  ServiceItemType,
} from '@/types/servicesTypes/Customers'

type Order = {
  id: number;
  type?: number;
};

const orderTypes = [1, 2, 3, 4];

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
          );

          const responses = await Promise.all(requests);

          const mergedOrders: Order[] = responses?.flatMap((res, idx) => {
            if (res.error) throw res.error;
            const apiRes = res?.data as ApiResponse<Order[]>;
            return apiRes?.data?.map((order) => ({
              ...order,
              type: orderTypes[idx],
            })) ?? [];
          });
          

          return { data: mergedOrders };
        } catch (err: any) {
          return { error: err };
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

export const {useGetAllOrdersQuery , useGetServicesByGroupIdQuery, useGetServicesIspopularQuery,useGetServiceGroupQuery } =
  Customers
