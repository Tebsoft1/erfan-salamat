import type { RootState } from '@/store'
import BeatLoaderComponent from '@/ui/BeatLoaderComponent'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function UserRoutes() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  )
  
  if (isAuthenticated===false) {
    return <Navigate to="/auth/login" replace />
  }

  return (
    <div className="px-4 w-full">
     { isAuthenticated===null ?<BeatLoaderComponent/>: <Outlet /> }
    </div>
  )
}
