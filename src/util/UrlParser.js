const getParsedUrl = () => {
  const { hash } = window.location;
  if (hash.includes('/')) { // Avoiding internal page link
    return hash.split('/');
  }
  return null;
};

const UrlParser = {
  getPage() {
    const parsedUrl = getParsedUrl();
    if (parsedUrl == null || parsedUrl[1] === '') {
      return '/';
    }
    return parsedUrl[1];
  },
};

export default UrlParser;
