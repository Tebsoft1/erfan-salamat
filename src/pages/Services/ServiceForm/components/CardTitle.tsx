import type { ServiceItemType } from '@/types/servicesTypes/Customers'
import { convertToPersianDigitsWithSeparator } from '@/utils/numberUtils'
import HospitalIcon from '@/assets/images/HospitalIcon.png'


import logo43 from '@/assets/images/logo43.png'
import logo44 from '@/assets/images/logo44.png'
import logo47 from '@/assets/images/logo47.png'
import logo51 from '@/assets/images/logo511.png'
import logo53 from '@/assets/images/logo53.png'


const groupLogos: Record<number, string> = {
  43: logo43,
  44: logo44,
  47: logo47,
  51: logo51,
  53: logo53,
}

type CardTitlePropsType = {
  service: ServiceItemType
}

const CardTitle = (props: CardTitlePropsType) => {
  const { service } = props


  const imageSrc =
    service.imageFile || groupLogos[service.medicalServicesTypesId] || HospitalIcon

  return (
    <div className="flex justify-between items-center gap-4 bg-blue p-4 rounded-2xl text-[12px] text-secondary-100 mb-16">
      <div className="flex items-center gap-4">
        <div className="flex justify-center items-center">
          <img src={imageSrc} alt="Service Logo" className="w-[24px] h-[24px]" />
        </div>
        <p>{service.title}</p>
      </div>
      <p>{convertToPersianDigitsWithSeparator(service.servicePrice)} ریال</p>
    </div>
  )
}

export default CardTitle
