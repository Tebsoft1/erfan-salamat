import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from 'react-hook-form'
import Button from '@/ui/Button'
import DateInput from '@/components/DateInput'
import { useNavigate } from 'react-router-dom'
import moment from 'moment-jalaali'
import type { PurchageBasketType } from '@/types/purchageBasket'
import { SuccessToast } from '@/ui/Toasts'
import { useGetServicesDetailByIdQuery } from '@/services/Customers'
import { QueryHandler } from '@/components/QueryHandler'
import { convertToPersianDigitsWithSeparator } from '@/utils/numberUtils'
import HospitalIcon from '@/assets/images/HospitalIcon.png'
import ShiftOptions from '../../ServiceList/components/ShiftSection'
import type { ServiceItemType } from '@/types/servicesTypes/Customers'


export type AddServicesFormType = {
  date: Date
  time: string
}

const schema = yup.object().shape({

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

  time: yup
    .string()
    .required('لطفا شیفت را انتخاب کنید')
    .oneOf(['1', '2', '3'], 'شیفت انتخابی معتبر نیست')
})

type Form2PropsType={
  serviceId:string,
  typeId:string
}

const Form2=(props:Form2PropsType)=>{
    const {serviceId,typeId}=props

  let navigate=useNavigate()

  if(!typeId ||!serviceId){
    navigate('/services')
    return
  }

  const {data:GetServicesDetailById,isLoading:GetServicesDetailByIdLoading,isError:GetServicesDetailByIdError}=useGetServicesDetailByIdQuery({serviceId,typeId})

      const {
        handleSubmit,
        control,
        reset,
        formState: { errors, isValid, isDirty, },
      } = useForm({
        resolver: yupResolver(schema),
        mode: 'all',
        defaultValues: { time: '1' },
      })
      
      
        const hasError = !isValid || !isDirty
      
        const onSubmit = async (data: AddServicesFormType) => {
          const shamsiDate = moment(new Date(data.date)).locale('fa').format('YYYY/MM/DD')
          const reviesedData:PurchageBasketType = {
              ...data,
              date: shamsiDate,
              time: data.time,
              id: Date.now(),
              typeId,
              serviceId,
              serviceName: '',
              servicePrice: 1000,
              servicePackage: false,
              requestCount: 1
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
      <div>
        <QueryHandler
        data={GetServicesDetailById}
        isLoading={GetServicesDetailByIdLoading}
        isError={GetServicesDetailByIdError}
        render={(service) => (
        
            <div className='flex justify-between items-center gap-4 bg-primary-300 p-4 rounded-2xl text-primary-700 mb-16'>
              <div className='flex items-center gap-2'>
              <div className='flex justify-center items-center'><img src={service.imageFile||HospitalIcon} /></div>
              <p>{service.title}</p>
              </div>
              <p>{convertToPersianDigitsWithSeparator(service.servicePrice)}</p>
            </div>
         
        )}
      />
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

        <ShiftOptions
  name="time"
  control={control}
  service={GetServicesDetailById?.data as ServiceItemType}
  error={errors.time}
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
      </div>
      
)}
export default Form2