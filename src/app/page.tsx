export default function HomePage() {
  // サンプル記事データ（12記事）
  const articles = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `サンプル記事タイトル ${i + 1} - これは3行で表示される長いタイトルの例です。非常に長い場合は...`,
    content: `この記事の内容です。3行で固定表示されます。長い文章の場合は省略記号で表示されるようになっています。記事 ${i + 1} の詳細な内容がここに入ります。`,
    isExternal: i % 3 === 0,
    noteUrl: i % 3 === 0 ? `https://note.com/sample/${i + 1}` : null
  }))

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">ゆづき公式ブログ</h1>
        <p className="text-lg text-gray-600">
          スマートフォン専門家として最新の情報をお届けします
        </p>
      </div>

      {/* PC: 3列×4行=12記事、スマホ: 1列×6記事 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.slice(0, 6).map((article) => (
          <div key={article.id} className="bg-white rounded-lg shadow-md p-6 md:block block">
            <h2 
              className="text-lg font-bold mb-3 text-black"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                lineHeight: '1.4em',
                height: '4.2em'
              }}
            >
              {article.title}
            </h2>
            <p 
              className="text-gray-600 mb-4"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                lineHeight: '1.4em',
                height: '4.2em'
              }}
            >
              {article.content}
            </p>
            <button 
              className="bg-pink-200 hover:bg-pink-300 px-4 py-2 rounded transition-colors"
              onClick={() => {
                if (article.isExternal && article.noteUrl) {
                  window.open(article.noteUrl, '_blank')
                }
              }}
            >
              続きを読む
            </button>
          </div>
        ))}
        
        {/* PC専用: 追加の6記事 */}
        <div className="hidden md:contents">
          {articles.slice(6, 12).map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 
                className="text-lg font-bold mb-3 text-black"
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  lineHeight: '1.4em',
                  height: '4.2em'
                }}
              >
                {article.title}
              </h2>
              <p 
                className="text-gray-600 mb-4"
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  lineHeight: '1.4em',
                  height: '4.2em'
                }}
              >
                {article.content}
              </p>
              <button 
                className="bg-pink-200 hover:bg-pink-300 px-4 py-2 rounded transition-colors"
                onClick={() => {
                  if (article.isExternal && article.noteUrl) {
                    window.open(article.noteUrl, '_blank')
                  }
                }}
              >
                続きを読む
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}