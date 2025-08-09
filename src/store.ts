import { configureStore } from '@reduxjs/toolkit'
import { Authenticate } from './services/Authenticate'

export const store = configureStore({
  reducer: {
    [Authenticate.reducerPath]: Authenticate.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Authenticate.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
