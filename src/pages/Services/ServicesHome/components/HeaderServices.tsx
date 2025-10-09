import React from 'react'
import userLogo from '@/assets/images/userLogo.png'
import { useNavigate } from 'react-router-dom'
import MedicalNoteIcon from '@/assets/images/MedicalNoteIcon.png';
import NotificationIcon from '@/assets/images/NotificationIcon.png';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
// import { useDispatch } from 'react-redux'
// import { logout } from '@/features/authSlice'

const Header: React.FC = () => {
  const navigate = useNavigate()
  //const dispatch = useDispatch()

  return (
    <div className="w-full p-1 flex justify-between items-center relative">
      <div className="flex items-center gap-1">
        <img
          src={userLogo}
          alt="photo"
          className="rounded-full w-[44px] h-[44px] border-1 border-primary-300 flex items-center justify-center cursor-pointer"
          onClick={() => navigate('/Profile')}
        />
        <div className="flex flex-col gap-1 text-[10px] pr-2">
          <span>{localStorage.getItem('fullName')}</span>
          <span className='text-center'>{localStorage.getItem('mobile')}</span>
        </div>
      </div>

      <div className="flex items-center space-x-4 ml-4">
        <div
          onClick={() => navigate('/UnderUpdatePage')}
          className="flex flex-col items-center"
        >
          <div className="border-[0.5px] border-secondary-300/60 rounded-sm w-[33px] h-[33px] flex items-center justify-center cursor-pointer">
            <img className='w-[24px] h-[24px]' src={NotificationIcon} alt="NotifIcon" />
          </div>
          <span className="text-[10px] mt-1 cursor-pointer">اعلان ها</span>
        </div>

        <div
          onClick={() => navigate('/UnderUpdatePage')}
          className="flex flex-col items-center"
        >
          <div className="border-[0.5px] border-secondary-300/60 rounded-sm w-[33px] h-[33px] flex items-center justify-center cursor-pointer">
            <img className='w-[24px] h-[24px]' src={MedicalNoteIcon} alt="MedicalIcon" />
          </div>
          <span className="text-[10px] mt-1 cursor-pointer">پرونده شما</span>
        </div>

        {/*<div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => dispatch(logout())}
        >
          <div className="flex items-center justify-center w-[33px] h-[33px] border-[0.3px] border-secondary-300 rounded-sm p-[9px]">
            <FontAwesomeIcon icon={faSignOutAlt} className="text-white w-4 h-4" />
          </div>
          <span className="text-[10px] mt-1 cursor-pointer">خروج</span>
        </div>*/}
      </div>
    </div>
  )
}

export default Header
