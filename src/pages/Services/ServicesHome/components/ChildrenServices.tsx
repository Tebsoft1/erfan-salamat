import React from 'react'
import Vial from '@/assets/images/Vial.png'
import Emergencyphone from '@/assets/images/Emergencyphone.png'
import DNA from '@/assets/images/DNA.png'
import ChildImg from '@/assets/images/ChildImg.png'
import { useNavigate } from 'react-router-dom'
// import { useGetServiceGroupQuery } from '@/services/Customers'
// import { QueryHandler } from '@/components/QueryHandler'
//import { useGetServicesIspopularQuery } from '@/services/Customers'

const ChildrenServices: React.FC = () => {
  const navigate = useNavigate()

  // const {
  //       data: GetServicesIspopular,
  //       isLoading: GetServicesIspopularLoading,
  //       isError: GetServicesIspopularError,
  //       refetch: GetServicesIspopularRefetch,
  //     } = useGetServicesIspopularQuery()

  //     const services = GetServicesIspopular?.data || []

  return (
    <div className="relative w-full bg-dunkel rounded-4xl flex flex-row items-stretch p-3 h-[127px] mt-10 mb-5">
      <span className="absolute top-4 right-6 text-secondary-100 text-[8px]">
        خدمات ویژه کودکان
      </span>

      <div className="flex flex-row justify-center items-center flex-1 gap-4 ml-2">
        <div className="flex flex-col w-[58.59px] h-[58.59px] cursor-pointer transition-transform duration-200 ease-out hover:scale-105">
          <div
            onClick={() => navigate(`serviceForm?groupId=47&serviceId=110`)}
            className="border-[0.3px] border-secondary-500/40 rounded-xl p-4 flex items-center justify-center"
          >
            <img src={Vial} alt="نمونه گیری" className="w-[31px] h-[31px]" />
          </div>

          <span className="text-secondary-100 text-[10px] mt-2 text-center">
            نمونه گیری
          </span>
        </div>

        <div className="flex flex-col w-[58.59px] h-[58.59px] cursor-pointer transition-transform duration-200 ease-out hover:scale-105">
          <div
            onClick={() => navigate(`serviceList?groupId=52`)}
            className="border-[0.3px] border-secondary-500/40 rounded-xl p-4 flex items-center justify-center"
          >
            <img src={DNA} alt="آزمایشگاه کودک" className="w-[31px] h-[31px]" />
          </div>

          <span className="text-secondary-100 text-[10px] mt-2 -mr-1 text-center whitespace-nowrap">
            آزمایشگاه کودک
          </span>
        </div>

        <div className="flex flex-col w-[58.59px] h-[58.59px] cursor-pointer transition-transform duration-200 ease-out hover:scale-105">
          <div
            onClick={() => navigate('/UnderUpdatePage')}
            className="border-[0.3px] border-secondary-500/40 rounded-xl p-4 flex items-center justify-center"
          >
            <img
              src={Emergencyphone}
              alt="تماس فوری"
              className="w-[31px] h-[31px]"
            />
          </div>

          <span className="text-secondary-100 text-[10px] mt-2 text-center">
            تماس فوری
          </span>
        </div>
      </div>

      <img src={ChildImg} alt="+" className="w-[113px] h-[148px] -ml-3 -mt-9" />
    </div>
  )
}

export default ChildrenServices
