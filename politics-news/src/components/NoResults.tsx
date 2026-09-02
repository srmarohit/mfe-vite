interface NoResultsProps {
  message?: string
  suggestion?: string
  onClear?: () => void
}

const NoResults = ({ 
  message = "No sports news found", 
  suggestion = "Try a different search term or check back later.",
  onClear 
}: NoResultsProps) => {
  return (
    <div className="text-center py-16">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">
        {message}
      </h3>
      
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        {suggestion}
      </p>
      
      {onClear && (
        <button
          onClick={onClear}
          className="inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Clear Search
        </button>
      )}
    </div>
  )
}

export default NoResults