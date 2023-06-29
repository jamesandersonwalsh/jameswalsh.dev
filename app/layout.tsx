import './global.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { hstack, vstack, container } from 'styled-system/patterns'
import { css } from 'styled-system/css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'James Walsh',
  description: 'Full Stack Javascript Engineer',
}

const mainStyles = container({
  mx: '8rem',
  py: '4rem',
})
const paperStyles = vstack({
  height: '100vh',
  bg: 'slate.900',
  mx: '14rem',
  paddingTop: '2rem',
})
export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={paperStyles}>
          <TopNavbar />
          <main className={mainStyles}>{children}</main>
        </div>
      </body>
    </html>
  )
}

const navBarStyles = hstack({
  bg: 'slate.800',
  h: '2.5rem',
  px: '2rem',
  fontWeight: 'normal',
  maxWidth: '30vw',
  borderRadius: 'full',
  borderWidth: '1px',
  borderColor: 'slate.700',
})
const navStyles = hstack({
  gap: 4,
})
const navItemStyles = css({
  display: 'flex',
  alignItems: 'center',
  px: '0.5rem',
  borderRadius: 'md',
})
function TopNavbar() {
  return (
    <nav className={navBarStyles}>
      <ul className={navStyles}>
        <li className={navItemStyles}>
          <Link href="about">About</Link>
        </li>
        <li className={navItemStyles}>
          <Link href="blog">Blog</Link>
        </li>
        <li className={navItemStyles}>
          <Link href="projects">Projects</Link>
        </li>
        <li className={navItemStyles}>
          <Link href="stack">Stack</Link>
        </li>
      </ul>
    </nav>
  )
}
