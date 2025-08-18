import React from 'react'
import Form1 from './components/Form1'
import Form2 from './components/Form2'
import { useNavigate, useSearchParams } from 'react-router-dom'

const ServiceForm: React.FC = () => {

  const [searchParams] = useSearchParams()

  const typeId = searchParams.get('typeId')
  const serviceId = searchParams.get('serviceId')

  let navigate=useNavigate()

  if(!typeId ||!serviceId){
    navigate('/services')
    return
  }
  
  return (
    <div className="">
      <Form1  typeId={typeId} serviceId={serviceId} />
      <Form2   typeId={typeId} serviceId={serviceId} />
      
      
    </div>
  )
}

export default ServiceForm
