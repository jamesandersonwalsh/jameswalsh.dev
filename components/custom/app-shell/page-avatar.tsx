'use client'

import { cva } from 'class-variance-authority'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar'

import { cn } from '@/lib/utils'

const linkVariants = cva('', {
  variants: {
    variant: {
      visible: 'visible',
      hidden: 'hidden',
    },
  },
  defaultVariants: {
    variant: 'visible',
  },
})

export function PageAvatar() {
  const pathname = usePathname()

  const showAvatar = pathname !== '/'

  const variant = showAvatar ? 'visible' : 'hidden'

  return (
    <Link href="/" className={cn(linkVariants({ variant }))}>
      <Avatar className="h-11 w-11">
        <AvatarImage src="/portraits/front-profile.webp" alt="@jamesandersonwalsh" />
        <AvatarFallback>JW</AvatarFallback>
      </Avatar>
    </Link>
  )
}
