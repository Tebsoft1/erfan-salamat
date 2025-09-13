import { QueryHandler } from '@/components/QueryHandler'
import { useGetServicesByGroupIdQuery } from '@/services/Customers'
import { useNavigate, useSearchParams } from 'react-router-dom'
import ServiceItem from '../../components/ServiceItem'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


import logo44 from '../../../../assets/images/logo44.png'
import logo51 from '../../../../assets/images/logo51.png'
import logo52 from '../../../../assets/images/logo52.png'
import logo43 from '../../../../assets/images/logo43.png'
import logo47 from '../../../../assets/images/logo47.png'
import logo53 from '../../../../assets/images/logo53.png'
import defaultLogo from '../../../../assets/images/logo44.png'


const groupLogos: Record<string, string> = {
  '44': logo44,
  '51': logo51,
  '52': logo52,
  '43': logo43,
  '47': logo47,
  '53': logo53,
}


const groupTexts: Record<string, string> = {
  '44': 'خدمات درخواست پزشکی',
  '51': 'فیزیوتراپی',
  '52': 'آزمایشگاه',
  '43': 'پرستار و کمک پرستار',
  '47': 'سرم تراپی - نمونه گیری',
  '53': 'رادیولوژی',
}

const ServiceListComponents = () => {
  const [searchParams] = useSearchParams()
  const groupId = searchParams.get('groupId') || '44'

  const {
    data: GetServicesByGroupId,
    isLoading: GetServicesByGroupIdLoading,
    isError: GetServicesByGroupIdError,
    refetch: GetServicesByGroupIdRefetch,
  } = useGetServicesByGroupIdQuery(groupId)

  const navigate = useNavigate()

  const logoSrc = groupLogos[groupId] || defaultLogo
  const groupText = groupTexts[groupId] || ''

  return (
    <div className="px-4 py-4">

      <div className="relative flex items-center justify-center mb-6">

        <div className="absolute right-0 -mt-6">
          <Link
            to="/Services"
            className="flex items-center text-secondary-100"
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              className="h-1 w-1 text-secondary-100 ml-1 mb-1"
            />
            <span className="-mt-1 text-secondary-100 text-[10px]">بازگشت</span>
          </Link>
        </div>


        <div className="flex flex-col items-center">
          <img src={logoSrc} alt="Group Logo" className="h-[63px] w-[63px]" />
          <span className="text-secondary-100 text-[14px]">{groupText}</span>
        </div>
      </div>


      <QueryHandler
        data={GetServicesByGroupId}
        isLoading={GetServicesByGroupIdLoading}
        isError={GetServicesByGroupIdError}
        onRefetch={GetServicesByGroupIdRefetch}
        render={(services) => (
          <ul>
            {services.map((service) => (
              <ServiceItem
                key={service.id}
                service={service}
                onArrowBack={() => navigate('/services')}
              />
            ))}
          </ul>
        )}
      />
    </div>
  )
}

export default ServiceListComponents
