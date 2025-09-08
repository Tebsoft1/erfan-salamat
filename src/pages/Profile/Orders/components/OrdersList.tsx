import { useGetAllOrdersQuery, type Order } from "@/services/Customers";
import { CiFilter } from "react-icons/ci";
import { convertToPersianDate } from "@/utils/convertToPersianDate";
import { useState, useMemo, useEffect } from "react";

const OrdersList: React.FC = () => {
  const { data: orders , refetch } = useGetAllOrdersQuery();

  useEffect(() => { refetch() }, [orders])

  const [statusFilter, setStatusFilter] = useState<string>("همه");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const statuses = [
    "همه",
    "ثبت شده",
    "کنسل شده",
    "انتصاب داده شده",
    "انجام شده",
    "حذف"
  ];

  const filteredOrders = useMemo(() => {
    if (!orders) return [];
    if (statusFilter === "همه") return orders;
    return orders.filter((order) => order.status === statusFilter);
  }, [orders, statusFilter]);


  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-secondary-500/60 backdrop-blur-3xl rounded-xl py-6 px-5">
      <div className="flex justify-between items-center border-b-[1px] pb-4 border-secondary-300">
        <p>فاکتورهای ثبت شده</p>

        <div className="flex gap-2 items-center">
          <p>فیلتر</p>
          <CiFilter size={22} className="" />
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setCurrentPage(1); 
            }}
            className="bg-secondary-500/60 text-sm  rounded-md px-3 py-1 outline-none"
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
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
          {paginatedOrders.map((order: Order) => (
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

        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-4 text-sm">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-3 py-1 rounded bg-secondary-300/30 disabled:opacity-40 cursor-pointer"
            >
              قبلی
            </button>
            <span>
              صفحه {currentPage} از {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-3 py-1 rounded bg-secondary-300/30 disabled:opacity-40 cursor-pointer"
            >
              بعدی
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersList;




