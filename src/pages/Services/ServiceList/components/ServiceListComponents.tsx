import { QueryHandler } from '@/components/QueryHandler'
import { useGetServicesByGroupIdQuery } from '@/services/Customers'
import { useNavigate, useSearchParams } from 'react-router-dom'
import ServiceItem from '../../components/ServiceItem'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const ServiceListComponents = () => {
  const [searchParams] = useSearchParams()
  const groupId = searchParams.get('groupId')

  const {
    data: GetServicesByGroupId,
    isLoading: GetServicesByGroupIdLoading,
    isError: GetServicesByGroupIdError,
    refetch: GetServicesByGroupIdRefetch,
  } = useGetServicesByGroupIdQuery(groupId || '44')

  let navigate = useNavigate()
  return (
    <div>
      <Link
        to="/Services"
        className="flex items-center text-secondary-100 mt-2"
      >
        <FontAwesomeIcon
          icon={faArrowRight}
          className="h-6 w-6 text-secondary-100 ml-1"
        />
        <span className="-mt-1 text-secondary-100 text-sm">بازگشت</span>
      </Link>

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
