import { Outlet } from 'react-router-dom'
import header from './assets/images/header.png'
import { ToastContainer } from 'react-toastify'

function App() {
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
