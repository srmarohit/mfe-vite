const NewsCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse h-full flex flex-col">
      {/* Image skeleton */}
      <div className="h-48 bg-gray-200" />
      
      {/* Content skeleton */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Title skeleton */}
        <div className="mb-4">
          <div className="h-6 bg-gray-200 rounded mb-3 w-3/4" />
          <div className="h-6 bg-gray-200 rounded w-1/2" />
        </div>
        
        {/* Description skeleton */}
        <div className="mb-6">
          <div className="h-4 bg-gray-200 rounded mb-2" />
          <div className="h-4 bg-gray-200 rounded mb-2" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
        </div>
        
        {/* Footer skeleton */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-200" />
              <div>
                <div className="h-3 bg-gray-200 rounded w-20 mb-1" />
                <div className="h-2 bg-gray-200 rounded w-16" />
              </div>
            </div>
            
            <div className="h-8 bg-gray-200 rounded w-20" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsCardSkeleton