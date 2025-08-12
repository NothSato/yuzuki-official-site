export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">ゆづき公式ブログ</h1>
      
      <div className="mb-12 text-center">
        <p className="text-lg text-gray-600 mb-4">
          スマートフォン専門家として最新の情報をお届けします
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 記事一覧 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-3 line-clamp-3">
            サンプル記事タイトル
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-3">
            サンプル記事の内容です。3行で固定されます。
          </p>
          <button className="bg-pink-200 hover:bg-pink-300 px-4 py-2 rounded">
            続きを読む
          </button>
        </div>
      </div>
    </div>
  )
}