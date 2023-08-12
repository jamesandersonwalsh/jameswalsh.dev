import './global.css'
import formatDate from 'date-fns/format'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { flex } from 'styled-system/patterns'

import { getColorModeCookie } from './actions'

import { NAVIGATIONAL_ITEMS } from '@/components/AppShell/constants'
import { TopNavbar, SideNavDrawer, Paper, PageAvatar, Footer } from '@ui/AppShell'
import { ColorModeSwitcher } from '@ui/ColorModeSwitcher'
import { UnorderedList } from '@ui/List'

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'James Walsh',
  description: 'Full Stack Javascript Engineer',
}

const mainStyles = flex({
  direction: 'column',
  alignItems: 'center',
  py: '3rem',
  mt: '1rem',
})

export default async function RootLayout({ children }: PropsWithChildren) {
  const colorMode = await getColorModeCookie()

  return (
    <html lang="en" data-color-mode={colorMode}>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>James Walsh - Software Engineer, self-proclaimed developer advocate, UI/UX enthusiast.</title>
      <body className={inter.className}>
        <Paper>
          <TopNavbar />
          <SideNavDrawer />
          <ColorModeSwitcher />
          <main className={mainStyles}>{children}</main>
          <PageAvatar />
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
