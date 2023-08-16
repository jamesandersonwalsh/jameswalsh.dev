import './global.css'
import formatDate from 'date-fns/format'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { flex, hstack } from 'styled-system/patterns'

import { getColorModeCookie } from './actions'

import { NAVIGATIONAL_ITEMS } from '@/components/AppShell/constants'
import { TopNavbar, SideNavDrawer, Paper, PageAvatar, Footer } from '@ui/AppShell'
import { ColorModeSwitcher } from '@ui/ColorModeSwitcher'
import { UnorderedList } from '@ui/List'

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const globalNavStack = hstack({
  width: '100%',
  mt: {
    smDown: '1rem',
  },
  justifyContent: 'space-between',
  '& :nth-child(1)': {
    order: {
      mdTo2xl: 2,
    },
  },
  '& :nth-child(2)': {
    order: {
      mdTo2xl: 1,
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
  const colorMode = await getColorModeCookie()

  return (
    <html lang="en" data-color-mode={colorMode}>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={inter.className}>
        <Paper>
          <div className={globalNavStack}>
            <SideNavDrawer />
            <PageAvatar />
            <TopNavbar />
            <ColorModeSwitcher />
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
