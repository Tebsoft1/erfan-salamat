import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Backbutton from '@/assets/images/BackButton.png';

const Wallet: React.FC = () => {
  
  const navigate = useNavigate();
  const balance = 1250000; // Balance in Rial

  const transactions = [
    {
      title: "شارژ کیف پول",
      date: "1404/05/10",
      amount: "+500,000",
      desc: "پرداخت از طریق کارت بانکی",
    },
    {
      title: "خرید سرویس پرستاری",
      date: "1404/05/15",
      amount: "-200,000",
      desc: "هزینه خدمت پرستاری در منزل",
    },
    {
      title: "بازگشت وجه",
      date: "1404/05/18",
      amount: "+100,000",
      desc: "لغو سرویس فیزیوتراپی",
    },
  ];

  const [openRow, setOpenRow] = useState<number | null>(null);

  const toggleRow = (index: number) => {
    setOpenRow(openRow === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-6">

        <Link to="/profile" className="flex items-center text-m  text-secondary-100 hover:underline">
          <img src={Backbutton} alt="Back" className="h-6 w-6 " />
          <span className='-mt-1'>بازگشت</span>
        </Link>
        
      <div className="bg-secondary-900 rounded-xl p-5 flex flex-col items-center shadow-md">
        <span className="text-lg text-secondary-100 whitespace-nowrap">
          موجودی کیف پول
        </span>
        <span className="text-3xl font-bold text-primary-300 whitespace-nowrap">
          {balance.toLocaleString()} ریال
        </span>
      </div>


      <div className="bg-secondary-900 rounded-xl p-4 mt-4 shadow-md">
        <h2 className="text-xl font-bold text-primary-300 mb-4">
          لیست تراکنش‌ها
        </h2>

        <table className="w-full text-secondary-100 text-sm border-collapse table-fixed">
          <thead>
            <tr className="bg-secondary-800">
              <th className="p-3 text-right w-1/3 whitespace-nowrap">
                عنوان تراکنش
              </th>
              <th className="p-3 text-right w-1/4 whitespace-nowrap">
                تاریخ تراکنش
              </th>
              <th className="p-3 text-right w-1/4 whitespace-nowrap">
                مبلغ تراکنش
              </th>
              <th className="p-3 w-10"></th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <React.Fragment key={index}>
                <tr className="border-b border-secondary-700 hover:bg-secondary-800 transition-colors">
                  <td className="p-3 whitespace-nowrap">{tx.title}</td>
                  <td className="p-3 whitespace-nowrap">{tx.date}</td>
                  <td
                    className={`p-3 font-bold whitespace-nowrap ${
                      tx.amount.startsWith("+")
                        ? "text-primary-300"
                        : "text-red"
                    }`}
                  >
                    {tx.amount} ریال
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => toggleRow(index)}
                      className="text-primary-300 font-bold hover:text-primary-200 cursor-pointer"
                    >
                      i
                    </button>
                  </td>
                </tr>


                <tr>
                  <td colSpan={4} className="p-0">
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openRow === index ? "max-h-40 p-3" : "max-h-0 p-0"
                      } bg-secondary-800 text-secondary-100 text-sm`}
                    >
                      {tx.desc}
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wallet;
