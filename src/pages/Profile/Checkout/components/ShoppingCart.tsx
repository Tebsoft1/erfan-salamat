import React, { useState } from 'react'
import Map from '@/components/Map'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import ShopItem from './ShopItem'
import type { LatLngTuple } from 'leaflet'
import FileUploader from '@/components/FileUploader'
import { RejectToast } from '@/ui/Toasts'
import { handleApiCall } from '@/utils/handleApiCall'
import { useAddOnlineOrderMutation } from '@/services/Customers'
import Button from '@/ui/Button'
import { convertToPersianDigitsWithSeparator } from '@/utils/numberUtils'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, removeItems } from '@/features/cartSlice'
import type { RootState } from '@/store'
import type { PurchageBasketType } from '@/types/purchageBasket'

type ServiceListToBackedType = {
  serviceId: number
  shiftId: number
  serviceTime: string
  serviceDate: string
  count: number
  description: string
}
const ShoppingCart: React.FC = () => {
  const [showExtra, setShowExtra] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [desc, setDesc] = useState('')
  const [position, setPosition] = useState<LatLngTuple>([35.6892, 51.389])
  const [address, setAddress] = useState<string>(
    'استان تهران، تهران، اسکندری، بزرگراه نواب صفوی، نواب، لنگرودی، احترامی'
  )

  const dispatch = useDispatch()

  const navigate = useNavigate()
  const cartItems: PurchageBasketType[] = useSelector(
    (state: RootState) => state.cart.items
  )

  const [AddOnlineOrder, { isLoading: AddOnlineOrderLoading }] =
    useAddOnlineOrderMutation()

  const handleDelete = (id: number) => {
    dispatch(removeItem(id))
  }

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.servicePrice * item.requestCount,
    0
  )

  const handleSubmit = async () => {
    let serviceList: ServiceListToBackedType[] = []

    // ساختن آرایه serviceList از CartItems
    cartItems.forEach((item) => {
      const shift = item.servicePackage ? parseInt(item.time) : 0

      serviceList.push({
        serviceId: Number(item.serviceId),
        shiftId: shift,
        serviceTime: item.time,
        serviceDate: item.date,
        count: item.requestCount,
        description: '',
      })
    })
    // ساختن آبجکت اصلی برای داده‌ها
    const data = {
      address,
      mobile: localStorage.getItem('mobile') || '',
      desc,
      lat: position[0],
      lon: position[1],
      serviceList,
    }

    if (serviceList.length === 0) {
      RejectToast('لطفا حداقل یک خدمت رو به لیست اضافه کنید')
      return
    }
    if (!address) {
      RejectToast('لطفا آدرس خود را وارد نمایید')
      return
    }
    // اضافه کردن داده‌ها به FormData
    const formData = new FormData()
    formData.append(
      'data',
      new Blob([JSON.stringify(data)], { type: 'application/json' })
    ) // داده JSON
    if (selectedFile) {
      formData.append('file', selectedFile) // فایل
    }

    await handleApiCall<string>(
      () => AddOnlineOrder(formData).unwrap(),

      () => {
        navigate('/services')
        dispatch(removeItems())
      },
      (response) => {
        console.log('Error:', response)
      }
    )
  }

  return (
    <div className="w-98/100 bg-dunkel rounded-xl mt-15 mb-15 overflow-hidden flex flex-col relative">
      <div className="absolute top-2 right-2">
        <Link to="/profile" className="flex items-center text-secondary-100">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="h-6 w-6 text-dunkel ml-1"
          />
          <span className="-mt-1 text-dunkel text-sm">بازگشت</span>
        </Link>
      </div>
      <span className="text-xl bg-primary-300 rounded-t-xl text-dunkel w-full p-5 flex justify-center">
        جزئیات سفارش
      </span>

      <div className="flex flex-col flex-1 p-4">
        <div
          className="flex-1 mt-2 space-y-6 overflow-y-auto scrollbar-hide"
          style={{ maxHeight: '250px' }}
        >
          {cartItems.map((item) => (
            <ShopItem key={item.id} item={item} handleDelete={handleDelete} />
          ))}
        </div>

        <hr className="border-SemiDarkGray my-4" />
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-bold">جمع کل فاکتور:</span>
          <span className="text-lg font-bold">
            {convertToPersianDigitsWithSeparator(totalPrice)} ریال
          </span>
        </div>

        {!showExtra && cartItems.length > 0 && (
          <button
            onClick={() => setShowExtra(true)}
            className="bg-primary-300 text-dunkel py-2 rounded-lg w-full hover:bg-primary-500 hover:text-secondary-100 mb-4"
          >
            تکمیل فرآیند ثبت سفارش
          </button>
        )}

        {showExtra && (
          <div className="mt-6 space-y-4">
            <textarea
              className="w-full h-24 resize-none p-3 rounded-lg bg-secondary-800 text-secondary-100 border"
              placeholder="توضیحات خود را وارد کنید..."
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            ></textarea>

            <div className="space-y-2">
              <label className="block text-secondary-100 text-xl font-bold mb-2">
                بارگذاری مدارک:
              </label>

              <FileUploader
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}
              />
            </div>

            <Map
              address={address}
              setAddress={setAddress}
              position={position}
              setPosition={setPosition}
            />

            <Button
              onsubmit={handleSubmit}
              loading={AddOnlineOrderLoading}
              text="ثبت نهایی سفارش"
              isFormButton={true}
              canClick={cartItems.length > 0}
              className="w-full mt-4"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default ShoppingCart
