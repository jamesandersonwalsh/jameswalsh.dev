import { PostFrontmatter } from '@/lib/types'

export function getMockFrontmatter(): PostFrontmatter {
  return {
    title: 'My Test Blog Post',
    description: 'How to write a blog',
    thumbnail: '/assets/images/thumbnail.webp',
    status: 'draft',
    publishedAt: '2024-02-08',
    lastModified: '2024-02-08',
    brief: 'Wanna get good at blogging?',
    tags: ['content-management', 'nextjs', 'javascript'],
  }
}
