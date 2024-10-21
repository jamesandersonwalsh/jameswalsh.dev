import sitemap from '../sitemap'

import { PRODUCTION_URL } from '@/lib/constants'

describe('sitemap', () => {
  const mockDateTime = new Date(2024, 10, 31) // happy halloween
  beforeEach(() => {
    vi.setSystemTime(mockDateTime)
  })

  afterEach(() => {
    vi.clearAllMocks()
    vi.clearAllTimers()
  })

  it.each([
    ['about', { url: `${PRODUCTION_URL}/about`, lastModified: mockDateTime, changeFrequency: 'yearly', priority: 0.7 }],
    [
      'projects',
      { url: `${PRODUCTION_URL}/projects`, lastModified: mockDateTime, changeFrequency: 'yearly', priority: 0.5 },
    ],
    [
      'stack',
      { url: `${PRODUCTION_URL}/projects`, lastModified: mockDateTime, changeFrequency: 'yearly', priority: 0.1 },
    ],
    ['posts', { url: `${PRODUCTION_URL}/posts`, lastModified: mockDateTime, changeFrequency: 'weekly', priority: 0.8 }],
  ])('contains sitemap record for /%s', async () => {
    const sitemapList = await sitemap()
    expect(sitemapList.find((sm) => sm.url.includes('/about'))).toEqual({
      url: `${PRODUCTION_URL}/about`,
      lastModified: mockDateTime,
      changeFrequency: 'yearly',
      priority: 0.7,
    })
  })

  it('contains sitemap record for index', async () => {
    const sitemapList = await sitemap()
    expect(sitemapList[0]).toEqual({
      url: PRODUCTION_URL,
      lastModified: mockDateTime,
      changeFrequency: 'monthly',
      priority: 1,
    })
  })

  it.todo('contains sitemap record for all blog posts')
})
