import { FadeLoader } from 'react-spinners'

type ButtonProps = {
  onsubmit?: () => void
  loading?: Boolean
  text: string
  className: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>
const Button = (props: ButtonProps) => {
  const { onsubmit, loading, text, className, ...restProps } = props
  return (
    <button
      onClick={onsubmit}
      className={`py-3 px-8 rounded-md text-sm font- ${className}`}
      {...restProps}
    >
      {loading ? <FadeLoader color="white" /> : text}
    </button>
  )
}
export default Button
