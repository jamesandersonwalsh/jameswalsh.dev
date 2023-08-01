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
      mdTo2xl: '5xl',
      smDown: '4xl',
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
function Title({ children, align = 'center' }: TitleProps) {
  return <h1 className={title({ visual: align })}>{children}</h1>
}

const content = vstack({
  mt: '1rem',
  color: 'gray.300',
  width: '100%',
})
function Content({ children }: PropsWithChildren) {
  return <div className={content}>{children}</div>
}

PageLayout.Title = Title
PageLayout.Content = Content
