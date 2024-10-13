import { formatDate } from 'date-fns/format'
import { RocketIcon } from 'lucide-react'
import { RedirectType, redirect } from 'next/navigation'

import { fetchPostBySlug } from '@/app/posts/[slug]/actions'
import PostPage, { type PostPageProps } from '@/app/posts/[slug]/page'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { isPostReleased } from '@/lib/utils'

/**
 *
 * @description The following is a development only component and will simply redirect to /posts in any other environment.
 * @remarks returns a composed version of posts/[slug]/page.tsx that has draft information in it.
 */
export default async function PostDraftPage(props: PostPageProps) {
  if (process.env.NODE_ENV === 'production') {
    redirect('/posts')
  }

  const post = await fetchPostBySlug(props.params.slug)

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
              <li>Will release on: {formatDate(new Date(post.publishedAt), 'MMM dd, yy')}</li>
            ) : (
              'No release date'
            )}
          </ul>
        </AlertDescription>
      </Alert>
      <PostPage {...props} />
    </>
  )
}
