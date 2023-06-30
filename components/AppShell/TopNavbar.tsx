import Link from 'next/link'
import { hstack } from 'styled-system/patterns'
import { css } from 'styled-system/css'

const navBarStyles = hstack({
  hideBelow: 'sm',
  bg: 'slate.800',
  minH: '2rem',
  px: '2rem',
  fontWeight: 'normal',
  width: '360px',
  borderRadius: 'full',
  borderWidth: '1px',
  borderColor: 'slate.700',
})
const navListStyles = hstack({
  gap: 4,
})
const navItemStyles = css({
  display: 'flex',
  alignItems: 'center',
  px: '0.5rem',
  borderRadius: 'md',
})

export function TopNavbar() {
  return (
    <nav className={navBarStyles}>
      <ul className={navListStyles}>
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
