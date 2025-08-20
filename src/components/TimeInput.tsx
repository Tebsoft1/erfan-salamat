import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
import 'react-multi-date-picker/styles/colors/teal.css'
import { Controller, type Control, type FieldError } from 'react-hook-form'
import DatePicker from 'react-multi-date-picker'
import TimePicker from 'react-multi-date-picker/plugins/time_picker'
import { CiClock2 } from 'react-icons/ci'
import React from 'react'

interface TimeInputProps {
  name: string
  label?: string
  placeholder?: string
  icon?: React.ReactNode
  error?: FieldError
  className?: string
  control: Control<any>
  format?: string
  hideSeconds?: boolean
  iconClassname?: string
}

const TimeInput: React.FC<TimeInputProps> = ({
  name,
  label,
  placeholder = 'انتخاب زمان',
  error,
  className = '',
  control,
  format = 'HH:mm',
  hideSeconds = true,
  iconClassname,
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
          error ? 'border-rose-500' : 'border-gray-300'
        }`}
      >
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <DatePicker
              disableDayPicker
              calendar={persian}
              locale={persian_fa}
              value={field.value}
              onChange={(time) => field.onChange(time?.toDate?.() || null)}
              placeholder={placeholder}
              format={format}
              plugins={[
                <TimePicker key="time-picker" hideSeconds={hideSeconds} />,
              ]}
              containerStyle={{ flexGrow: 1 }}
              className="text-primary-700"
              inputClass="placeholder:text-xs"
              style={{
                border: 'none',
                boxShadow: 'none',
                outline: 'none',
                background: 'transparent',
              }}
            />
          )}
        />
        <span className="text-primary-700 text-lg">
          <CiClock2 className={iconClassname} />
        </span>
      </div>

      {error && <p className="mt-1 text-sm text-red">{error.message}</p>}
    </div>
  )
}

export default TimeInput
