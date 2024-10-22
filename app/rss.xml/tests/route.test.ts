import { GET, SITE_MAP_CATEGORIES } from '../route'

import { EMAIL, JAMES_WALSH, PRODUCTION_URL, SITE_DESCRIPTION } from '@/lib/constants'

vi.mock('@/app/posts/actions', () => ({
  fetchPublishedPosts: vi.fn().mockResolvedValue([]),
}))

describe('rss.xml', () => {
  describe('GET', () => {
    const mockDateTime = new Date(2024, 10, 31)

    beforeAll(() => {
      vi.useFakeTimers()
      vi.setSystemTime(mockDateTime)
    })

    afterAll(() => {
      vi.useRealTimers()
    })
    it('returns properly formatted atom+xml rss response', async () => {
      const response = await GET()
      const blob = await response.blob()
      const text = await blob.text()
      console.log('text:', text)

      expect(response.ok).toBeTruthy()
      expect(blob.type).toEqual('application/atom+xml; charset=utf-8')
      expect(text).toContain(`<title><![CDATA[${JAMES_WALSH}]]></title>`)
      expect(text).toContain(`<description><![CDATA[${SITE_DESCRIPTION}]]></description>`)
      expect(text).toContain(`<link>${PRODUCTION_URL}</link>`)
      expect(text).toContain(
        `<atom:link href="https://www.jameswalsh.dev/feed.xml" rel="self" type="application/rss+xml"/>`,
      )
      expect(text).toContain(`<copyright><![CDATA[2024 ${JAMES_WALSH}}]]></copyright>`)
      expect(text).toContain(`<managingEditor><![CDATA[${EMAIL}]]></managingEditor>`)
      expect(text).toContain(`<webMaster><![CDATA[${EMAIL}]]></webMaster>`)
      expect(text).toContain(`<language><![CDATA[en-us]]></language>`)
      expect(text).toContain(`<pubDate>Sun, 01 Dec 2024 07:00:00 GMT</pubDate>`)
      SITE_MAP_CATEGORIES.forEach((category) => {
        expect(text).toContain(`<category><![CDATA[${category}]]></category>`)
      })
    })

    it.todo('adds blog posts as xml feed items')
  })
})
