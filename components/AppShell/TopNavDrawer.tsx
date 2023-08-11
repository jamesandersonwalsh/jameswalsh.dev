'use client'

import { css, cva } from 'styled-system/css'
import { vstack } from 'styled-system/patterns'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { navigationalItems } from '.'
import { Overlay } from '../Overlay'
import { UnorderedList } from '../List'
import { XMarkIcon } from '@heroicons/react/24/outline'

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
const menuListContainer = vstack({
  position: 'absolute',
  right: 0,
  animation: 'drawerSlideIn 0.5s',
  py: '1rem',
  height: '100vh',
  width: '336px',
  bg: 'elevatedBg',
  borderRadius: 'lg',
  gap: 2,
})

const menuItem = cva({
  base: {
    m: '1rem',
    px: '8rem',
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

export function TopNavDrawer() {
  const pathname = usePathname()
  const [isMenuOpen, setMenuOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const onKeyPress = (event: KeyboardEvent) => {
      if (event.key == 'Escape') {
        closeMenu()
      }
    }
    document.addEventListener('click', closeMenu, false)
    document.addEventListener('keydown', onKeyPress, false)

    return () => {
      document.removeEventListener('click', closeMenu, false)
      document.removeEventListener('keydown', closeMenu, false)
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }
  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <button className={topNavMenu} onClick={toggleMenu}>
        <Bars3Icon />
      </button>
      <Overlay isOpen={isMenuOpen}>
        <div className={menuListContainer} ref={ref}>
          <XMarkIcon width={24} height={24} className={css({ ml: 'auto', mr: '1rem', cursor: 'pointer' })} />
          <UnorderedList>
            <Link href="/" className={menuItem({ visual: pathname === '/' ? 'current' : 'default' })}>
              <UnorderedList.ListItem>Home</UnorderedList.ListItem>
            </Link>
            {navigationalItems.map((navItem) => {
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
