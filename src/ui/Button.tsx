import { BeatLoader } from 'react-spinners'

type ButtonProps = {
  onsubmit?: () => void
  loading?: Boolean
  text: string
  isFormButton?: boolean
  canClick?: boolean
  className: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = (props: ButtonProps) => {
  const {
    onsubmit,
    loading,
    text,
    isFormButton = false,
    canClick,
    className,
    ...restProps
  } = props

  return (
    <button
      onClick={onsubmit}
      className={`py-3 px-8 rounded-md text-sm text-secondary-100 cursor-pointer  ${
        isFormButton && canClick
          ? 'bg-primary-700 cursor-pointer'
          : 'bg-secondary-300 cursor-not-allowed'
      } ${className}`}
      {...restProps}
    >
      {loading ? (
        <BeatLoader color="white" size={9} className="w-full" />
      ) : (
        text
      )}
    </button>
  )
}
export default Button
