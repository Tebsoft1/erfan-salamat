import React from 'react'
import Calendarwaiting from '@/assets/images/Calendarwaiting.png'
import Arrowleft from '@/assets/images/Arrowleft.png'
import { useNavigate } from 'react-router-dom'
import { useGetServiceGroupQuery } from '@/services/Customers'
import { QueryHandler } from '@/components/QueryHandler'

const AppointmentSection: React.FC = () => {
  const {
    data: GetServiceGroup,
    isLoading: GetServiceGroupLoading,
    isError: GetServiceGroupError,
  } = useGetServiceGroupQuery()

  return (
    <div className="w-full">
      <QueryHandler
        data={GetServiceGroup}
        isLoading={GetServiceGroupLoading}
        isError={GetServiceGroupError}
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
      />
    </div>
  )
}

export default AppointmentSection

type CardPropsType = {
  address: string
  title: string
}
const Card = (props: CardPropsType) => {
  const { address, title } = props
  let navigate = useNavigate()
  return (
    <div className="bg-dunkel rounded-4xl flex flex-row items-stretch p-3 mt-4 min-h-20 hover:bg-blue">
      <div className="flex flex-row justify-between items-center flex-1 relative ">
        <div className="bg-transparent">
          <img src={Calendarwaiting} alt="+" className="w-10 h-10 mr-2" />
        </div>

        <button
          onClick={() => navigate(address)}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-secondary-100 text-l whitespace-nowrap text-center cursor-pointer"
        >
          {title}
        </button>

        <div className="bg-transparent">
          <img src={Arrowleft} alt="+" className="w-10 h-10" />
        </div>
      </div>
    </div>
  )
}
