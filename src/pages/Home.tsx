import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useEffect } from 'react'
import homeLogo from '@/assets/images/homeLogo.png'
import homeSide from '@/assets/images/homeSide.png'
import homeSingleSide from '@/assets/images/homeSingleSide.png'

const Home = () => {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (isAuthenticated) {
  //       navigate('/services')
  //     } else {
  //       navigate('/login')
  //     }
  //   }, 2000)
  // }, [isAuthenticated, navigate])

  return <div className='flex-1 flex flex-col items-center relative'>  
    <div><img className='absolute -left-3 top-4' src={homeSingleSide}/> </div>
  <div><img  src={homeLogo} className='mt-44'/> </div>
  <div><img src={homeSide} className='absolute -left-3 bottom-4' /></div>
  </div>
}
export default Home
