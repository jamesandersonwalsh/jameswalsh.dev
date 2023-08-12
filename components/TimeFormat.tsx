import formatDate from 'date-fns/format'
import { PropsWithChildren, TimeHTMLAttributes } from 'react'
import { cva } from 'styled-system/css'

const timeFormat = cva({
  base: {},
  variants: {
    size: {
      sm: {
        fontSize: 'sm',
      },
      md: {
        fontSize: 'md',
      },
    },
  },
})

type TimeFormatProps = {
  dateTime: string
  format?: 'LLLL dd, yyyy'
  size?: 'sm' | 'md'
} & TimeHTMLAttributes<HTMLTimeElement> &
  PropsWithChildren

export function TimeFormat({ dateTime, format = 'LLLL dd, yyyy', size = 'md', ...rest }: TimeFormatProps) {
  const date = new Date(dateTime)

  return (
    <time className={timeFormat({ size })} dateTime={dateTime} {...rest}>
      {formatDate(date, format)}
    </time>
  )
}
