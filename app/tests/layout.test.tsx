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
vi.mock('../providers', () => ({
  AnalyticsProvider: ({ children }: PropsWithChildren) => children,
}))
vi.mock('../PostHogPageView', () => ({
  default: (_props: unknown) => null,
}))

const TestComponent = () => {
  return <div>Hello World</div>
}

describe('RootLayout', () => {
  beforeAll(() => {
    // ? NOTE: This is here because of `validateDOMNesting` warnings that come from testing layout.tsx files. @see https://github.com/testing-library/react-testing-library/issues/1250.
    // ? NOTE: Should be able to fix for this in RTL + React 19.
    vi.stubGlobal('console', { ...console, warn: vi.fn(), log: vi.fn(), error: vi.fn() })
  })

  beforeEach(() => {
    vi.mocked(usePathname).mockReturnValueOnce('/')
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  afterAll(() => {
    vi.unstubAllGlobals() // Restore all global stubs
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
