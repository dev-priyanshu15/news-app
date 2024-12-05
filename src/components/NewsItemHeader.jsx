import { Link } from "react-router-dom";

import Image from "./Image";
import { formatTime } from "../utils/helperFns";

/**
 * Renders the header of a news item, displaying the publisher's information and article date.
 * @param {Object} article - The article object containing publisher details and date.
 * @param {Object} article.publisher - The publisher information.
 * @param {string} article.publisher.url - The URL of the publisher's website.
 * @param {string} article.publisher.favicon - The URL of the publisher's favicon.
 * @param {string} article.publisher.name - The name of the publisher.
 * @param {string|Date} article.date - The date of the article publication.
 * @returns {JSX.Element} A React component displaying the publisher's favicon, name, and article date.
 */
export default function NewsItemHeader({ article }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <Link className="flex items-center gap-2" to={article.publisher.url}>
          <span className="h-6 sm:h-8 w-6 sm:w-8 rounded-full overflow-hidden">
            <Image
              src={article.publisher.favicon}
              alt={article.publisher.name}
              title={article.publisher.name}
            />
          </span>
          <span>{article.publisher.name}</span>
        </Link>
        <span>{formatTime(article.date)}</span>
      </div>
    </>
  );
}
