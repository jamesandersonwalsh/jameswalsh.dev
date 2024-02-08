import { fetchPostBySlug } from '../actions'

import * as mdx from '@/lib/mdx'
import type { Post } from '@/lib/types'
import { getMockFrontmatter } from '@/test/mocks/frontmatter'

vi.mock('@/lib/mdx')

describe('/posts/[slug]/actions', () => {
  describe('#fetchPostBySlug', () => {
    const slug = 'project-hail-mary'
    const mockPost: Post = {
      slug,
      source: '#MyCoolHeading\nsomeothercoolstuff',
      ...getMockFrontmatter(),
    }

    beforeEach(() => {
      vi.mocked(mdx.getPostFromMDX).mockResolvedValue(mockPost)
    })

    it('returns a post based on slug & filepath', async () => {
      const post = await fetchPostBySlug(slug)

      expect(post).toEqual(mockPost)
    })

    describe('when the blog post file does not exit', () => {
      class MockFileNotFoundError extends Error {
        code: string
        constructor(message = '', ...args: undefined[]) {
          super(message, ...args)
          this.code = 'ENOENT'
        }
      }

      it('will redirect using next/navigation notFound()', async () => {
        const serializedNextNotFound = 'NEXT_NOT_FOUND'

        vi.mocked(mdx.getPostFromMDX).mockRejectedValue(new MockFileNotFoundError())

        await expect(() => fetchPostBySlug(slug)).rejects.toThrowError(serializedNextNotFound)
      })
    })

    describe('when an unexpected error occurs', () => {
      it('handles it gracefully', async () => {
        const expectedErrorMessage = `Something went wrong. Unable to fetch a blog post for ${slug}`
        vi.mocked(mdx.getPostFromMDX).mockRejectedValue(new Error('ASTROPHAGE DETECTED!'))

        await expect(() => fetchPostBySlug(slug)).rejects.toThrowError(expectedErrorMessage)
      })
    })
  })
})
