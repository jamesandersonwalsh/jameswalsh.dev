import './globals.css'
import formatDate from 'date-fns/format'
import { GeistSans, GeistMono } from 'geist/font'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

import { NAVIGATIONAL_ITEMS } from '@/components/custom/app-shell/constants'
import { MobileMenu } from '@/components/custom/app-shell/mobile-menu'
import { PageAvatar } from '@/components/custom/app-shell/page-avatar'
import { TopNavbar } from '@/components/custom/app-shell/top-nav'
import { ListItem, UnorderedList } from '@/components/custom/list'
import { cn } from '@/lib/utils'

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={cn(`${GeistSans.variable} ${GeistMono.variable}`, 'dark')}>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className="flex flex-col overflow-x-hidden md:w-screen md:items-center">
        <div
          data-testid="paper"
          className="flex min-h-screen w-full max-w-[1024px] flex-col items-center p-8 md:w-[90vw] lg:w-[80vw]"
        >
          <div data-testid="nav-wrapper" className="flex w-full flex-row justify-between gap-16 md:justify-center">
            <PageAvatar />
            <TopNavbar />
            <MobileMenu />
          </div>
          <main className="mt-4 flex flex-col items-center py-12 sm:px-4">{children}</main>
        </div>
        <footer className="flex w-screen flex-col justify-between border-t border-border p-4 sm:grid-cols-1 md:flex-row">
          <div className="my-4 flex flex-row items-center justify-center">
            <UnorderedList type="horizontal">
              {NAVIGATIONAL_ITEMS.map((item) => (
                <ListItem key={item.value}>
                  <Link href={item.href}>{item.value}</Link>
                </ListItem>
              ))}
            </UnorderedList>
          </div>
          <div className="my-4 flex flex-row items-center justify-center">
            ©&nbsp;{formatDate(new Date(), 'yyyy')}&nbsp;James Walsh
          </div>
        </footer>
      </body>
    </html>
  )
}
