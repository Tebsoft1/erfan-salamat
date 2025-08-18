import { useGetAllOrdersQuery, type Order } from "@/services/Customers";
import { CiFilter } from "react-icons/ci";
import { convertToPersianDate } from "@/utils/convertToPersianDate";

const OrdersList: React.FC = () => {
  const { data: orders } = useGetAllOrdersQuery();

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
          {orders?.map((order: Order) => (
            <div
              key={order.id}
              className="grid grid-cols-4 px-2 py-2 bg-secondary-300/30 rounded-lg mb-2"
            >
              <div>{order.orderId}</div>
              <div>{convertToPersianDate(order.serviceStartDate)}</div>
              <div>{order.sPers || "-"}</div>
              <div
                className={`${
                  order.status === "ثبت شده"
                    ? "bg-blue-800 text-secondary-100"
                    : order.status === "کنسل شده"
                    ? "bg-amber-600 text-secondary-100"
                    : order.status === "انتصاب داده شده"
                    ? "bg-secondary-100 text-secondary-900"
                    : order.status === "انجام شده"
                    ? "bg-amber-300 text-secondary-900"
                    : "bg-red-700 text-secondary-100"
                } rounded-xl text-center py-1 px-1 text-[11px] flex items-center justify-center`}
              >
                {order.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrdersList;



