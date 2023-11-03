import { cva } from 'class-variance-authority'

import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const tagVariants = cva('font-semibold cursor-default border-2', {
  variants: {
    variant: {
      blue: 'bg-blue-900 border-blue-800 text-blue-400',
      fuchsia: 'bg-fuchsia-900 border-fuchsia-800 text-fuchsia-400',
      violet: 'bg-violet-900 border-violet-800 text-violet-400',
      emerald: 'bg-emerald-900 border-emerald-800 text-emerald-400',
    },
  },
})
const COLOR_OPTS: TagColorOptions[] = ['emerald', 'fuchsia', 'blue', 'violet']

type TagColorOptions = 'blue' | 'fuchsia' | 'violet' | 'emerald'

interface TagProps {
  text: string
}

export function Tag({ text }: TagProps) {
  const hashString = (str: string) => {
    return str
      .split('')
      .map((char) => char.charCodeAt(0))
      .reduce((a, b) => a + b, 0)
  }

  const textToColor = (str: string) => COLOR_OPTS[hashString(str) % COLOR_OPTS.length]

  return (
    <Badge variant="outline" className={cn(tagVariants({ variant: textToColor(text) }))}>
      #{text}
    </Badge>
  )
}
