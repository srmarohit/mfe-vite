import NewsCard from "./components/NewsCard";
import SearchBar from "./components/SearchBar";
import LoadingGrid from "./components/LoadingGrid";
import NoResults from "./components/NoResults";
import { usePoliticalNews } from "./hooks/usePoliticalNews";
import "./App.css";
import { testSharedFn } from "@shared/utils";

function App() {
  const {
    news,
    loading,
    error,
    totalResults,
    fetchNews,
    searchNews,
    filterByTopic,
    clearError,
  } = usePoliticalNews();

  const refreshNews = async () => {
    await fetchNews();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                <span className="text-blue-600">Political</span> News Hub
                <button onClick={testSharedFn}>Test Shared services</button>
              </h1>
              <p className="text-gray-600 mt-2">
                Latest updates from government, policy, and political affairs
              </p>
            </div>
            <button
              onClick={refreshNews}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              <svg
                className={`w-5 h-5 ${loading ? "animate-spin" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <span>{loading ? "Refreshing..." : "Refresh News"}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="mb-10">
          <SearchBar
            onSearch={searchNews}
            isLoading={loading}
            placeholder="Search for political news (e.g., policy, economy, healthcare, environment...)"
          />
        </div>

        {/* Topic Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={() => fetchNews()}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg font-medium transition-colors"
            >
              All Topics
            </button>
            {[
              "policy",
              "environment",
              "healthcare",
              "trade",
              "education",
              "legal",
              "infrastructure",
              "technology",
            ].map((topic) => (
              <button
                key={topic}
                onClick={() => filterByTopic(topic)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium transition-colors"
              >
                {topic.charAt(0).toUpperCase() + topic.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        {!loading && news.length > 0 && (
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-blue-800 font-medium">
              Showing <span className="font-bold">{totalResults}</span>{" "}
              political news article{totalResults !== 1 ? "s" : ""}
            </p>
          </div>
        )}

        {loading && news.length === 0 ? (
          <div className="space-y-8">
            <div className="flex flex-col items-center justify-center py-12">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mb-4"></div>
              <p className="text-gray-600 text-lg">Loading political news...</p>
            </div>
            <LoadingGrid count={6} />
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <div className="text-red-600 mb-4">
              <svg
                className="w-12 h-12 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-red-800 mb-2">
              Error Loading News
            </h3>
            <p className="text-red-700 mb-4">{error}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={refreshNews}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
              >
                Try Again
              </button>
              <button
                onClick={clearError}
                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
              >
                Clear Error
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Latest Political News
              </h2>
              <p className="text-gray-600">
                Stay informed about government policies, legislation, and
                political developments
              </p>
            </div>

            {news.length === 0 ? (
              <NoResults
                message="No political news available"
                suggestion="Check back later for the latest political updates or try searching for a different topic."
                onClear={() => fetchNews()}
              />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {news.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            )}
          </>
        )}
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Political News Hub</h3>
              <p className="text-gray-400">
                Your source for the latest political updates and policy analysis
              </p>
            </div>
            <div className="text-gray-400 text-sm">
              <p>
                © {new Date().getFullYear()} Political News Application. All
                rights reserved.
              </p>
              <p className="mt-1">Built with React, Vite, and Tailwind CSS</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
