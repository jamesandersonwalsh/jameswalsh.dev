import { grid, hstack, circle } from 'styled-system/patterns'
import { PageLayout } from '@ui/Layouts'
import { Card } from '@ui/Card'
import Link from 'next/link'
import { LinkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

interface Project {
  title: string
  description: string
  externalLink: {
    title: string
    href: string
  }
  imageLink: string
}

export const metadata = {
  title: 'James Walsh | Projects',
  description: `Projects I've worked on`,
}

const projectGrid = grid({
  mt: '1rem',
  columns: {
    lgTo2xl: 3,
    mdToLg: 2,
    smToMd: 1,
  },
  gap: 8,
  width: '100%',
})
const companyLogo = circle({ my: '1rem' })

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      title: 'Vasion Automation Cloud',
      description: `Integrating workflow, form capture, signature, & content management within 1 single SaaS solution powered by Single SPA & TurboRepo.`,
      externalLink: {
        title: 'vasion.com',
        href: 'https://vasion.com',
      },
      imageLink: '/logos/employers/vasion.png',
    },
    {
      title: 'Brickyard Design System',
      description: `Beautiful, composable, fully accessible React components built on top of the full power of Chakra UI. Available publically with Storybook.`,
      externalLink: {
        title: 'Podium Brickyard Design System',
        href: 'https://brickyarddesign.com',
      },
      imageLink: '/logos/employers/podium.jpg',
    },
    {
      title: 'Advanced Analytics',
      description: `Leverage real-time stream processing to power data analytics that help development teams track DORA & flow metrics.`,
      externalLink: {
        title: 'Pluralsight Advanced Analytics',
        href: 'https://www.pluralsight.com/product/advanced-analytics',
      },
      imageLink: '/logos/employers/pluralsight.png',
    },
    {
      title: 'Channels',
      description: `Create channels to curate content for your own learning, for team development or to share learning journeys with the world.`,
      externalLink: {
        title: 'Pluralsight Channels',
        href: 'https://www.pluralsight.com/product/channels',
      },
      imageLink: '/logos/employers/pluralsight.png',
    },
    {
      title: 'Git Collaborate',
      description: `Originally started as a 2016 hackathon project, git-collaborate is an OSS electron app for managing pair programming while rotating commit message authors.`,
      externalLink: {
        title: 'github.com',
        href: 'https://github.com/pluralsight/git-collaborate',
      },
      imageLink: '/logos/tech/github-white.jpeg',
    },
    {
      title: 'Shopify Integrations',
      description: `Supported & maintained Shopify API integrations for high-profile customers, & everyday small businesses who drop-ship.`,
      externalLink: {
        title: 'VisibleCSM by Maersk',
        href: 'https://portal.visiblescm.com',
      },
      imageLink: '/logos/employers/maersk.jpg',
    },
  ]

  return (
    <PageLayout title="Projects I've contributed to that make me smile.">
      <p>
        I&apos;ve enjoyed contributing to many projects over the years, but the
        following is my professional highlight reel. A couple of them are
        open-source, if you&apos;d like to learn more.
      </p>
      <div className={projectGrid}>
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.externalLink.href}
            className={hstack()}
          >
            <Card variant="ghost">
              <Image
                src={project.imageLink}
                alt="Project logo"
                width={40}
                height={40}
                className={companyLogo}
              />
              <Card.Header>{project.title}</Card.Header>
              <Card.Body>{project.description}</Card.Body>
              <Card.Footer>
                <div className={hstack()}>
                  <LinkIcon width={16} />
                  {project.externalLink.title}
                </div>
              </Card.Footer>
            </Card>
          </Link>
        ))}
      </div>
    </PageLayout>
  )
}
