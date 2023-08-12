'use client'

import { XMarkIcon } from '@heroicons/react/24/outline'
import { Bars3Icon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { css, cva, cx } from 'styled-system/css'
import { vstack } from 'styled-system/patterns'

import { UnorderedList } from '../List'
import { Overlay } from '../Overlay'

import { NAVIGATIONAL_ITEMS } from './constants'

const topNavMenu = css({
  hideFrom: 'md',
  color: 'text',
  width: '36px',
  borderWidth: '1px solid',
  borderColor: 'slate.100',
  mr: 'auto',
  ml: '1rem',
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

const navStack = vstack({
  p: '1rem',
  height: '100vh',
  width: '336px',
  bg: 'elevatedBg',
  borderRadius: 'lg',
  gap: 4,
})
const navigation = cva({
  base: {
    position: 'absolute',
    left: '-336px',
    transitionDuration: '0.3s',
  },
  variants: {
    visual: {
      visible: {
        left: 0,
      },
      hidden: {
        left: '-336px',
      },
    },
  },
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

  const isNavStackOpen = isMenuOpen ? 'visible' : 'hidden'

  return (
    <>
      <button className={topNavMenu} onClick={openMenu}>
        <Bars3Icon />
      </button>
      <Overlay isOpen={isMenuOpen}>
        <div className={cx(navStack, navigation({ visual: isNavStackOpen }))} ref={navRef}>
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