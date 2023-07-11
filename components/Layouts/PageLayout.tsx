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

const headingStyles = css({
  fontSize: {
    mdTo2xl: '4xl',
    smDown: '3xl',
  },
})
function Title({ children }: PropsWithChildren) {
  return <h1 className={headingStyles}>{children}</h1>
}

const contentStyles = vstack({
  mt: '2rem',
  color: 'slate.300',
})
function Content({ children }: PropsWithChildren) {
  return <div className={contentStyles}>{children}</div>
}

PageLayout.Title = Title
PageLayout.Content = Content
