import { render, screen } from '@testing-library/react'
import { usePathname } from 'next/navigation'

import { TopNavbar } from '../top-nav'

import { SITE_NAVIGATIONAL_ITEMS } from '@/lib/constants'

vi.mock('next/navigation', () => ({
  ...vi.importActual('next/navigation'),
  usePathname: vi.fn(),
}))

describe('components/app-shell/top-nav', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it.each(SITE_NAVIGATIONAL_ITEMS)('displays active state for navigation item $href', ({ href, value }) => {
    vi.mocked(usePathname).mockReturnValueOnce(href)

    render(<TopNavbar />)

    const siteNavItem = screen.getByRole('link', { name: value })

    expect(siteNavItem).toBeInTheDocument()
    expect(siteNavItem).toHaveAttribute('href', href)
    expect(siteNavItem).toHaveClass('border-b-2')
    expect(siteNavItem).toHaveClass('border-primary')
  })
})
