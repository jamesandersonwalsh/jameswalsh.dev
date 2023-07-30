import './global.css'
import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'
import { flex } from 'styled-system/patterns'
import { TopNavbar, TopNavMenu, Paper, PageAvatar } from '@ui/AppShell'

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
    <html lang="en">
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>James Walsh - Software Engineer, self-proclaimed developer advocate, UI/UX enthusiast.</title>
      <body className={inter.className}>
        <Paper>
          <TopNavbar />
          <TopNavMenu />
          <main className={mainStyles}>{children}</main>
          <PageAvatar />
        </Paper>
      </body>
    </html>
  )
}
