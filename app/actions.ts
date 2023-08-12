'use server'

import { cookies } from 'next/headers'

type ColorMode = 'light' | 'dark'

const DEFAULT_COLOR_MODE: ColorMode = 'dark'
const COLOR_MODE_COOKIE_KEY = 'colorMode'

export async function getColorModeCookie(): Promise<ColorMode> {
  const colorMode = cookies().get(COLOR_MODE_COOKIE_KEY)?.value as ColorMode

  return !colorMode ? DEFAULT_COLOR_MODE : colorMode
}

export async function toggleColorModeCookie(): Promise<void> {
  const colorMode = await getColorModeCookie()
  const toggledColorMode = colorMode === 'dark' ? 'light' : 'dark'

  await setColorModeCookie(toggledColorMode)
}

async function setColorModeCookie(colorMode: string): Promise<void> {
  cookies().set(COLOR_MODE_COOKIE_KEY, colorMode)
}
