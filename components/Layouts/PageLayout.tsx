import { PropsWithChildren } from 'react'
import { cva } from 'styled-system/css'
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

const title = cva({
  base: {
    width: '100%',
    fontSize: {
      md: '5xl',
      sm: '4xl',
      smDown: '3xl',
    },
  },
  variants: {
    visual: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
    },
  },
})

type TitleProps = {
  align?: 'left' | 'center'
} & PropsWithChildren
function Title({ children, align = 'left' }: TitleProps) {
  return <h1 className={title({ visual: align })}>{children}</h1>
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
