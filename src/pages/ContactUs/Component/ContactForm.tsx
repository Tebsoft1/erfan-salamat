import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("نام و نام خانوادگی الزامی است"),
  email: yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),
  phone: yup
    .string()
    .matches(/^09\d{9}$/, "شماره موبایل معتبر نیست. فرمت: 09xxxxxxxx")
    .required("شماره موبایل الزامی است"),
  message: yup.string().required("متن پیام الزامی است"),
}).required();

type FormData = yup.InferType<typeof schema>;

export default function ContactForm() {
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    reset();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md text-dunkel relative">
      <h2 className="flex justify-center text-xl text-dunkel font-bold mb-4">تماس با ما</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="نام و نام خانوادگی"
            {...register("name")}
            className="w-full p-2 border border-secondary-300 rounded-md"
          />
          {errors.name && <p className="text-red text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <input
            type="email"
            placeholder="ایمیل"
            {...register("email")}
            className="w-full p-2 border border-secondary-300 rounded-md"
          />
          {errors.email && <p className="text-red text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <input
            type="tel"
            placeholder="شماره موبایل"
            {...register("phone")}
            className="w-full p-2 border border-secondary-300 rounded-md text-right"
          />
          {errors.phone && <p className="text-red text-sm mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <textarea
            placeholder="متن پیام"
            {...register("message")}
            className="w-full p-2 border border-secondary-300 rounded-md"
            rows={4}
          />
          {errors.message && <p className="text-red text-sm mt-1">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue text-secondary-100 py-2 px-4 rounded-md hover:bg-primary-500 transition cursor-pointer"
        >
          ارسال
        </button>
      </form>

      {success && (
        <div className="fixed top-8 right-0 transform -translate-x-1/2 bg-primary-500 text-secondary-100 px-4 py-3 rounded-md shadow-lg z-50">
          پیام شما با موفقیت ارسال شد!
        </div>
      )}
    </div>
  );
}
