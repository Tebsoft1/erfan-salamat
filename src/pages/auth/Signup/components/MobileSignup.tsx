import FormInput from '@/components/FormInput'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FaMobileAlt } from 'react-icons/fa'
import Button from '@/ui/Button'
import { useNavigate } from 'react-router-dom'

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
      <p className="text-sm font-light mb-20">شماره موبایل خود را وارد کنید</p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
        
        <FormInput
          name="phoneNumber"
          placeholder="نام"
          type="text"
          icon={<FaMobileAlt />}
          register={register}
          error={errors.phoneNumber}
          className="mb-10"
        />
         <FormInput
          name="phoneNumber"
          placeholder="نام خانوادگی"
          type="text"
          icon={<FaMobileAlt />}
          register={register}
          error={errors.phoneNumber}
          className="mb-10"
        />
         <FormInput
          name="phoneNumber"
          placeholder="کد ملی"
          type="number"
          icon={<FaMobileAlt />}
          register={register}
          error={errors.phoneNumber}
          className="mb-10"
        />
         <FormInput
          name="phoneNumber"
          placeholder="تاریخ تولد"
          type="text"
          icon={<FaMobileAlt />}
          register={register}
          error={errors.phoneNumber}
          className="mb-10"
        />
        <FormInput
          name="phoneNumber"
          placeholder="شماره موبایل"
          type="tel"
          icon={<FaMobileAlt />}
          register={register}
          error={errors.phoneNumber}
          className="mb-10"
        />
        <FormInput
          name="phoneNumber"
          placeholder="شماره موبایل"
          type="tel"
          icon={<FaMobileAlt />}
          register={register}
          error={errors.phoneNumber}
          className="mb-10"
        />
<div className="flex items-center gap-4 mb-4">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>


    <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
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
