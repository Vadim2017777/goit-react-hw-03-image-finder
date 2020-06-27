import axios from 'axios';

import { baseUrl, API_KEY } from '../componets/helpers/constants';

const articlesApi = compApp => {
  const { handleLoadningState } = compApp;
  const { query, page } = compApp.state;

  handleLoadningState();
  return axios
    .get(`${baseUrl}q=${query}&page=${page}&per_page=12&key=${API_KEY}`)
    .then(response => response.data.hits)
    .then(articles =>
      compApp.setState(prevState => ({
        articles: [...prevState.articles, ...articles],
        page: prevState.page + 1,
      })),
    )
    .catch(error => compApp.setState({ error }))
    .finally(() => compApp.setState({ loading: false }));
};

export default articlesApi;
