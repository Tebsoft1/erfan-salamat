import Button from '@/ui/Button'
import { convertToPersianDigits } from '@/utils/numberUtils'
import { useState } from 'react'
import { CiStopwatch } from 'react-icons/ci'
import OtpInput from 'react-otp-input'

const OTP = () => {
  const [otp, setOtp] = useState<string>('')
  return (
    <div className="flex flex-col items-center !w-full">
      <h2 className="text-xl font-bold text-center mb-2">
        {convertToPersianDigits('09121472589')}
      </h2>
      <p className="text-sm font-light mb-20">
        کد تایید پیامک شده را وارد کنید
      </p>
      <div dir="ltr" className="mb-10">
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={5}
          inputType="number"
          shouldAutoFocus={true}
          renderInput={(props) => <input dir="ltr" {...props} />}
          containerStyle="gap-2 !w-full"
          inputStyle="!w-12 h-12 border border-primary-900 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 text-center text-lg font-medium"
        />
      </div>
      <div className="flex items-center gap-2 !w-full">
        <Button
          className={`flex-1 text-secondary-100 ${
            otp.length !== 5 ? 'bg-secondary-300 ' : 'bg-primary-700 '
          }`}
          type="submit"
          disabled={otp.length !== 5}
          text="تایید و ادامه"
        />
        <div className="flex justify-between items-center gap-2 border border-primary-900 text-primary-900 rounded-md px-3 py-3">
          <CiStopwatch className="text-xl text-primary-900 font-bold" />
          <p className="text-sm">{convertToPersianDigits('1:59')}</p>
        </div>
      </div>
    </div>
  )
}
export default OTP
