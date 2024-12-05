import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = String(import.meta.env.VITE_RAPID_API_KEY);
const API_HOST = String(import.meta.env.VITE_RAPID_API_HOST);

/**
 * Custom React hook for fetching news article data from an API
 * @param {string} url - The URL of the news article to fetch
 * @returns {Object} An object containing loading state, error state, and fetched data
 *   @property {boolean} loading - Indicates if the data is currently being fetched
 *   @property {Error|null} error - Contains any error that occurred during fetching, or null if no error
 *   @property {Object|null} data - The fetched article data, or null if not yet loaded
 */
const useFetchNews = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://news-api14.p.rapidapi.com/v2/article",
        params: {
          url: url,
          type: "html",
        },
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": API_HOST,
        },
      };

      try {
        const response = await axios.request(options);
        setData(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, error, data };
};

export default useFetchNews;
