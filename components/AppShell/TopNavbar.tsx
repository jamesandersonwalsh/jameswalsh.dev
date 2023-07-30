'use client'

import Link from 'next/link'
import { hstack } from 'styled-system/patterns'
import { cva, css } from 'styled-system/css'
import { usePathname } from 'next/navigation'

const navBar = hstack({
  hideBelow: 'sm',
  bg: 'zinc.800',
  minH: '2.5rem',
  px: '0.25rem',
  fontWeight: 'normal',
  width: '360px',
  borderRadius: 'full',
  borderWidth: '1px',
  borderColor: 'zinc.700',
})
const navList = hstack({
  gap: 4,
  height: '36px',
  width: '100%',
})
const navItem = cva({
  base: {
    display: 'flex',
    height: 'fit-content',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0.25rem',
    px: '0.5rem',
    borderRadius: '2xl',
    width: '100%',
  },
  variants: {
    visual: {
      current: {
        bg: 'zinc.600',
      },
      default: {
        bg: 'inherit',
      },
    },
  },
})

export const navItems = [
  { href: '/posts', value: 'Posts' },
  { href: '/projects', value: 'Projects' },
  { href: '/about', value: 'About' },
  { href: '/stack', value: 'Stack' },
]

export function TopNavbar() {
  const pathname = usePathname()

  return (
    <nav className={navBar}>
      <ul className={navList}>
        {navItems.map((item) => {
          const variant = pathname.includes(item.href) ? 'current' : 'default'
          return (
            <li key={item.href} className={navItem({ visual: variant })}>
              <Link href={item.href} className={css({ color: 'inherit !important' })}>
                {item.value}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
