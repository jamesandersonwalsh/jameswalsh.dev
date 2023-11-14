'use client'

import { cva } from 'class-variance-authority'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { NAVIGATIONAL_ITEMS } from './constants'
import { MobileMenu } from './mobile-menu'

import { cn } from '@/lib/utils'

const topNavVariants = cva(
  'flex items-center px-5 w-18 mx-1 transition hover:bg-primary opacity-80 rounded-full h-full',
  {
    variants: {
      variant: {
        default: '',
        current: 'animate-in fade-in-75 bg-primary opacity-100',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)
export function TopNavbar() {
  const pathname = usePathname()

  return (
    <>
      <nav className="pointer-events-auto hidden md:flex md:flex-row md:justify-between md:gap-6">
        <ul className="flex h-12 items-center rounded-full border-2 py-1 text-sm font-medium">
          <li className="h-full">
            <Link href="/" className={cn(topNavVariants({ variant: pathname === '/' ? 'current' : 'default' }))}>
              Home
            </Link>
          </li>
          {NAVIGATIONAL_ITEMS.map((item) => {
            const variant = pathname.includes(item.href) ? 'current' : 'default'

            return (
              <li key={item.href} className="h-full">
                <Link href={item.href} className={cn(topNavVariants({ variant }))}>
                  {item.value}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <MobileMenu />
    </>
  )
}
