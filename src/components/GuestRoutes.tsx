import { Navigate, Outlet } from 'react-router-dom'
import type { RootState } from '@/store'
import { useSelector } from 'react-redux'
import BeatLoaderComponent from '@/ui/BeatLoaderComponent'

export default function GuestRoutes() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  )

  if (isAuthenticated === true) {
    return <Navigate to="/services" replace />
  }

  return (
    <div
      className="flex flex-col items-center flex-1 w-full p-4 mt-10 rounded-tr-4xl rounded-tl-4xl text-primary-900 relative
     bg-gradient-to-b from-secondary-100 via-secondary-100 to-primary-700 [background:linear-gradient(to_bottom,theme(colors.secondary.100)_0%,theme(colors.secondary.100)_80%,theme(colors.primary.700)_100%)]"
    >
      {isAuthenticated === null ? <BeatLoaderComponent /> : <Outlet />}
    </div>
  )
}
