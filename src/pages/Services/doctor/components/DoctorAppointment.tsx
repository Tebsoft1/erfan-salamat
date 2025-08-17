import { useGetServicesByGroupIdQuery } from '@/services/Customers'
import ServiceItem from '../../components/ServiceItem'
import { QueryHandler } from '@/components/QueryHandler'
import { useNavigate } from 'react-router-dom'

const DoctorAppoinment: React.FC = () => {
  const {
    data: GetServicesByGroupId,
    isLoading: GetServicesByGroupIdLoading,
    isError: GetServicesByGroupIdError,
  } = useGetServicesByGroupIdQuery('44')

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

export default DoctorAppoinment
