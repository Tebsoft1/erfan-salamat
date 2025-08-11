import { useGetAllOrdersQuery } from "@/services/Customers";
import { CiFilter } from "react-icons/ci";

const OrdersList = () => {
  const { data: orders } = useGetAllOrdersQuery();

  const fakeOrders = [
    { id: 101, date: "1402/12/01", amount: "2,500,000", status: "ثبت شده" ,orderStatusId:"1" },
    { id: 102, date: "1402/12/02", amount: "3,750,000", status: "در حال پردازش",orderStatusId:"2" },
    { id: 103, date: "1402/12/03", amount: "1,200,000", status: "ارسال شده" ,orderStatusId:"3"},
    { id: 104, date: "1402/12/04", amount: "980,000", status: "لغو شده",orderStatusId:"4" },
  ];

  return (
    <div className="bg-secondary-500/60 backdrop-blur-3xl rounded-xl py-6 px-5">
  
      <div className="flex justify-between items-center border-b-[1px] pb-4 border-secondary-300">
        <p>فاکتورهای ثبت شده</p>
        <div className="flex gap-1 justify-center items-center">
          <p>فیلتر</p>
          <CiFilter size={22} />
        </div>
      </div>

      <div className="overflow-x-auto pt-2 text-[12px] text-secondary-300">
       
        <div className="grid grid-cols-4 font-semibold bg-transparent text-gray-300 px-4 py-3">
          <div>شماره</div>
          <div>تاریخ ثبت</div>
          <div>مبلغ</div>
          <div className="whitespace-nowrap">وضعیت فاکتور</div>
        </div>

      
        <div className="flex flex-col text-secondary-100 mt-2">
          {fakeOrders.map((order) => (
            <div
              key={order.id}
              className="grid grid-cols-4 px-2 py-2 bg-secondary-300/30 rounded-lg mb-2"
            >
              <div>{order.id}</div>
              <div>{order.date || "-"}</div>
              <div>{order.amount || "-"}</div>
              <div className={`${order.orderStatusId == 1 ? "bg-blue-800 text-secondary-100" : order.orderStatusId == 2 ? "bg-amber-600 text-secondary-100" :  order.orderStatusId == 3 ? 'bg-secondary-100 text-secondary-900' : 'bg-red-700 text-secondary-100'} rounded-xl text-center py-1 px-1 text-[11px] `}>{order.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersList;


