import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { TiUserOutline } from "react-icons/ti";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon, 
} from "react-share";

/**
 * Renders the footer component for a news item, including author information and sharing options.
 * @param {Object} props - The component props
 * @param {Object} props.article - The article object containing information about the news item
 * @param {function} props.handleBookmark - The function to handle bookmarking the article
 * @param {boolean} props.isBookmarked - Indicates whether the article is currently bookmarked
 * @returns {JSX.Element} A React component representing the footer of a news item
 */
export default function NewsItemFooter({
  article,
  handleBookmark,
  isBookmarked,
}) {
  const authorsLength = article?.authors.length;
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TiUserOutline />
          {article.authors?.map((author, idx) => (
            <span key={author}>
              {author}
              {idx === authorsLength - 1 ? "" : ","}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <FacebookShareButton url={article?.url} quote={article?.title}>
            <FacebookIcon size={20} round />
          </FacebookShareButton>
          <TwitterShareButton url={article?.url} title={article?.title}>
            <TwitterIcon size={20} round />
          </TwitterShareButton>
          <LinkedinShareButton url={article?.url} title={article?.title}>
            <LinkedinIcon size={20} round />
          </LinkedinShareButton>
          <button type="button" onClick={handleBookmark}>
            {isBookmarked ? <BsBookmarkFill /> : <BsBookmark />}
          </button>
        </div>
      </div>
    </>
  );
}
