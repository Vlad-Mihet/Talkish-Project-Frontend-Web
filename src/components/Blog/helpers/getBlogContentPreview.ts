/**
 * Returns a short preview of a given blog based on its content
 * 
 * @param {string} blogContent
 * @returns {string} A short preview of a blog
 */

function getBlogContentPreview(blogContent: string): string {
  // We'll get either the first 50 words, or the first 250 characters
  // However many fit into a sequence of 250 characters

  const words: string[] = blogContent.slice(0, 250).split(" ");
  return words.join(" ") + '...';
}

export default getBlogContentPreview;