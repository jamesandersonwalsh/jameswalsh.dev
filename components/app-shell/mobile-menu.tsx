import { Menu } from 'lucide-react'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { SITE_NAVIGATIONAL_ITEMS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu
          className="absolute right-0 mb-4 mr-6 mt-6 h-10 w-10 cursor-pointer md:hidden"
          data-testid="mobile-menu-trigger"
        />
      </SheetTrigger>
      <SheetContent>
        <ul className="mt-6 flex flex-col gap-6">
          <li className="w-full" data-testid="home-mobile-nav-item">
            <SheetClose asChild>
              <Link href="/" className={cn(buttonVariants({ variant: 'ghost' }), 'w-full')}>
                Home
              </Link>
            </SheetClose>
          </li>
          {SITE_NAVIGATIONAL_ITEMS.map((navItem) => {
            return (
              <li className="w-full" key={navItem.value} data-testid={`${navItem.value.toLowerCase()}-mobile-nav-item`}>
                <SheetClose asChild>
                  <Link href={navItem.href} className={cn(buttonVariants({ variant: 'ghost' }), 'w-full')}>
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
