import { configureStore } from '@reduxjs/toolkit'
import { Authenticate } from './services/Authenticate'
import { OrdersApi } from './services/Customers'

export const store = configureStore({
  reducer: {
    [OrdersApi.reducerPath]: OrdersApi.reducer,
    [Authenticate.reducerPath]: Authenticate.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Authenticate.middleware) 
  .concat(OrdersApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
