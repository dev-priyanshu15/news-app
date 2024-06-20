// import React from "react";

const Pagination = ({ page, setPage }) => {
  return (
    <div className="flex justify-between mt-4 bg-gray-800"> {/* Dark background */}
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className={`px-4 py-2 rounded text-white disabled:opacity-50 ${ // Adjust styles for disabled button
          page === 1 ? "bg-gray-500" : "bg-blue-500"
        }`}
      >
        Previous
      </button>
      <button
        onClick={() => setPage((prev) => prev + 1)}
        className="px-4 py-2 rounded text-white bg-blue-500"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

