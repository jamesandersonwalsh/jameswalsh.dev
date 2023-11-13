import './globals.css'
import formatDate from 'date-fns/format'
import { GeistSans, GeistMono } from 'geist/font'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

import { NAVIGATIONAL_ITEMS } from '@/components/custom/app-shell/constants'
import { TopNavbar } from '@/components/custom/app-shell/top-nav'
import { cn } from '@/lib/utils'

export const runtime = 'edge'

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={cn(`${GeistSans.variable} ${GeistMono.variable}`, 'dark')}>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className="flex flex-col overflow-x-hidden md:w-screen md:items-center">
        <div
          data-testid="paper"
          className="flex min-h-screen w-full max-w-[1024px] flex-col items-center p-4 md:w-[90vw] md:p-8 lg:w-[80vw]"
        >
          <TopNavbar />
          <main className="mt-4 flex flex-col py-10">{children}</main>
        </div>
        <footer className="flex w-screen flex-col justify-between border-t border-border px-10 py-4 sm:grid-cols-1 md:flex-row">
          <div className="my-4 flex flex-row items-center justify-center">
            <ul className="flex flex-row gap-6">
              {NAVIGATIONAL_ITEMS.map((item) => (
                <li className="w-full" key={item.value}>
                  <Link href={item.href}>{item.value}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="my-4 flex flex-row items-center justify-center">
            ©&nbsp;{formatDate(new Date(), 'yyyy')}&nbsp;James Walsh
          </div>
        </footer>
      </body>
    </html>
  )
}
