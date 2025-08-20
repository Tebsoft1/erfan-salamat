import { convertToPersianDigits } from '@/utils/numberUtils'

type TagPropsType = {
  number: number
  className?: string
}

const Tag = (props: TagPropsType) => {
  const { number, className } = props
  return (
    <div
      className={`w-5 h-5 rounded-full bg-primary-300 flex justify-center items-center ${className}`}
    >
      <p className="text-secondary-900 text-xs">
        {convertToPersianDigits(number.toString())}
      </p>
    </div>
  )
}
export default Tag
