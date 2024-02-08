import path from 'path'

import * as fm from 'front-matter'

import { getPostFromMDX } from '../mdx'
import { PostFrontmatter } from '../types'

vi.mock('front-matter')

describe('lib/mdx', () => {
  describe('#getPostFromMDX', () => {
    const slug = 'hipster-blog-post'
    const filePath = path.join(process.cwd(), '/test/mocks/posts', `${slug}.mdx`)
    const mockFrontmatter: PostFrontmatter = {
      title: 'My Test Blog Post',
      description: 'How to write a blog',
      thumbnail: '/assets/images/thumbnail.webp',
      status: 'draft',
      publishedAt: '2024-02-08',
      lastModified: '2024-02-08',
      brief: 'Wanna get good at blogging?',
      tags: ['content-management', 'nextjs', 'javascript']
    }
    const mockBody = `
    # My Test Blog Post
    ## Heading 2
    I'm baby knausgaard etsy meditation tofu la croix edison bulb helvetica raclette bushwick taxidermy wayfarers retro leggings slow-carb. Chia fixie same, beard gastropub sustainable pickled next level. Hoodie fingerstache blue bottle raw denim. Bespoke before they sold out flexitarian, pork belly hoodie tattooed succulents biodiesel neutral milk hotel asymmetrical butcher trust fund meditation VHS. La croix marfa mixtape mlkshk, 90's crucifix prism lyft.
    ### Heading 3
    Chambray vape intelligentsia, unicorn banh mi kale chips ennui poutine pork belly mumblecore marxism. Butcher grailed bruh air plant jean shorts vape marxism gatekeep affogato raclette coloring book art party polaroid bicycle rights. Prism vape fanny pack whatever. Vice sriracha green juice art party sustainable. Before they sold out kinfolk flannel marxism drinking vinegar pop-up kale chips marfa tumblr austin. Thundercats ramps taiyaki marfa meh irony.
    `

    beforeEach(() => {
      vi.mocked(fm.default).mockReturnValue({
        attributes: mockFrontmatter,
        body: mockBody
      } as fm.FrontMatterResult<PostFrontmatter>)
    })

    it('retrieves the posts slug based on filename', async () => {
      const actual = await getPostFromMDX(filePath)
      expect(actual.slug).toEqual(slug)
    })

    it('retrieves the body of the article using fm', async () => {
      const actual = await getPostFromMDX(filePath)
      expect(actual.source).toEqual(mockBody)
    })

    it('spreads frontmatter into returned post', async () => {
      const actual = await getPostFromMDX(filePath)
      const { slug, source, ...frontmatter } = actual

      expect(frontmatter).toEqual(mockFrontmatter)
    })
  })
})
