# HaalSamachar

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
Project Name: HaalSamachar
├── .github/
│   └── (GitHub-specific configuration files)
├── public/
│   └── vite.svg
├── src/
│   ├── app/
│   │   └── store.js
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── CategoryList.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Image.jsx
│   │   ├── NewsItem.jsx
│   │   ├── NewsItemFooter.jsx
│   │   ├── NewsItemHeader.jsx
│   │   ├── NewsList.jsx
│   │   ├── Pagination.jsx
│   │   └── SearchBar.jsx
│   ├── features/
│   │   └── news/
│   │       ├── newsApi.js
│   │       └── newsSlice.js
│   ├── hooks/
│   │   └── useFetchNews.js
│   ├── layouts/
│   │   └── AppLayout.jsx
│   ├── pages/
│   │   ├── BookmarkPage.jsx
│   │   ├── DetailsPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── SearchPage.jsx
│   │   └── index.js
│   ├── utils/
│   │   └── (Utility functions or helper files, if any)
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── index.html
├── .eslintrc.cjs
├── .gitignore
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
└── vite.config.js

```

## **Screenshots**

### **1. Main Page**  
Displays the latest news articles with categories and a dynamic news feed.  
![Main Page](https://i.postimg.cc/Qt5GGfrf/Screenshot-2024-12-19-182025.png)



---

### **2. Detailed Article Page**  
View complete news articles with a clean and readable layout.  
![Detailed Article](https://i.postimg.cc/0Q1XmxLC/Screenshot-2024-12-19-182255.png)




---

### **3. Search Results Page**  
Search for articles by keywords and view highlighted results.  
![Search Results](https://i.postimg.cc/gjXwWF2f/Screenshot-2024-12-19-182422.png)
 


---

### **4. Bookmark Page**  
Save and revisit your favorite articles easily.  
![Bookmark Page](https://i.postimg.cc/kX7rzNYy/Screenshot-2024-12-19-182159.png)

 


---

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
