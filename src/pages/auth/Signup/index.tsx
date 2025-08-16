import { useState } from 'react'
import SingupForm from './components/SingupForm'
import OTPForm from '../components/OTPForm'

const Signup = () => {
  const [isOTPComponent, setIsOTPComponent] = useState(false)
  const [mobileNumber, setMobileNumber] = useState<string>('')
  if (!isOTPComponent)
    return (
      <SingupForm
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
export default Signup
