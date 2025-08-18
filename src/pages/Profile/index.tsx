// Profile.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import FooterMenu from "@/components/FooterMenu";

const Profile: React.FC = () => {
  return (
    <div className="relative  flex flex-col">
      <div className="h-[calc(100vh-140px)] overflow-y-auto"> 
        <Outlet />
      </div>

      <div className="fixed bottom-4">
        <FooterMenu />
      </div>
    </div>
  );
};

export default Profile;

