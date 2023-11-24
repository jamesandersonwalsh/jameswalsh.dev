import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'

import { Post } from '@/app/posts/types'

export function getMDXDataForAllPosts(dirName: string): Post[] {
  const mdxFiles = getMDXFiles(dirName)

  return mdxFiles.map((file) => {
    const { data, content } = readMDXFile(path.join(dirName, file))

    const slug = path.basename(file, path.extname(file))

    const { title, coverImage, status, publishedAt, brief, tags } = data

    return {
      title,
      coverImage,
      status,
      publishedAt,
      brief,
      tags,
      content,
      slug,
    }
  })
}

export function getMdxDataForSinglePost(fileName: string): Post {
  const { data, content } = readMDXFile(fileName)

  const slug = path.basename(fileName, path.extname(fileName))

  const { title, coverImage, status, publishedAt, brief, tags } = data

  return {
    title,
    coverImage,
    status,
    publishedAt,
    brief,
    tags,
    content,
    slug,
  }
}

function getMDXFiles(dirName: string) {
  return fs.readdirSync(dirName).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return matter(rawContent)
}
