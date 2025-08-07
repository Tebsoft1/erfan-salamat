import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useEffect } from 'react'

const Home = () => {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      if (isAuthenticated) {
        navigate('/services')
      } else {
        navigate('/login')
      }
    }, 2000)
  }, [isAuthenticated, navigate])
  return <p>Home</p>
}
export default Home
