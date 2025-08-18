import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from 'react-hook-form'
import Button from '@/ui/Button'
import DateInput from '@/components/DateInput'
import TimeInput from '@/components/TimeInput'
import { useNavigate, useSearchParams } from 'react-router-dom'
import moment from 'moment-jalaali'
import FormInput from '@/components/FormInput'
import { MdNumbers } from "react-icons/md"
import type { PurchageBasketType } from '@/types/purchageBasket'
import { SuccessToast } from '@/ui/Toasts'


export type AddServicesFormType = {
  date: Date
  time: Date
  requestCount: number
}

const schema = yup.object().shape({

  time: yup
    .date()
    .typeError('زمان معتبر نیست')
    .required('وارد کردن زمان الزامی است')
    .test('valid-time', 'زمان وارد شده معتبر نیست', (value) => {
      if (!value) return false
      const hours = value.getHours()
      const minutes = value.getMinutes()
      return hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59
    }),


  date: yup
    .date()
    .typeError('تاریخ معتبر نیست')
    .required('وارد کردن تاریخ الزامی است')
    .min(new Date('1900-01-01'), 'تاریخ نمی‌تواند قبل از سال 1900 باشد')
    .max(new Date(), 'تاریخ نمی‌تواند در آینده باشد')
    .test('valid-date', 'تاریخ وارد شده معتبر نیست', (value) => {
      if (!value) return false
      // بررسی اینکه تاریخ واقعی باشد
      return value instanceof Date && !isNaN(value.getTime())
    }),

  requestCount: yup
    .number()
    .typeError('تعداد باید عدد باشد')
    .required('وارد کردن تعداد الزامی است')
    .positive('تعداد باید مثبت باشد')
    .integer('تعداد باید عدد صحیح باشد')
    .min(1, 'حداقل تعداد 1 است')
    .max(1000, 'حداکثر تعداد 1000 است')
})


const Form1=()=>{
const [searchParams] = useSearchParams()

  const typeId = searchParams.get('typeId')
  const serviceId = searchParams.get('serviceId')

  let navigate=useNavigate()

  if(!typeId ||!serviceId){
    navigate('/services')
    return
  }

      const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors, isValid, isDirty, },
      } = useForm({
        resolver: yupResolver(schema),
        mode: 'all',
        defaultValues: { requestCount: 1 },
      })
      
      
        const hasError = !isValid || !isDirty
      
        const onSubmit = async (data: AddServicesFormType) => {
          const shamsiDate = moment(new Date(data.date)).locale('fa').format('YYYY/MM/DD')
          const time=moment(new Date(data.time)).locale('fa').format('HH:mm')
          const reviesedData:PurchageBasketType = {
            ...data,
            date: shamsiDate,
            time:time,
            id:Date.now(),
            typeId,
            serviceId,
            serviceName:'',
            servicePrice:1000,
            servicePackage:false
          }
if (localStorage.getItem('card')) {
  const parsedData: PurchageBasketType[] = JSON.parse(localStorage.getItem('card') as string);
  const updatedData = [...parsedData, reviesedData];
  localStorage.setItem('card', JSON.stringify(updatedData));
} else {
  const newData: PurchageBasketType[] = [reviesedData];
  localStorage.setItem('card', JSON.stringify(newData));
}

SuccessToast('به سبد خرید اضافه شد')
reset()
        }

    return(
    <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-4"
      >
        <DateInput
          name="date"
          placeholder="تاریخ درخواست"
          control={control}
          error={errors.date}
          iconClassname='text-secondary-100'
        />

        <TimeInput
          name="time"
          placeholder="زمان درخواست"
          control={control}
          error={errors.time}
          iconClassname='text-secondary-100'
        />

        <FormInput
          name="requestCount"
          placeholder="تعداد"
          type="number"
          icon={<MdNumbers className='text-secondary-100'/>}
          register={register}
          error={errors.requestCount}
        />

        <div className="flex items-center gap-2">
          <Button
            className={`flex-1 text-secondary-900 !bg-primary-300 `}
            isFormButton={true}
            canClick={!hasError}
            type="submit"
            text="افزودن به سبد خرید"
          />
        </div>
      </form>
      
)}
export default Form1