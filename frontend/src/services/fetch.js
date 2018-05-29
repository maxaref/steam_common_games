import queryString from 'query-string';

const addParamsToUrl = (url, params) => {
  if (!params) return url;

  return `${url}?${queryString.stringify(params)}`;
};

const fetchDecorator = (url, options) => {
  const customOptions = options;
  let customUrl = url;

  if (!options.method || options.method === 'GET') customUrl = addParamsToUrl(customUrl, options.params);

  return fetch(customUrl, customOptions).then((response) => response.json());
};

export default fetchDecorator;