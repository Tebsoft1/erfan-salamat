import { IoIosArrowRoundBack } from 'react-icons/io'

type ArrwoBackPropsType = {
  className: string
  onBack: () => void
}

const ArrowBack = (props: ArrwoBackPropsType) => {
  const { onBack, className } = props

  return (
    <IoIosArrowRoundBack
      className={`block absolute text-primary-700 text-4xl cursor-pointer ${className}`}
      onClick={onBack}
    />
  )
}
export default ArrowBack
