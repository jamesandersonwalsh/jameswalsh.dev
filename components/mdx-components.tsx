import Image, { ImageProps } from 'next/image'
import { HTMLAttributes, PropsWithChildren } from 'react'

import { buttonVariants } from './ui/button'
import { TypographyBlockquote, TypographyH1, TypographyH2, TypographyH3, TypographyP } from './ui/typography'

import { cn } from '@/lib/utils'

export const mdxComponents = {
  img: (props: HTMLAttributes<HTMLImageElement>) => (
    <Image
      {...(props as ImageProps)}
      alt="article image"
      className="my-4 aspect-video rounded-lg object-center"
      width={1600}
      height={900}
    />
  ),
  h1: (props: PropsWithChildren) => <TypographyH1 {...props} />,
  h2: (props: PropsWithChildren) => <TypographyH2 {...props} />,
  h3: (props: PropsWithChildren) => <TypographyH3 {...props} />,
  p: (props: PropsWithChildren) => <TypographyP className="w-prose" {...props} />,
  ol: (props: PropsWithChildren) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />,
  ul: (props: PropsWithChildren) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
  blockquote: (props: PropsWithChildren) => <TypographyBlockquote {...props} />,
  pre: (props: PropsWithChildren) => <pre className="my-2 rounded-xl bg-slate-800 p-1 pt-6" {...props} />,
  code: (props: PropsWithChildren) => (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold" {...props} />
  ),
  a: (props: PropsWithChildren) => <a className={cn(buttonVariants({ variant: 'link' }), 'text-md p-0')} {...props} />,
}
