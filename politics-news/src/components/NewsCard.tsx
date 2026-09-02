import type { NewsArticle } from "../types/news";

interface NewsCardProps {
  article: NewsArticle;
}

const NewsCard = ({ article }: NewsCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getTopicClass = (topic: string) => {
    const topicClasses: Record<string, string> = {
      policy: "topic-badge-policy",
      environment: "topic-badge-environment",
      healthcare: "topic-badge-healthcare",
      trade: "topic-badge-trade",
      education: "topic-badge-education",
      legal: "topic-badge-legal",
      infrastructure: "topic-badge-infrastructure",
      technology: "topic-badge-technology",
      economy: "topic-badge-economy",
    };
    return (
      topicClasses[topic.toLowerCase()] ||
      "topic-badge bg-gray-100 text-gray-800"
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      {/* Image container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://placehold.co/600x400/1e40af/ffffff?text=${encodeURIComponent(article.sport.toUpperCase())}`;
          }}
        />
        <div className="absolute top-4 right-4">
          <span className={getTopicClass(article.sport)}>{article.sport}</span>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-black/70 text-white text-xs font-semibold rounded">
            {article.source}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
            {article.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3">
            {article.description}
          </p>
        </div>

        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-sm">
                  {article.author?.[0]?.toUpperCase() || "S"}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">
                  {article.author || "Sports Reporter"}
                </p>
                <p className="text-xs text-gray-500">
                  {formatDate(article.publishedAt)}
                </p>
              </div>
            </div>

            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200"
            >
              Read More
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
