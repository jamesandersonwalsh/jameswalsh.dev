import { formatDate } from 'date-fns/format'
import { PropsWithChildren, TimeHTMLAttributes } from 'react'

type TimeFormatProps = {
  dateTime: string
  format?: 'MMM dd, yyyy'
} & TimeHTMLAttributes<HTMLTimeElement> &
  PropsWithChildren

export function Time({ dateTime, format = 'MMM dd, yyyy', ...rest }: TimeFormatProps) {
  const date = new Date(dateTime)

  return (
    <time className="text-sm md:text-lg" dateTime={dateTime} {...rest}>
      {formatDate(date, format)}
    </time>
  )
}
