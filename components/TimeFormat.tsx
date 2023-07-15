import { PropsWithChildren, TimeHTMLAttributes } from 'react'
import formatDate from 'date-fns/format'

type TimeFormatProps = {
  dateTime: string
  format?: 'LLLL dd, yyyy'
} & TimeHTMLAttributes<HTMLTimeElement> &
  PropsWithChildren

export function TimeFormat({
  dateTime,
  format = 'LLLL dd, yyyy',
  ...rest
}: TimeFormatProps) {
  const date = new Date(dateTime)

  return (
    <time dateTime={dateTime} {...rest}>
      {formatDate(date, format)}
    </time>
  )
}
