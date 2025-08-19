import type { PurchageBasketType } from '@/types/purchageBasket'

export const AddItemToCard = (item: PurchageBasketType) => {
  if (localStorage.getItem('card')) {
    const parsedData: PurchageBasketType[] = JSON.parse(
      localStorage.getItem('card') as string
    )
    const updatedData = [...parsedData, item]
    localStorage.setItem('card', JSON.stringify(updatedData))
  } else {
    const newData: PurchageBasketType[] = [item]
    localStorage.setItem('card', JSON.stringify(newData))
  }
}
