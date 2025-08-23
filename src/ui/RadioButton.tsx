import type { UseFormRegister } from 'react-hook-form'

type RadioButtonProps = {
  radioId: string
  register: UseFormRegister<any>
  name: string
  text: string
  value: string
}

const RadioButton = (props: RadioButtonProps) => {
  const { radioId, name, register, text, value } = props
  return (
    <div className="flex items-center gap-2">
      <input
        {...register(name)}
        id={radioId}
        type="radio"
        value={value}
        className="w-6 h-6 bg-white  
                   checked:bg-primary-500 
                   checked:focus:ring-primary-300
                   transition-all duration-200"
      />
      <label htmlFor={radioId} className="text-sm font-bold text-primary-900">
        {text}
      </label>
    </div>
  )
}
export default RadioButton
