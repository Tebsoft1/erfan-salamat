import React from 'react';
import notificationIcon from '@/assets/images/Notification Icon.png';
import medicalNoteIcon from '@/assets/images/Medical Note Icon.png';
import Ellipse37 from '@/assets/images/Ellipse37.png';

const Header: React.FC = () => {
  return (
    <div className="w-full p-1 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src={Ellipse37}
          alt="photo"
          className="rounded-full w-12 h-12 bg-teal-500 flex items-center justify-center"
        />
        <div className="flex flex-col items-end text-xs pr-2">
          <span>محمد پیله چی</span>
          <span>09107502907</span>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex flex-col items-center">
          <img
            src={notificationIcon}
            alt="notification"
            className="w-10 h-10 border border-gray-400 rounded-sm p-2"
          />
          <span className="text-xs mt-1">اعلان ها</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={medicalNoteIcon}
            alt="medical note"
            className="w-10 h-10 border border-gray-400 rounded-sm p-2"
          />
          <span className="text-xs mt-1">پرونده شما</span>
        </div>
      </div>
    </div>
  );
};

export default Header;