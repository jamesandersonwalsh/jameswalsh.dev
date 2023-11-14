import { cva } from 'class-variance-authority'
import formatDate from 'date-fns/format'
import { PropsWithChildren, TimeHTMLAttributes } from 'react'

const timeVariants = cva('', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-md',
    },
  },
})

type TimeFormatProps = {
  dateTime: string
  format?: 'MMM dd, yyyy'
  size?: 'sm' | 'md'
} & TimeHTMLAttributes<HTMLTimeElement> &
  PropsWithChildren

export function Time({ dateTime, format = 'MMM dd, yyyy', size = 'md', ...rest }: TimeFormatProps) {
  const date = new Date(dateTime)

  return (
    <time className={timeVariants({ size })} dateTime={dateTime} {...rest}>
      {formatDate(date, format)}
    </time>
  )
}
