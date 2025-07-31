export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {/* ヘッダー */}
        <div className="px-8 py-12 bg-gradient-to-r from-blue-50 to-indigo-100 text-center">
          <div className="w-32 h-32 mx-auto mb-6 bg-gray-300 rounded-full flex items-center justify-center">
            <span className="text-gray-500 text-sm">プロフィール画像</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ゆづき
          </h1>
          <p className="text-xl text-gray-600">
            スマホの専門家
          </p>
        </div>

        {/* プロフィール詳細 */}
        <div className="p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              プロフィール
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                はじめまして、ゆづきです！スマートフォンに関する情報を発信しています。
              </p>
              
              <p className="leading-relaxed">
                iPhoneからAndroidまで、最新のスマートフォン情報やアプリレビュー、
                お得な通信情報をわかりやすくお届けしています。
                スマホに関する疑問や悩みがあれば、ぜひブログをチェックしてみてください。
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                専門分野
              </h3>
              
              <ul className="list-disc list-inside space-y-2">
                <li>iPhone・iPad の使い方とトラブル解決</li>
                <li>Androidスマートフォンの機能解説</li>
                <li>おすすめアプリのレビューと活用法</li>
                <li>スマホアクセサリーの選び方</li>
                <li>格安SIM・通信プランの比較</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                SNS
              </h3>
              
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/rikorin1212/profilecard/?igsh=d2NlOGRlbG04ZzQ1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-700 rounded-lg hover:bg-pink-200 transition duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12.017 0C8.396 0 7.966.01 6.755.058 5.546.107 4.67.263 3.908.558a7.936 7.936 0 0 0-2.87 1.87A7.936 7.936 0 0 0 .173 5.297c-.295.76-.451 1.637-.5 2.846C-.357 9.354-.367 9.784-.367 13.405c0 3.62.01 4.05.058 5.262.049 1.209.205 2.085.5 2.845a7.936 7.936 0 0 0 1.87 2.87 7.936 7.936 0 0 0 2.87 1.87c.76.294 1.636.45 2.845.499C7.967 26.99 8.397 27 12.017 27s4.05-.01 5.262-.058c1.209-.049 2.085-.205 2.845-.5a7.936 7.936 0 0 0 2.87-1.87 7.936 7.936 0 0 0 1.87-2.87c.294-.76.45-1.636.499-2.845.049-1.212.058-1.642.058-5.262s-.01-4.05-.058-5.262c-.049-1.209-.205-2.085-.5-2.845a7.936 7.936 0 0 0-1.87-2.87A7.936 7.936 0 0 0 20.162.563c-.76-.295-1.636-.451-2.845-.5C16.097.014 15.667.004 12.047.004L12.017 0zm-.764 2.927c.349-.003.739-.003 1.126-.003 3.475 0 3.888.01 5.26.058 1.271.058 1.96.27 2.421.448a4.026 4.026 0 0 1 1.492.972 4.026 4.026 0 0 1 .972 1.492c.178.461.39 1.15.448 2.421.048 1.372.058 1.785.058 5.26s-.01 3.888-.058 5.26c-.058 1.271-.27 1.96-.448 2.421a4.026 4.026 0 0 1-.972 1.492 4.026 4.026 0 0 1-1.492.972c-.461.178-1.15.39-2.421.448-1.372.048-1.785.058-5.26.058s-3.888-.01-5.26-.058c-1.271-.058-1.96-.27-2.421-.448a4.026 4.026 0 0 1-1.492-.972 4.026 4.026 0 0 1-.972-1.492c-.178-.461-.39-1.15-.448-2.421-.048-1.372-.058-1.785-.058-5.26s.01-3.888.058-5.26c.058-1.271.27-1.96.448-2.421a4.026 4.026 0 0 1 .972-1.492 4.026 4.026 0 0 1 1.492-.972c.461-.178 1.15-.39 2.421-.448 1.2-.055 1.667-.07 4.098-.07l.902.001zm6.24 2.683a1.044 1.044 0 1 0 0 2.089 1.044 1.044 0 0 0 0-2.089zM12.017 7.351a5.649 5.649 0 1 0 0 11.297 5.649 5.649 0 0 0 0-11.297zm0 2.297a3.352 3.352 0 1 1 0 6.705 3.352 3.352 0 0 1 0-6.705z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Instagram
                </a>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mt-8">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  お問い合わせ
                </h3>
                <p className="text-blue-800">
                  ブログに関するご質問やご感想は、Instagramのダイレクトメッセージでお気軽にお送りください。
                  皆さまからのメッセージをお待ちしています！
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}