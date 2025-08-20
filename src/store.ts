import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/authSlice'
import cartSlice from './features/cartSlice'
import { Authenticate } from './services/Authenticate'
import { Customers } from './services/Customers'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    [Authenticate.reducerPath]: Authenticate.reducer,
    [Customers.reducerPath]: Customers.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      Authenticate.middleware,
      Customers.middleware
    ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
