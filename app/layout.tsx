import './global.css'
import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'
import { flex } from 'styled-system/patterns'
import { TopNavbar, TopNavMenu, Paper, PageAvatar } from '@ui/AppShell'

const inter = Inter({ subsets: ['latin'] })

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
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
