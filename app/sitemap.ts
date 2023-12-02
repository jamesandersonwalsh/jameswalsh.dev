import { MetadataRoute } from 'next'

const PRODUCTION_URL = 'https://jameswalsh.dev'

import { fetchPublishedPosts } from '@/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPostSiteMaps: MetadataRoute.Sitemap = fetchPublishedPosts().map((post) => ({
    url: `${PRODUCTION_URL}/${post.url}`,
    lastModified: !!post.lastModified ? post.lastModified : post.lastModified,
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  return [
    {
      url: PRODUCTION_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...blogPostSiteMaps,
    {
      url: `${PRODUCTION_URL}/posts`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${PRODUCTION_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${PRODUCTION_URL}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${PRODUCTION_URL}/stack`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.1,
    },
  ]
}
