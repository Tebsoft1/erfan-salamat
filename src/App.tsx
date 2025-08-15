import { Outlet, useNavigate } from 'react-router-dom'
import header from './assets/images/header.png'
import { ToastContainer } from 'react-toastify'
import { useEffect } from 'react'
import { checkAuthFromStorage } from './features/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from './store'

function App() {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  )

  let navigate = useNavigate()

  useEffect(() => {
    dispatch(checkAuthFromStorage())
  }, [])

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }
  }, [isAuthenticated, navigate])

  return (
    <div className="max-w-md container mx-auto h-screen flex flex-col">
      <img src={header} className="w-full h-fit object-cover" alt="Header" />
      <div className="flex flex-1 overflow-auto mt-[-50px] ">
        <Outlet />
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
