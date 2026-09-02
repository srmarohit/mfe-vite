import type { NewsArticle } from '../types/news'

// Mock political news data for demonstration
const mockPoliticalNews: NewsArticle[] = [
  {
    id: '1',
    title: 'New Economic Policy Bill Passes Senate Vote',
    description: 'The Senate approved a comprehensive economic policy bill aimed at stimulating growth and addressing inflation concerns.',
    content: 'In a landmark vote, the Senate passed the Economic Revitalization Act with bipartisan support. The bill includes tax incentives for small businesses, infrastructure funding, and measures to address rising inflation. The legislation now moves to the House for consideration.',
    url: 'https://example.com/news/economic-policy-bill-passes',
    imageUrl: 'https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    publishedAt: '2024-03-15T14:30:00Z',
    source: 'Political Digest',
    author: 'Robert Johnson',
    sport: 'policy', // Reusing sport field for political category
    category: 'politics'
  },
  {
    id: '2',
    title: 'International Summit: Climate Agreement Reached',
    description: 'World leaders reached a historic agreement on climate change at the Global Environmental Summit.',
    content: 'After intense negotiations, participating countries agreed to ambitious carbon reduction targets and established a new international fund for climate adaptation in developing nations. The agreement represents a significant step forward in global climate cooperation.',
    url: 'https://example.com/news/climate-agreement-reached',
    imageUrl: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    publishedAt: '2024-03-14T22:15:00Z',
    source: 'Global News',
    author: 'Maria Rodriguez',
    sport: 'environment',
    category: 'politics'
  },
  {
    id: '3',
    title: 'Healthcare Reform Legislation Advances in Committee',
    description: 'Major healthcare reform legislation cleared its first committee hurdle with significant amendments.',
    content: 'The Health and Human Services Committee voted to advance the Healthcare Access Improvement Act after incorporating provisions to expand coverage and reduce prescription drug costs. The bill now moves to the full House for consideration.',
    url: 'https://example.com/news/healthcare-reform-advances',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    publishedAt: '2024-03-13T18:45:00Z',
    source: 'Policy Watch',
    author: 'Sarah Williams',
    sport: 'healthcare',
    category: 'politics'
  },
  {
    id: '4',
    title: 'Foreign Relations: New Trade Deal Announced',
    description: 'The administration announced a new comprehensive trade agreement with key international partners.',
    content: 'The landmark trade deal includes provisions for digital trade, intellectual property protection, and environmental standards. Officials estimate the agreement could increase trade volumes by 15% over the next five years.',
    url: 'https://example.com/news/trade-deal-announced',
    imageUrl: 'https://images.unsplash.com/photo-1562071707-4b02c4c6a2a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    publishedAt: '2024-03-12T20:30:00Z',
    source: 'Economic Times',
    author: 'Thomas Anderson',
    sport: 'trade',
    category: 'politics'
  },
  {
    id: '5',
    title: 'Education Funding Bill Gains Momentum',
    description: 'Legislation to increase education funding gained bipartisan support in Congress.',
    content: 'The Education Investment Act proposes significant increases in funding for public schools, teacher training programs, and STEM education initiatives. The bill has attracted support from both parties amid growing concerns about education quality.',
    url: 'https://example.com/news/education-funding-bill',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    publishedAt: '2024-03-11T16:20:00Z',
    source: 'Education Policy Review',
    author: 'James Wilson',
    sport: 'education',
    category: 'politics'
  },
  {
    id: '6',
    title: 'Supreme Court Hears Major Civil Rights Case',
    description: 'The Supreme Court heard arguments in a landmark civil rights case with nationwide implications.',
    content: 'Justices heard arguments in a case challenging voting rights restrictions in several states. The decision could have significant implications for election laws across the country and is being closely watched by legal experts.',
    url: 'https://example.com/news/supreme-court-civil-rights',
    imageUrl: 'https://images.unsplash.com/photo-1589391886085-8b6b0ac72a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    publishedAt: '2024-03-10T23:10:00Z',
    source: 'Legal Affairs',
    author: 'Jennifer Chen',
    sport: 'legal',
    category: 'politics'
  },
  {
    id: '7',
    title: 'Infrastructure Modernization Plan Unveiled',
    description: 'The administration unveiled a comprehensive plan to modernize national infrastructure.',
    content: 'The $1.2 trillion Infrastructure Modernization Act includes funding for roads, bridges, broadband expansion, and renewable energy projects. The plan aims to create millions of jobs while addressing critical infrastructure needs.',
    url: 'https://example.com/news/infrastructure-plan',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    publishedAt: '2024-03-09T19:45:00Z',
    source: 'Infrastructure Today',
    author: 'Michael Roberts',
    sport: 'infrastructure',
    category: 'politics'
  },
  {
    id: '8',
    title: 'Cybersecurity Legislation Strengthens Digital Defenses',
    description: 'New cybersecurity legislation aims to strengthen national defenses against digital threats.',
    content: 'The Cybersecurity Enhancement Act establishes new standards for critical infrastructure protection and creates a federal cybersecurity workforce development program. The legislation comes amid increasing concerns about cyber threats.',
    url: 'https://example.com/news/cybersecurity-legislation',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    publishedAt: '2024-03-08T21:30:00Z',
    source: 'Tech Policy Review',
    author: 'David Miller',
    sport: 'technology',
    category: 'politics'
  }
]

// Function to simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// Function to fetch political news
export const fetchPoliticalNews = async (): Promise<NewsArticle[]> => {
  // Simulate API call delay
  await delay(800)
  
  // For demonstration, return mock data
  // In a real application, this would make an actual API call
  // Example: const response = await axios.get('https://newsapi.org/v2/everything', { params: { q: 'politics', apiKey: 'YOUR_API_KEY' } })
  
  // Shuffle and return mock data to simulate fresh data each time
  const shuffledNews = [...mockPoliticalNews]
    .sort(() => Math.random() - 0.5)
    .map((article, index) => ({
      ...article,
      id: (Date.now() + index).toString(), // Generate unique IDs
      publishedAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString() // Random recent dates
    }))
  
  return shuffledNews
}

// Function to search political news by keyword
export const searchPoliticalNews = async (query: string): Promise<NewsArticle[]> => {
  await delay(600)
  
  const normalizedQuery = query.toLowerCase()
  const filteredNews = mockPoliticalNews.filter(article =>
    article.title.toLowerCase().includes(normalizedQuery) ||
    article.description.toLowerCase().includes(normalizedQuery) ||
    article.sport.toLowerCase().includes(normalizedQuery) || // Reusing sport field for political topics
    article.content.toLowerCase().includes(normalizedQuery)
  )
  
  return filteredNews.map((article, index) => ({
    ...article,
    id: (Date.now() + index).toString(),
    publishedAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString()
  }))
}

// Function to get news by political topic
export const getNewsByTopic = async (topic: string): Promise<NewsArticle[]> => {
  await delay(500)
  
  const filteredNews = mockPoliticalNews.filter(article =>
    article.sport.toLowerCase() === topic.toLowerCase() || // Reusing sport field for political topics
    article.category.toLowerCase() === topic.toLowerCase()
  )
  
  return filteredNews.map((article, index) => ({
    ...article,
    id: (Date.now() + index).toString(),
    publishedAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString()
  }))
}