import './globals.css'
import formatDate from 'date-fns/format'
import { GeistSans, GeistMono } from 'geist/font'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { flex, hstack } from 'styled-system/patterns'

import { NAVIGATIONAL_ITEMS } from '@/components/AppShell/constants'
import { cn } from '@/lib/utils'
import { TopNavbar, SideNavDrawer, Paper, PageAvatar, Footer } from '@ui/AppShell'
import { UnorderedList } from '@ui/List'

const globalNavStack = hstack({
  width: '100%',
  mt: {
    smDown: '1rem',
  },
  justifyContent: 'space-between',
  '& :nth-child(1)': {
    order: {
      md: 2,
    },
  },
  '& :nth-child(2)': {
    order: {
      md: 1,
    },
  },
  '& :nth-child(3)': {
    order: 3,
  },
  '& :nth-child(4)': {
    order: 4,
  },
})

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
          <div className={globalNavStack}>
            <SideNavDrawer />
            <PageAvatar />
            <TopNavbar />
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
