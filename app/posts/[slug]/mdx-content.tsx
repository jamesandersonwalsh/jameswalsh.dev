import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { HighlighterOptions, getHighlighter } from 'shiki'

import { mdxComponents } from '@/components/mdx-components'

type MdxContentProps = {
  source: string
}

export default function MDXContent({ source }: MdxContentProps) {
  return (
    <MDXRemote
      source={source}
      components={mdxComponents}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            rehypeAutolinkHeadings,
            [
              rehypePrettyCode,
              {
                theme: 'one-dark-pro',
                keepBackground: false,
                getHighlighter: (options: HighlighterOptions) => {
                  return getHighlighter({
                    ...options,
                    themes: ['one-dark-pro'],
                    langs: ['js', 'ts', 'jsx', 'tsx', 'json', 'json5', 'shell', 'bash', 'astro', 'markdown'],
                  })
                },
              },
            ],
          ],
        },
      }}
    />
  )
}
