import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Button from '@/ui/Button'
import DateInput from '@/components/DateInput'
import TimeInput from '@/components/TimeInput'
import moment from 'moment-jalaali'
import FormInput from '@/components/FormInput'
import { MdNumbers } from 'react-icons/md'
import type { PurchageBasketType } from '@/types/purchageBasket'
import { SuccessToast } from '@/ui/Toasts'
import type { ServiceItemType } from '@/types/servicesTypes/Customers'
import CardTitle from './CardTitle'
import { useDispatch } from 'react-redux'
import { addItem } from '@/features/cartSlice'
import { useNavigate, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


import logo44 from '../../../../assets/images/logo44.png'
import logo51 from '../../../../assets/images/logo51.png'
import logo52 from '../../../../assets/images/logo52.png'
import logo43 from '../../../../assets/images/logo43.png'
import logo47 from '../../../../assets/images/logo47.png'
import logo53 from '../../../../assets/images/logo53.png'
import defaultLogo from '../../../../assets/images/logo44.png'


const groupLogos: Record<string, string> = {
  '44': logo44,
  '51': logo51,
  '52': logo52,
  '43': logo43,
  '47': logo47,
  '53': logo53,
}
const groupTexts: Record<string, string> = {
  '44': 'خدمات درخواست پزشکی',
  '51': 'فیزیوتراپی',
  '52': 'آزمایشگاه',
  '43': 'پرستار و کمک پرستار',
  '47': 'سرم تراپی - نمونه گیری',
  '53': 'رادیولوژی',
}

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
    .min(new Date('2025-01-01'), 'تاریخ نمی‌تواند قبل از سال 2025 باشد')
    .test('valid-date', 'تاریخ وارد شده معتبر نیست', (value) => {
      if (!value) return false
      return value instanceof Date && !isNaN(value.getTime())
    }),
  requestCount: yup
    .number()
    .typeError('تعداد باید عدد باشد')
    .required('وارد کردن تعداد الزامی است')
    .positive('تعداد باید مثبت باشد')
    .integer('تعداد باید عدد صحیح باشد')
    .min(1, 'حداقل تعداد 1 است')
    .max(1000, 'حداکثر تعداد 1000 است'),
})

type Form1PropsType = {
  serviceId: string
  groupId: string
  service: ServiceItemType
}

const Form1 = (props: Form1PropsType) => {
  const { serviceId, groupId, service } = props
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: { requestCount: 1 },
  })

  const hasError = !isValid || !isDirty

  const onSubmit = async (data: AddServicesFormType) => {
    const shamsiDate = moment(new Date(data.date)).locale('fa').format('jYYYY/jMM/jDD')
    const time = moment(new Date(data.time)).locale('fa').format('HH:mm')
    const reviesedData: PurchageBasketType = {
      date: shamsiDate,
      time: time,
      id: Date.now(),
      typeId: groupId,
      serviceId: serviceId,
      serviceName: service.title,
      servicePrice: service.servicePrice,
      servicePackage: service.servicePackage,
      requestCount: data.requestCount,
    }
    dispatch(addItem(reviesedData))
    SuccessToast('به سبد خرید اضافه شد')
    reset()
    navigate(-1)
  }


  let headerLogoSrc = groupLogos[groupId] || defaultLogo
  let headerText = groupTexts[groupId] || ''

  if (groupId === '47' && (serviceId === '101' || serviceId === '99')) {
    headerLogoSrc = logo47
    headerText = groupTexts['47']
  } else if (serviceId === '764') {
    headerLogoSrc = logo43
    headerText = groupTexts['43']
  }

  return (
    <div className="relative">

      <div className="relative flex items-center justify-center mb-6">
        <div className="absolute right-0">
          <Link to="/Services" className="flex items-center text-secondary-100">
            <FontAwesomeIcon icon={faArrowRight} className="h-5 w-5 text-secondary-100 ml-1 mb-1" />
            <span className="-mt-1 text-secondary-100 text-[10px]">بازگشت</span>
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <img src={headerLogoSrc} alt="Group Logo" className="h-[63px] w-[63px]" />
          <span className="text-secondary-100 text-[14px]">{headerText}</span>
        </div>
      </div>


      <CardTitle service={service} />


      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-6">
        <DateInput
          name="date"
          placeholder="تاریخ درخواست"
          control={control}
          error={errors.date}
          iconClassname="text-secondary-100"
        />
        <TimeInput
          name="time"
          placeholder="زمان درخواست"
          control={control}
          error={errors.time}
          iconClassname="text-secondary-100"
        />
        <FormInput
          name="requestCount"
          placeholder="تعداد"
          type="number"
          icon={<MdNumbers className="text-secondary-100" />}
          register={register}
          error={errors.requestCount}
        />
        <Button
          className="flex-1 text-dunkel bg-primary-300 hover:bg-blue hover:text-secondary-100 mt-5"
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

export default Form1
