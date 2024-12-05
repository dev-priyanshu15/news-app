/**
 * Formats a given time string based on its difference from the current time.
 * If the time difference is more than 1 day, it returns the date in "MMM D, YYYY" format.
 * Otherwise, it returns the time in "HH:MM AM/PM" format.
 * @param {string} timeString - The time string to be formatted
 * @returns {string} The formatted date or time string
 */
export function formatTime(timeString) {
  const now = new Date();
  const givenDate = new Date(timeString);
  const difference =
    (now.getTime() - givenDate.getTime()) / 1000 / 60 / 60 / 24;

  if (difference > 1) {
    const formattedDate = givenDate.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    return formattedDate;
  } else {
    const formattedTime = givenDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return formattedTime;
  }
}
