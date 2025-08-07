import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function GuestRoutes() {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Navigate to="/services" replace />
  }

  return <Outlet />
}
