import { client } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    content,
    publishedAt,
    "category": category->title,
    seo
  }`
  
  const post = await client.fetch(query, { slug })
  return post
}

async function getRelatedPosts(currentPostId: string) {
  const query = `*[_type == "post" && _id != $currentPostId] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "category": category->title
  }`
  
  return await client.fetch(query, { currentPostId })
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  
  if (!post) {
    return {
      title: 'ページが見つかりません',
    }
  }

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(post._id)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* パンくずナビ */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-blue-600">ホーム</Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/blog" className="hover:text-blue-600">ブログ</Link>
          </li>
          <li>/</li>
          <li className="text-gray-900">{post.title}</li>
        </ol>
      </nav>

      <article className="bg-white rounded-lg shadow-sm">
        {/* ヘッダー */}
        <header className="p-8 border-b">
          {post.category && (
            <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded mb-4">
              {post.category}
            </span>
          )}
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          
          {post.excerpt && (
            <p className="text-lg text-gray-600 mb-6">
              {post.excerpt}
            </p>
          )}
          
          <div className="flex items-center text-sm text-gray-500">
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
        </header>

        {/* メイン画像 */}
        {post.mainImage && (
          <div className="aspect-video bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">メイン画像</span>
          </div>
        )}

        {/* 本文 */}
        <div className="p-8">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900">
            <PortableText
              value={post.content}
              components={{
                types: {
                  image: ({ value }) => (
                    <div className="my-8 bg-gray-200 aspect-video flex items-center justify-center rounded-lg">
                      <span className="text-gray-500">画像</span>
                    </div>
                  ),
                },
              }}
            />
          </div>
        </div>
      </article>

      {/* 関連記事 */}
      {relatedPosts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">関連記事</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost: any) => (
              <article key={relatedPost._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  {relatedPost.category && (
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-2">
                      {relatedPost.category}
                    </span>
                  )}
                  <h3 className="text-lg font-semibold mb-2">
                    <Link 
                      href={`/blog/${relatedPost.slug.current}`}
                      className="text-gray-900 hover:text-blue-600 transition duration-200"
                    >
                      {relatedPost.title}
                    </Link>
                  </h3>
                  {relatedPost.excerpt && (
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  )}
                  <time className="text-xs text-gray-500">
                    {new Date(relatedPost.publishedAt).toLocaleDateString('ja-JP')}
                  </time>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* ナビゲーション */}
      <div className="mt-12 pt-8 border-t">
        <Link 
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition duration-200"
        >
          ← ブログ一覧に戻る
        </Link>
      </div>
    </div>
  )
}