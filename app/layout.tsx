import './global.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { hstack } from 'styled-system/patterns'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'James Walsh',
  description: 'Full Stack Javascript Engineer',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNavbar />
        <main>{children}</main>
      </body>
    </html>
  )
}

const navBarStyles = hstack({
  justifyContent: 'space-between',
  bg: 'indigo.500',
  h: '4rem',
  px: '2rem',
  fontSize: 'xl',
  fontWeight: 'normal',
})
const rightNavStyles = hstack({
  gap: 8,
})
function TopNavbar() {
  return (
    <nav className={navBarStyles}>
      <Link href="/">James Walsh</Link>
      <ul className={rightNavStyles}>
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Projects</Link>
        </li>
        <li>
          <Link href="#">Blog</Link>
        </li>
        <li>
          <Link href="#">Contact Me</Link>
        </li>
      </ul>
    </nav>
  )
}
