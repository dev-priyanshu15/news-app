import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search functionality here
    console.log("Search query:", query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-600 flex-1"
      />
      <button type="submit" className="px-4 py-2  text-white rounded-md">
        <FaSearch />
      </button>
    </form>
  );
}
