/**
 * Image error handling utilities
 * Provides reusable error handlers for different fallback strategies
 */

/**
 * Error handler that hides the image on error
 * Useful when a fallback UI is already present
 */
export const handleImageErrorHide = (e: React.SyntheticEvent<HTMLImageElement, Event>): void => {
  e.currentTarget.style.display = "none";
};

/**
 * Error handler that hides the image and creates a text fallback
 * Useful for logos or images where text replacement is appropriate
 */
export const handleImageErrorTextFallback = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackText: string,
  textClassName = "text-sm font-medium text-white/80"
): void => {
  e.currentTarget.style.display = "none";
  const text = document.createElement("span");
  text.className = textClassName;
  text.textContent = fallbackText;
  e.currentTarget.parentElement?.appendChild(text);
};

