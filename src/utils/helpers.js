/**
 * Handles an error by logging it in detail if not in production mode
 * and returning a new error with a minimal user-friendly message.
 * @param {Error} error The error to handle.
 * @param {string} [userMessage] The message to include in the returned error.
 * @returns {Error} A new error containing the user message.
 */
function handleError(
  error,
  userMessage = "An unexpected error occurred. Please check your configuration."
) {
  // If process.env.NODE_ENV isn't defined, assume production
  const nodeEnv = process.env.NODE_ENV || "production";

  // Log detailed error only if not in production
  if (nodeEnv !== "production") {
    console.error(error);
  }

  // Return a new error with a minimal message
  return new Error(userMessage);
}

module.exports = { handleError };
