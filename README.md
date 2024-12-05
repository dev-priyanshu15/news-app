# News App

A modern React-based news application that provides a clean interface for browsing, searching, and bookmarking news articles.

## Features

- **Article Browsing**: Browse news articles with a clean, responsive interface
- **Category Navigation**: Filter news by different categories
- **Search Functionality**: Search for specific news articles
- **Bookmarking System**: Save and manage favorite articles
- **Responsive Design**: Optimized for both desktop and mobile viewing
- **Pagination**: Easy navigation through multiple pages of articles

## Tech Stack

- React
- Redux Toolkit for state management
- Tailwind CSS for styling
- Vite as build tool
- React Router for navigation

## Project Structure

```
src/
├── app/
│   └── store.js           # Redux store configuration
├── components/            # Reusable UI components
├── features/
│   └── news/             # News-related redux slice and API
├── hooks/                # Custom React hooks
├── layouts/              # Layout components
├── pages/                # Main application pages
└── utils/                # Helper functions and constants
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Main Components

- `Header`: Main navigation and search bar
- `NewsItem`: Individual news article display
- `CategoryList`: Category navigation
- `SearchBar`: Article search functionality
- `Pagination`: Page navigation
- `BookmarkPage`: Saved articles management

## Features in Detail

### News Browsing
- Browse articles by category
- View article details
- Responsive image loading
- Article publish date formatting

### Search
- Search articles by keyword
- Real-time search results
- Search history

### Bookmarks
- Save articles for later reading
- Remove bookmarks
- Persistent bookmark storage

## Development

The project uses modern React practices including:
- Functional components with hooks
- Redux for state management
- Custom hooks for data fetching
- Component-based architecture
- Responsive design with Tailwind CSS

## Deployment

The application is configured for deployment on Vercel with the included `vercel.json` configuration file.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is open source and available under the MIT License.
