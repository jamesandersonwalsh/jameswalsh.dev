'use client'

import { css } from 'styled-system/css'
import { vstack } from 'styled-system/patterns'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { navItems } from './TopNavbar'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Overlay } from '../Overlay'

const topNavMenuStyles = css({
  hideFrom: 'md',
  color: 'slate.50',
  width: '36px',
  borderWidth: '1px solid',
  borderColor: 'slate.100',
  // TODO: compose this
  ml: 'auto',
  mr: '1rem',
  // TODO: end compose this
  _hover: {
    cursor: 'pointer',
  },
})
const menuItemListStyles = vstack({
  width: '90vw',
  padding: '0.5rem',
  bg: 'slate.900',
  mx: 'auto',
  mt: '2rem',
  borderRadius: 'lg',
  gap: 8,
})
const menuItemStyles = css({
  p: '0.33rem',
  width: '100%',
  textAlign: 'center',
  fontWeight: 'medium',
  fontSize: 'md',
  _hover: {
    cursor: 'pointer',
  },
})

export function TopNavMenu() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const onKeyPress = (event: KeyboardEvent) => {
      // TODO: fix deprecation warning
      if (event.keyCode === 27) {
        closeMenu()
      }
    }
    document.addEventListener('click', closeMenu, false)
    document.addEventListener('keydown', onKeyPress, false)
    // TODO: one for tabbing out of the menu.
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
  // TODO: need keydown to handle esc

  return (
    <>
      <button className={topNavMenuStyles} onClick={toggleMenu}>
        <Bars3Icon />
      </button>
      <Overlay isOpen={isMenuOpen}>
        <ol className={menuItemListStyles} ref={ref}>
          {navItems.map((navItem) => (
            <li key={navItem.href} className={menuItemStyles}>
              <Link href={navItem.href}>{navItem.value}</Link>
            </li>
          ))}
        </ol>
      </Overlay>
    </>
  )
}
