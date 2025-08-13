import { IoIosArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

type ArrwoBackPropsType = {
  className: string
  address: string
}

const ArrowBack = (props: ArrwoBackPropsType) => {
  const { address, className } = props
  let navigate = useNavigate()
  return (
    <IoIosArrowRoundBack
      className={`block absolute text-primary-700 text-4xl cursor-pointer ${className}`}
      onClick={() => navigate(address)}
    />
  )
}
export default ArrowBack
