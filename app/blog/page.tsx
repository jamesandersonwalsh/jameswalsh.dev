import { fetchBlogPosts } from './actions'
export const metadata = {
  title: 'James Walsh | Blog',
  description: `Articles I've written`,
}

export default async function BlogPage() {
  const posts = await fetchBlogPosts()

  return (
    <>
      {posts.map((post) => (
        <article key={post.slug}>
          <h2>{post.title}</h2>
          <p>{post.brief}</p>
          {/* TODO: Add link to full article */}
        </article>
      ))}
    </>
  )
}
