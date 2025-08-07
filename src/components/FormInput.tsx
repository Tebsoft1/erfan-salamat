import React, { useState } from 'react'
import type { FieldError, UseFormRegister } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

type InputType = 'text' | 'number' | 'password' | 'email' | 'tel'

interface FormInputProps {
  name: string
  label?: string
  placeholder?: string
  type?: InputType
  icon?: React.ReactNode
  register: UseFormRegister<any>
  error?: FieldError
  className?: string
  showTogglePassword?: boolean
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  placeholder,
  type = 'text',
  icon,
  register,
  error,
  className = '',
  showTogglePassword = false,
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === 'password'

  return (
    <div className="w-full mb-4">
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          {...register(name)}
          type={
            isPassword && showTogglePassword
              ? showPassword
                ? 'text'
                : 'password'
              : type
          }
          placeholder={placeholder}
          className={`w-full px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
            error ? 'border-rose-500' : 'border-gray-300'
          } ${className}`}
        />

        {icon && (
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300">
            {icon}
          </span>
        )}

        {isPassword && showTogglePassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>

      {error && <p className="mt-1 text-sm text-rose-500">{error.message}</p>}
    </div>
  )
}

export default FormInput
