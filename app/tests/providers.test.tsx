import { render } from '@testing-library/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

import { AnalyticsProvider, ThemeProvider } from '../providers'

import { MOCK_NEXT_PUBLIC_POSTHOG_KEY } from '@/test/mocks/constants'

vi.mock('posthog-js')
vi.mock('posthog-js/react', () => ({
  PostHogProvider: vi.fn(),
}))
vi.mock('next-themes', () => ({
  ThemeProvider: vi.fn(),
}))

const TestComponent = () => {
  return <div>Test Child Component</div>
}

describe('providers', () => {
  afterEach(() => {
    vi.unstubAllEnvs()
  })

  describe('AnalyticsProvider', () => {
    it('initializes posthog against the nextjs ingest endpoint', () => {
      vi.stubEnv('NEXT_PUBLIC_POSTHOG_KEY', MOCK_NEXT_PUBLIC_POSTHOG_KEY)
      vi.mocked(posthog)
      vi.mocked(PostHogProvider)

      render(
        <AnalyticsProvider>
          <TestComponent />
        </AnalyticsProvider>,
      )

      expect(PostHogProvider).toHaveBeenCalledOnce()
      expect(posthog.init).toHaveBeenCalledOnce()
      expect(posthog.init).toHaveBeenCalledWith(MOCK_NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: '/ingest',
        ui_host: 'https://us.posthog.com',
        person_profiles: 'identified_only',
        capture_pageview: false,
      })
    })
  })

  describe('ThemeProvider', () => {
    it('wraps child props in the NextThemesProvider', () => {
      vi.mocked(NextThemesProvider)

      render(<ThemeProvider>{<TestComponent />}</ThemeProvider>)
      expect(NextThemesProvider).toHaveBeenCalledOnce()
    })
  })
})
