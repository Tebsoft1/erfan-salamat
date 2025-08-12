import React from 'react';
import { FaSearch, FaUser, FaPhone, FaBell } from 'react-icons/fa';

const FooterNav: React.FC = () => {
  return (
    <div className="w-full bg-teal-900 p-4 flex justify-around">
      <FaSearch className="text-teal-400" />
      <FaUser className="text-teal-400" />
      <FaPhone className="text-teal-400" />
      <FaBell className="text-teal-400" />
    </div>
  );
};

export default FooterNav;