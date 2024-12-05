import NewsItem from "./NewsItem";
import Pagination from "./Pagination";

/**
 * Renders a list of news articles with pagination
 * @param {Object} props - The component props
 * @param {Array} props.articles - The array of news articles to display
 * @param {Object|null} props.error - Error object if an error occurred during fetching
 * @param {boolean} props.isFetching - Indicates if articles are currently being fetched
 * @param {number} props.page - The current page number
 * @param {function} props.setPage - Function to update the current page
 * @returns {JSX.Element} A div containing news items or loading/error messages
 */
const NewsList = ({ articles, error, isFetching, page, setPage }) => {
  if (isFetching) return <div className="text-center mt-10">Fetching...</div>;
  if (error) return <div className="text-center mt-8">Error Occurred: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1  my-4 gap-x-4 ">
      {articles.data.map((article, index) => (
        <NewsItem key={article.url} article={article} index={index} />
      ))}
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default NewsList; 
