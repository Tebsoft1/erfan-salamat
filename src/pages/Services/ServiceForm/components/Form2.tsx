import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Button from '@/ui/Button'
import DateInput from '@/components/DateInput'
import moment from 'moment-jalaali'
import type { PurchageBasketType } from '@/types/purchageBasket'
import { SuccessToast } from '@/ui/Toasts'
import ShiftOptions from '../../ServiceList/components/ShiftSection'
import type { ServiceItemType } from '@/types/servicesTypes/Customers'
import CardTitle from './CardTitle'
import { addItem } from '@/features/cartSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


export type AddServicesFormType = {
  date: Date
  time: string
}

const schema = yup.object().shape({
  date: yup
    .date()
    .typeError('تاریخ معتبر نیست')
    .required('وارد کردن تاریخ الزامی است')
    .min(new Date('2025-01-01'), 'تاریخ نمی‌تواند قبل از سال 2025 باشد')
    .test('valid-date', 'تاریخ وارد شده معتبر نیست', (value) => {
      if (!value) return false
      // بررسی اینکه تاریخ واقعی باشد
      return value instanceof Date && !isNaN(value.getTime())
    }),

  time: yup
    .string()
    .required('لطفا شیفت را انتخاب کنید')
    .oneOf(['1', '2', '3'], 'شیفت انتخابی معتبر نیست'),
})

type Form2PropsType = {
  serviceId: string
  groupId: string
  service: ServiceItemType
}

const Form2 = (props: Form2PropsType) => {
  const { serviceId, groupId, service } = props

  const dispatch = useDispatch()

  let navigate = useNavigate()

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: { time: '1' },
  })

  const hasError = !isValid || !isDirty

  const onSubmit = async (data: AddServicesFormType) => {
    const shamsiDate = moment(new Date(data.date))
      .locale('fa')
      .format('jYYYY/jMM/jDD')

    const servicePricee =
      data.time === '1'
        ? service.servicePrice
        : data.time === '2'
        ? service.servicePrice2
        : service.servicePrice3
    const reviesedData: PurchageBasketType = {
      date: shamsiDate,
      time: data.time,
      id: Date.now(),
      typeId: groupId,
      serviceId: serviceId,
      serviceName: service.title,
      servicePrice: servicePricee,
      servicePackage: service.servicePackage,
      requestCount: 1,
    }
    dispatch(addItem(reviesedData))
    SuccessToast('به سبد خرید اضافه شد')
    reset()
    navigate(-1)
  }

  return (
    
    <div>

      <Link
          to="/Services"
          className="flex items-center text-secondary-100 mt-2 mb-4">
            
          <FontAwesomeIcon
            icon={faArrowRight}
            className="h-6 w-6 text-secondary-100 ml-1"/>

            <span className="-mt-1 text-secondary-100 text-sm">بازگشت</span>
        </Link>

      <CardTitle service={service} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-6"
      >
        <DateInput
          name="date"
          placeholder="تاریخ درخواست"
          control={control}
          error={errors.date}
          iconClassname="text-secondary-100"
        />

        <ShiftOptions
          name="time"
          control={control}
          service={service}
          error={errors.time}
        />

        <Button
          className={`flex-1 !text-dunkel !bg-primary-300 mt-5`}
          isFormButton={true}
          canClick={!hasError}
          type="submit"
          text="افزودن به سبد خرید"
          disabled={hasError}
        />
      </form>
    </div>
  )
}
export default Form2
