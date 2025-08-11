import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Controller, type Control, type FieldError } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import { CiCalendarDate } from "react-icons/ci";
import React from "react";

interface FormInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  error?: FieldError;
  className?: string;
  control: Control<any>;
}

const DateInput: React.FC<FormInputProps> = ({
  name,
  label,
  placeholder,
  error,
  className = "",
  control,
}) => {
  return (
    <div className={`!w-full ${className}`}>
      {label && (
        <label className="block mb-1 text-sm font-medium text-secondary-500">
          {label}
        </label>
      )}

      <div
        className={`flex justify-between items-center gap-2 w-full px-5 py-3 border rounded-full ${
          error ? "border-rose-500" : "border-gray-300"
        }`}
      >
        <Controller
          name={name} 
          control={control}
          render={({ field }) => (
            <DatePicker
              calendar={persian}
              locale={persian_fa}
              value={field.value}
              onChange={(date) => field.onChange(date?.toDate?.() || null)}
              placeholder={placeholder}
               style={{
    border: "none",
    boxShadow: "none",
    outline: "none",
    background: "transparent",
  }}
            />
          )}
        />
        <span className="text-primary-700 text-lg">
          <CiCalendarDate />
        </span>
      </div>

      {error && (
        <p className="mt-1 text-sm text-rose-500">{error.message}</p>
      )}
    </div>
  );
};

export default DateInput;
