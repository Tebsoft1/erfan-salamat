import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { useGetServicesIspopularQuery } from '@/services/Customers'
// import type { ServiceItemType } from '@/types/servicesTypes/Customers'
import HospitalIcon from '@/assets/images/HospitalIcon.png'
import Serum from '@/assets/images/Serum.png'
import Nemone from '@/assets/images/Nemone.png'
import KomakBehyar from '@/assets/images/KomakBehyar.png'
import Bones1 from '@/assets/images/Bones1.png'
import DoubleLeft from '@/assets/images/DoubleLeft.png'
import DoubleRight from '@/assets/images/DoubleRight.png'
// import { useGetServiceGroupQuery } from '@/services/Customers'
// import { QueryHandler } from '@/components/QueryHandler'

const ServicesCarousel: React.FC = () => {
  const navigate = useNavigate()

  // const {
  //   data: GetServicesIspopular,
  //   isLoading: GetServicesIspopularLoading,
  //   isError: GetServicesIspopularError,
  //   refetch: GetServicesIspopularRefetch,
  // } = useGetServicesIspopularQuery()

  // const services = GetServicesIspopular?.data || []

  return (
    <div className="w-full max-w-4xl p-4 text-center">
      <div className="flex flex-col items-center mb-6">
        <img
          src={HospitalIcon}
          alt="+"
          className="w-[18px] h-[18px] -mt-1 -mr-2"
        />
        <h2 className="text-[8px] mt-0 mb-0">سرویس های عرفان سلامت</h2>
      </div>

      <div className="flex flex-row justify-center items-center gap-2">
        <img
          src={DoubleRight}
          alt="Right"
          className="w-[15px] h-[15px] cursor-pointer -mt-3 ml-1"
          onClick={() => console.log('Prev clicked')}
        />

        <div
          onClick={() => navigate(`serviceList?groupId=53`)}
          className="flex flex-col items-center cursor-pointer"
        >
          <div className="bg-transparent border-[0.3px] border-secondary-500/40 rounded-lg p-4 flex items-center justify-center  w-[58.59px] h-[58.59px]  transition-transform duration-200 ease-out hover:scale-105">
            <img
              src={Bones1}
              alt="+"
              className=" w-[31px] h-[31px]  rounded-sm"
            />
          </div>
          <span className="text-secondary-100 text-[10px] mt-2">رادیولوژی</span>
        </div>

        <div
          // onClick={() => navigate(`pharmacyForm`)}
          onClick={() => navigate(`serviceForm?groupId=47&serviceId=101`)}
          className="flex flex-col items-center cursor-pointer"
        >
          <div className="bg-transparent border-[0.3px] border-secondary-500/40 rounded-lg p-4 flex items-center justify-center w-[58.59px] h-[58.59px] transition-transform duration-200 ease-out hover:scale-105">
            <img
              src={Serum}
              alt="+"
              className=" w-[31px] h-[31px]  rounded-sm"
            />
          </div>
          <span className="text-secondary-100 text-[10px] mt-2">سرم تراپی</span>
        </div>

        <div
          //onClick={() => navigate(`serviceList?groupId=51`)}
          onClick={() => navigate(`serviceForm?groupId=47&serviceId=99`)}
          className="flex flex-col items-center cursor-pointer"
        >
          <div className="bg-transparent border-[0.3px] border-secondary-500/40 rounded-lg p-4 flex items-center justify-center  w-[58.59px] h-[58.59px]  transition-transform duration-200 ease-out hover:scale-105">
            <img
              src={Nemone}
              alt="+"
              className=" w-[31px] h-[31px]  rounded-sm"
            />
          </div>
          <span className="text-secondary-100 text-[10px] mt-2">
            نمونه گیری
          </span>
        </div>

        <div
          //onClick={() => navigate(`serviceList?groupId=51`)}
          onClick={() => navigate(`serviceForm?groupId=43&serviceId=764`)}
          className="flex flex-col items-center cursor-pointer"
        >
          <div className="bg-transparent border-[0.3px] border-secondary-500/40 rounded-lg p-4 flex items-center justify-center  w-[58.59px] h-[58.59px]  transition-transform duration-200 ease-out hover:scale-105">
            <img
              src={KomakBehyar}
              alt="+"
              className=" w-[31px] h-[31px]  rounded-sm"
            />
          </div>
          <span className="text-secondary-100 text-[10px] mt-2">
            کمک بهیار منزل
          </span>
        </div>

        <img
          src={DoubleLeft}
          alt="Left"
          className="w-[15px] h-[15px] cursor-pointer -mt-4 mr-1"
          onClick={() => console.log('Prev clicked')}
        />
      </div>

      {/*<div className="flex flex-row justify-center items-center gap-2 mr-6">
              <div 
                className="bg-transparent border-1 border-secondary-500/40 rounded-xl p-4 flex flex-col items-center w-18 cursor-pointer transition-transform duration-200 ease-out
               hover:scale-105"
                onClick={() => navigate(`serviceList?groupId=52`)}
              >
                <img src={Bones1} alt="+" className="w-9 h-9 rounded-sm p-2" />
                <span className="text-secondary-100 text-xs">رادیولوژی</span>
              </div>
      
              <div
                className="bg-transparent border-1 border-secondary-500/40 rounded-xl p-4 flex flex-col items-center w-18 cursor-pointer transition-transform duration-200 ease-out
               hover:scale-105"
                onClick={() => navigate(`pharmacyForm`)}
              >
                <img src={Serum} alt="+" className="w-9 h-9 rounded-sm p-2" />
                <span className="text-secondary-100 text-xs">سرم تراپی</span>
              </div>
      
              <div
                className="bg-transparent border-1 border-secondary-500/40 rounded-xl p-4 flex flex-col items-center w-18 cursor-pointer transition-transform duration-200 ease-out
               hover:scale-105"
                onClick={() => navigate(`serviceList?groupId=51`)}
              >
                <img src={Nemone} alt="+" className="w-9 h-9 rounded-sm p-2" />
                <span className="text-secondary-100 text-xs">نمونه گیری</span>
              </div>

              <div
                className="bg-transparent border-1 border-secondary-500/40 rounded-xl p-4 flex flex-col items-center w-18 cursor-pointer transition-transform duration-200 ease-out
               hover:scale-105"
                onClick={() => navigate(`serviceList?groupId=51`)}
              >
                <img src={KomakBehyar} alt="+" className="w-9 h-9 rounded-sm p-2" />
                <span className="text-secondary-100 text-xs">کمک بهیار منزل</span>
              </div>

            </div>

      {/*<QueryHandler
        data={GetServicesIspopular}
        isLoading={GetServicesIspopularLoading}
        isError={GetServicesIspopularError}
        onRefetch={GetServicesIspopularRefetch}
        render={() => (
          <div className="flex flex-nowrap overflow-auto">
            {services.map((service) => (
              <Card key={service.id} service={service} navigate={navigate} />
            ))}
          </div>
        )}
      />*/}
    </div>
  )
}

export default ServicesCarousel

{
  /*type CardPropsType = {
  service: ServiceItemType
  navigate: ReturnType<typeof useNavigate>
}

const Card: React.FC<CardPropsType> = ({ service, navigate }) => {
  return (
    <button
      className="flex-shrink-0 w-[calc(100%/6)] flex flex-col items-center p-2 cursor-pointer"
      onClick={() =>
        navigate(
          `/services/serviceForm?groupId=${service.medicalServicesTypesId}&serviceId=${service.id}`
        )
      }
    >
      <div className="border border-secondary-500/40 rounded-sm p-3 mb-2">
        <img src={HospitalIcon} alt={service.title} className="w-6 h-6" />
      </div>
      <span className="text-xs line-clamp-3">{service.title}</span>
    </button>
  )
}*/
}
