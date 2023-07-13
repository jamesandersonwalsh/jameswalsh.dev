'use client'

import Image from 'next/image'
import Link from 'next/link'
import { css } from 'styled-system/css'
import { circle } from 'styled-system/patterns'
import { usePathname } from 'next/navigation'

const pageAvatarStyles = css({
  mr: 'auto',
  position: 'absolute',
  left: '2rem',
  top: '1.5rem',
})
export function PageAvatar() {
  const pathname = usePathname()

  const showAvatar = pathname !== '/'
  const avatarNavSize = 60

  if (!showAvatar) return

  return (
    <Link href="/" className={pageAvatarStyles}>
      <Image
        src="/profile.jpg"
        className={circle()}
        width={avatarNavSize}
        height={avatarNavSize}
        alt="Profile picture"
        unoptimized
      />
    </Link>
  )
}
