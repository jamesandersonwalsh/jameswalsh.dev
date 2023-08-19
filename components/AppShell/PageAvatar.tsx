'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cva } from 'styled-system/css'
import { circle } from 'styled-system/patterns'

const link = cva({
  variants: {
    visual: {
      visible: {
        visibility: 'visible',
      },
      hidden: {
        visibility: 'hidden',
      },
    },
  },
})
const avatar = circle()

export function PageAvatar() {
  const pathname = usePathname()

  const showAvatar = pathname !== '/'
  const avatarNavSize = 60

  const variant = showAvatar ? 'visible' : 'hidden'

  return (
    <Link href="/" className={link({ visual: variant })}>
      <Image
        src="/portraits/front-profile.webp"
        className={avatar}
        width={avatarNavSize}
        height={avatarNavSize}
        alt="Profile picture"
        unoptimized
      />
    </Link>
  )
}
