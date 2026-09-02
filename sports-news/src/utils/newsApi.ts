import type { NewsArticle } from '../types/news'

// Mock sports news data for demonstration
const mockSportsNews: NewsArticle[] = [
  {
    id: '1',
    title: 'Champions League: Manchester City Advances to Quarter-Finals',
    description: 'Manchester City secured their place in the Champions League quarter-finals with a dominant 3-1 victory over Bayern Munich.',
    content: 'In a thrilling match at the Etihad Stadium, Manchester City showcased their European pedigree with a comprehensive victory. Kevin De Bruyne opened the scoring in the 25th minute, followed by goals from Erling Haaland and Phil Foden. Bayern managed a consolation goal through Joshua Kimmich in the 78th minute.',
    url: 'https://example.com/news/champions-league-manchester-city',
    imageUrl: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    publishedAt: '2024-03-15T14:30:00Z',
    source: 'Sports Network',
    author: 'Alex Johnson',
    sport: 'football',
    category: 'sports'
  },
  {
    id: '2',
    title: 'NBA Finals: Lakers Take 2-1 Series Lead',
    description: 'The Los Angeles Lakers defeated the Boston Celtics 112-108 in Game 3 of the NBA Finals.',
    content: 'LeBron James led the Lakers with 32 points, 12 rebounds, and 8 assists, while Anthony Davis added 28 points and 15 rebounds. The Celtics fought hard with Jayson Tatum scoring 35 points, but fell short in the final minutes.',
    url: 'https://example.com/news/nba-finals-lakers-lead',
    imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    publishedAt: '2024-03-14T22:15:00Z',
    source: 'Basketball Today',
    author: 'Mike Rodriguez',
    sport: 'basketball',
    category: 'sports'
  },
  {
    id: '3',
    title: 'Wimbledon: New Champion Crowned in Epic Final',
    description: 'A dramatic five-set final at Wimbledon saw Carlos Alcaraz defeat Novak Djokovic to claim his first Wimbledon title.',
    content: 'In a match that lasted nearly five hours, 20-year-old Carlos Alcaraz defeated defending champion Novak Djokovic 6-4, 5-7, 6-4, 6-7, 6-3. The young Spaniard showed incredible composure against the 23-time Grand Slam champion.',
    url: 'https://example.com/news/wimbledon-new-champion',
    imageUrl: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    publishedAt: '2024-03-13T18:45:00Z',
    source: 'Tennis World',
    author: 'Sarah Williams',
    sport: 'tennis',
    category: 'sports'
  },
  {
    id: '4',
    title: 'MLB Opening Day: Record Attendance Across Stadiums',
    description: 'Major League Baseball kicked off its season with record-breaking attendance numbers and exciting opening day matchups.',
    content: 'Yankee Stadium saw its largest opening day crowd in a decade as the Yankees defeated the Red Sox 5-3. Meanwhile, Dodger Stadium set a new attendance record with 56,000 fans witnessing the Dodgers victory over the Giants.',
    url: 'https://example.com/news/mlb-opening-day-record',
    imageUrl: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    publishedAt: '2024-03-12T20:30:00Z',
    source: 'Baseball Digest',
    author: 'Tom Anderson',
    sport: 'baseball',
    category: 'sports'
  },
  {
    id: '5',
    title: 'Premier League: Arsenal Extends Lead at the Top',
    description: 'Arsenal moved five points clear at the top of the Premier League with a 2-0 victory over their London rivals.',
    content: 'Goals from Bukayo Saka and Martin Ødegaard secured a crucial victory for Arsenal in the North London derby. The win extends their unbeaten run to 15 matches and solidifies their position as title favorites.',
    url: 'https://example.com/news/premier-league-arsenal-lead',
    imageUrl: 'https://images.unsplash.com/photo-1577223625818-75bc1f2ac0e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    publishedAt: '2024-03-11T16:20:00Z',
    source: 'Football Weekly',
    author: 'James Wilson',
    sport: 'soccer',
    category: 'sports'
  },
  {
    id: '6',
    title: 'Golf Masters: Surprise Leader After First Round',
    description: 'An unexpected contender leads the Masters Tournament after an impressive opening round at Augusta National.',
    content: 'Relative unknown golfer shot a 7-under 65 to take a two-shot lead over defending champion. The stunning round included six birdies and an eagle on the par-5 13th hole.',
    url: 'https://example.com/news/golf-masters-surprise-leader',
    imageUrl: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    publishedAt: '2024-03-10T23:10:00Z',
    source: 'Golf Today',
    author: 'Robert Chen',
    sport: 'golf',
    category: 'sports'
  }
]

// Function to simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// Function to fetch sports news
export const fetchSportsNews = async (): Promise<NewsArticle[]> => {
  // Simulate API call delay
  await delay(800)
  
  // For demonstration, return mock data
  // In a real application, this would make an actual API call
  // Example: const response = await axios.get('https://newsapi.org/v2/everything', { params: { q: 'sports', apiKey: 'YOUR_API_KEY' } })
  
  // Shuffle and return mock data to simulate fresh data each time
  const shuffledNews = [...mockSportsNews]
    .sort(() => Math.random() - 0.5)
    .map((article, index) => ({
      ...article,
      id: (Date.now() + index).toString(), // Generate unique IDs
      publishedAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString() // Random recent dates
    }))
  
  return shuffledNews
}

// Function to search sports news by keyword
export const searchSportsNews = async (query: string): Promise<NewsArticle[]> => {
  await delay(600)
  
  const normalizedQuery = query.toLowerCase()
  const filteredNews = mockSportsNews.filter(article =>
    article.title.toLowerCase().includes(normalizedQuery) ||
    article.description.toLowerCase().includes(normalizedQuery) ||
    article.sport.toLowerCase().includes(normalizedQuery) ||
    article.content.toLowerCase().includes(normalizedQuery)
  )
  
  return filteredNews.map((article, index) => ({
    ...article,
    id: (Date.now() + index).toString(),
    publishedAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString()
  }))
}

// Function to get news by sport category
export const getNewsBySport = async (sport: string): Promise<NewsArticle[]> => {
  await delay(500)
  
  const filteredNews = mockSportsNews.filter(article =>
    article.sport.toLowerCase() === sport.toLowerCase()
  )
  
  return filteredNews.map((article, index) => ({
    ...article,
    id: (Date.now() + index).toString(),
    publishedAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString()
  }))
}