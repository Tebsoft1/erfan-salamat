import { Outlet } from 'react-router-dom'
import header from './assets/images/header.png'
import { ToastContainer } from 'react-toastify'
import { useEffect } from 'react'
import { checkAuthFromStorage } from './features/authSlice'
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuthFromStorage())
  }, [])

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
