/**
 * Returns the estimated reading time of a blog
 * @param {string} blogContent
 * @returns {number} Blog estimated reading time based on content length
 */

function getBlogReadingTime(blogContent: string): number {
  const wpm = 225; // Average Words Per Minute for the average reader
  const numOfWords: number = blogContent.trim().split(/\s+/).length;
  const timeToRead = Math.ceil(numOfWords / wpm);
  return timeToRead;
}

export default getBlogReadingTime;
