import { useNavigate } from 'react-router-dom'
import Back from '../../assets/images/Back.png'
import notFound from '../../assets/images/404.jpg'

const NotFound = () => {
  let navigate = useNavigate()
  return (
    <div className="w-full flex flex-col">
      <div
        onClick={() => navigate('/Services')}
        className="flex gap-[1px] items-center w-full cursor-pointer"
      >
        <img src={Back} className="w-[28px]" alt="بازگشت" />
        <p>بازگشت</p>
      </div>
      <div>
        <p className="text-primary-300 text-3xl text-center mt-2">
          صحفه مورد نظر یافت نشد
        </p>
      </div>
      <div className="flex justify-center items-center mt-20">
        <img
          src={notFound}
          alt="photo"
          className="w-96 h-[400px] rounded-lg "
          onClick={() => navigate('/Services')}
        />
      </div>
    </div>
  )
}
export default NotFound
