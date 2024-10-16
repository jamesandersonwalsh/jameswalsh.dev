import { LinkIcon } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { TypographyH1 } from '@/components/ui/typography'

export const metadata: Metadata = {
  title: 'Projects - James Walsh',
  description: `Projects I've contributed to.`,
}

interface Project {
  title: string
  description: string
  externalLink: {
    title: string
    href: string
  }
  imageLink: string
}

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      title: 'Vasion Automate',
      description: `Integrating workflow, form capture, signature, & content management within 1 single SaaS solution powered by Single SPA & TurboRepo.`,
      externalLink: {
        title: 'vasion.com',
        href: 'https://vasion.com',
      },
      imageLink: '/logos/employers/vasion.webp',
    },
    {
      title: 'Brickyard',
      description: `Beautiful, composable, fully accessible React Design System with theming & dark mode support. Publicly available with Storybook.`,
      externalLink: {
        title: 'Brickyard Design System',
        href: 'https://brickyarddesign.com',
      },
      imageLink: '/logos/employers/podium.webp',
    },
    {
      title: 'Advanced Analytics',
      description: `Leverage real-time stream processing to power data analytics that help development teams track DORA & flow metrics.`,
      externalLink: {
        title: 'Advanced Analytics',
        href: 'https://www.pluralsight.com/product/advanced-analytics',
      },
      imageLink: '/logos/employers/pluralsight.webp',
    },
    {
      title: 'Channels',
      description: `Create channels to curate content for your own learning, for team development or to share learning journeys with the world.`,
      externalLink: {
        title: 'Channels',
        href: 'https://www.pluralsight.com/product/channels',
      },
      imageLink: '/logos/employers/pluralsight.webp',
    },
    {
      title: 'Git Collaborate',
      description: `Originally started as a 2016 hackathon project, git-collaborate is an OSS electron app for managing pair programming while rotating commit message authors.`,
      externalLink: {
        title: 'github.com',
        href: 'https://github.com/pluralsight/git-collaborate',
      },
      imageLink: '/logos/tech/github-white.webp',
    },
    {
      title: 'Shopify Integrations',
      description: `Supported & maintained Shopify API integrations for high-profile customers, & everyday small businesses who drop-ship.`,
      externalLink: {
        title: 'Maersk VisibleCSM',
        href: 'https://portal.visiblescm.com',
      },
      imageLink: '/logos/employers/maersk.webp',
    },
  ]

  return (
    <>
      <TypographyH1 className="w-prose">
        Things I&apos;ve Helped Build That&nbsp;
        <span className="inline-block bg-gradient-to-r from-fuchsia-600 via-red-400 to-primary bg-clip-text text-5xl text-transparent">
          Make Me Smile
        </span>
      </TypographyH1>
      <p>
        I&apos;ve enjoyed contributing to many projects over the years, but the following is my professional highlight
        reel. A couple of them are open-source, if you&apos;d like to learn more.
      </p>
      <div className="mt-8 grid w-full gap-8 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <Link key={project.title} href={project.externalLink.href}>
            <Card className="ease h-full transition hover:scale-105">
              <CardHeader className="flex flex-row items-center gap-4">
                <Image src={project.imageLink} alt="Project logo" width={40} height={40} className="rounded-full" />
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="font-light">{project.description}</CardContent>
              <CardFooter>
                <div className="flex flex-row gap-2 font-semibold">
                  <LinkIcon width={16} />
                  {project.externalLink.title}
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </>
  )
}
