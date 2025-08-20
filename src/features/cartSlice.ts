// cartSlice.ts
import type { PurchageBasketType } from '@/types/purchageBasket'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  items: JSON.parse(localStorage.getItem('cart') || '[]'),
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (
      state: { items: PurchageBasketType[] },
      action: PayloadAction<PurchageBasketType>
    ) => {
      const existing = state.items.find(
        (item) =>
          item.serviceId === action.payload.serviceId &&
          item.typeId === action.payload.typeId
      )
      if (existing) {
        existing.requestCount += action.payload.requestCount
      } else {
        state.items.push(action.payload)
      }
      localStorage.setItem('cart', JSON.stringify(state.items))
    },
    removeItem: (
      state: { items: PurchageBasketType[] },
      action: PayloadAction<number>
    ) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      localStorage.setItem('cart', JSON.stringify(state.items))
    },
    removeItems: (state: { items: PurchageBasketType[] }) => {
      state.items = []
      localStorage.setItem('cart', JSON.stringify(state.items))
    },
  },
})

export const { addItem, removeItem, removeItems } = cartSlice.actions
export default cartSlice.reducer
