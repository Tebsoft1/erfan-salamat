import { BeatLoader } from 'react-spinners'
import { IoIosRefresh } from 'react-icons/io'

type QueryHandlerPropsType<T> = {
  data?: {
    isSuccess: boolean
    message: string
    data?: T
  }
  isLoading: boolean
  isError: boolean
  onRefetch: () => void
  render: (data: T) => React.ReactNode
}

export function QueryHandler<T>({
  data,
  isLoading,
  isError,
  onRefetch,
  render,
}: QueryHandlerPropsType<T>) {
  if (isLoading) return <BeatLoader className="text-center" color="#fff" />

  if (isError)
    return (
      <div className="flex items-center gap-2" onClick={onRefetch}>
        <p>
          دریافت اطلاعات با مشکل مواجه شد، <strong>تلاش مجدد</strong>
        </p>
        <IoIosRefresh />
      </div>
    )

  if (!data?.isSuccess) return <p>{data?.message || 'مشکلی رخ داد'}</p>

  // اگر data وجود نداشت یا آرایه خالی بود
  if (!data?.data || (Array.isArray(data.data) && data.data.length === 0)) {
    return <p>{'داده‌ای وجود ندارد'}</p>
  }

  return <>{render(data.data)}</>
}
