import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { HighlighterOptions, getHighlighter } from 'shiki'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    coverImage: { type: 'string', required: true },
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
      required: true,
    },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  },
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      [
        rehypePrettyCode,
        {
          theme: 'material-theme-darker',
          keepBackground: false,
          getHighlighter: (options: HighlighterOptions) => {
            return getHighlighter({
              ...options,
              themes: ['material-theme-darker'],
              langs: ['js', 'ts', 'jsx', 'tsx', 'json', 'json5', 'shell', 'bash', 'astro', 'markdown'],
            })
          },
        },
      ],
    ],
  },
})
