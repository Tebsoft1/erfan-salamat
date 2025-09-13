import React, { useState } from 'react'
import Back from '../../../assets/images/Back.png'
//import { CiMedicalCase } from "react-icons/ci";
import PharmacyImg from '../../../assets/images/PharmacyImg.png'
//import ProfileHeader from "@/pages/Profile/components/ProfileHeader";
import { useNavigate } from 'react-router-dom'
//import { useGetUserDataQuery } from "@/services/Authenticate";
import PharmacyForm from './components/PharmacyForm'
import { useLazyGetPrescriptionQuery } from '@/services/Customers'

const Pharmacy: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  //const { data } = useGetUserDataQuery();
  const [trigger, { data: prescription, isLoading: preLoading }] =
    useLazyGetPrescriptionQuery()
  const navigate = useNavigate()

  const [selectedDrugs, setSelectedDrugs] = useState<any[]>([])
  const [confirmedDrugs, setConfirmedDrugs] = useState<any[]>([])

  const confirmDrugsHandler = () => {
    setIsModalOpen(false)
    setConfirmedDrugs(selectedDrugs)
  }

  return (
    <div className="py-3 px-2 w-full flex flex-col items-center">
      <div className="flex gap-[1px] items-center w-full z-2">
        <img
          src={Back}
          className="w-[28px] cursor-pointer"
          alt="بازگشت"
          onClick={() => navigate('/Services')}
        />
        <p
          className="cursor-pointer"
          onClick={() => navigate('/Services')}
        >
          بازگشت
        </p>
      </div>

      {/* <div className="w-full mt-4">
        <ProfileHeader data={data} />
      </div>*/}

      <div className="flex flex-col w-full items-center justify-center -mt-12 gap-2">
        {/*<CiMedicalCase size={30} />*/}
        <img src={PharmacyImg} className="w-[35px]" alt="داروخانه" />
        <p className="text-[16px]">فرم داروخانه </p>
      </div>

      <div className="w-full mt-6">
        <PharmacyForm
          setIsModalOpen={setIsModalOpen}
          trigger={trigger}
          confirmedDrugs={confirmedDrugs}
        />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white text-black rounded-2xl shadow-lg p-6 w-[95%] sm:w-[80%] md:w-[600px] relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4">نتیجه نسخه</h2>

            {preLoading && <p>در حال بارگذاری...</p>}

            {prescription ? (
              <div className="text-sm max-h-[70vh] overflow-y-auto">
                <div className="mb-4 space-y-1">
                  <div>نام مرکز : {prescription.data.center}</div>
                  <div>نام پزشک : {prescription.data.doctorName}</div>
                  <div>تاریخ نسخه : {prescription.data.preDate}</div>
                </div>
                <div className="max-h-[150px] overflow-y-auto border border-gray-300 rounded-lg my-4">
                  <table className="w-full border-collapse text-sm">
                    <thead className="bg-gray-100 sticky top-0">
                      <tr>
                        <th className="border p-2">انتخاب</th>
                        <th className="border p-2">نام دارو</th>
                        <th className="border p-2">تعداد</th>
                        <th className="border p-2">نحوه مصرف</th>
                      </tr>
                    </thead>
                    <tbody>
                      {prescription.data.drugs.map((drug: any, idx: number) => (
                        <tr key={idx}>
                          <td className="border p-2 text-center">
                            <input
                              type="checkbox"
                              className="accent-primary-500"
                              checked={selectedDrugs.some(
                                (d) => d.drugName === drug.drugName
                              )}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedDrugs((prev) => [...prev, drug])
                                } else {
                                  setSelectedDrugs((prev) =>
                                    prev.filter(
                                      (d) => d.drugName !== drug.drugName
                                    )
                                  )
                                }
                              }}
                            />
                          </td>
                          <td className="border p-2">{drug.drugName}</td>
                          <td className="border p-2">{drug.count}</td>
                          <td className="border p-2">{drug.consumption}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={confirmDrugsHandler}
                    className="bg-primary-300 text-gray-800 font-bold shadow-md px-10 py-2 rounded-md hover:bg-primary-500"
                  >
                    تایید
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-gray-500">داده‌ای یافت نشد</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Pharmacy
