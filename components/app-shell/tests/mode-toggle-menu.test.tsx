import { render, screen, act, waitFor } from '@testing-library/react'
import { useTheme } from 'next-themes'

import { ModeToggleMenu } from '../mode-toggle-menu'

vi.mock('next-themes', () => ({
  useTheme: vi.fn(),
}))

describe('components/app-shell/ModeToggleMenu', () => {
  beforeEach(() => {
    vi.mocked(useTheme).mockReturnValue({
      theme: 'light',
      setTheme: vi.fn(),
      themes: ['light', 'dark', 'system'],
    })
  })

  // TODO: fix me.
  it.skip('displays a dropdown menu with light, dark, and system options', async () => {
    render(<ModeToggleMenu />)

    act(() => screen.getByRole('button').click())

    screen.getByRole('menuitem', { name: /light/i })
    screen.getByRole('menuitem', { name: /dark/i })
    screen.getByRole('menuitem', { name: /system/i })
  })

  it.todo('uses the system theme as the default')

  it.todo('calls setTheme with the selected theme when an option is clicked')
})
