import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from './baseApi'

type Order = {
  id: number;
  type?: number;
};

type ApiResponse<T> = {
  data: T;
};

const orderTypes = [1, 2, 3, 4];

export const OrdersApi = createApi({
  reducerPath: 'OrdersApi',
  baseQuery,
  endpoints: (builder) => ({
    getAllOrders: builder.query<Order[], void>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        try {
          const requests = orderTypes.map((type) =>
            fetchWithBQ({
              url: `/Customers/GetOrdersForCustomerByType?type=${type}`,
              method: 'POST', // یا 'GET' بسته به API
              // body: { ... } اگه نیاز به بدنه داشت
            })
          );

          const responses = await Promise.all(requests);

          const mergedOrders: Order[] = responses.flatMap((res, idx) => {
            if (res.error) {
              throw res.error;
            }
            const apiRes = res.data as ApiResponse<Order[]>;
            return apiRes.data.map((order) => ({
              ...order,
              type: orderTypes[idx],
            }));
          });

          return { data: mergedOrders };
        } catch (err: any) {
          return { error: err };
        }
      },
    }),
  }),
});

export const { useGetAllOrdersQuery } = OrdersApi;
