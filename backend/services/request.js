const request = require('request-promise');

module.exports = url => request(url, {
  transform: body => JSON.parse(body),
});