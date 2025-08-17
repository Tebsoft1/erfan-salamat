import React from 'react'
import Ellipse37 from '@/assets/images/Ellipse37.png'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { logout } from '@/features/authSlice'

const Header: React.FC = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch()
  return (
    <div className="w-full p-1 flex justify-between items-center relative">
      <div className="flex items-center">
        <img
          src={Ellipse37}
          alt="photo"
          className="rounded-full w-8 h-8 bg-primary-300 flex items-center justify-center cursor-pointer"
          onClick={() => navigate('/Profile')}
        />
        <div className="flex flex-col items-end text-xs pr-2">
          <span>محمد پیله چی</span>
          <span>09107502907</span>
        </div>
      </div>

      <div className="flex items-center space-x-4 ml-4">
        <div className="flex flex-col items-center">
          <div className="border border-secondary-300 rounded-sm p-1 w-6 h-6 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.4637 17.5C15.4637 19.5924 13.64 21 11.8241 21C10.0083 21 8.53631 19.5924 8.53631 17.5M7.4668 17.5H16.5332"
                stroke="#39D8B0"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.946 14.072L17.7537 8.21314C17.1974 5.17461 15 3 11.8241 3C9 3 6.80256 5.17461 6.24635 8.21314L5.05401 14.072C4.73066 15.8384 5.90014 17.5 7.4668 17.5H16.5332C18.0999 17.5 19.2693 15.8384 18.946 14.072Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="17" cy="4" r="2" fill="#3EFFC7" />
            </svg>
          </div>
          <span className="text-xs mt-1">اعلان ها</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="border border-secondary-300 rounded-sm p-1 w-6 h-6 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 10L12 14M14 12H10"
                stroke="#39D8B0"
                strokeWidth="2"
                strokeLinecap="square"
              />
              <path
                d="M4 8H6M4 12H6M4 16H6M7 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-xs mt-1">پرونده شما</span>
        </div>

        <div
          className="flex flex-col items-center"
          onClick={() => dispatch(logout())}
        >
          <div className="flex items-center justify-center">
            <FontAwesomeIcon
              onClick={() => navigate('auth/login')}
              icon={faSignOutAlt}
              className="text-white w-4 h-4"
            />
          </div>
          <span className="text-xs mt-2">خروج</span>
        </div>
      </div>
    </div>
  )
}

export default Header
