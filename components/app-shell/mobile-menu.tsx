'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cva } from 'styled-system/css'

import { UnorderedList } from '../ui/list'

import { NAVIGATIONAL_ITEMS } from './constants'

import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

const menuItem = cva({
  base: {
    px: '6rem',
    py: '0.5rem',
    borderRadius: 'lg',
    color: 'text',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'medium',
    fontSize: 'lg',
    _hover: {
      bg: 'secondaryHoverBg',
      color: 'secondaryTextLight',
      cursor: 'pointer',
    },
  },
  variants: {
    visual: {
      current: {
        bg: 'secondaryBg',
        color: 'secondaryTextLight',
      },
      default: {
        bg: 'inherit',
        color: 'text',
      },
    },
  },
})

export function MobileMenu() {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="h-10 w-10 cursor-pointer md:hidden" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>James Walsh</SheetTitle>
        </SheetHeader>
        <UnorderedList>
          <Link href="/" className={menuItem({ visual: pathname === '/' ? 'current' : 'default' })}>
            <UnorderedList.ListItem>Home</UnorderedList.ListItem>
          </Link>
          {NAVIGATIONAL_ITEMS.map((navItem) => {
            const variant = pathname.includes(navItem.href) ? 'current' : 'default'

            return (
              <SheetClose key={navItem.href} asChild>
                <Link href={navItem.href} className={menuItem({ visual: variant })}>
                  <UnorderedList.ListItem>{navItem.value}</UnorderedList.ListItem>
                </Link>
              </SheetClose>
            )
          })}
        </UnorderedList>
      </SheetContent>
    </Sheet>
  )
}
