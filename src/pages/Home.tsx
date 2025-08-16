import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import homeLogo from '@/assets/images/homeLogo.png'
import homeSide from '@/assets/images/homeSide.png'
import homeSingleSide from '@/assets/images/homeSingleSide.png'
import { FadeLoader } from 'react-spinners'
import { useSelector } from 'react-redux'
import type { RootState } from '@/store'

const Home = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  )
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isAuthenticated===true) {
        navigate('/services')
      } else if (isAuthenticated===false) {
        navigate('/auth/login')
      }
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex-1 flex flex-col items-center relative">
      <div>
        <img className="absolute -left-3 top-4" src={homeSingleSide} />{' '}
      </div>
      {isAuthenticated===null &&
      <div className="flex flex-col justify-center items-center gap-1 z-20">
        <img src={homeLogo} className="mt-44" />
        <FadeLoader color="white" />
      </div>
      }
      <div>
        <img src={homeSide} className="absolute -left-3 bottom-4" />
      </div>
    </div>
  )
}
export default Home
