import fs from 'fs/promises'
import path from 'path'

import fm from 'front-matter'

import { Post } from './types'

export async function getPostFromMdx(filePath: string): Promise<Post> {
  const slug = path.basename(filePath, path.extname(filePath))
  const rawContent = await fs.readFile(filePath, 'utf-8')
  const { attributes, body } = fm<Omit<Post, 'slug' | 'source'>>(rawContent)

  return {
    slug,
    source: body,
    ...attributes,
  }
}
