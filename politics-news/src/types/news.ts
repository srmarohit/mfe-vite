export interface NewsArticle {
  id: string
  title: string
  description: string
  content: string
  url: string
  imageUrl: string
  publishedAt: string
  source: string
  author: string
  sport: string
  category: string
}

export interface NewsApiResponse {
  status: string
  totalResults: number
  articles: NewsArticle[]
}

export interface NewsApiParams {
  q?: string
  category?: string
  country?: string
  pageSize?: number
  page?: number
}