// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    const formData = Object.fromEntries(new FormData(form));

    if (formData) {
      navigate(`/search/${formData.search}`);
    }

    form.reset();
  };
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <fieldset className="w-full text-gray-800">
          <label htmlFor="search" className="hidden">
            Search
          </label>
          <div className="relative w-full sm:max-w-[400px] mx-auto border border-gray-800 rounded-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="button"
                title="search"
                className="p-1 focus:outline-none focus:ring"
              >
                <FaSearch />
              </button>
            </span>
            <input
              type="search"
              name="search"
              placeholder="Search..."
              className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none text-gray-100 bg-[#edf5fe]"
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
}
