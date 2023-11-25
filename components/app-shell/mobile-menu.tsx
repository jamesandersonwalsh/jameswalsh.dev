import { Menu } from 'lucide-react'
import Link from 'next/link'

import { NAVIGATIONAL_ITEMS } from './constants'

import { buttonVariants } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="absolute right-0 mb-4 mr-6 mt-6 h-10 w-10 cursor-pointer md:hidden" />
      </SheetTrigger>
      <SheetContent>
        <ul className="flex flex-col gap-6">
          <li className="w-full">
            <SheetClose asChild>
              <Link href="/" className={cn(buttonVariants({ variant: 'link' }), 'w-full')}>
                Home
              </Link>
            </SheetClose>
          </li>
          {NAVIGATIONAL_ITEMS.map((navItem) => {
            return (
              <li className="w-full" key={navItem.value}>
                <SheetClose asChild>
                  <Link href={navItem.href} className={cn(buttonVariants({ variant: 'link' }), 'w-full')}>
                    {navItem.value}
                  </Link>
                </SheetClose>
              </li>
            )
          })}
        </ul>
      </SheetContent>
    </Sheet>
  )
}
