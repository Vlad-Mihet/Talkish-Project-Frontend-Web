/**
 * clearHomepageBlogsCache
 * 
 * Clears the cached blogs data from the homepage every 15 minutes
 * after being invoked
 * @returns {NODEJS.Timer} - Homepage Blogs Caching Timer
 */

function clearHomepageBlogsCache(): NodeJS.Timer {
  return setInterval(() => {
    sessionStorage.removeItem('homapge-blogs');
  }, 1000 * 60 * 15);
}

export default clearHomepageBlogsCache;