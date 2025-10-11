import React from 'react'
import Calendarwaiting from '@/assets/images/CalendarWaitNew.png'
import Emergencyphone from '@/assets/images/EmergencyCallNew.png'
import Arrowleft from '@/assets/images/ArrowleftNew.png'
import { useNavigate } from 'react-router-dom'
// import { useGetServiceGroupQuery } from '@/services/Customers'
// import { QueryHandler } from '@/components/QueryHandler'
//import { useGetServicesIspopularQuery } from '@/services/Customers'

const AppointmentSection: React.FC = () => {
  const navigate = useNavigate()

  // const {
  //   data: GetServicesIspopular,
  //   isLoading: GetServicesIspopularLoading,
  //   isError: GetServicesIspopularError,
  //   refetch: GetServicesIspopularRefetch,
  // } = useGetServicesIspopularQuery()

  //const services = GetServicesIspopular?.data || []

  return (
    <div className="flex flex-col w-full">
      <div className="bg-dunkel rounded-full flex flex-row h-[43px] mt-3 cursor-pointer">
        <div
          onClick={() => navigate(`serviceList?groupId=44`)}
          className="flex flex-row justify-between items-center flex-1 relative  "
        >
          <img
            src={Calendarwaiting}
            alt="+"
            className="w-[31px] h-[31px] mr-6"
          />
          <h2 className="text-[8px] mt-0 mb-0">نوبت دهی پزشک ، آزمایشگاه</h2>
          <img src={Arrowleft} alt="+" className="w-[24px] h-[24px] ml-6" />
        </div>
      </div>

      <div className="bg-dunkel rounded-full flex flex-row h-[43px] mt-1 cursor-pointer">
        <div
          onClick={() => navigate(`serviceList?groupId=44`)}
          className="flex flex-row justify-between items-center flex-1 relative "
        >
          <img
            src={Emergencyphone}
            alt="+"
            className="w-[31px] h-[31px] mr-6"
          />
          <h2 className="text-[8px] mt-0 mb-0">ویزیت تلفنی پزشک</h2>
          <img src={Arrowleft} alt="+" className="w-[24px] h-[24px] ml-6" />
        </div>
      </div>

      {/*<QueryHandler
        data={GetServiceGroup}
        isLoading={GetServiceGroupLoading}
        isError={GetServiceGroupError}
        onRefetch={GetServiceGroupRefetch}
        render={(groups) => (
          <ul>
            {groups.map((group) => (
              <Card
                key={group.id}
                address={`serviceList?groupId=${group.id}`}
                title={group.name}
              />
            ))}
          </ul>
        )}
      />*/}
    </div>
  )
}

export default AppointmentSection

//type CardPropsType = {
//  address: string
//  title: string
//}
//const Card = (props: CardPropsType) => {
//  const { address, title } = props
//  let navigate = useNavigate()
//  return (
//    <div onClick={() => navigate(address)} className="bg-dunkel rounded-4xl flex flex-row items-stretch p-3 mt-4 min-h-20 text-secondary-100 hover:bg-primary-500 cursor-pointer">
//      <div className="flex flex-row justify-between items-center flex-1 relative  ">
//        <div className="bg-transparent">
//          <img src={Calendarwaiting} alt="+" className="w-10 h-10 mr-2" />
//        </div>

//        <button
//          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-l whitespace-nowrap text-center cursor-pointer"
//        >
//          {title}
//        </button>

//        <div className="bg-transparent">
//          <img src={Arrowleft} alt="+" className="w-10 h-10" />
//        </div>
//      </div>
//    </div>
//  )
//}
