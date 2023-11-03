import { PropsWithChildren } from 'react'
import { vstack } from 'styled-system/patterns'

import { TypographyH1 } from '../ui/typography'

type PageLayoutProps = {
  title: string
} & PropsWithChildren

export function PageLayout({ children, title }: PageLayoutProps) {
  return (
    <>
      <PageLayout.Title>{title}</PageLayout.Title>
      <PageLayout.Content>{children}</PageLayout.Content>
    </>
  )
}

type TitleProps = {
  align?: 'left' | 'center'
} & PropsWithChildren
function Title({ children, align = 'left' }: TitleProps) {
  return <TypographyH1>{children}</TypographyH1>
}

const content = vstack({
  mt: '1rem',
  color: 'text',
  width: '100%',
})
function Content({ children }: PropsWithChildren) {
  return <div className={content}>{children}</div>
}

PageLayout.Title = Title
PageLayout.Content = Content
