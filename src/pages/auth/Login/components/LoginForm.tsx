import FormInput from '@/components/FormInput'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FaMobileAlt } from 'react-icons/fa'
import Button from '@/ui/Button'
import { useNavigate } from 'react-router-dom'
import { useSendOTPMutation } from '@/services/Authenticate'
import type { ApiResponse } from '@/types/servicesTypes/globalSerivicesType'
import { RejectToast, SuccessToast } from '@/ui/Toasts'

type LoginFormPropsType = {
  setIsOTPComponent: (data: boolean) => void
  setMobileNumber: (data: string) => void
}
type LoginFormType = {
  phoneNumber: string
}

const schema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required('شماره موبایل را وارد کنید')
    .matches(/^09\d{9}$/, 'شماره موبایل نامعتبر است'),
})

const LoginForm = (props: LoginFormPropsType) => {
  const { setIsOTPComponent, setMobileNumber } = props
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const [SendOTP, { isLoading: SendOTPLoading }] = useSendOTPMutation()

  const phoneValue = watch('phoneNumber') || ''

  // چک کن که 11 رقم هست و خطا نداره
  const isPhoneNumberValid = phoneValue.length === 11 && !errors.phoneNumber

  const onSubmit = async (data: LoginFormType) => {
    const response: ApiResponse<boolean> = await SendOTP({
      phoneNumber: data.phoneNumber,
      typeId: 0,
    }).unwrap()
    if (response.isSuccess) {
      SuccessToast('رمز یک بار مصرف ارسال شد')
      setIsOTPComponent(true)
      setMobileNumber(data.phoneNumber)
    } else {
      RejectToast('لطفا ابتدا ثبت نام کنید')
    }
  }

  let navigate = useNavigate()
  return (
    <div className="flex flex-col items-center !w-full">
      <h2 className="text-xl font-bold text-center mb-2"> خوش آمدید!</h2>
      <p className="text-sm font-light mb-20">شماره موبایل خود را وارد کنید</p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <FormInput
          name="phoneNumber"
          placeholder="شماره موبایل خود را وارد کنید"
          type="tel"
          icon={<FaMobileAlt />}
          register={register}
          error={errors.phoneNumber}
          className="mb-10"
        />
        <div className="flex items-center gap-2">
          <Button
            type="submit"
            disabled={!isPhoneNumberValid || SendOTPLoading}
            loading={SendOTPLoading}
            text="ورود"
            isFormButton={true}
            canClick={isPhoneNumberValid}
            className="flex-1"
          />
          <Button
            onsubmit={() => navigate('/signup')}
            text="ثبت نام"
            type="button"
            disabled={SendOTPLoading}
            className="!text-primary-900 border border-primary-900 !bg-secondary-100"
          ></Button>
        </div>
      </form>
    </div>
  )
}
export default LoginForm
