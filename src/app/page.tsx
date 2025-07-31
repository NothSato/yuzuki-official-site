import { client } from '@/lib/sanity'
import Link from 'next/link'

async function getLatestPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc)[0...3] {
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

export default async function Home() {
  const latestPosts = await getLatestPosts()

  return (
    <div className="bg-white">
      {/* ヒーローセクション */}
      <section className="py-20 px-4 text-center bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto">
          <div className="w-32 h-32 mx-auto mb-6 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-gray-500 text-sm">プロフィール画像</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ゆづき
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            スマホの専門家
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            最新のスマートフォン情報、アプリレビュー、お得な通信情報をお届けします。
            iPhoneからAndroidまで、スマホに関する疑問を解決します。
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/blog"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              ブログを見る
            </Link>
            <a
              href="https://www.instagram.com/rikorin1212/profilecard/?igsh=d2NlOGRlbG04ZzQ1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition duration-200"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>

      {/* 最新記事セクション */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            最新記事
          </h2>
          
          {latestPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">まだ記事がありません</p>
              <p className="text-sm text-gray-500">
                <a href="/studio" className="text-blue-600 hover:underline">Sanity Studio</a> で記事を作成してください
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestPosts.map((post: any) => (
                <article key={post._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-200">
                  {post.mainImage && (
                    <div className="aspect-video bg-gray-200">
                      <span className="flex items-center justify-center h-full text-gray-500 text-sm">
                        画像
                      </span>
                    </div>
                  )}
                  <div className="p-6">
                    {post.category && (
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-2">
                        {post.category}
                      </span>
                    )}
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {post.isExternal && post.noteUrl ? (
                        <a 
                          href={post.noteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 transition duration-200 inline-flex items-center"
                        >
                          {post.title}
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    </h3>
                    {post.excerpt && (
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="text-sm text-gray-500">
                      {new Date(post.publishedAt).toLocaleDateString('ja-JP')}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {latestPosts.length > 0 && (
            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-block bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition duration-200"
              >
                すべての記事を見る →
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}