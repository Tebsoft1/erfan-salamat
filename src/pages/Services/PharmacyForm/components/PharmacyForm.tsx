import { useGetAllOrdersQuery, useLazyGetPrescriptionQuery  } from "@/services/Customers";


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
const PharmacyForm: React.FC = () => {
  const [selected, setSelected] = useState<InsuranceType>(1);
  const [printCode, setPrintCode] = useState<string>("");
  const [trigger, { data, isLoading }] = useLazyGetPrescriptionQuery();

  const handleClickOnPre = () => {
    trigger({
      printCode: printCode,
      preType: selected,
    });
    console.log(data)
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
