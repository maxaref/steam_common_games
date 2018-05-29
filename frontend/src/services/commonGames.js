import fetch from './fetch';

const server = 'http://127.0.0.1:4000/api/';

export const getByLinksText = (text) => {
  return fetch(`${server}common_multiplayer_games`,  { params: { text } });
};