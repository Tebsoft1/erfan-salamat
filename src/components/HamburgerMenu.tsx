import React, { useState } from "react";
import {
  Menu,
  X,
  Home,
  ShoppingCart,
  History,
  FileText,
  Wallet,
  List,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "خانه", icon: <Home size={22} />, link: "/services" },
    { name: "سبد سرویس‌های انتخابی", icon: <ShoppingCart size={22} />, link: "/cart" },
    { name: "درخواست‌های قبلی من", icon: <History size={22} />, link: "/orders" },
    { name: "پرونده الکترونیکی", icon: <FileText size={22} />, link: "/records" },
    { name: "کیف پول", icon: <Wallet size={22} />, link: "/wallet" },
    { name: "لیست تمامی خدمات", icon: <List size={22} />, link: "/services" },
    { name: "خروج", icon: <LogOut size={22} />, link: "/logout" },
  ];

  return (
    <>
      
      <button
        className="fixed top-4 right-4 z-50 bg-primary-300 text-dunkel p-2 rounded-lg shadow-lg hover:bg-primary-500"
        onClick={() => setIsOpen(true)}
        aria-label="Open Menu"
      >
        <Menu size={28} />
      </button>

      
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-secondary-900 text-secondary-100 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        
        <div className="flex justify-between items-center p-4 border-b border-secondary-700">
          <span className="text-lg font-bold text-primary-300">منو</span>
          <button onClick={() => setIsOpen(false)} aria-label="Close Menu">
            <X size={28} className="hover:text-red" />
          </button>
        </div>

        
        <ul className="flex flex-col p-4 gap-3">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-2 rounded-lg transition-colors
                           hover:bg-primary-300 hover:text-dunkel"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HamburgerMenu;
