import './global.css'
import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'
import { container } from 'styled-system/patterns'
import { TopNavbar } from '@ui/AppShell/TopNavbar'
import { Paper } from '@ui/AppShell/Paper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'James Walsh',
  description: 'Full Stack Javascript Engineer',
}

const mainStyles = container({
  py: '4rem',
})
export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <header>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
        ></link>
      </header>
      <body className={inter.className}>
        <Paper>
          <TopNavbar />
          <main className={mainStyles}>{children}</main>
        </Paper>
      </body>
    </html>
  )
}
