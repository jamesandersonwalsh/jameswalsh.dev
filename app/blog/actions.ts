'use server'

export interface Post {
  slug: string
  title: string
  brief: string
  coverImage: string
  dateAdded: string
}

export async function fetchBlogPosts(): Promise<Post[]> {
  const requestOptions = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `${process.env.HASHNODE_API_TOKEN}`,
    },
    body: JSON.stringify({
      query: `query { user(username: "${process.env.HASH_NODE_HANDLE}") { publication { posts { slug title brief coverImage dateAdded } } } }`,
      variables: {},
    }),
  }

  try {
    const response = await fetch(process.env.HASH_NODE_API_HOST, requestOptions)
    const { data } = await response.json()
    console.info('Successfully retrieved blog posts from hashnode')

    return data.user.publication.posts
  } catch (err) {
    console.error('Unable to retrieve blog posts due to', err)

    return []
  }
}
