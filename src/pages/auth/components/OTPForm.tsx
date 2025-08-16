import Button from '@/ui/Button'
import { convertToPersianDigits } from '@/utils/numberUtils'
import { useEffect, useState } from 'react'
import { CiStopwatch } from 'react-icons/ci'
import OtpInput from 'react-otp-input'
import useTimer from '@/hooks/useTimer'
import ArrowBack from '@/ui/ArrowBack'
import { useVerfiyOTPMutation } from '@/services/Authenticate'
import type { VerifyOTPDataResponseType } from '@/types/servicesTypes/Authenticate'
import { handleApiCall } from '@/utils/handleApiCall'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '@/features/authSlice'

type OTPFormPropsType = {
  mobileNumber: string
  onBack: () => void
  onTimeFinish: () => void
}

const OTPForm = (props: OTPFormPropsType) => {
  const { mobileNumber, onBack, onTimeFinish } = props
  const dispatch = useDispatch()

  const [otp, setOtp] = useState<string>('')

  useEffect(() => {
    if ('OTPCredential' in window) {
      const ac = new AbortController()
      setTimeout(() => ac.abort(), 120000)

      navigator.credentials
        .get({
          otp: { transport: ['sms'] },
          signal: ac.signal,
        } as any)
        .then((otp) => {
          if (otp && 'code' in otp) {
            setOtp(String((otp as { code?: string })?.code ?? ''))
          }
        })
        .catch((err) => {
          console.log('OTP detection failed:', err)
        })
    }
  }, [])

  const [verifyOTP, { isLoading: VerfiyOTPLoading }] = useVerfiyOTPMutation()
  let navigate = useNavigate()

  const formattedTime = useTimer({
    initialSeconds: 120,
    onTimeFinish: () => {
      onTimeFinish()
    },
  })

  const handleSubmit = async () => {
    await handleApiCall<VerifyOTPDataResponseType | null>(
      () =>
        verifyOTP({
          phoneNumber: mobileNumber,
          otp,
          typeId: 0,
        }).unwrap(),

      (data) => {
        localStorage.setItem('token', data?.token || '')
        localStorage.setItem('tokenExpiration', data?.expiration || '')
        dispatch(
          login({
            token: localStorage.getItem('token') || '',
            expiration: localStorage.getItem('tokenExpiration') || '',
          })
        )
        navigate('/services')
      },
      (response) => {
        console.log('Error:', response)
      }
    )
  }

  return (
    <div className="flex flex-col items-center !w-full">
      <h2 className="text-xl font-bold text-center mb-2">
        {convertToPersianDigits(mobileNumber)}
      </h2>
      <p className="text-sm font-light mb-20">
        کد تایید پیامک شده را وارد کنید
      </p>
      <ArrowBack onBack={onBack} className="top-4 left-4" />
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
          disabled={otp.length !== 5 || VerfiyOTPLoading}
          text="ورود"
          loading={VerfiyOTPLoading}
          isFormButton={true}
          canClick={otp.length === 5}
          className="flex-1"
          onClick={handleSubmit}
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
