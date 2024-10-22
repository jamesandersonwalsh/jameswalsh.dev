import { render, screen } from '@testing-library/react'
import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'

import RootLayout from '../layout'

vi.mock('geist/font/mono', () => ({
  GeistMono: vi.fn(() => ({
    variable: '--geist-font-sans ',
  })),
}))
vi.mock('geist/font/sans', () => ({
  GeistSans: vi.fn(() => ({
    variable: '--geist-font-sans ',
  })),
}))
vi.mock('next/navigation', () => ({
  ...vi.importActual('next/navigation'),
  usePathname: vi.fn(),
}))
// TODO: migrate to latest posthog setup @see https://linear.app/jdub/issue/JDUB-31/migrate-to-new-posthog-setup
vi.mock('../providers', () => ({
  AnalyticsProvider: ({ children }: PropsWithChildren) => <div>{children}</div>,
}))

const TestComponent = () => {
  return <div>Hello World</div>
}

describe('RootLayout', () => {
  beforeEach(() => {
    vi.mocked(usePathname).mockReturnValueOnce('/')
  })

  it('displays the TopNavBar', async () => {
    render(await RootLayout({ children: <TestComponent /> }))

    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('displays the footer', async () => {
    render(await RootLayout({ children: <TestComponent /> }))

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('includes ahrefs site verification', async () => {
    const { container } = render(await RootLayout({ children: <TestComponent /> }))

    expect(container.querySelector('meta[name="ahrefs-site-verification"]')).toBeInTheDocument()
  })
})
