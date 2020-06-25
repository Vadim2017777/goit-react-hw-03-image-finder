import axios from 'axios';

import { baseUrl, API_KEY } from '../componets/helpers/constants';

const fetchArticlesWithQuery = (searchQuery, page = 1, handleLoadningState) => {
  return axios
    .get(`${baseUrl}q=${searchQuery}&page=${page}&per_page=12&key=${API_KEY}`)
    .then(response => response.data.hits);
};

export default {
  fetchArticlesWithQuery,
};
