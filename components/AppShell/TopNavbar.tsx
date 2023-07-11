'use client'

import { circle } from 'styled-system/patterns'
import Link from 'next/link'
import { hstack } from 'styled-system/patterns'
import { css } from 'styled-system/css'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

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
const homeLinkStyles = css({
  mr: 'auto',
  position: 'absolute',
  left: '1.5rem',
  top: '1.5rem',
})

export function TopNavbar() {
  const pathname = usePathname()
  const showAvatar = pathname !== '/'
  const avatarNavSize = 60

  return (
    <>
      {showAvatar && (
        <Link href="/" className={homeLinkStyles}>
          <Image
            src="/profile.jpg"
            className={circle()}
            width={avatarNavSize}
            height={avatarNavSize}
            alt="James profile picture"
          />
        </Link>
      )}
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
