import React from 'react'

interface ICountdown {
	hours: number
	minutes: number
	seconds: number
}

const Timer = ({ hours = 0, minutes = 0, seconds = 60 }: ICountdown) => {
	const [time, setTime] = React.useState<ICountdown>({
		hours,
		minutes,
		seconds,
	})

	const tick = () => {
		if (time.hours === 0 && time.minutes === 0 && time.seconds === 0)
			reset()
		else if (time.hours === 0 && time.seconds === 0) {
			setTime({ hours: time.hours - 1, minutes: 59, seconds: 59 })
		} else if (time.seconds === 0) {
			setTime({
				hours: time.hours,
				minutes: time.minutes - 1,
				seconds: 59,
			})
		} else {
			setTime({
				hours: time.hours,
				minutes: time.minutes,
				seconds: time.seconds - 1,
			})
		}
	}

	const reset = () =>
		setTime({
			hours: time.hours,
			minutes: time.minutes,
			seconds: time.seconds,
		})

	React.useEffect(() => {
		const timerId = setInterval(() => tick(), 1000)
		return () => clearInterval(timerId)
	})

	return (
		<div>
            <p className={`${ time.seconds <= 10 ? 'text-red-500 animate-pulse': ''}`}>
                {`${time.hours.toString().padStart(2, '0')}:${time.minutes
				.toString()
				.padStart(2, '0')}:${time.seconds
				.toString()
                        .padStart(2, '0')}`}
            </p>
		</div>
	)
}

export default Timer
