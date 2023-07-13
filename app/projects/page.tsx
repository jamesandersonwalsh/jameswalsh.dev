import { grid, hstack, vstack } from 'styled-system/patterns'
import { PageLayout } from '@ui/Layouts'
import { Card } from '@ui/Card'
import Link from 'next/link'
import { LinkIcon } from '@heroicons/react/24/outline'

interface Project {
  title: string
  description: string
  externalLink: {
    title: string
    href: string
  }
  iconLink: string
}

export const metadata = {
  title: 'James Walsh | Projects',
  description: `Projects I've worked on`,
}

const projectGrid = grid({
  columns: {
    lgTo2xl: 3,
    mdToLg: 2,
    smToMd: 1,
  },
  gap: 8,
  width: '100%',
})

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      title: 'Vasion Automation Cloud',
      description: `Integrating workflow, form capture, signature, & content management within 1 single SaaS solution powered by Single SPA & TurboRepo.`,
      externalLink: {
        title: 'vasion.com',
        href: 'https://vasion.com',
      },
      iconLink: '#',
    },
    {
      title: 'Brickyard Design System',
      description: `Beautiful, composable, fully accessible React components built on top of the full power of Chakra UI. Available publically with Storybook.`,
      externalLink: {
        title: 'Documentation',
        href: 'https://brickyarddesign.com',
      },
      iconLink: '#',
    },
    {
      title: 'Advanced Analytics',
      description: `Leverage real-time stream processing to power data analytics that help development teams track DORA & flow metrics.`,
      externalLink: {
        title: 'Pluralsight Advanced Analytics',
        href: 'https://www.pluralsight.com/product/advanced-analytics',
      },
      iconLink: '#',
    },
    {
      title: 'Channels',
      description: `Create channels to curate content for your own learning, for team development or to share learning journeys with the world.`,
      externalLink: {
        title: 'Pluralsight Channels',
        href: 'https://www.pluralsight.com/product/channels',
      },
      iconLink: '#',
    },
    {
      title: 'Git Collaborate',
      description: `Originally started as a 2016 hackathon project, git-collaborate is an OSS electron app for managing pair programming while rotating commit message authors.`,
      externalLink: {
        title: 'github.com',
        href: 'https://github.com/pluralsight/git-collaborate',
      },
      iconLink: '#',
    },
    {
      title: 'Shopify Integrations',
      description: `Supported & maintained Shopify API integrations for select high-profile customers, & everyday drop shipping.`,
      externalLink: {
        title: 'VisibleCSM by Maersk',
        href: 'https://portal.visiblescm.com',
      },
      iconLink: '#',
    },
  ]

  return (
    <PageLayout title="Projects I've contributed to that make me smile.">
      <div className={projectGrid}>
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.externalLink.href}
            className={hstack()}
          >
            <Card variant="ghost">
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
