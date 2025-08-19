import type { ServiceItemType } from '@/types/servicesTypes/Customers'
import { convertToPersianDigitsWithSeparator } from '@/utils/numberUtils'
import HospitalIcon from '@/assets/images/HospitalIcon.png'

type CardTitlePropsType = {
  service: ServiceItemType
}
const CardTitle = (props: CardTitlePropsType) => {
  const { service } = props

  return (
    <div className="flex justify-between items-center gap-4 bg-primary-300 p-4 rounded-2xl text-primary-700 mb-16">
      <div className="flex items-center gap-4">
        <div className="flex justify-center items-center">
          <img src={service.imageFile || HospitalIcon} />
        </div>
        <p>{service.title}</p>
      </div>
      <p>{convertToPersianDigitsWithSeparator(service.servicePrice)} ریال</p>
    </div>
  )
}
export default CardTitle
