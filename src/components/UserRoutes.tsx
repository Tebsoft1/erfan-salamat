import type { RootState } from '@/store'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function UserRoutes() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  )
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return (
    <div className="px-4 w-full">
      <Outlet />
    </div>
  )
}
