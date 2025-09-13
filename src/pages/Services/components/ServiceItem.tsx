import Arrowleft from '@/assets/images/Arrowleft.png'
import { convertToPersianDigitsWithSeparator } from '@/utils/numberUtils'
import { useNavigate, useSearchParams } from 'react-router-dom'
import type { ServiceItemType } from '@/types/servicesTypes/Customers'


import logo44 from '@/assets/images/logo44.png'
import logo511 from '@/assets/images/logo511.png'
import logo43 from '@/assets/images/logo43.png'
import logo53 from '@/assets/images/logo53.png'
import logo47 from '@/assets/images/logo47.png'
import HospitalIcon from '@/assets/images/HospitalIcon.png'

type ServiceItemPropsType = {
  service: ServiceItemType
  onArrowBack: () => void
}


const serviceLogos: Record<number, string> = {
  44: logo44,
  51: logo511,
  43: logo43,
  53: logo53,
  47: logo47,
}

const ServiceItem = (props: ServiceItemPropsType) => {
  const { service, onArrowBack } = props
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  

  const groupId = parseInt(searchParams.get('groupId') || `${service.medicalServicesTypesId}`)


  const serviceLogo = serviceLogos[service.id] || serviceLogos[groupId] || HospitalIcon

  return (
    <div
      className="w-full"
      onClick={() =>
        navigate(
          `/services/serviceForm?groupId=${service.medicalServicesTypesId}&serviceId=${service.id}`
        )
      }
    >
      <div className="bg-dunkel rounded-4xl flex flex-row items-stretch p-3 mt-5 min-h-12 cursor-pointer hover:bg-blue group">
        <div className="flex flex-row justify-between items-center flex-1 gap-4 relative">
          <div className="bg-transparent">
            <img src={serviceLogo} alt="Service Logo" className="w-[24px] h-[24px] mr-2 -mt-1" />
          </div>

          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 ml-15 -translate-y-1/2 text-secondary-100 text-[10px] w-[120px] !break-words truncate">
            {service.title}
          </span>

          <span className="-ml-40 bg-primary-300 text-dunkel text-[12px] px-1 py-[1px] rounded-full transition-colors">
            {convertToPersianDigitsWithSeparator(service.servicePrice)} ریال
          </span>

          <div className="bg-transparent" onClick={onArrowBack}>
            <img src={Arrowleft} alt="back" className="w-[24px] h-[24px]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceItem
