'use client'

import { cva } from 'class-variance-authority'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { NAVIGATIONAL_ITEMS } from './constants'

import { cn } from '@/lib/utils'

const topNavVariants = cva('', {
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
    <nav className="hidden w-full flex-row justify-between px-9 py-6 md:flex">
      <ul data-testid="left-nav" className="flex flex-row items-center gap-6 text-xl font-medium">
        <li>
          <Link
            href="/"
            className={cn(
              'relative block px-3 py-2 transition ease-in-out hover:text-primary',
              topNavVariants({ variant: pathname === '/' ? 'current' : 'default' }),
            )}
          >
            James Walsh
          </Link>
        </li>
        {NAVIGATIONAL_ITEMS.map((item) => {
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  'relative block px-3 py-2 transition ease-in-out hover:text-primary',
                  topNavVariants({ variant: pathname.includes(item.href) ? 'current' : 'default' }),
                )}
              >
                <span className="text-lg">{item.value}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
