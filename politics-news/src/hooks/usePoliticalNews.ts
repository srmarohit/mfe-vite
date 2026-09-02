import { useState, useCallback, useEffect } from 'react'
import type { NewsArticle } from '../types/news'
import { fetchPoliticalNews, searchPoliticalNews, getNewsByTopic } from '../utils/newsApi'

interface UsePoliticalNewsReturn {
  news: NewsArticle[]
  loading: boolean
  error: string | null
  totalResults: number
  fetchNews: () => Promise<void>
  searchNews: (query: string) => Promise<void>
  filterByTopic: (topic: string) => Promise<void>
  clearError: () => void
}

export const usePoliticalNews = (): UsePoliticalNewsReturn => {
  const [news, setNews] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [totalResults, setTotalResults] = useState(0)

  const fetchNews = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const politicalNews = await fetchPoliticalNews()
      setNews(politicalNews)
      setTotalResults(politicalNews.length)
    } catch (err) {
      setError('Failed to load political news. Please check your connection and try again.')
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
      const searchResults = await searchPoliticalNews(query)
      setNews(searchResults)
      setTotalResults(searchResults.length)
      
      if (searchResults.length === 0) {
        setError(`No political news found for "${query}". Try a different search term.`)
      }
    } catch (err) {
      setError('Failed to search news. Please try again.')
      console.error('Error searching news:', err)
    } finally {
      setLoading(false)
    }
  }, [fetchNews])

  const filterByTopic = useCallback(async (topic: string) => {
    try {
      setLoading(true)
      setError(null)
      const filteredNews = await getNewsByTopic(topic)
      setNews(filteredNews)
      setTotalResults(filteredNews.length)
      
      if (filteredNews.length === 0) {
        setError(`No news available for ${topic}. Try a different topic.`)
      }
    } catch (err) {
      setError(`Failed to filter news for ${topic}. Please try again.`)
      console.error('Error filtering news by topic:', err)
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
    filterByTopic,
    clearError
  }
}