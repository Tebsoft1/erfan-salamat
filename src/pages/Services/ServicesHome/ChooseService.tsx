import React from "react";
import AppointmentSection from "./components/AppointmentSection";
import HamburgerMenu from "@/components/HamburgerMenu";


const ChooseService: React.FC = () => {
  return (
    <div className="p-4 flex flex-col gap-6">
      <HamburgerMenu />
      <AppointmentSection />
    </div>
  );
};

export default ChooseService;
