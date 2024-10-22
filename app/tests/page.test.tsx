import { render, screen } from '@testing-library/react'

import HomePage from '../page'
import { fetchPublishedPosts } from '../posts/actions'

import { getMockPost } from '@/test/mocks/post'

vi.mock('../posts/actions', () => ({
  fetchPublishedPosts: vi.fn().mockResolvedValue([]),
}))
describe('HomePage', () => {
  it('displays page heading', async () => {
    render(await HomePage())

    expect(screen.getByRole('heading', { name: /hey 👋🏻 i'm james/i })).toBeInTheDocument()
  })

  it('displays intro text', async () => {
    render(await HomePage())

    const expectedText =
      /i'm a full-stack Software Engineer, UI\/UX enthusiast, tinkerer, & self-proclaimed developer advocate./i
    expect(screen.getByText(expectedText)).toBeInTheDocument()
  })

  it('renders blog post cards', async () => {
    const mockPosts = [
      getMockPost({ slug: 'slug-1', title: 'Title 1', brief: 'this is brief 1', publishedAt: '2020-01-02' }),
      getMockPost({ slug: 'slug-2', title: 'Title 2', brief: 'this is brief 2', publishedAt: '2020-01-03' }),
      getMockPost({ slug: 'slug-3', title: 'Title 3', brief: 'this is brief 3', publishedAt: '2020-01-04' }),
      getMockPost({ slug: 'slug-4', title: 'Title 4', brief: 'this is brief 4', publishedAt: '2020-01-05' }),
      getMockPost({ slug: 'slug-5', title: 'Title 5', brief: 'this is brief 5', publishedAt: '2020-01-06' }),
    ]
    vi.mocked(fetchPublishedPosts).mockResolvedValue(mockPosts)

    const { container } = render(await HomePage())

    mockPosts.forEach((blogPost, index) => {
      expect(container.querySelector(`a[href="/posts/${blogPost.slug}"]`)).toBeInTheDocument()
      expect(screen.getByAltText(`${blogPost.title} cover image`)).toBeInTheDocument()
      expect(screen.getByText(blogPost.title)).toBeInTheDocument()
      expect(screen.getByText(blogPost.brief)).toBeInTheDocument()
    })

    expect(screen.getAllByText(/read more/i).length).toEqual(mockPosts.length)
  })

  // TODO: @see https://linear.app/jdub/issue/JDUB-30/filter-home-page-blog-posts-to-latest-6
  it.todo('filters visible blog posts to latest 6')
})
