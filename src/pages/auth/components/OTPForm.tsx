import Button from '@/ui/Button'
import { convertToPersianDigits } from '@/utils/numberUtils'
import { useState } from 'react'
import { CiStopwatch } from 'react-icons/ci'
import OtpInput from 'react-otp-input'
import useTimer from '@/hooks/useTimer'
import ArrowBack from '@/ui/ArrowBack'

type OTPFormPropsType = {
  mobileNumber: string
  arrowBackAddress: string
}
const OTPForm = (props: OTPFormPropsType) => {
  const { mobileNumber, arrowBackAddress } = props
  const [otp, setOtp] = useState<string>('')
  const formattedTime = useTimer({
    initialSeconds: 120,
    onTimeFinish: () => {},
  })

  return (
    <div className="flex flex-col items-center !w-full">
      <h2 className="text-xl font-bold text-center mb-2">
        {convertToPersianDigits(mobileNumber)}
      </h2>
      <p className="text-sm font-light mb-20">
        کد تایید پیامک شده را وارد کنید
      </p>
      <ArrowBack address={arrowBackAddress} className="top-4 left-4" />
      <div dir="ltr" className="mb-10">
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={5}
          inputType="text"
          shouldAutoFocus={true}
          renderInput={(props) => <input dir="ltr" {...props} />}
          containerStyle="gap-8 !w-full"
          inputStyle="flex justify-center items-center !w-12 h-12 border border-primary-900 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 text-center text-lg font-medium"
        />
      </div>
      <div className="flex items-center gap-2 !w-full">
        <Button
          type="submit"
          disabled={otp.length !== 5}
          text="ورود"
          loading={false}
          isFormButton={true}
          canClick={otp.length === 5}
          className="flex-1"
        />
        <div className="flex justify-between items-center gap-2 border border-primary-900 text-primary-900 rounded-md px-3 py-3">
          <CiStopwatch className="text-xl text-primary-900 font-bold" />
          <p className="text-sm">{convertToPersianDigits(formattedTime)}</p>
        </div>
      </div>
    </div>
  )
}
export default OTPForm
