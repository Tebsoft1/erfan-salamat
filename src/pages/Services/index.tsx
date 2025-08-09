import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // اگر از React Router استفاده می‌کنید
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ServicesCarousel from './components/ServicesCarousel';
import SpecialServices from './components/SpecialServices';
import DoctorCard from './components/DoctorCard';
import AppointmentSection from './components/AppointmentSection';
import ChildrenServices from './components/ChildrenServices';
import StatsSection from './components/StatsSection';
import FooterNav from './components/FooterNav';

// شبیه‌سازی وضعیت ورود (بعداً با Auth Context جایگزین کنید)
const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  return { isLoggedIn, setIsLoggedIn };
};

const ServicesPage: React.FC = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) return null; 

  return (
    <div className=" text-white min-h-screen flex flex-col items-center">
      <Header />
      <SearchBar />
      <ServicesCarousel />
      <SpecialServices />
      <DoctorCard name="دکتر حسینی" image="https://via.placeholder.com/100" />
      <AppointmentSection />
      <ChildrenServices />
      <StatsSection />
      <FooterNav />
    </div>
  );
};

localStorage.setItem('isLoggedIn', 'true');

export default ServicesPage;