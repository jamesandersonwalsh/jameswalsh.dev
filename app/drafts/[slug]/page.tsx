import formatDate from 'date-fns/format'
import { AlertTriangle, RocketIcon } from 'lucide-react'
import { RedirectType, redirect } from 'next/navigation'

import PostPage, { PostPageProps } from '@/app/posts/[slug]/page'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { fetchPostBySlug, isPostReleased } from '@/lib/posts'
import { calculateTimeToRead } from '@/lib/utils'

/**
 *
 * @description The following is a development only component and will simply redirect to /posts in any other environment.
 * @remarks returns a composed version of posts/[slug]/page.tsx that has draft information in it.
 */
export default async function PostDraftPage(props: PostPageProps) {
  if (process.env.NODE_ENV === 'production') {
    redirect('/posts')
  }

  const post = fetchPostBySlug(props.params.slug)

  if (isPostReleased(post)) {
    redirect(`/posts/${props.params.slug}`, RedirectType.replace)
  }

  return (
    <>
      <Alert className="border-2 border-fuchsia-600">
        <RocketIcon className="h-4 w-4" />
        <AlertTitle className="mb-2">This article is unreleased</AlertTitle>
        <AlertDescription>
          <ul className="list-disc">
            <li>
              Status: <Badge variant="outline">{post.status}</Badge>
            </li>
            {!!post.publishedAt ? (
              <li>
                Release on: <Badge variant="outline">{formatDate(new Date(post.publishedAt), 'MMM-dd-yy')}</Badge>
              </li>
            ) : (
              'No relase date'
            )}
            {calculateTimeToRead(post.body.raw) > 10 && (
              <li className="mt-1">
                <AlertTriangle className="inline-block text-yellow-600" /> Warning: this post takes longer than 10
                minutes to read. May be too verbose.
              </li>
            )}
          </ul>
        </AlertDescription>
      </Alert>
      <PostPage {...props} />
    </>
  )
}
