import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              ゆづき
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              ホーム
            </Link>
            <Link
              href="/blog"
              className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              ブログ
            </Link>
            <Link
              href="/about"
              className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              プロフィール
            </Link>
          </nav>

          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 p-2 rounded-md"
            >
              <span className="sr-only">メニューを開く</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}