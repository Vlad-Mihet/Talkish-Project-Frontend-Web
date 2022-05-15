/**
 * hasReachedEndOfBlogContent.ts
 *
 * Returns a boolean value that represents the truthiness of the viewport having reached
 * the end of the blog content
 *
 * @param parentContainerElm
 * @param blogContentContainerElm
 * @returns
 */
const hasReachedEndOfBlogContent = (
  parentContainerElm: HTMLElement,
  blogContentContainerElm: HTMLDivElement,
): boolean => {
  const { bottom: blogContentElmBottomRect } = blogContentContainerElm.getBoundingClientRect();
  const { bottom: layoutContainerElmBottomRect } = parentContainerElm.getBoundingClientRect();

  // eslint-disable-next-line max-len
  const isReachingEndOfArticleContent = blogContentElmBottomRect <= layoutContainerElmBottomRect + 60;

  return isReachingEndOfArticleContent;
};

export default hasReachedEndOfBlogContent;
