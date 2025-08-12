import React from 'react'
import { useNavigate } from 'react-router-dom' // اگر از React Router استفاده می‌کنید
import Header from './components/HeaderServices'
import SearchBar from './components/SearchBar'
import ServicesCarousel from './components/ServicesCarousel'
import SpecialServices from './components/SpecialServices'
import DoctorCard from './components/DoctorCard'
import AppointmentSection from './components/AppointmentSection'
import ChildrenServices from './components/ChildrenServices'
import StatsSection from './components/StatsSection'
import FooterNav from './components/FooterNav'


const ServicesHome: React.FC = () => {

  return (
    <div className=" text-white flex flex-col items-center">
      <Header />
      <SearchBar />
      <ServicesCarousel />
      <SpecialServices />
      <DoctorCard />
      <AppointmentSection />
      <ChildrenServices />
      <StatsSection />
      <FooterNav />
    </div>
  )
}

export default ServicesHome
