import type { ApiResponse } from '@/types/servicesTypes/globalSerivicesType'
import { RejectToast, SuccessToast } from '@/ui/Toasts'

export const handleApiCall = async <T>(
  apiCall: () => Promise<ApiResponse<T>>,
  onSuccess?: (data?: T) => void,
  onError?: (response: ApiResponse<T>) => void,
  successMessage?: string,
  errorMessage?: string
) => {
  try {
    const response = await apiCall()
    if (response.isSuccess) {
      onSuccess?.(response.data)
      SuccessToast(
        response?.message || successMessage || 'عملیات با موفقیت انجام شد'
      )
    } else if (!response.isSuccess) {
      RejectToast(response?.message || errorMessage || 'عملیات انجام نشد')
      onError?.(response)
    }
  } catch (error: any) {
    if (error.status === 401) RejectToast('کد اشتباه است')
    else RejectToast('مشکلی رخ داده است')
  }
}
