import { client } from '@/lib/sanity'
import Link from 'next/link'

async function getAllPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    noteUrl,
    isExternal,
    "category": category->title
  }`
  
  return await client.fetch(query)
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">ブログ</h1>
        <p className="text-lg text-gray-600">スマホに関する最新情報をお届けします</p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-600 mb-4">まだ記事がありません</p>
          <p className="text-sm text-gray-500">
            <a href="/studio" className="text-blue-600 hover:underline">Sanity Studio</a> で記事を作成してください
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <article key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-200">
              {post.mainImage ? (
                <div className="aspect-video bg-gray-200">
                  <span className="flex items-center justify-center h-full text-gray-500 text-sm">
                    画像
                  </span>
                </div>
              ) : (
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
                  <span className="text-blue-600 font-medium">
                    {post.category || 'ブログ'}
                  </span>
                </div>
              )}
              
              <div className="p-6">
                {post.category && (
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-3">
                    {post.category}
                  </span>
                )}
                
                <h2 className="text-xl font-semibold mb-3 text-gray-900 leading-tight">
                  {post.isExternal && post.noteUrl ? (
                    <a 
                      href={post.noteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 transition duration-200 inline-flex items-center"
                    >
                      {post.title}
                      <svg className="w-4 h-4 ml-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <Link 
                      href={`/blog/${post.slug.current}`}
                      className="hover:text-blue-600 transition duration-200"
                    >
                      {post.title}
                    </Link>
                  )}
                </h2>
                
                {post.excerpt && (
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                )}
                
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('ja-JP', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  {post.isExternal && post.noteUrl ? (
                    <a 
                      href={post.noteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                    >
                      続きを読む →
                    </a>
                  ) : (
                    <Link 
                      href={`/blog/${post.slug.current}`}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      続きを読む →
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}