'use client'

import { XMarkIcon } from '@heroicons/react/24/outline'
import { Bars3Icon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { css, cva } from 'styled-system/css'
import { vstack, divider } from 'styled-system/patterns'

import { UnorderedList } from '../List'
import { Overlay } from '../Overlay'

import { NAVIGATIONAL_ITEMS } from './constants'

const topNavMenu = css({
  hideFrom: 'md',
  color: 'text',
  width: '36px',
  borderWidth: '1px solid',
  borderColor: 'gray.100',
  ml: 'auto',
  mr: '1rem',
  mt: '1rem',
  _hover: {
    cursor: 'pointer',
  },
})

const xIcon = css({
  ml: 'auto',
  mr: '1.5rem',
  mb: '0.5rem',
  cursor: 'pointer',
  color: 'text',
  borderRadius: 'sm',
  _hover: {
    bg: 'tertiaryHoverBg',
  },
  _active: {
    bg: 'tertiaryHoverBg',
  },
})

const navContainer = vstack({
  position: 'absolute',
  right: 0,
  animation: 'drawerSlideIn 0.5s',
  p: '1rem',
  height: '100vh',
  width: '336px',
  bg: 'elevatedBg',
  borderRadius: 'lg',
  gap: 4,
})
const menuItem = cva({
  base: {
    px: '6rem',
    py: '0.5rem',
    borderRadius: 'lg',
    color: 'text',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'medium',
    fontSize: 'lg',
    _hover: {
      bg: 'secondaryHoverBg',
      color: 'secondaryTextLight',
      cursor: 'pointer',
    },
  },
  variants: {
    visual: {
      current: {
        bg: 'secondaryBg',
        color: 'secondaryTextLight',
      },
      default: {
        bg: 'inherit',
        color: 'text',
      },
    },
  },
})

export function SideNavDrawer() {
  const pathname = usePathname()
  const [isMenuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  const openMenu = () => {
    setMenuOpen(true)
  }
  const closeMenu = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    const onKeyPress = (event: KeyboardEvent) => {
      if (event.key == 'Escape') {
        closeMenu()
      }
    }
    const onClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMenu()
      }
    }

    document.addEventListener('click', onClickOutside, false)
    document.addEventListener('keydown', onKeyPress, false)

    return () => {
      document.removeEventListener('click', onClickOutside, false)
      document.removeEventListener('keydown', closeMenu, false)
    }
  }, [isMenuOpen])

  return (
    <>
      <button className={topNavMenu} onClick={openMenu}>
        <Bars3Icon />
      </button>
      <Overlay isOpen={isMenuOpen}>
        <div className={navContainer} ref={navRef}>
          <XMarkIcon width={28} height={28} className={xIcon} onClick={closeMenu} />
          <UnorderedList>
            <Link href="/" className={menuItem({ visual: pathname === '/' ? 'current' : 'default' })}>
              <UnorderedList.ListItem>Home</UnorderedList.ListItem>
            </Link>
            {NAVIGATIONAL_ITEMS.map((navItem) => {
              const variant = pathname.includes(navItem.href) ? 'current' : 'default'

              return (
                <Link key={navItem.href} href={navItem.href} className={menuItem({ visual: variant })}>
                  <UnorderedList.ListItem>{navItem.value}</UnorderedList.ListItem>
                </Link>
              )
            })}
          </UnorderedList>
        </div>
      </Overlay>
    </>
  )
}
