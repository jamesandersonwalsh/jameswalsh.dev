import { Timeline } from '@ui/Timeline'
import { PageLayout } from '@ui/Layouts'
import { UnorderedList } from '@/components/List'
import { css } from 'styled-system/css'
import TimelineCollection from './timelineCollection'

export const metadata = {
  title: 'James Walsh | Stack',
  description: 'My tech stack',
}

const h2 = css({
  fontSize: 'md',
})
const h3 = css({
  fontSize: 'larger',
})
const p = css({
  fontSize: 'smaller',
  lineHeight: '1.33rem',
})
export default function StackPage() {
  const timelineCollection = TimelineCollection

  const sectionTitleMap: Record<string, string> = {
    frameworks: 'Web Frameworks',
    languages: 'Languages',
    databases: 'Databases',
    dataMessaging: 'Data Messaging',
    devtools: 'Development Tools',
    principles: 'Practices & Principles',
  }

  return (
    <>
      <PageLayout.Title align="left">
        Tech stacks I&apos;m comfortable in, how I like prefer to work, & tools
        I 💙.
      </PageLayout.Title>
      <PageLayout.Content>
        <Timeline>
          {Object.entries(timelineCollection).map(([key, items]) => (
            <Timeline.Item key={key}>
              <Timeline.LeftElement>
                <h2 className={h2}>{sectionTitleMap[key]}</h2>
              </Timeline.LeftElement>
              <Timeline.RightElement>
                <UnorderedList>
                  {items.map((item) => (
                    <UnorderedList.ListItem key={item.title} type="vertical">
                      <h3 className={h3}>{item.title}</h3>
                      <p className={p}>{item.description}</p>
                    </UnorderedList.ListItem>
                  ))}
                </UnorderedList>
              </Timeline.RightElement>
            </Timeline.Item>
          ))}
        </Timeline>
      </PageLayout.Content>
    </>
  )
}
