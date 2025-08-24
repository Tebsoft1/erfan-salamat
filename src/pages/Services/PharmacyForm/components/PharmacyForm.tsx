import { useAddOnlineOrderMutation } from "@/services/Customers";
import React, { useState } from "react";
import moment from "moment-jalaali";
import { useNavigate } from "react-router-dom";
import { RejectToast, SuccessToast } from "@/ui/Toasts";
import Map from "../../../../components/Map"
import type { LatLngTuple } from "leaflet"

type InsuranceType = 1 | 2 | 3;

interface Option {
  label: string;
  value: InsuranceType;
}

const options: Option[] = [
  { label: "تامین اجتماعی", value: 1 },
  { label: "بیمه سلامت", value: 2 },
  { label: "سایر", value: 3 },
];

const PharmacyForm: React.FC<any> = ({ setIsModalOpen, trigger, confirmedDrugs }) => {
  const [selected, setSelected] = useState<InsuranceType>(1);
  const [printCode, setPrintCode] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [position, setPosition] = useState<LatLngTuple>([35.6892, 51.389])
  const [address, setAddress] = useState<string>("")

  const navigate=useNavigate()

  const [addOnlineOrder, { isLoading }] = useAddOnlineOrderMutation();

  const getDescription = () => {
    const insuranceMap: Record<number, string> = {
      1: "بیمه تامین اجتماعی",
      2: "بیمه سلامت",
      3: "سایر",
    };

    const insuranceText = insuranceMap[selected] || "بیمه نامشخص";

    if (selected === 3 && file) {
      return ["بیمار فایل آپلود کرده است", insuranceText].join(" // ");
    }

    if ([1, 2].includes(selected)) {
      const drugInfo = confirmedDrugs
        ?.map((item: any) => `${item.drugName}, ${item.count}, ${item.consumption}`)
        .filter(Boolean);

      const parts = [...(drugInfo || []), printCode, insuranceText];
      return parts.filter(Boolean).join(" // ");
    }

    return insuranceText;
  };

  const handleSubmit = async () => {
    try {
      const serviceList = [
        {
          serviceId: 782,
          shiftId: 0,
          serviceTime: moment().format("HH:mm"),
          serviceDate: moment().format("jYYYY/jMM/jDD"),
          count: 1,
          description: "",
        },
      ];

      await addOnlineOrder({
        data: {
          address,             
          mobile: localStorage.getItem("mobile"),
          desc: getDescription(),
          lat: position[0],     
          lon: position[1],  
          serviceList,
        },
        file,
      }).unwrap();
      
      SuccessToast("سفارش با موفقیت ثبت شد.")
      navigate("/profile/orders")
      
    } catch (err) {
      console.error(err);
      RejectToast("خطا در ثبت سفارش")
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) {
      setFile(f);
    }
  };

  const handleClickOnPre = async () => {
    const res = await trigger({
      printCode: printCode,
      preType: selected,
    });
    if (res.data) {
      setIsModalOpen(true);
    }
  };

  const handleChange = (val: InsuranceType) => {
    setSelected(val);
  };

  const renderContent = () => {
    switch (selected) {
      case 1:
        return (
          <div className="mt-2 text-md ">
            <div>
              <p>کد رهگیری</p>
              <input
                value={printCode}
                onChange={(e) => setPrintCode(e.target.value)}
                placeholder="درج کد رهگیری"
                className="w-full p-3 mt-3 bg-secondary-300/40 outline-none  rounded-xl border-[1px] border-secondary-900"
              />
            </div>
            <div
              className="p-3 mt-3 rounded-xl bg-blue-700 hover:bg-blue-800 flex justify-center items-center "
              onClick={handleClickOnPre}
            >
              فراخوانی نسخه و انتخاب دارو
            </div>
            {confirmedDrugs.length > 0 && (
              <div className="w-full mt-6 bg-white text-black p-4 rounded-xl shadow">
                <h3 className="font-bold mb-2">داروهای انتخاب‌شده:</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border p-2">نام دارو</th>
                        <th className="border p-2">تعداد</th>
                        <th className="border p-2">نحوه مصرف</th>
                      </tr>
                    </thead>
                    <tbody>
                      {confirmedDrugs.map((drug: any, i: number) => (
                        <tr key={i}>
                          <td className="border p-2">{drug.drugName}</td>
                          <td className="border p-2">{drug.count}</td>
                          <td className="border p-2">{drug.consumption}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            <div className="w-full mt-6 bg-white text-black p-4 rounded-xl shadow">
              <h3 className="font-bold mb-2">آپلود نسخه دستی:</h3>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-blue-50 file:text-blue-700
                   hover:file:bg-blue-100"
              />
              {file && (
                <p className="mt-3 text-green-600 font-medium">
                  فایل انتخاب‌شده: {file.name}
                </p>
              )}
            </div>
            <div className="my-4">
            <Map
        position={position}
        setPosition={setPosition}
        address={address}
        setAddress={setAddress}
      />

  
      <div className="mt-4">
        <label className="block mb-2">آدرس</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-3 border rounded-xl"
        />
      </div>
            </div>
            <div>
              <button
                disabled={isLoading}
                onClick={handleSubmit}
                className="w-full py-3 bg-primary-300 text-black font-bold mt-6 rounded-lg"
              >
                {isLoading ? "در حال ارسال..." : "ثبت نهایی سفارش"}
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="mt-2 text-md ">
            <div>
              <p>کد رهگیری</p>
              <input
                value={printCode}
                onChange={(e) => setPrintCode(e.target.value)}
                placeholder="درج کد رهگیری"
                className="w-full p-3 mt-3 bg-secondary-300/40 outline-none  rounded-xl border-[1px] border-secondary-900"
              />
            </div>
            <div
              className="p-3 mt-3 rounded-xl bg-blue-700 hover:bg-blue-800 flex justify-center items-center "
              onClick={handleClickOnPre}
            >
              فراخوانی نسخه و انتخاب دارو
            </div>
            {confirmedDrugs.length > 0 && (
              <div className="w-full mt-6 bg-white text-black p-4 rounded-xl shadow">
                <h3 className="font-bold mb-2">داروهای انتخاب‌شده:</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border p-2">نام دارو</th>
                        <th className="border p-2">تعداد</th>
                        <th className="border p-2">نحوه مصرف</th>
                      </tr>
                    </thead>
                    <tbody>
                      {confirmedDrugs.map((drug: any, i: number) => (
                        <tr key={i}>
                          <td className="border p-2">{drug.drugName}</td>
                          <td className="border p-2">{drug.count}</td>
                          <td className="border p-2">{drug.consumption}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            <div className="w-full mt-6 bg-white text-black p-4 rounded-xl shadow">
              <h3 className="font-bold mb-2">آپلود نسخه دستی:</h3>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-blue-50 file:text-blue-700
                   hover:file:bg-blue-100"
              />
              {file && (
                <p className="mt-3 text-green-600 font-medium">
                  فایل انتخاب‌شده: {file.name}
                </p>
              )}
            </div>
            <div className="my-4">
            <Map
        position={position}
        setPosition={setPosition}
        address={address}
        setAddress={setAddress}
      />

  
      <div className="mt-4">
        <label className="block mb-2">آدرس</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-3 border rounded-xl"
        />
      </div>
            </div>
            <div>
              <button
                disabled={isLoading}
                onClick={handleSubmit}
                className="w-full py-3 bg-primary-300 text-black font-bold mt-6 rounded-lg"
              >
                {isLoading ? "در حال ارسال..." : "ثبت نهایی سفارش"}
              </button>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="mt-2 text-sm ">
            <div className="w-full mt-6 bg-white text-black p-4 rounded-xl shadow">
              <h3 className="font-bold mb-2">آپلود نسخه دستی:</h3>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-blue-50 file:text-blue-700
                   hover:file:bg-blue-100"
              />
              {file && (
                <p className="mt-3 text-green-600 font-medium">
                  فایل انتخاب‌شده: {file.name}
                </p>
              )}
            </div>
            <div className="my-4">
            <Map
        position={position}
        setPosition={setPosition}
        address={address}
        setAddress={setAddress}
      />

  
      <div className="mt-4">
        <label className="block mb-2">آدرس</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-3 border rounded-xl"
        />
      </div>
            </div>
            <div>
              <button
                disabled={isLoading}
                onClick={handleSubmit}
                className="w-full py-3 bg-primary-300 text-black font-bold mt-6 rounded-lg"
              >
                {isLoading ? "در حال ارسال..." : "ثبت نهایی سفارش"}
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-secondary-500/60 backdrop-blur-3xl rounded-xl py-6 px-5">
      <div>
        <p>نوع بیمه</p>
        <div className="flex flex-col gap-6 mt-4">
          <div className="flex justify-between pl-3">
            {options.map((option) => (
              <label
                key={option.value}
                className="flex items-center gap-2 cursor-pointer"
              >
                {option.label}
                <input
                  type="radio"
                  name="insurance"
                  value={option.value}
                  checked={selected === option.value}
                  onChange={() => handleChange(option.value)}
                  className="accent-primary-300"
                />
              </label>
            ))}
          </div>
          <div>{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyForm;

