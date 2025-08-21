import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/HeaderServices';
import SearchBar from './components/SearchBar';
import ServicesCarousel from './components/ServicesCarousel';
import DoctorCard from './components/DoctorCard';
import AppointmentSection from './components/AppointmentSection';
import StatsSection from './components/StatsSection';

const ServicesHome: React.FC = () => {
  const location = useLocation();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    if (location.state?.showSuccess) {
      setShowSuccessModal(true);
      const timer = setTimeout(() => setShowSuccessModal(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  return (
    <div className="text-secondary-100 flex flex-col items-center">
      {showSuccessModal && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-primary-500 text-dunkel px-6 py-3 rounded-lg shadow-lg z-50">
          سفارش با موفقیت ثبت شد ✅
        </div>
      )}

      <Header />
      <SearchBar />
      <ServicesCarousel />
      <DoctorCard />
      <AppointmentSection />
      <StatsSection />
    </div>
  );
};

export default ServicesHome;
