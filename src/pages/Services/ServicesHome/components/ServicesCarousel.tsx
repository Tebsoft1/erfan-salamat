import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useGetServicesIspopularQuery } from '@/services/Customers'
import type { ServiceItemType } from '@/types/servicesTypes/Customers'
import HospitalIcon from '@/assets/images/HospitalIcon.png'
import { QueryHandler } from '@/components/QueryHandler'

const ServicesCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const navigate = useNavigate()

  const {
    data: GetServicesIspopular,
    isLoading: GetServicesIspopularLoading,
    isError: GetServicesIspopularError,
  } = useGetServicesIspopularQuery()

  const services = GetServicesIspopular?.data || []

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }

  return (
    <div className="w-full max-w-4xl p-4 text-center">
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-xl mb-4">سرویس های عرفان سلامت</h2>
      </div>

      <QueryHandler
        data={GetServicesIspopular}
        isLoading={GetServicesIspopularLoading}
        isError={GetServicesIspopularError}
        render={() => (
          <div className="relative overflow-hidden w-full">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentSlide * (100 / services.length)
                }%)`,
              }}
            >
              {services.map((service) => (
                <Card key={service.id} service={service} navigate={navigate} />
              ))}
            </div>
          </div>
        )}
      />
    </div>
  )
}

export default ServicesCarousel

type CardPropsType = {
  service: ServiceItemType
  navigate: ReturnType<typeof useNavigate>
}

const Card: React.FC<CardPropsType> = ({ service, navigate }) => {
  return (
    <button
      className="flex-shrink-0 w-[calc(100%/6)] flex flex-col items-center p-2 cursor-pointer"
      onClick={() =>
        navigate(
          `/services/serviceForm?typeId=${service.medicalServicesTypesId}&serviceId=${service.id}`
        )
      }
    >
      <div className="border border-secondary-500/40 rounded-sm p-3 mb-2">
        <img src={HospitalIcon} alt={service.title} className="w-6 h-6" />
      </div>
      <span className="text-xs line-clamp-3">{service.title}</span>
    </button>
  )
}
