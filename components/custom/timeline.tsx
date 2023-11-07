import { PropsWithChildren } from 'react'

export function Timeline(props: PropsWithChildren) {
  return <ol className="mt-6 flex w-full flex-col gap-12 px-2" {...props} />
}

export function TimelineItem(props: PropsWithChildren) {
  return <li className="grid grid-cols-1 md:grid-cols-4" {...props} />
}

export function TimelineLeftElement(props: PropsWithChildren) {
  return <div className="col-span-1 mt-4" {...props} />
}

export function TimelineRightElement(props: PropsWithChildren) {
  return <div className="col-span-3" {...props} />
}
