import { Menu } from 'lucide-react'
import Link from 'next/link'

import { buttonVariants } from '../../ui/button'
import { ListItem, UnorderedList } from '../list'

import { NAVIGATIONAL_ITEMS } from './constants'

import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="mb-4 h-10 w-10 cursor-pointer md:hidden" />
      </SheetTrigger>
      <SheetContent>
        <UnorderedList>
          <ListItem>
            <SheetClose asChild>
              <Link href="/" className={cn(buttonVariants({ variant: 'link' }), 'w-full')}>
                Home
              </Link>
            </SheetClose>
          </ListItem>
          {NAVIGATIONAL_ITEMS.map((navItem) => {
            return (
              <ListItem key={navItem.value}>
                <SheetClose asChild>
                  <Link href={navItem.href} className={cn(buttonVariants({ variant: 'link' }), 'w-full')}>
                    {navItem.value}
                  </Link>
                </SheetClose>
              </ListItem>
            )
          })}
        </UnorderedList>
      </SheetContent>
    </Sheet>
  )
}
