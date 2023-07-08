'use server'

import { hashNodeApi } from '@/lib'
import { Post } from './types'

export async function fetchBlogPosts(): Promise<Post[]> {
  try {
    const data = await hashNodeApi.get({
      query: `query { user(username: "${process.env.HASH_NODE_HANDLE}") { publication { posts { slug title brief coverImage dateAdded } } } }`,
      variables: {},
    })
    console.info('Successfully retrieved blog posts from hashnode')

    return data.user.publication.posts
  } catch (err) {
    console.error('Unable to retrieve blog posts due to', err)

    return []
  }
}
