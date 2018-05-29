const config = require('config');
const SteamSpy = require('models/SteamSpy');
const steamApi = require('services/steamApi');
const intersectionBy = require('lodash/intersectionBy');
const compact = require('lodash/compact');

const getRedundentFields = ({ appid, name, img_logo_url }) => ({
  appid,
  name,
  image: config.steam.getImageUrl(appid, img_logo_url),
  src: config.steam.getAppUrl(appid)
});

module.exports = {
  getUrls: (text = '') => {
    const urls = text.split('\n').map(url => url.trim());
    return compact(urls);
  },
  async getAll(urls) {
    const response = await Promise.all(urls.map(url => steamApi.getUserGamesByUrl(url)));
    const usersGames = compact(response.map(info => info.response.games));
    const commonGames = intersectionBy(...usersGames, game => game.appid).slice(0, 30);

    const isMultiple = await Promise.all(
      commonGames.map(({ appid }) => SteamSpy.isMultiPlayerById(appid))
    );
    const multiPlayerGames = commonGames.filter((item, index) => isMultiple[index]);

    return multiPlayerGames.map(getRedundentFields);
  },
};