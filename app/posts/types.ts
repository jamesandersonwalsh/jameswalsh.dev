export interface Post {
  title: string
  coverImage: string
  status: 'publshed' | 'draft'
  slug: string
  publishedAt: string
  brief: string
  tags: string[]
  content: string
}
