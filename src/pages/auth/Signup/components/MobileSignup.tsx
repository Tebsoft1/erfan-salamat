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
import DateInput from '@/components/DateInput'


const isValidIranianNationalCode = (code: string) => {
  if (!/^\d{10}$/.test(code)) return false;
  const check = parseInt(code[9]);
  const sum = code
    .split("")
    .slice(0, 9)
    .reduce((acc, digit, index) => acc + parseInt(digit) * (10 - index), 0) % 11;
  return (sum < 2 && check === sum) || (sum >= 2 && check === 11 - sum);
};

export const schema = yup.object({
  fname: yup
    .string()
    .required("وارد کردن نام الزامی است")
    .matches(/^[\u0600-\u06FF\s]{2,}$/, "نام باید فقط شامل حروف فارسی باشد و حداقل ۲ کاراکتر باشد"),

  lname: yup
    .string()
    .required("وارد کردن نام خانوادگی الزامی است")
    .matches(/^[\u0600-\u06FF\s]{2,}$/, "نام خانوادگی باید فقط شامل حروف فارسی باشد و حداقل ۲ کاراکتر باشد"),

  birthDay: yup
    .date()
    .typeError("تاریخ تولد معتبر نیست")
    .required("وارد کردن تاریخ تولد الزامی است")
    .max(new Date(), "تاریخ تولد نمی‌تواند در آینده باشد")
    .test("age-limit", "سن باید بین 0 تا 120 سال باشد", (value) => {
      if (!value) return false;
      const age = new Date().getFullYear() - value.getFullYear();
      return age >= 0 && age <= 120;
    }),

  nationalCode: yup
    .string()
    .required("وارد کردن کد ملی الزامی است")
    .matches(/^\d{10}$/, "کد ملی باید ۱۰ رقم باشد")
    .test("is-valid-national-code", "کد ملی معتبر نیست", (value) => {
      if (!value) return false;
      return isValidIranianNationalCode(value);
    }),

  mobile: yup
    .string()
    .required("وارد کردن شماره موبایل الزامی است")
    .matches(/^09\d{9}$/, "شماره موبایل باید با 09 شروع شود و ۱۱ رقم باشد"),

    gender: yup
  .number()
  .required("انتخاب جنسیت الزامی است")
  .oneOf([0, 1], "جنسیت باید ۰ یا ۱ باشد"),
});

const MobileSignup = () => {
  const {
    register,
    handleSubmit,
    control,
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
          name="fname"
          placeholder="نام"
          type="text"
          icon={<IoPersonOutline />}
          register={register}
          error={errors.fname}
        />
         <FormInput
          name="lname"
          placeholder="نام خانوادگی"
          type="text"
          icon={<IoPersonOutline />}
          register={register}
          error={errors.lname}
        />
         <FormInput
          name="nationalCode"
          placeholder="کد ملی"
          type="number"
          icon={<HiOutlineIdentification />}
          register={register}
          error={errors.nationalCode}
        />
         <DateInput
        name="birthDay"
        label="تاریخ تولد"
        control={control}
        error={errors.birthDay}
      />
        
        <FormInput
          name="mobile"
          placeholder="شماره موبایل"
          type="tel"
          icon={<FaMobileAlt />}
          register={register}
          error={errors.mobile}
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
            text="تایید اطلاعات"
          />
          
        </div>
      </form>
    </div>
  )
}
export default MobileSignup
