import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { css } from 'styled-system/css'

import { getColorModeCookie, toggleColorModeCookie } from '../app/actions'

const themeSwitcher = css({
  mr: '1.5rem',
  top: {
    mdTo2xl: '2rem',
    smDown: '1.5rem',
  },
  color: 'text',
  borderRadius: 'md',
  p: '0.33rem',
  _hover: {
    cursor: 'pointer',
    _dark: {
      color: 'slate.100',
    },
    base: {
      color: 'slate.500',
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
