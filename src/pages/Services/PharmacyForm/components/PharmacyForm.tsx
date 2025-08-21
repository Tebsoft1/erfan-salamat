import { useAddOnlineOrderMutation  } from "@/services/Customers";



import React, { useState } from "react";

type InsuranceType = 1 | 2 | 3;

interface Option {
  label: string;
  value: InsuranceType;
}

const options: Option[] = [
  { label: "تامین اجتماعی", value: 1 },
  { label: "بیمه سلامت", value: 2 },
  { label: "سایر", value: 3},
];
const PharmacyForm: React.FC = ({setIsModalOpen , trigger ,confirmedDrugs}) => {
  const [selected, setSelected] = useState<InsuranceType>(1);
  const [printCode, setPrintCode] = useState<string>("");
  const [fileName, setFileName] = useState<string | null>(null);
  const [addOnlineOrder, { isLoading, isSuccess, error }] = useAddOnlineOrderMutation();

const handleSubmit = async () => {
  try {
    await addOnlineOrder({
      data: confirmedDrugs, 
      file: fileName,
    }).unwrap();
    if(isSuccess){
      alert("سفارش با موفقیت ارسال شد ✅");
    }
  
  } catch (err) {
    console.error(err);
    alert("مشکلی پیش اومد 🚨");
  }
};


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
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
            <div className="p-3 mt-3 rounded-xl bg-blue-700 hover:bg-blue-800 flex justify-center items-center " onClick={handleClickOnPre}>فراخوانی نسخه و انتخاب دارو</div>
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
          {confirmedDrugs.map((drug, i) => (
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

      {fileName && (
        <p className="mt-3 text-green-600 font-medium">
          فایل انتخاب‌شده: {fileName}
        </p>
      )}
    </div>
         <div>
          <button onClick={handleSubmit} className="w-full py-3 bg-primary-300 text-black font-bold mt-6 rounded-lg">ثبت نهایی سفارش</button>
         </div>
          </div>
        );
      case 2:
        return <p className="mt-2 text-sm ">محتوای مربوط به بیمه سلامت</p>;
      case 3:
        return <p className="mt-2 text-sm ">محتوای مربوط به سایر</p>;
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
