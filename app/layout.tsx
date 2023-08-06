import './global.css'
import { Inter } from 'next/font/google'
import formatDate from 'date-fns/format'
import { PropsWithChildren } from 'react'
import { ThemeSwitcher } from '@ui/ModeSwitcher'
import { flex } from 'styled-system/patterns'
import { TopNavbar, navigationalItems, TopNavMenu, Paper, PageAvatar, Footer } from '@ui/AppShell'
import { UnorderedList } from '@ui/List'
import Link from 'next/link'

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

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" data-color-mode="dark">
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>James Walsh - Software Engineer, self-proclaimed developer advocate, UI/UX enthusiast.</title>
      <body className={inter.className}>
        <Paper>
          <TopNavbar />
          <TopNavMenu />
          <ThemeSwitcher />
          <main className={mainStyles}>{children}</main>
          <PageAvatar />
        </Paper>
        <Footer>
          <Footer.LeftElement>
            <UnorderedList type="horizontal">
              {navigationalItems.map((item) => (
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
