import { useEffect, useState } from 'react'

type TimerPropsType = {
  initialSeconds: number
  onTimeFinish?: () => void
}

export const useTimer = (props: TimerPropsType) => {
  const { initialSeconds, onTimeFinish } = props

  const [secondsLeft, setSecondsLeft] = useState(initialSeconds)

  useEffect(() => {
    const timerId = setInterval(() => {
      setSecondsLeft((prev: number) => {
        if (prev <= 1) {
          clearInterval(timerId)
          onTimeFinish?.()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timerId)
  }, [onTimeFinish])

  const minutes = Math.floor(secondsLeft / 60)
  const seconds = secondsLeft % 60

  const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`

  return formattedTime
}

export default useTimer
