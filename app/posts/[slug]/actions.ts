import { hashNodeApi } from '@/lib'
import { Post } from '../types'

export async function fetchBlogPostBySlug(slug: string): Promise<Post> {
  try {
    const data = await hashNodeApi.get({
      query: `query { post(slug: "pnpm-has-yarn-and-npm-beat", hostname: "https://jameswalsh.hashnode.dev") { slug title brief coverImage dateAdded contentMarkdown } }`,
      variables: {},
    })
    console.info('Successfully retrieved blog posts from hashnode')

    return data.post
  } catch (err) {
    throw new Error(`Unable to retrieve blog posts due to ${err}`)
  }
}
