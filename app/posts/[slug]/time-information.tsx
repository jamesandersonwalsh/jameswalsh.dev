'use client'

import { formatDistanceToNow } from 'date-fns'

import { Time } from '@/components/time'
import { type Post } from '@/lib/types'
import { calculateTimeToRead } from '@/lib/utils'

interface PublishedAtParams {
  post: Post
}

export default function TimeInformation({ post }: PublishedAtParams) {
  return (
    <span className="flex flex-row text-lg font-medium">
      <Time dateTime={post.publishedAt} />
      <span className="ml-2 flex flex-row gap-1 text-sm md:text-lg">
        —&nbsp;{calculateTimeToRead(post.source)}&nbsp;min read&nbsp;(
        {formatDistanceToNow(new Date(post.publishedAt))} ago)
      </span>
    </span>
  )
}
