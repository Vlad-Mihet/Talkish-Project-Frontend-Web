const extractBlogTitle = (blogContainerElement: HTMLElement | undefined): string | null => {
  if (!blogContainerElement) return null;

  const headerElement = blogContainerElement.querySelector('h1');

  return headerElement?.textContent || null;
};

export default extractBlogTitle;
