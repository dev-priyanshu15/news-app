import { useRef, useState } from "react";
import { category } from "../utils/constants";

export default function CategoryList({
  selectedCategory,
  setSelectedCategory,
}) {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 3;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="categorylist flex gap-2 overflow-x-auto bg-gray-800 text-gray-300" // Dark background and text color
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
    >
      {category.map((category) => (
        <button
          key={category}
          className={`px-2 py-1.5 rounded ${
            selectedCategory === category
              ? "bg-gray-400 text-white" // Maintain selected category styling
              : ""
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
