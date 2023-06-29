import './global.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { hstack } from 'styled-system/patterns'
import { css } from 'styled-system/css'

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
  gap: 4,
  height: '100%',
})
const rightNavItemStyles = css({
  display: 'flex',
  alignItems: 'center',
  height: '3/4',
  px: '0.5rem',
  borderRadius: 'md',
  _hover: {
    bg: 'indigo.400',
  },
})
function TopNavbar() {
  return (
    <nav className={navBarStyles}>
      <Link href="/">James Walsh</Link>
      <ul className={rightNavStyles}>
        <li className={rightNavItemStyles}>
          <Link href="#">About</Link>
        </li>
        <li className={rightNavItemStyles}>
          <Link href="#">Projects</Link>
        </li>
        <li className={rightNavItemStyles}>
          <Link href="#">Blog</Link>
        </li>
        <li className={rightNavItemStyles}>
          <Link href="#">Contact Me</Link>
        </li>
      </ul>
    </nav>
  )
}
