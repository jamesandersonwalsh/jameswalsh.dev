import './globals.css'
import formatDate from 'date-fns/format'
import { GeistSans, GeistMono } from 'geist/font'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { flex } from 'styled-system/patterns'

import { NAVIGATIONAL_ITEMS } from '@/components/app-shell/constants'
import { Footer } from '@/components/app-shell/footer'
import { MobileMenu } from '@/components/app-shell/mobile-menu'
import { PageAvatar } from '@/components/app-shell/page-avatar'
import { Paper } from '@/components/app-shell/paper'
import { TopNavbar } from '@/components/app-shell/top-nav'
import { UnorderedList } from '@/components/ui/list'
import { cn } from '@/lib/utils'

const mainStyles = flex({
  direction: 'column',
  alignItems: 'center',
  py: '3rem',
  px: {
    smDown: '1rem',
  },
  mt: '1rem',
})

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={cn(`${GeistSans.variable} ${GeistMono.variable}`, 'dark')}>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body>
        <Paper>
          <div className="flex w-full flex-row justify-center gap-16">
            <PageAvatar />
            <TopNavbar />
            <MobileMenu />
          </div>
          <main className={mainStyles}>{children}</main>
        </Paper>
        <Footer>
          <Footer.LeftElement>
            <UnorderedList type="horizontal">
              {NAVIGATIONAL_ITEMS.map((item) => (
                <UnorderedList.ListItem key={item.value}>
                  <Link href={item.href}>{item.value}</Link>
                </UnorderedList.ListItem>
              ))}
            </UnorderedList>
          </Footer.LeftElement>
          <Footer.RightElement>©&nbsp;{formatDate(new Date(), 'yyyy')}&nbsp;James Walsh</Footer.RightElement>
        </Footer>
      </body>
    </html>
  )
}
