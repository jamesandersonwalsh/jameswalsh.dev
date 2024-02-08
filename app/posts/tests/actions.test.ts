import fs from 'fs/promises'
import path from 'path'

import { fetchPublishedPosts } from '../actions'

import * as mdx from '@/lib/mdx'
import { getMockFiles } from '@/test/mocks/files'
import { getMockFrontmatter } from '@/test/mocks/frontmatter'
import { getMockSource } from '@/test/mocks/source'

vi.mock('fs/promises')
vi.mock('@/lib/mdx')

describe('/posts/actions', () => {
  describe('#fetchPublishedPosts', () => {
    const mockFiles = getMockFiles()

    beforeEach(() => {
      vi.mocked(fs.readdir).mockResolvedValue(mockFiles)
      vi.mocked(mdx.getPostFromMDX).mockImplementation(async (filePath) => ({
        slug: path.basename(filePath, path.extname(filePath)),
        ...getMockFrontmatter({ status: 'published' }),
        source: getMockSource(),
      }))
    })

    it('reads from the /posts directory', async () => {
      const expectedFilePath = path.join(process.cwd(), 'posts')

      await fetchPublishedPosts()

      expect(fs.readdir).toHaveBeenCalledOnce()
      expect(fs.readdir).toHaveBeenCalledWith(expectedFilePath)
    })

    it('filters out non-mdx files', async () => {
      const mockFilesWithNonMDXFile = getMockFiles([
        path.join(process.cwd(), 'posts', 'non-blog-file.md'),
        path.join(process.cwd(), 'posts', 'non-blog-file.js'),
      ])

      vi.mocked(fs.readdir).mockResolvedValue(mockFilesWithNonMDXFile)

      const actual = await fetchPublishedPosts()

      expect(actual.length).toEqual(mockFilesWithNonMDXFile.length - 2)
    })
  })
})
