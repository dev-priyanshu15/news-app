import { useState } from "react";
import { twMerge } from "tailwind-merge";

/**
 * React component for rendering an image with error handling and fallback functionality.
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.src - The source URL of the image.
 * @param {string} props.alt - The alternative text for the image.
 * @param {function} [props.onError] - Optional callback function to handle image load errors.
 * @param {number} [props.radius=0] - Optional border radius for the image (default: 0).
 * @param {string} [props.fit="cover"] - Optional object-fit property for the image (default: "cover").
 * @param {string} [props.fallbackSrc="https://placehold.co/600x400?text=Alt%20Image"] - Optional fallback image source URL.
 * @param {...Object} [props.rest] - Additional props to be spread on the img element.
 * @returns {JSX.Element} A React img element with applied styles and error handling.
 */
const Image = ({
  src,
  alt,
  onError,
  radius = 0,
  fit = "cover",
  fallbackSrc = "https://placehold.co/600x400?text=Alt%20Image",
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleError = (event) => {
    if (onError) {
      onError(event);
    }
    if (fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={currentSrc}
      onError={handleError}
      style={{ objectFit: fit, borderRadius: radius }}
      className={twMerge("w-full h-full")}
      alt={alt}
      {...props}
    />
  );
};

export default Image;
