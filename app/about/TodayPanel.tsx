import { Accordion, AccordionPanelProps } from '@ui/client/Accordion'

export default function TodayPanel(props: AccordionPanelProps) {
  return (
    <Accordion.Panel {...props}>
      Today I&apos;m a seasoned full stack software engineer who loves frontend web development. I&apos;ve been
      fortunate enough to gain experience in monoliths, monorepos, & microservices. I&apos;ve learned both the easy way
      & the hard way about what can go right & wrong with all of them. I&apos;ve contributed to scaling Node.js APIs
      from Go to Market to Enterprise SaaS. I&apos;ve co-founded & contributedd to hand crafted Design Systems.
    </Accordion.Panel>
  )
}
