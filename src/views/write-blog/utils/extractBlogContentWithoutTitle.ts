// eslint-disable-next-line no-useless-escape
const extractBlogContentWithoutTitle = (blogContent: string): string => blogContent.replace('/\<h1(.*)\>(.*)\<\/h1\>/', '');

export default extractBlogContentWithoutTitle;
