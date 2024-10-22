import { Post } from '@/lib/types'

export function getMockPost(overrides: Partial<Post> = {}): Post {
  return {
    slug: 'my-cool-slug-1',
    title: 'How to get good at posting on your blog',
    lastModified: '2024-09-14',
    publishedAt: '2024-09-14',
    source: 'How now brown cow.',
    thumbnail: '/blog-thumbnails/post-thumbnail.webp',
    ...overrides,
  } as Post // TODO: make this real, get rid of typecast.
}
