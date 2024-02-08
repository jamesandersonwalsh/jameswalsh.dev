'use server'

import fs from 'fs/promises'
import path from 'path'

import { compareDesc } from 'date-fns'
import fm from 'front-matter'
import { notFound } from 'next/navigation'

import { isPostReleased } from './utils'

export interface Post {
  slug: string
  source: string
  title: string
  description: string
  thumbnail: string
  status: 'published' | 'draft'
  publishedAt: string
  lastModified: string
  brief: string
  tags: string[]
}

export async function fetchPublishedPosts(): Promise<Post[]> {
  const files = await fs.readdir(path.join(process.cwd(), 'posts'))

  const filePaths = files
    .filter((file) => path.extname(file) === '.mdx')
    .map((fileName) => path.join(process.cwd(), 'posts', fileName))

  const allPosts = await Promise.all(filePaths.map((filePath) => getPostFromMdx(filePath)))

  return allPosts.filter(isPostReleased).sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)))
}

export async function fetchPostBySlug(slug: string): Promise<Post> {
  const filePath = path.join(process.cwd(), 'posts', `${slug}.mdx`)

  try {
    return await getPostFromMdx(filePath)
  } catch (error) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
      notFound()
    } else {
      throw new Error(`Something went wrong. Unable to fetch a blog post for ${slug}`)
    }
  }
}

async function getPostFromMdx(filePath: string): Promise<Post> {
  const slug = path.basename(filePath, path.extname(filePath))
  const rawContent = await fs.readFile(filePath, 'utf-8')
  const { attributes, body } = fm<Omit<Post, 'slug' | 'source'>>(rawContent)

  return {
    slug,
    source: body,
    ...attributes,
  }
}

export async function fetchPreviousPost(slug: string): Promise<Post | undefined> {
  // const publishedPosts = fetchPublishedPosts()
  // const postIndex = publishedPosts.findIndex((post) => post.slug === slug)

  // if (postIndex === publishedPosts.length - 1) return undefined

  // return publishedPosts[postIndex + 1]

  return undefined
}
