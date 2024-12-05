import { useState } from "react";
import { useParams } from "react-router-dom";

import { useSearchNewsQuery } from "../features/news/newsApi";
import NewsList from "../components/NewsList";

/**
 * Renders a search page component that displays news articles based on search keywords
 * @param {void} No parameters
 * @returns {JSX.Element} A React component that renders the search results page
 */
const SearchPage = () => {
  const [page, setPage] = useState(1);
  let { keywords } = useParams();

  const { data, error, isFetching } = useSearchNewsQuery({
    page,
    query: keywords,
  });

  return (
    <>
      <h2 className="text-xl font-semibold sm:font-bold px-4 pt-4">
        Search results for {keywords}
      </h2>
      <NewsList
        articles={data}
        error={error}
        isFetching={isFetching}
        page={page}
        setPage={setPage}
      />
    </>
  );
};
 
export default SearchPage;
