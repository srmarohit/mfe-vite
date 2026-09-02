import { useState, useCallback, useEffect } from 'react'
import type { NewsArticle } from '../types/news'
import { fetchSportsNews, searchSportsNews, getNewsBySport } from '../utils/newsApi'

interface UseSportsNewsReturn {
  news: NewsArticle[]
  loading: boolean
  error: string | null
  totalResults: number
  fetchNews: () => Promise<void>
  searchNews: (query: string) => Promise<void>
  filterBySport: (sport: string) => Promise<void>
  clearError: () => void
}

export const useSportsNews = (): UseSportsNewsReturn => {
  const [news, setNews] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [totalResults, setTotalResults] = useState(0)

  const fetchNews = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const sportsNews = await fetchSportsNews()
      setNews(sportsNews)
      setTotalResults(sportsNews.length)
    } catch (err) {
      setError('Failed to load sports news. Please check your connection and try again.')
      console.error('Error fetching news:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  const searchNews = useCallback(async (query: string) => {
    if (!query.trim()) {
      await fetchNews()
      return
    }

    try {
      setLoading(true)
      setError(null)
      const searchResults = await searchSportsNews(query)
      setNews(searchResults)
      setTotalResults(searchResults.length)
      
      if (searchResults.length === 0) {
        setError(`No sports news found for "${query}". Try a different search term.`)
      }
    } catch (err) {
      setError('Failed to search news. Please try again.')
      console.error('Error searching news:', err)
    } finally {
      setLoading(false)
    }
  }, [fetchNews])

  const filterBySport = useCallback(async (sport: string) => {
    try {
      setLoading(true)
      setError(null)
      const filteredNews = await getNewsBySport(sport)
      setNews(filteredNews)
      setTotalResults(filteredNews.length)
      
      if (filteredNews.length === 0) {
        setError(`No news available for ${sport}. Try a different sport.`)
      }
    } catch (err) {
      setError(`Failed to filter news for ${sport}. Please try again.`)
      console.error('Error filtering news by sport:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  const clearError = useCallback(() => {
    setError(null)
  }, [])

  // Fetch news on initial load
  useEffect(() => {
    fetchNews()
  }, [fetchNews])

  return {
    news,
    loading,
    error,
    totalResults,
    fetchNews,
    searchNews,
    filterBySport,
    clearError
  }
}