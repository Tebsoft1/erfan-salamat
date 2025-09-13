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
  time: string
}

const schema = yup.object().shape({
  date: yup
    .date()
    .typeError('تاریخ معتبر نیست')
    .required('وارد کردن تاریخ الزامی است')
    .min(new Date('2025-01-01'), 'تاریخ نمی‌تواند قبل از سال 2025 باشد')
    .test('valid-date', 'تاریخ وارد شده معتبر نیست', (value) => value instanceof Date && !isNaN(value?.getTime())),
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
  const navigate = useNavigate()

  const { handleSubmit, control, reset, formState: { errors, isValid, isDirty } } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: { time: '1' },
  })

  const hasError = !isValid || !isDirty

  const onSubmit = async (data: AddServicesFormType) => {
    const shamsiDate = moment(new Date(data.date)).locale('fa').format('jYYYY/jMM/jDD')

    const servicePricee =
      data.time === '1' ? service.servicePrice
      : data.time === '2' ? service.servicePrice2
      : service.servicePrice3

    const reviesedData: PurchageBasketType = {
      date: shamsiDate,
      time: data.time,
      id: Date.now(),
      typeId: groupId,
      serviceId,
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
        <DateInput name="date" placeholder="تاریخ درخواست" control={control} error={errors.date} iconClassname="text-secondary-100" />
        <ShiftOptions name="time" control={control} service={service} error={errors.time} />
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

export default Form2
