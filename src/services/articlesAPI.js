import axios from 'axios';

import { baseUrl, API_KEY } from '../componets/helpers/constants';

const articlesApi = (objApp, handleLoadningState) => {
  const { query, page } = objApp.state;
  handleLoadningState();
  return axios
    .get(`${baseUrl}q=${query}&page=${page}&per_page=12&key=${API_KEY}`)
    .then(response => response.data.hits)
    .then(articles =>
      objApp.setState(prevState => ({
        articles: [...prevState.articles, ...articles],
        page: prevState.page + 1,
      })),
    )
    .catch(error => objApp.setState({ error }))
    .finally(() => objApp.setState({ loading: false }));
};

export default articlesApi;
