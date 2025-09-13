import BeatLoaderComponent from './BeatLoaderComponent'

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
      className={`py-3 px-8 rounded-md text-sm text-dunkel cursor-pointer ${
        isFormButton && canClick
          ? 'bg-primary-300 cursor-pointer'
          : 'bg-primary-300 cursor-not-allowed'
      } ${className}`}
      {...restProps}
    >
      {loading ? (
        <BeatLoaderComponent />
      ) : (
        text
      )}
    </button>
  )
}
export default Button
