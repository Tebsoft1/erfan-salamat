import type { PurchageBasketType } from '@/types/purchageBasket'
import { convertToPersianDigitsWithSeparator } from '@/utils/numberUtils'

type ShopItemPropsType = {
  item: PurchageBasketType
  handleDelete: (id: number) => void
}
const ShopItem = (props: ShopItemPropsType) => {
  const { item, handleDelete } = props
  return (
    <div
      key={item.id}
      className="flex text-l items-center justify-between bg-secondary-900 rounded-lg p-3"
    >
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 bg-primary-300 rounded-full"></div>
        <div>
          <div className="text-secondary-100">{item.serviceName}</div>
          <div className="text-SemiDarkGray text-base">
            تاریخ خدمت: {item.date}
          </div>
          <div className="text-primary-300 text-base">
            قیمت: {convertToPersianDigitsWithSeparator(item.servicePrice.toString())} ریال
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-secondary-100">تعداد: {item.requestCount}</div>
        <button
          onClick={() => handleDelete(item.id)}
          className="text-red text-2xl mb-1 font-bold hover:text-DarkRed"
        >
          ×
        </button>
      </div>
    </div>
  )
}
export default ShopItem
