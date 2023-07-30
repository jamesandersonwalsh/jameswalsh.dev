import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'date', required: true },
    brief: { type: 'string', required: true },
    status: {
      type: 'enum',
      options: ['draft', 'published'],
      default: 'draft',
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  },
}))

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] })
