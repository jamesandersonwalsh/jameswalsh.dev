'use client'

import { css } from 'styled-system/css'

const topNavMenuStyles = css({
  hideFrom: 'md',
})
export function TopNavMenu() {
  return <div className={topNavMenuStyles}>Im a menu</div>
}
