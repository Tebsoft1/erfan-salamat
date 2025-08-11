import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function GuestRoutes() {
  const { isAuthenticated } = useAuth()

  // if (isAuthenticated) {
  //   return <Navigate to="/services" replace />
  // }

  return (
    <div className="flex flex-col items-center flex-1 w-full p-4  bg-secondary-100 rounded-tr-4xl rounded-tl-4xl bg-gradient-to-b from-secondary-100 to-secondary-100 text-primary-900">
      <Outlet />
    </div>
  )
}
