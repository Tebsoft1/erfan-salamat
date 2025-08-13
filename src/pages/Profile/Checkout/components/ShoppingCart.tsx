import React, { useState, useRef } from 'react';
import './scrollbar.css'; // برای مخفی کردن اسکرول

const ShoppingCart: React.FC = () => {
  const [items, setItems] = useState([
    { id: 1, name: "ویزیت پزشک", date: "1404/05/20", quantity: 1, price: 200000 },
    { id: 2, name: "خدمات پرستاری", date: "1404/05/22", quantity: 2, price: 150000 },
    { id: 3, name: "فیزیوتراپی", date: "1404/05/25", quantity: 1, price: 300000 },
    { id: 4, name: "آزمایش خون", date: "1404/05/28", quantity: 1, price: 120000 },
    { id: 5, name: "مشاوره روانشناسی", date: "1404/06/02", quantity: 1, price: 250000 },
    { id: 6, name: "مشاوره روانشناسی", date: "1404/06/02", quantity: 1, price: 250000 },
    { id: 7, name: "مشاوره روانشناسی", date: "1404/06/02", quantity: 1, price: 250000 },
    { id: 8, name: "مشاوره روانشناسی", date: "1404/06/02", quantity: 1, price: 250000 },
  ]);

  const [showExtra, setShowExtra] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleDelete = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="w-98/100 bg-dunkel rounded-xl mt-8 mb-15 overflow-hidden flex flex-col relative">
      {/* Header */}
      <span className="text-xl bg-primary-300 rounded-t-xl text-dunkel w-full p-5 flex justify-center">
        جزئیات سفارش
      </span>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        {/* Items list */}
        <div className="flex-1 mt-2 space-y-6 overflow-y-auto scrollbar-hide" style={{ maxHeight: "250px" }}>
          {items.map(item => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-secondary-900 rounded-lg p-3"
            >
              {/* Left */}
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary-300 rounded-full"></div>
                <div>
                  <div className="text-secondary-100">{item.name}</div>
                  <div className="text-SemiDarkGray text-base">
                    تاریخ خدمت: {item.date}
                  </div>
                  <div className="text-primary-300 text-base">
                    قیمت: {item.price.toLocaleString()} ریال
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="flex items-center gap-3">
                <div className="text-secondary-100">تعداد: {item.quantity}</div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red text-2xl mb-1 font-bold hover:text-DarkRed"
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Divider and total */}
        <hr className="border-gray-600 my-4" />
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-bold">جمع کل فاکتور:</span>
          <span className="text-lg font-bold">{totalPrice.toLocaleString()} ریال</span>
        </div>

        {/* تکمیل فرآیند button */}
        {!showExtra && (
          <button
            onClick={() => setShowExtra(true)}
            className="bg-primary-300 text-dunkel py-2 rounded-lg w-full hover:bg-primary-400"
          >
            تکمیل فرآیند ثبت سفارش
          </button>
        )}

        {/* توضیحات & Upload Section */}
        {showExtra && (
          <div className="mt-6 space-y-4">
            {/* توضیحات box */}
            <textarea
              className="w-full h-24 resize-none p-3 rounded-lg bg-secondary-800 text-secondary-100 border"
              placeholder="توضیحات خود را وارد کنید..."
            ></textarea>

            {/* Upload documents */}
            <div className="space-y-2">
              <label className="block text-secondary-100 text-xl font-bold mb-2">بارگذاری مدارک:</label>

              <div
                className="w-full p-3 rounded-lg text-l bg-secondary-900 text-secondary-100 flex items-center justify-between cursor-pointer hover:bg-secondary-800"
                onClick={() => fileInputRef.current?.click()}
              >
                <span>انتخاب فایل</span>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  multiple
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>

              {/* نمایش لیست فایل‌ها */}
              {files.length > 0 && (
                <div className="space-y-2 mt-2">
                  {files.map((file, index) => (
                    <div key={index} className="flex justify-between items-center bg-secondary-800 p-2 rounded">
                      <span>{file.name}</span>
                      <button
                        onClick={() => handleRemoveFile(index)}
                        className="text-red font-bold hover:text-DarkRed text-lg"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
