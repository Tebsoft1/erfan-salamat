import { useState } from 'react'
import OTPForm from '../components/OTPForm'
import LoginForm from './components/LoginForm'

const Login = () => {
  const [isOTPComponent, setIsOTPComponent] = useState(false)
  const [mobileNumber, setMobileNumber] = useState<string>('')

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
        arrowBackAddress="/login"
        onTimeFinish={() => setIsOTPComponent(false)}
      />
    )
}
export default Login
