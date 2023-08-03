'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { css } from 'styled-system/css'

const themeSwitcher = css({
  position: 'absolute',
  right: '0',
  color: 'gray.100',
  borderRadius: 'md',
  p: '0.33rem',
  _hover: {
    cursor: 'pointer',
    color: 'gray.400',
  },
})
export function ThemeSwitcher() {
  const [isLightMode, setIsLightMode] = useState(false)

  useEffect(() => {
    const dataColorModevalue = isLightMode ? 'light' : 'dark'
    document.documentElement.setAttribute('data-color-mode', dataColorModevalue)
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
