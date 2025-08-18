import type { ServiceItemType } from "@/types/servicesTypes/Customers";
import { Controller, type Control, type FieldError } from 'react-hook-form'
import React from 'react'

type shiftType = {
  id: string,
  name: string
}

interface ShiftOptionsProps {
  name: string
  control: Control<any>
  service: ServiceItemType
  label?: string
  error?: FieldError
  className?: string
}

const ShiftOptions: React.FC<ShiftOptionsProps> = ({
  name,
  control,
  service,
  error,
  className = ''
}) => {
  const shifts: shiftType[] = [
    { id: '1', name: "شیفت صبح" },
    { id: '2', name: "شیفت عصر" },
    { id: '3', name: "شیفت شب" },
  ];

  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      <div className="p-5 flex flex-col gap-3">
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <div className="space-y-3">
              {shifts.map((shift) => (
                <ShiftOption 
                  key={shift.id}
                  shift={shift}
                  service={service}
                  selectedShift={field.value || ''}
                  onClick={(shiftId) => field.onChange(shiftId)}
                />
              ))}
            </div>
          )}
        />
        
        {error && (
          <p className="mt-2 text-sm text-rose-500">{error.message}</p>
        )}
      </div>
    </div>
  );
};

type ShiftOptionPropsType = {
  shift: shiftType,
  service: ServiceItemType
  onClick: (shiftId: string) => void
  selectedShift: string
}

const ShiftOption: React.FC<ShiftOptionPropsType> = (props) => {
  const { service, shift, selectedShift, onClick } = props
  
  const getShiftPrice = () => {
    switch(shift.id) {
      case '1':
        return service.servicePrice
      case '2':
        return service.servicePrice2
      case '3':
        return service.servicePrice3
      default:
        return service.servicePrice
    }
  }

  return (
    <button
      type="button"
      onClick={() => onClick(shift.id)}
      className={`flex flex-row justify-between items-center p-3 rounded-3xl border cursor-pointer w-full
        ${selectedShift === shift.id 
          ? "bg-blue border-blue text-secondary-100 scale-[1.02]" 
          : "bg-secondary-900 border-secondary-700 text-secondary-100"} 
        transition-all duration-300 hover:scale-[1.01]`}
    >
      <span className="font-medium">{shift.name}</span>
      <span className="text-sm">
        {getShiftPrice()?.toLocaleString('fa-IR')} ریال
      </span>
    </button>
  )
}

export default ShiftOptions