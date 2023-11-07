import { PropsWithChildren } from 'react'

export type TypographyProps = PropsWithChildren & React.HtmlHTMLAttributes<HTMLElement>
export function TypographyH1({ children, ...rest }: TypographyProps) {
  return (
    <h1 className="my-8 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" {...rest}>
      {children}
    </h1>
  )
}

export function TypographyH2({ children, ...rest }: TypographyProps) {
  return (
    <h2 className="my-6 scroll-m-20 text-3xl font-semibold tracking-tight" {...rest}>
      {children}
    </h2>
  )
}

export function TypographyH3({ children, ...rest }: TypographyProps) {
  return (
    <h3 className="my-5 scroll-m-20 text-2xl font-semibold tracking-tight" {...rest}>
      {children}
    </h3>
  )
}

export function TypographyH4({ children, ...rest }: TypographyProps) {
  return (
    <h4 className="my-4 scroll-m-20 text-xl font-semibold tracking-tight" {...rest}>
      {children}
    </h4>
  )
}

export function TypographyP({ children, ...rest }: TypographyProps) {
  return (
    <p className="leading-7" {...rest}>
      {children}
    </p>
  )
}

export function TypographyBlockquote({ children, ...rest }: TypographyProps) {
  return (
    <blockquote className="my-6 border-l-2 pl-6 italic" {...rest}>
      {children}
    </blockquote>
  )
}
