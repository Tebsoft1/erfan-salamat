import { Outlet } from 'react-router-dom'
import header from './assets/images/header.png'

function App() {
  return (
    <div className="max-w-md container mx-auto h-screen flex flex-col">
      <img src={header} className="w-full h-32 object-cover" alt="Header" />
      <div className="flex-1 overflow-auto -mt-12 p-4">
        <Outlet />
      </div>
    </div>
  )
}

export default App
