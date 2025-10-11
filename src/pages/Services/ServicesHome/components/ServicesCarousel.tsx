import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import HospitalIcon from '@/assets/images/HospitalNew.png'
import Serum from '@/assets/images/DripNew.png'
import Nemone from '@/assets/images/VialNew.png'
import KomakBehyar from '@/assets/images/FirstAidNew.png'
import Bones1 from '@/assets/images/BonesNew.png'
import DoubleLeft from '@/assets/images/DoubleLeftNew.png'
import DoubleRight from '@/assets/images/DoubleRightNew.png'

const services = [
  { img: Bones1, label: 'رادیولوژی', link: 'serviceList?groupId=53' },
  { img: Serum, label: 'سرم تراپی', link: 'serviceForm?groupId=47&serviceId=101' },
  { img: Nemone, label: 'نمونه گیری', link: 'serviceForm?groupId=47&serviceId=99' },
  { img: KomakBehyar, label: 'کمک بهیار منزل', link: 'serviceForm?groupId=43&serviceId=764' },
  { img: KomakBehyar, label: 'کمک بهیار منزل', link: 'serviceForm?groupId=43&serviceId=764' },
  { img: Bones1, label: 'رادیولوژی', link: 'serviceList?groupId=53' },
  { img: Nemone, label: 'نمونه گیری', link: 'serviceForm?groupId=47&serviceId=99' },
  { img: Serum, label: 'سرم تراپی', link: 'serviceForm?groupId=47&serviceId=101' },
]

const ServicesCarousel: React.FC = () => {
  const navigate = useNavigate()
  const scrollRef = useRef<HTMLDivElement>(null)


  const scrollByItem = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const itemWidth = container.scrollWidth / services.length
    container.scrollBy({
      left: direction === 'right' ? itemWidth : -itemWidth,
      behavior: 'smooth',
    })
  }

  return (
    <div className="w-full p-2 text-center">
      <div className="flex flex-col items-center mb-4">
        <img src={HospitalIcon} alt="+" className="w-[24px] h-[24px]" />
        <h2 className="text-[8px] mt-0 mb-0">سرویس های عرفان سلامت</h2>
      </div>


      <div className="flex items-center gap-2">
        <img
          src={DoubleRight}
          alt="Right"
          onClick={() => scrollByItem('right')}
          className="w-[18px] h-[18px] cursor-pointer -mt-4"
        />

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-snap-x snap-mandatory gap-0.5 p-2 w-full"
          style={{ scrollBehavior: 'smooth' }}
        >
          {services.map((service, idx) => (
            <div
              key={`${service.label}-${idx}`}
              onClick={() => navigate(service.link)}
              className="flex-shrink-0 snap-center flex flex-col items-center cursor-pointer w-1/4"
            >
              <div className="bg-transparent border-[0.3px] border-secondary-300/60 rounded-md p-4 flex items-center justify-center w-[58.59px] h-[58.59px] transition-transform duration-200 ease-out hover:scale-105">
                <img
                  src={service.img}
                  alt={service.label}
                  className="w-[31px] h-[31px] rounded-sm"
                />
              </div>
              <span className="text-secondary-100 text-[10px] mt-2 font-normal">
                {service.label}
              </span>
            </div>
          ))}
        </div>

        <img
          src={DoubleLeft}
          alt="Left"
          onClick={() => scrollByItem('left')}
          className="w-[18px] h-[18px] cursor-pointer -mt-4"
        />
      </div>

    </div>
  )
}

export default ServicesCarousel
