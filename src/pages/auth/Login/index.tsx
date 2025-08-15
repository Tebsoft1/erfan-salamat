import { useState } from 'react'
import OTPForm from '../components/OTPForm'
import LoginForm from './components/LoginForm'
import Map from '@/components/Map'

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true)
  const [mobileNumber, setMobileNumber] = useState<string>('')

  return <Map />
  if (isLoginForm)
    return (
      <LoginForm
        setIsLoginForm={setIsLoginForm}
        setMobileNumber={setMobileNumber}
      />
    )
  if (!isLoginForm)
    return <OTPForm mobileNumber={mobileNumber} arrowBackAddress="/login" />
}
export default Login
