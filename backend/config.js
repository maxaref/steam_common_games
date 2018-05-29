module.exports = {
  server: {
    port: 4000,
  },
  steam: {
    API_KEY: '80F071660F846DE147AD4342DD3CB3EB',
    url: 'http://api.steampowered.com',
    getUserGamesUrl(steamid)  {
      return `${this.url}/IPlayerService/GetOwnedGames/v0001/?key=${this.API_KEY}&steamid=${steamid}&format=json&include_appinfo=1`;
    },
    getUserIdByNickUrl(vanityurl)  {
      return `${this.url}/ISteamUser/ResolveVanityURL/v1/?key=${this.API_KEY}&vanityurl=${vanityurl}&format=json`;
    },
    getImageUrl: (appid, hash) => `http://media.steampowered.com/steamcommunity/public/images/apps/${appid}/${hash}.jpg`,
    getAppUrl: appid => `https://store.steampowered.com/app/${appid}/`,
  },
  steamspy: {
    url: 'http://steamspy.com/api.php?request=',
    requestTypes: {
      'appdetails': 'appdetails',
      'top100in2weeks': 'top100in2weeks',
      'top100forever': 'top100forever',
      'top100owned': 'top100owned',
      'all': 'all',
    },
    getTypeUrl(type, appId) {
      if (!this.requestTypes[type]) return console.error('Incorrect request type!');

      let appIdParam = '';
      if (type === this.requestTypes.appdetails && appId) appIdParam = `&appid=${appId}`;

      return `${this.url}${type}${appIdParam}`;
    }
  }
};