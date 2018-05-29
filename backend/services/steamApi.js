const { steam: config } = require('config');
const request = require('services/request');

const nickRegexp = new RegExp('\\/id\\/(.*)[?\\/]?.*', 'i');

module.exports = {
  getUserGames(id) {
    return request(config.getUserGamesUrl(id));
  },
  getUserIdByNick(nick) {
    return request(config.getUserIdByNickUrl(nick));
  },
  getNickFromUrl(url) {
    const result = url.match(nickRegexp);
    return result && result[1];
  },
  async getUserGamesByUrl(url) {
    const nick = this.getNickFromUrl(url);

    const { response } = await this.getUserIdByNick(nick);
    return this.getUserGames(response.steamid);
  },
};
