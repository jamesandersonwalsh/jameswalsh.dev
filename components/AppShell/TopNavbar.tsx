import Link from 'next/link'
import { hstack } from 'styled-system/patterns'
import { css } from 'styled-system/css'

const navBar = hstack({
  hideBelow: 'sm',
  bg: 'slate.800',
  minH: '2.5rem',
  px: '2rem',
  fontWeight: 'normal',
  width: '360px',
  borderRadius: 'full',
  borderWidth: '1px',
  borderColor: 'slate.700',
})
const navList = hstack({
  gap: 4,
})
const navItem = css({
  display: 'flex',
  alignItems: 'center',
  px: '0.5rem',
  borderRadius: 'md',
})

export const navItems = [
  { href: '/about', value: 'About' },
  { href: '/posts', value: 'Posts' },
  { href: '/projects', value: 'Projects' },
  { href: '/stack', value: 'Stack' },
]

export function TopNavbar() {
  return (
    <nav className={navBar}>
      <ul className={navList}>
        {navItems.map((item) => (
          <li key={item.href} className={navItem}>
            <Link href={item.href}>{item.value}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
