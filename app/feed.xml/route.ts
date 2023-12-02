import RSS from 'rss'

import { EMAIL, JAMES_WALSH, PRODUCTION_URL, SITE_DESCRIPTION } from '@/lib/constants'
import { fetchPublishedPosts } from '@/lib/posts'

export async function GET() {
  const feed = new RSS({
    title: JAMES_WALSH,
    description: SITE_DESCRIPTION,
    site_url: PRODUCTION_URL,
    feed_url: `${PRODUCTION_URL}/feed.xml`,
    copyright: `${new Date().getFullYear()} ${JAMES_WALSH}}`,
    managingEditor: EMAIL,
    webMaster: EMAIL,
    language: 'en',
    pubDate: new Date(),
    categories: ['Web Development', 'JavaScript', 'Software Engineering', 'Coding'],
  })

  fetchPublishedPosts().forEach((post) => {
    feed.item({
      title: post.title,
      description: post.brief,
      url: `${PRODUCTION_URL}${post.url}`,
      categories: post.tags,
      author: EMAIL,
      guid: post._raw.flattenedPath,
      date: new Date(post.publishedAt),
    })
  })

  return new Response(feed.xml(), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  })
}
