import { compareDesc } from 'date-fns'

import { Post, allPosts } from 'contentlayer/generated'

export default function getAllPosts(): Post[] {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)))
  return posts
}
