'use client'

import Image from 'next/image'
import Link from 'next/link'
import { css } from 'styled-system/css'
import { circle } from 'styled-system/patterns'
import { usePathname } from 'next/navigation'

const link = css({
  mr: 'auto',
  position: 'absolute',
  left: '2rem',
  top: '1.5rem',
})
const avatar = circle()

export function PageAvatar() {
  const pathname = usePathname()

  const showAvatar = pathname !== '/'
  const avatarNavSize = 60

  if (!showAvatar) return

  return (
    <Link href="/" className={link}>
      <Image
        src="/portraits/profile.jpg"
        className={avatar}
        width={avatarNavSize}
        height={avatarNavSize}
        alt="Profile picture"
        unoptimized
      />
    </Link>
  )
}
