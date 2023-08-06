'use client'

import Link from 'next/link'
import { hstack } from 'styled-system/patterns'
import { cva, css } from 'styled-system/css'
import { usePathname } from 'next/navigation'
import { navigationalItems } from '.'

const navBar = hstack({
  hideBelow: 'sm',
  bg: 'elevatedBg',
  minH: '2.5rem',
  px: '0.25rem',
  fontWeight: 'normal',
  width: '360px',
  borderRadius: 'full',
  borderWidth: '1px',
  boxShadow: 'sm',
  borderColor: 'borderColorMd',
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
    py: '0.2rem',
    px: '0.5rem',
    borderRadius: '2xl',
    width: '100%',
  },
  variants: {
    visual: {
      current: {
        bg: 'primaryBg',
        color: 'primaryTextLight',
      },
      default: {
        bg: 'inherit',
        color: 'text',
      },
    },
  },
})

export function TopNavbar() {
  const pathname = usePathname()

  return (
    <nav className={navBar}>
      <ul className={navList}>
        {navigationalItems.map((item) => {
          const variant = pathname.includes(item.href) ? 'current' : 'default'
          return (
            <li key={item.href} className={navItem({ visual: variant })}>
              <Link href={item.href}>{item.value}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
