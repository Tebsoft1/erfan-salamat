import React from 'react'
import Form1 from './components/Form1'
import Form2 from './components/Form2'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { QueryHandler } from '@/components/QueryHandler'
import { useGetServicesDetailByIdQuery } from '@/services/Customers'

const ServiceForm: React.FC = () => {
  const [searchParams] = useSearchParams()

  const typeId = searchParams.get('typeId')
  const serviceId = searchParams.get('serviceId')

  let navigate = useNavigate()

  if (!typeId || !serviceId) {
    navigate('/services')
    return
  }

  const {
    data: GetServicesDetailById,
    isLoading: GetServicesDetailByIdLoading,
    isError: GetServicesDetailByIdError,
    refetch: GetServicesDetailByIdRefetch,
  } = useGetServicesDetailByIdQuery({ serviceId, typeId })

  return (
    <div className="">
      <QueryHandler
        data={GetServicesDetailById}
        isLoading={GetServicesDetailByIdLoading}
        isError={GetServicesDetailByIdError}
        onRefetch={GetServicesDetailByIdRefetch}
        render={(service) => (
          <>
            {!service.servicePackage ? (
              <Form1 typeId={typeId} serviceId={serviceId} service={service} />
            ) : (
              <Form2 typeId={typeId} serviceId={serviceId} service={service} />
            )}
          </>
        )}
      />
    </div>
  )
}

export default ServiceForm
