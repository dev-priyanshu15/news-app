import NewsItem from "./NewsItem";
import Pagination from "./Pagination";

const NewsList = ({ articles, error, isFetching, page, setPage }) => {
  if (isFetching) return <div>Fetching...</div>;
  if (error) return <div>Error Occurred: {error.message}</div>;

  return (
    <div className="p-4">
      <div className="grid gap-4">
        {articles.data.map((article, index) => (
          <NewsItem key={article.url} article={article} index={index} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default NewsList;
