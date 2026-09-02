# Sports News Application

A modern React application built with Vite and TypeScript for displaying the latest sports news.

## Features

- 🏀 **Sports News Display**: Shows latest sports news across various categories (football, basketball, tennis, etc.)
- 🎨 **Modern UI**: Clean, responsive design with Tailwind CSS
- ⚡ **Fast Performance**: Built with Vite for instant hot module replacement
- 📱 **Responsive Design**: Works on mobile, tablet, and desktop
- 🔄 **Real-time Updates**: Refresh functionality to get latest news
- 🔍 **Search Capabilities**: Search news by keyword or sport category
- 🎭 **Mock API**: Simulated API calls with realistic sports data

## Tech Stack

- **React 19**: Latest version with modern features
- **TypeScript**: Type-safe development
- **Vite**: Next-generation frontend tooling
- **Tailwind CSS**: Utility-first CSS framework
- **Axios**: HTTP client for API calls

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/     # React components
│   ├── NewsCard.tsx    # News card component
│   └── SearchBar.tsx   # Search functionality
├── hooks/         # Custom React hooks
├── types/         # TypeScript type definitions
│   └── news.ts    # News-related types
├── utils/         # Utility functions
│   └── newsApi.ts # News API utilities
├── App.tsx        # Main application component
├── App.css        # Additional CSS styles
├── index.css      # Global CSS with Tailwind
└── main.tsx       # Application entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Features in Detail

### News Display
- Cards with sport-specific styling
- Images with fallback handling
- Author information and timestamps
- Source attribution
- Read more links

### Search Functionality
- Keyword search across news content
- Quick search by sport category
- Clear search functionality
- Loading states during search

### Responsive Design
- Mobile-first approach
- Adaptive grid layouts
- Touch-friendly interactions
- Optimized images

### Performance
- Code splitting with Vite
- Lazy loading ready
- Optimized bundle size
- Fast refresh development

## Mock Data

The application uses mock sports news data covering:
- Football (Champions League, Premier League)
- Basketball (NBA Finals)
- Tennis (Wimbledon)
- Baseball (MLB)
- Golf (Masters Tournament)
- Soccer

## Future Enhancements

Potential features to add:
- [ ] Real API integration (NewsAPI, SportsData API)
- [ ] User authentication
- [ ] Favorite articles/bookmarks
- [ ] Push notifications
- [ ] Dark/light mode toggle
- [ ] Offline support
- [ ] Social sharing

## License

This project is created for educational and demonstration purposes.