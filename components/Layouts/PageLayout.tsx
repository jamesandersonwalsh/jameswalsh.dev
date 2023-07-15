import { PropsWithChildren } from 'react'
import { css } from 'styled-system/css'
import { vstack } from 'styled-system/patterns'

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

const title = css({
  fontSize: {
    mdTo2xl: '5xl',
    smDown: '4xl',
  },
})
function Title({ children }: PropsWithChildren) {
  return <h1 className={title}>{children}</h1>
}

const content = vstack({
  mt: '1rem',
  color: 'slate.300',
})
function Content({ children }: PropsWithChildren) {
  return <div className={content}>{children}</div>
}

PageLayout.Title = Title
PageLayout.Content = Content
