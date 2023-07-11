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

export const navItems = [
  { href: 'about', value: 'About' },
  { href: 'posts', value: 'Posts' },
  { href: 'projects', value: 'Projects' },
  { href: 'stack', value: 'Stack' },
]

export function TopNavbar() {
  return (
    <>
      <nav className={navBarStyles}>
        <ul className={navListStyles}>
          {navItems.map((navItem) => (
            <li key={navItem.href} className={navItemStyles}>
              <Link href={navItem.href}>{navItem.value}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
