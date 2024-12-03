import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useTheme } from 'next-themes'

import { MobileMenu } from '../mobile-menu'

const mockSetTheme = vi.fn()

vi.mock('next-themes', () => ({
  useTheme: vi.fn(),
}))
vi.mock('next/router', () => ({
  useRouter: vi.fn(),
}))

describe('components/app-shell/MobileMenu', () => {
  beforeEach(() => {
    vi.mocked(useTheme).mockReturnValue({
      theme: 'light',
      setTheme: mockSetTheme,
      themes: ['light', 'dark', 'system'],
    })
  })

  it('renders the mobile menu as a sheet', () => {
    render(<MobileMenu />)
    expect(screen.getByTestId('mobile-menu-trigger')).toBeInTheDocument()
  })

  it.each([
    { dataTestId: 'home-nav-item', expectedText: /home/i },
    { dataTestId: 'blog-nav-item', expectedText: /blog/i },
    { dataTestId: 'about-nav-item', expectedText: /about/i },
    { dataTestId: 'stack-nav-item', expectedText: /stack/i },
    { dataTestId: 'portfolio-nav-item', expectedText: /portfolio/i },
    { dataTestId: 'rss-feed-text-nav-item', expectedText: /get rss feed/i }, // TODO: In the future, using MSW for this would be preferred.
    { dataTestId: 'mode-toggle-text-nav-item', expectedText: /toggle light mode|toggle dark mode/i },
  ])('displays nav item for $expectedText', async ({ dataTestId, expectedText }) => {
    const user = userEvent.setup()
    render(<MobileMenu />)

    await user.click(screen.getByTestId('mobile-menu-trigger'))

    expect(screen.getByRole('dialog')).toBeVisible()
    expect(screen.getByTestId(dataTestId)).toBeInTheDocument()
    expect(screen.getByText(expectedText)).toBeInTheDocument()

    await user.click(screen.getByText(expectedText))

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })
  })

  it.each([
    { currentTheme: 'light', expectedText: /toggle dark mode/i },
    { currentTheme: 'dark', expectedText: /toggle light mode/i },
  ])('user can select $expectedText when current theme is $currentTheme', async ({ currentTheme, expectedText }) => {
    vi.mocked(useTheme).mockReturnValue({
      theme: 'light',
      setTheme: mockSetTheme,
      themes: ['light', 'dark', 'system'],
    })
    const user = userEvent.setup()
    render(<MobileMenu />)

    await user.click(screen.getByTestId('mobile-menu-trigger'))

    await user.click(screen.getByText(/toggle dark mode/i))
  })
})
