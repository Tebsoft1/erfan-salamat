import { logout } from '@/features/authSlice'
import { store } from '@/store'

export const handleLogout = () => {
  store.dispatch(logout())
  window.location.href = '/auth/login'
}
