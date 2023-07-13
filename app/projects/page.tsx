import { grid, hstack, vstack } from 'styled-system/patterns'
import { PageLayout } from '@ui/Layouts'
import { Card } from '@ui/Card'
import Link from 'next/link'
import { LinkIcon } from '@heroicons/react/24/outline'

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
  return (
    <PageLayout title="Projects I've contributed to that make me smile.">
      <div className={projectGrid}>
        <Link href="https://vasion.com" className={hstack()}>
          <Card variant="ghost">
            <Card.Header>Vasion Automation Cloud</Card.Header>
            <Card.Body>
              Integrating workflow, form capture, signature, & content
              management within 1 single SaaS solution powered by Single SPA &
              TurboRepo.
            </Card.Body>
            <Card.Footer>
              <LinkIcon width={16} />
              vasion.com
            </Card.Footer>
          </Card>
        </Link>
        <Link href="https://brickyarddesign.com/" className={hstack()}>
          <Card variant="ghost">
            <Card.Header>Brickyard Design System</Card.Header>
            <Card.Body>
              Beautiful, composable, fully accessible React components built on
              top of the full power of Chakra UI. Available publically with
              Storybook.
            </Card.Body>
            <Card.Footer>
              <div className={hstack()}>
                <LinkIcon width={16} />
                Documentation
              </div>
            </Card.Footer>
          </Card>
        </Link>
        <Link
          href="https://www.pluralsight.com/product/advanced-analytics"
          className={hstack()}
        >
          <Card variant="ghost">
            <Card.Header>Advanced Analytics</Card.Header>
            <Card.Body>
              Leverage real-time stream processing to power data analytics that
              help development teams track DORA & flow metrics.
            </Card.Body>
            <Card.Footer>
              <LinkIcon width={16} />
              Pluralsight Advanced Analytics
            </Card.Footer>
          </Card>
        </Link>
        <Link
          href="https://www.pluralsight.com/product/channels"
          className={hstack()}
        >
          <Card variant="ghost">
            <Card.Header>Channels</Card.Header>
            <Card.Body>
              Create channels to curate content for your own learning, for team
              development or to share learning journeys with the world.
            </Card.Body>
            <Card.Footer>
              <LinkIcon width={16} />
              Pluralsight Channels
            </Card.Footer>
          </Card>
        </Link>
        <Link
          href="https://github.com/pluralsight/git-collaborate"
          className={hstack()}
        >
          <Card variant="ghost">
            <Card.Header>Git Collaborate</Card.Header>
            <Card.Body>
              It started as a 2016 hackathon project, git-collaborate is an
              electron app for managing pair programming while rotating commit
              message authors.
            </Card.Body>
            <Card.Footer>
              <LinkIcon width={16} />
              github.com
            </Card.Footer>
          </Card>
        </Link>
        <Link href="https://portal.visiblescm.com/" className={hstack()}>
          <Card variant="ghost">
            <Card.Header>Shopify Integrations</Card.Header>
            <Card.Body>
              Supported & maintained Shopify API integrations for select
              high-profile customers, & everyday drop shipping.
            </Card.Body>
            <Card.Footer>
              <LinkIcon width={16} />
              VisibleCSM by Maersk
            </Card.Footer>
          </Card>
        </Link>
      </div>
    </PageLayout>
  )
}
