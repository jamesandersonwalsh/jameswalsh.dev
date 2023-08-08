'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { css } from 'styled-system/css'

const themeSwitcher = css({
  hideBelow: 'sm',
  position: 'absolute',
  right: '0',
  color: 'text',
  borderRadius: 'md',
  p: '0.33rem',
  _hover: {
    cursor: 'pointer',
    _dark: {
      color: 'gray.100',
    },
    base: {
      color: 'zinc.500',
    },
  },
})
export function ThemeSwitcher() {
  const [isLightMode, setIsLightMode] = useState(localStorage.getItem('mode') === 'light')

  const setMode = (mode: string) => {
    document.documentElement.setAttribute('data-color-mode', mode)
    localStorage.setItem('mode', mode)
  }

  useEffect(() => {
    const mode = isLightMode ? 'light' : 'dark'
    setMode(mode)
  }, [isLightMode])

  const handleToggle = () => {
    setIsLightMode(!isLightMode)
  }
  return (
    <button className={themeSwitcher} onClick={handleToggle}>
      {isLightMode ? <MoonIcon width={28} height={28} /> : <SunIcon width={28} height={28} />}
    </button>
  )
}
