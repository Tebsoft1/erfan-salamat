import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from './baseApi'
import type { ApiResponse } from '@/types/servicesTypes/globalSerivicesType'
import type {
  ServiceGroupType,
  ServiceItemType,
} from '@/types/servicesTypes/Customers'

export type Order = {
  id: number;
  type?: number;
  orderId: string | number;
  serviceStartDate?: string | Date | null; 
  sPers?: string | number | null;
  status: "ثبت شده" | "کنسل شده" | "انتصاب داده شده" | "انجام شده" | string;
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
            return (
              apiRes?.data?.map((order) => ({
                ...order,
                type: orderTypes[idx],
              })) ?? []
            );
          });

          return { data: mergedOrders };
        } catch (err: any) {
          return { error: err };
        }
      },
    }),

    getServicesByGroupId: builder.query<ApiResponse<ServiceItemType[]>, string>({
      query: (typeId: string) => ({
        url: `Customers/GetServicesByGroupId?typeId=${typeId}`,
        method: 'POST',
      }),
    }),

    getServicesIspopular: builder.query<ApiResponse<ServiceItemType[]>, void>({
      query: () => ({
        url: `Customers/GetServicesIspopular`,
        method: 'POST',
      }),
    }),

    getServiceGroup: builder.query<ApiResponse<ServiceGroupType[]>, void>({
      query: () => ({
        url: `Customers/GetServiceGroup`,
        method: 'POST',
      }),
    }),


    getPrescription: builder.query<
      ApiResponse<any>,
      { printCode: string; preType: number }>({
      query: ({ printCode, preType }) => ({
        url: `Customers/GetPrescription?printCode=${printCode}&preType=${preType}`,
        method: 'POST',
      }),
    }),

    addOnlineOrder: builder.mutation<
  ApiResponse<any>,
  { 
    data: {
      address: string;
      mobile: string | null;
      desc: string;
      lat: number;
      lon: number;
      serviceList: {
        serviceId: number;
        shiftId: number;
        serviceTime: string;
        serviceDate: string;
        count: number;
        description: string;
      }[];
    };
    file?: File | null;
  }
>({
  query: ({ data, file }) => {
    const formData = new FormData();

  
    const dataBlob = new Blob([JSON.stringify(data)], { type: "application/json" });
    formData.append("data", dataBlob, "data.json");

    if (file) {
      formData.append("file", file);
    }

    return {
      url: `/Customers/AddOnlineOrder`,
      method: "POST",
      body: formData,
    };
  },
}),

  }),
})

export const {
  useGetAllOrdersQuery,
  useGetServicesByGroupIdQuery,
  useGetServicesIspopularQuery,
  useGetServiceGroupQuery,
  useGetPrescriptionQuery,
  useLazyGetPrescriptionQuery,
  useAddOnlineOrderMutation, 
} = Customers
