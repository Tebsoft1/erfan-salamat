import HospitalIcon from '@/assets/images/HospitalIcon.png'
import Arrowleft from '@/assets/images/Arrowleft.png'
import { convertToPersianDigitsWithSeparator } from '@/utils/numberUtils'


type ServiceItemPropsType = {
  serviceTitle: string
  servicePrice: number
  onArrowBack: () => void
}
const ServiceItem = (props: ServiceItemPropsType) => {
  const { serviceTitle, servicePrice, onArrowBack } = props

  return (
    <div className="w-full">
      <div className="bg-dunkel rounded-4xl flex flex-row items-stretch p-3 mt-6 min-h-14 cursor-pointer hover:bg-primary-500 group">
        <div className="flex flex-row justify-between items-center flex-1 gap-4 relative">
          <div className="bg-transparent">
            <img src={HospitalIcon} alt="+" className="w-8 h-8 mr-2 -mt-1" />
          </div>

          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 ml-15 -translate-y-1/2 text-secondary-100 text-sm break-words line-clamp-2">
            {serviceTitle}
          </span>

          <span className="-ml-40 bg-primary-300 text-dunkel px-1 py-1 rounded-full transition-colors group-hover:hidden">
            {convertToPersianDigitsWithSeparator(servicePrice)} ریال
          </span>

          <div className="bg-transparent" onClick={onArrowBack}>
            <img src={Arrowleft} alt="+" className="w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ServiceItem
