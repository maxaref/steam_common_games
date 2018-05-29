const { server } = require('config.js');
const express = require('express');
const commonGames = require('services/commonGames');
const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const errorHandlerDecorator = callback => async (req, res, next) => {
  try {
    await callback(req, res, next);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err.message });
  }
};

app.get('/api/common_multiplayer_games', errorHandlerDecorator(async (req, res) => {
  const { text } = req.query;

  const urls = commonGames.getUrls(text);
  const all = await commonGames.getAll(urls);

  res.send(all);
}));

app.listen(server.port, async () => {
  console.log('Example app listening on port 4000!');

/*  const urls = commonGames.getUrls(`
    http://steamcommunity.com/id/gwellir
    https://steamcommunity.com/id/tnactim
    http://steamcommunity.com/id/hwestar
    http://steamcommunity.com/id/Tryr
    https://steamcommunity.com/id/nikitabegun
    https://steamcommunity.com/id/schnappi_omsk
  `);

  console.log(urls);
  const all = await commonGames.getAll(urls);
  console.log(all);*/
});