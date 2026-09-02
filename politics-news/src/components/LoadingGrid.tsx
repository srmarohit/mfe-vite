import NewsCardSkeleton from './NewsCardSkeleton'

interface LoadingGridProps {
  count?: number
}

const LoadingGrid = ({ count = 6 }: LoadingGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <NewsCardSkeleton key={index} />
      ))}
    </div>
  )
}

export default LoadingGrid