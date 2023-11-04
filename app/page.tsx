import { CalendarDays, Clock, Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import fetchPosts from './posts/fetchPosts'
import { ReadMore } from './posts/read-more'

import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Time } from '@/components/ui/time'
import { TypographyH1, TypographyH2, TypographyP } from '@/components/ui/typography'
import { calculateTimeToRead } from '@/helpers'

const AVATAR_SIZE = 144
const HANDLE = 'jamesandersonwalsh'

export const metadata = {
  title: 'James Walsh',
  openGraph: {
    description: 'James Walsh - Software Engineer, developer advocate, UI/UX enthusiast',
    images: ['/portraits/front-profile.webp'],
  },
}

interface SocialLink {
  name: string
  href: string
  ariaLabel: string
  icon: React.ReactElement
}

export default function Home() {
  const socialLinks: SocialLink[] = [
    {
      name: 'Github',
      href: `https://github.com/${HANDLE}`,
      ariaLabel: 'Visit my Github',
      icon: <Github width={24} height={24} />,
    },
    {
      name: 'Discord',
      href: `https://discordapp.com/users/${HANDLE}`,
      ariaLabel: 'Add me on Discord',
      icon: (
        <svg className="icon" fill="currentColor" fillRule="evenodd" width={24} height={24} clipRule="evenodd">
          <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/in/${HANDLE}`,
      ariaLabel: 'Go to my LinkedIn',
      icon: <Linkedin width={24} height={24} />,
    },
  ]

  const posts = fetchPosts()

  return (
    <div>
      <header className="flex flex-col gap-8">
        <Image
          src="/portraits/front-profile.webp"
          className="rounded-full"
          width={AVATAR_SIZE}
          height={AVATAR_SIZE}
          alt="James profile picture"
          priority
        />
        <TypographyH1>Software engineer. Self-proclaimed developer advocate. UI/UX enthusiast.</TypographyH1>
        <div className="flex flex-row space-x-4">
          {socialLinks.map(({ name, href, ariaLabel, icon }) => (
            <Link key={name} href={href} aria-label={ariaLabel}>
              {icon}
            </Link>
          ))}
        </div>
        <TypographyP>
          Hey, I&apos;m James! I&apos;m a Full Stack Software Engineer specializing in JavaScript. Over the last decade
          I&apos;ve been a part of shipping new products to market, scaling Node.js applications, building beautiful
          Design Systems, & working on cross-functional teams with other talented people I can learn from. I believe
          that no tech talk is complete without memes.
        </TypographyP>
      </header>
      <br />
      <TypographyH2 id="latest-blog-posts">Latest blog posts</TypographyH2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post._id} href={post.url}>
            <Card>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <span className="flex items-center">
                  <CalendarDays width={24} height={24} />
                  &nbsp;
                  <Time dateTime={post.publishedAt} />
                </span>
                <span className="flex items-center">
                  <Clock width={16} height={16} />
                  &nbsp;
                  {calculateTimeToRead(post.body.raw)}&nbsp;min read
                </span>
                <span>{post.brief}</span>
              </CardContent>
              <CardFooter>
                <ReadMore />
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
      <div>
        <hr />
        <TypographyH2 id="publications">See what I&apos;ve published</TypographyH2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Hey World</CardTitle>
          </CardHeader>
          <CardContent>
            Checkout my non-tech blog on HEY where nothing&apos;s off limits. Get posts directly to your email,&nbsp;
            <i>or grab the RSS feed.</i>
          </CardContent>
          <CardFooter>
            <Link href="https://world.hey.com/jameswalsh" className={buttonVariants({ variant: 'link' })}>
              Subscribe
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Hashnode</CardTitle>
          </CardHeader>
          <CardContent>
            All of my posts on this site are made available via my technical newsletter on Hashnode. Join & receive
            emails whenever I publish a new article.
          </CardContent>
          <CardFooter>
            <Link href="https://jameswalsh.hashnode.dev/newsletter" className={buttonVariants({ variant: 'link' })}>
              Join Tech Newsletter
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>DEV.to</CardTitle>
          </CardHeader>
          <CardContent>
            All of my posts on this site are made available on <b>DEV.to</b>, which is my favorite blogging community.
            Follow for more spicy tech!
          </CardContent>
          <CardFooter>
            <Link href={`https://dev.to/${HANDLE}`} className={buttonVariants({ variant: 'link' })}>
              Follow on DEV
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
