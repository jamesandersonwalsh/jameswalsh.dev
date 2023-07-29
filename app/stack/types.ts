export type TimelineTypes =
  | 'frameworks'
  | 'languages'
  | 'databases'
  | 'eventing'
  | 'devtools'
  | 'principles'

export interface TimelineItem {
  title: string
  description: string
  imageLink: string
}

export type TimelineCollection = Record<TimelineTypes, TimelineItem[]>
