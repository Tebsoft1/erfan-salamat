import HospitalIcon from '@/assets/images/HospitalIcon.png'
import Arrowleft from '@/assets/images/Arrowleft.png'
import { convertToPersianDigitsWithSeparator } from '@/utils/numberUtils'
import { useNavigate } from 'react-router-dom'
import type { ServiceItemType } from '@/types/servicesTypes/Customers'

type ServiceItemPropsType = {
  service: ServiceItemType
  onArrowBack: () => void
}
const ServiceItem = (props: ServiceItemPropsType) => {
  const { service, onArrowBack } = props

  let navigate = useNavigate()
  console.log(service)
  return (
    <div
      className="w-full"
      onClick={() =>
        navigate(
          `/services/serviceForm?groupId=${service.medicalServicesTypesId}&serviceId=${service.id}`
        )
      }
    >
      <div className="bg-dunkel rounded-4xl flex flex-row items-stretch p-3 mt-6 min-h-14 cursor-pointer hover:bg-primary-500 group">
        <div className="flex flex-row justify-between items-center flex-1 gap-4 relative">
          <div className="bg-transparent">
            <img src={HospitalIcon} alt="+" className="w-8 h-8 mr-2 -mt-1" />
          </div>

          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 ml-15 -translate-y-1/2 text-secondary-100 text-sm break-words line-clamp-2">
            {service.title}
          </span>

          <span className="-ml-40 bg-primary-300 text-dunkel px-1 py-1 rounded-full transition-colors group-hover:hidden">
            {convertToPersianDigitsWithSeparator(service.servicePrice)} ریال
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
