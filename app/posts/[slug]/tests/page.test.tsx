import { render, screen } from '@testing-library/react'
import { PropsWithChildren } from 'react'

import * as slugPageActions from '../actions'
import PostPage from '../page'

import { getMockPost } from '@/test/mocks/post'

vi.mock('../actions', () => ({
  fetchPostBySlug: vi.fn(),
  fetchPreviousPost: vi.fn(() => Promise.resolve(undefined)),
}))
// vi.doMock('../actions')
vi.mock('../mdx-content', () => ({
  __esModule: true,
  default: vi.fn(({ children }: PropsWithChildren) => <div>{children}</div>),
}))
describe('posts/[slug]/page', () => {
  const mockSlug = 'my-slug'
  const tags = ['typescript', 'javascript', 'nextjs', 'ssr', 'ssg']
  const mockPost = getMockPost({ slug: mockSlug, title: 'How to win friends & influence people', tags })

  const mockDateTime = new Date(Date.UTC(2024, 9, 31, 0, 0, 0)) // happy halloween 🎃

  beforeAll(() => {
    vi.useFakeTimers()
    vi.setSystemTime(mockDateTime)
  })

  it('renders H1 for blog post', async () => {
    vi.mocked(slugPageActions.fetchPostBySlug).mockResolvedValue(mockPost)

    render(await PostPage({ params: { slug: mockSlug } }))

    expect(screen.getByRole('heading', { name: mockPost.title })).toBeInTheDocument()
  })

  it('renders the blog thumbnail image', async () => {
    vi.mocked(slugPageActions.fetchPostBySlug).mockResolvedValue(mockPost)

    render(await PostPage({ params: { slug: mockSlug } }))
    const articleImage = screen.getByAltText('Article cover image')
    const encodedThumbnailSrc = encodeURIComponent(mockPost.thumbnail)

    expect(articleImage).toBeInTheDocument()
    expect(articleImage.getAttribute('src')).toContain(encodedThumbnailSrc)
  })

  it('renders all the blog tags', async () => {
    vi.mocked(slugPageActions.fetchPostBySlug).mockResolvedValue(mockPost)

    render(await PostPage({ params: { slug: mockSlug } }))

    tags.forEach((tag) => {
      expect(screen.getByText(`#${tag}`)).toBeInTheDocument()
    })
  })

  it('renders blog time information', async () => {
    vi.mocked(slugPageActions.fetchPostBySlug).mockResolvedValue(mockPost)

    render(await PostPage({ params: { slug: mockSlug } }))

    expect(screen.getByText('Sep 13, 2024')).toHaveAttribute('datetime', '2024-09-14')
    expect(screen.getByText(/1 min read/i)).toBeInTheDocument()
    expect(screen.getByText(/about 2 months ago/i)).toBeInTheDocument()
  })

  it('renders a link to all posts', async () => {
    vi.mocked(slugPageActions.fetchPostBySlug).mockResolvedValue(mockPost)

    render(await PostPage({ params: { slug: mockSlug } }))

    expect(screen.getByRole('link', { name: /all posts/i })).toBeInTheDocument()
  })

  it('renders a link to the previous blog post', async () => {
    const mockPreviousPostSlug = 'previous-post-slug'
    const mockPreviousPost = getMockPost({ slug: mockPreviousPostSlug })
    vi.mocked(slugPageActions.fetchPostBySlug).mockResolvedValue(mockPost)
    vi.mocked(slugPageActions.fetchPreviousPost).mockResolvedValue(mockPreviousPost)

    render(await PostPage({ params: { slug: mockSlug } }))

    const linkToPreviousPost = screen.getByRole('link', { name: /next/i })

    expect(linkToPreviousPost).toBeInTheDocument()
    expect(linkToPreviousPost).toHaveAttribute('href', `/posts/${mockPreviousPost.slug}`)
  })
})
