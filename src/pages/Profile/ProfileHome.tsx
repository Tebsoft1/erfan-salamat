import React from 'react'
import Back from '../../assets/images/Back.png'

import ProfileList from './components/ProfileList'
import { useGetUserDataQuery } from '../../services/Authenticate'
import ProfileHeader from './components/ProfileHeader'

import { useNavigate } from 'react-router-dom'
import BeatLoaderComponent from '@/ui/BeatLoaderComponent'
import { useDispatch } from 'react-redux'
import { logout } from '@/features/authSlice'

const ProfileHome: React.FC = () => {
  const { data, isLoading } = useGetUserDataQuery()
  const navigate = useNavigate()
  const dispatch=useDispatch()

  if (isLoading) {
    return <BeatLoaderComponent />
  }

  return (
    <div className="py-3 px-2 w-full flex flex-col items-center">
      <div onClick={() => navigate('/Services')} className="flex gap-[1px] items-center w-full cursor-pointer">
        <img
          src={Back}
          className="w-[28px] "
          alt="بازگشت"
        />
        <p>بازگشت</p>
      </div>
      <div className="w-full mt-4">
        <ProfileHeader data={data} />
      </div>
      <div className="w-full mt-10">
        <ProfileList />
      </div>
      <div onClick={() =>dispatch(logout())} className="border-1 border-primary-300 rounded-[30px] py-3 w-[95%] mt-12 text-center text-primary-300 cursor-pointer">
        خروج از حساب کاربری
      </div>
    </div>
  )
}

export default ProfileHome
