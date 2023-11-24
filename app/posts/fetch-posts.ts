import path from 'path'

import { compareDesc } from 'date-fns'

import { Post } from './types'

import { getMDXDataForAllPosts, getMdxDataForSinglePost } from '@/lib/mdx'

export function fetchAllPosts(): Post[] {
  try {
    const allPosts = getMDXDataForAllPosts(path.join(process.cwd(), 'posts'))
    const postsDesc = allPosts.sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)))

    return postsDesc
  } catch (err) {
    throw new Error(`Unable to retrieve blog posts due to ${err}`)
  }
}

export function fetchPostBySlug(slug: string): Post {
  try {
    const fileName = path.join(process.cwd(), 'posts', `${slug}.mdx`)
    return getMdxDataForSinglePost(fileName)
  } catch (err) {
    throw new Error(`Unable to retrieve post with slug: ${slug} due to ${err}`)
  }
}

export function getPreviousPost(slug: string): Post | undefined {
  const allPosts = fetchAllPosts()

  const postIndex = allPosts.findIndex((post) => post.slug === slug)

  if (postIndex === allPosts.length - 1) {
    return undefined
  }

  return allPosts[postIndex + 1]
}
