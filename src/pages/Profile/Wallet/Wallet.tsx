import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Backbutton from '@/assets/images/BackButton.png'
import { QueryHandler } from '@/components/QueryHandler'
import { useGetWalletTrnsQuery } from '@/services/Customers'
import { convertToPersianDigitsWithSeparator } from '@/utils/numberUtils'

const Wallet: React.FC = () => {
  const [openRow, setOpenRow] = useState<number | null>(null)

  const {
    data: GetWalletTrns,
    isLoading: GetWalletTrnsLoading,
    isError: GetWalletTrnsError,
    refetch: GetWalletTrnsRefetch,
  } = useGetWalletTrnsQuery()
  const toggleRow = (index: number) => {
    setOpenRow(openRow === index ? null : index)
  }

  const balance = GetWalletTrns?.data
    ? GetWalletTrns.data.reduce((acc, tx) => acc + tx.price, 0)
    : 0

  return (
    <div className="flex flex-col gap-6">
      <Link
        to="/profile"
        className="flex items-center text-m text-secondary-100 hover:underline"
      >
        <img src={Backbutton} alt="Back" className="h-6 w-6 " />
        <span className="-mt-1">بازگشت</span>
      </Link>

      <div className="bg-secondary-900 rounded-xl p-5 flex flex-col items-center shadow-md">
        <span className="text-lg text-secondary-100 whitespace-nowrap">
          موجودی کیف پول
        </span>
        <span className="text-3xl font-bold text-primary-300 whitespace-nowrap">
          {convertToPersianDigitsWithSeparator(balance)} ریال
        </span>
      </div>

      <div className="bg-secondary-900 rounded-xl p-4 mt-4 shadow-md">
        <h2 className="text-xl font-bold text-primary-300 mb-4">
          لیست تراکنش‌ها
        </h2>

        <QueryHandler
          data={GetWalletTrns}
          isLoading={GetWalletTrnsLoading}
          isError={GetWalletTrnsError}
          onRefetch={GetWalletTrnsRefetch}
          render={(transactions) => (
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
                      <td className="p-3 whitespace-nowrap">
                        {new Date(tx.tDate).toLocaleDateString('fa-IR')}
                      </td>
                      <td
                        className={`p-3 font-bold whitespace-nowrap ${
                          tx.price >= 0 ? 'text-primary-300' : 'text-red'
                        }`}
                      >
                        {tx.price.toLocaleString()} ریال
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
                            openRow === index ? 'max-h-40 p-3' : 'max-h-0 p-0'
                          } bg-secondary-800 text-secondary-100 text-sm`}
                        >
                          {tx.description}
                        </div>
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          )}
        />
      </div>
    </div>
  )
}

export default Wallet
