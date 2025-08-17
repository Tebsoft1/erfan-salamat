import { QueryHandler } from '@/components/QueryHandler'
import { useGetServicesByGroupIdQuery } from '@/services/Customers'
import { useNavigate, useSearchParams } from 'react-router-dom'
import ServiceItem from '../../components/ServiceItem'

const ServiceListComponents = () => {
  const [searchParams] = useSearchParams()
  const groupId = searchParams.get('groupId')

  const {
    data: GetServicesByGroupId,
    isLoading: GetServicesByGroupIdLoading,
    isError: GetServicesByGroupIdError,
  } = useGetServicesByGroupIdQuery(groupId || '44')

  let navigate = useNavigate()
  return (
    <div>
      <QueryHandler
        data={GetServicesByGroupId}
        isLoading={GetServicesByGroupIdLoading}
        isError={GetServicesByGroupIdError}
        render={(services) => (
          <ul>
            {services.map((service) => (
              <ServiceItem
                key={service.id}
                servicePrice={service.servicePrice}
                serviceTitle={service.title}
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
