import FormInput from '@/components/FormInput'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FaMobileAlt } from 'react-icons/fa'
import Button from '@/ui/Button'
import { useNavigate } from 'react-router-dom'
import RadioButton from '@/ui/RadioButton'
import { IoPersonOutline } from 'react-icons/io5'
import { HiOutlineIdentification } from 'react-icons/hi'
import { CiCalendarDate } from 'react-icons/ci'

const schema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required('شماره موبایل را وارد کنید')
    .matches(/^09\d{9}$/, 'شماره موبایل نامعتبر است'),
})

const MobileSignup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })




  const onSubmit = (data: any) => {
    console.log(data)
  }

  let navigate = useNavigate()

  return (
    <div className="flex flex-col items-center !w-full">
      <h2 className="text-xl font-bold text-center mb-2"> خوش آمدید!</h2>
      <p className="text-sm font-light mb-20">اطلاعات مورد نیاز را وارد نمایید</p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
        
        <FormInput
          name="phoneNumber"
          placeholder="نام"
          type="text"
          icon={<IoPersonOutline />}
          register={register}
          error={errors.phoneNumber}
        />
         <FormInput
          name="phoneNumber"
          placeholder="نام خانوادگی"
          type="text"
          icon={<IoPersonOutline />}
          register={register}
          error={errors.phoneNumber}
        />
         <FormInput
          name="phoneNumber"
          placeholder="کد ملی"
          type="number"
          icon={<HiOutlineIdentification />}
          register={register}
          error={errors.phoneNumber}
        />
         <FormInput
          name="phoneNumber"
          placeholder="تاریخ تولد"
          type="text"
          icon={<CiCalendarDate />}
          register={register}
          error={errors.phoneNumber}
        />
        <FormInput
          name="phoneNumber"
          placeholder="شماره موبایل"
          type="tel"
          icon={<FaMobileAlt />}
          register={register}
          error={errors.phoneNumber}
        />

<div className="flex items-center gap-4 mb-4">
    <RadioButton radioId='man' radioValue={1} radioName='gender' text='مرد' />
<RadioButton radioId='woman' radioValue={0} radioName='gender' text='زن' />
</div>

        <div className="flex items-center gap-2">
          <Button
            className={`flex-1 text-secondary-100 ${
              !true ? 'bg-secondary-300 ' : 'bg-primary-700 '
            }`}
            type="submit"
            disabled={!true}
            text="ورود"
          />
          
        </div>
      </form>
    </div>
  )
}
export default MobileSignup
