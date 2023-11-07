'use client'

import { cva } from 'class-variance-authority'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { NAVIGATIONAL_ITEMS } from './constants'

import { cn } from '@/lib/utils'

const topNavVariants = cva('transition ease-in-out relative block px-3 py-2 transition hover:text-primary', {
  variants: {
    variant: {
      default: '',
      current: 'animate-in fade-in-75 text-primary border-b-2 border-primary',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})
export function TopNavbar() {
  const pathname = usePathname()

  return (
    <nav className="pointer-events-auto hidden md:block">
      <ul className="flex rounded-full border px-3 text-sm font-medium">
        {NAVIGATIONAL_ITEMS.map((item) => {
          const variant = pathname.includes(item.href) ? 'current' : 'default'

          return (
            <li key={item.href}>
              <Link href={item.href} className={cn(topNavVariants({ variant }))}>
                {item.value}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
