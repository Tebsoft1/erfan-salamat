import { configureStore } from '@reduxjs/toolkit'
import { Authenticate } from './services/Authenticate'
import authSlice from './features/authSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [Authenticate.reducerPath]: Authenticate.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Authenticate.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
