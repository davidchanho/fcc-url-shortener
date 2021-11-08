function isUrl(url) {
  const regex = /^[http://www.]/gi;
  return url.match(regex);
}

module.exports = isUrl;
