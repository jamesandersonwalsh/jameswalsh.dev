export type TimelineTypes =
  | 'frameworks'
  | 'languages'
  | 'databases'
  | 'dataMessaging'
  | 'devtools'
  | 'principles'

export interface TimelineItem {
  title: string
  description: string
}

export type TimelineCollection = Record<TimelineTypes, TimelineItem[]>
