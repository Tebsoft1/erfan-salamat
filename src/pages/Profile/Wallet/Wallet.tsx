import React from "react";

const Wallet: React.FC = () => {
  const balance = 1250000; {/* Balance in Rial */}

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

  return (
    <div className="p-4 flex flex-col gap-6">

      <div className="bg-secondary-900 rounded-xl p-5 flex flex-col items-center shadow-md">
        <span className="text-lg text-secondary-100">موجودی کیف پول</span>
        <span className="text-3xl font-bold text-primary-300">
          {balance.toLocaleString()} ریال
        </span>
      </div>

      <div className="bg-secondary-900 rounded-xl p-4 shadow-md">
        <h2 className="text-xl font-bold text-primary-300 mb-4">
          لیست تراکنش‌ها
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-secondary-100 text-sm border-collapse">
            <thead>
              <tr className="bg-secondary-800 whitespace-nowrap">
                <th className="p-3 text-right">عنوان تراکنش</th>
                <th className="p-3 text-right">تاریخ تراکنش</th>
                <th className="p-3 text-right">مبلغ تراکنش</th>
                <th className="p-3 text-right">توضیحات</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, index) => (
                <tr
                  key={index}
                  className="border-b border-secondary-700 hover:bg-secondary-800 transition-colors"
                >
                  <td className="p-3">{tx.title}</td>
                  <td className="p-3">{tx.date}</td>
                  <td
                    className={`p-3 font-bold ${
                      tx.amount.startsWith("+")
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {tx.amount} ریال
                  </td>
                  <td className="p-3">{tx.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
