import { useState } from 'react'
import OTPForm from '../components/OTPForm'
import LoginForm from './components/LoginForm'
import Map from '@/components/Map'


const Login = () => {
  const [isOTPComponent, setIsOTPComponent] = useState(false)
  const [mobileNumber, setMobileNumber] = useState<string>('')


return <Map />
  if (!isOTPComponent)
    return (
      <LoginForm
        setIsOTPComponent={setIsOTPComponent}
        setMobileNumber={setMobileNumber}
      />
    )
  if (isOTPComponent)
    return (
      <OTPForm
        mobileNumber={mobileNumber}
        onBack={() => setIsOTPComponent(false)}
        onTimeFinish={() => setIsOTPComponent(false)}
      />
    )
}
export default Login
