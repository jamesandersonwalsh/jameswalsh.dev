import { compareDesc } from 'date-fns'

import { Post, allPosts } from 'contentlayer/generated'

export function fetchPublishedPosts(): Post[] {
  return allPosts
    .filter((post) => post.status === 'published')
    .sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)))
}
