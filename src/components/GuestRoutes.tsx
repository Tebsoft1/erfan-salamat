import { Navigate, Outlet } from 'react-router-dom'
import type { RootState } from '@/store'
import { useSelector } from 'react-redux'
import { BeatLoader } from 'react-spinners'

export default function GuestRoutes() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  )

  if (isAuthenticated===true) {
    return <Navigate to="/services" replace />
  } 

  return (
    <div className="flex flex-col items-center flex-1 w-full p-4 mt-10  bg-secondary-100 rounded-tr-4xl rounded-tl-4xl bg-gradient-to-b from-secondary-100 to-secondary-100 text-primary-900 relative">
      {isAuthenticated===null ?<BeatLoader />:
      <Outlet />
      }
    </div>
  )
}
