const { steamspy: steamSpy } = require('config');
const request = require('services/request');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// TODO Ideally, it should be DB, but for simplifying I've done it only with memory
const SteamSpy = {
  items: {},
  // TODO we should run this in the beginning, to store all games in our DB (tags field only in detail request)
  async saveAllGamesToDB() {
    let appIds = await request(steamSpy.getTypeUrl(steamSpy.requestTypes.all)).then(item => item.appid);

    const gamesPerSecond = 4;

    while(appIds.length) {
      Promise.all(
        appIds.slice(0, gamesPerSecond).map(item => this.fetchById(item))
      );
      appIds = appIds.slice(gamesPerSecond);

      await sleep(1000);
    }
  },
  fetchById(id) {
    return request(steamSpy.getTypeUrl(steamSpy.requestTypes.appdetails, id)).then((item) => {
      this.items[id] = item; // TODO Add to database
      return item;
    }).catch(err => console.error(err));
  },
  findById(id) {
    if (SteamSpy.items[id]) return Promise.resolve(SteamSpy.items[id]); // TODO look for in database
    return this.fetchById(id);
  },
  // TODO may be bulk request to optimise
  isMultiPlayerById: id => SteamSpy.findById(id).then(item => item && item.tags['Multiplayer']),
};

module.exports = SteamSpy;