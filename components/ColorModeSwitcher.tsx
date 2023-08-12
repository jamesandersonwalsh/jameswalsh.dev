import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { css } from 'styled-system/css'

import { getColorModeCookie, toggleColorModeCookie } from '../app/actions'

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

export async function ColorModeSwitcher() {
  const colorMode = await getColorModeCookie()
  const isLightMode = colorMode === 'light'

  return (
    <form action={toggleColorModeCookie}>
      <button className={themeSwitcher} type="submit">
        {isLightMode ? <MoonIcon width={28} height={28} /> : <SunIcon width={28} height={28} />}
      </button>
    </form>
  )
}
