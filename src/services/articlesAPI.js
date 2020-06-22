import axios from 'axios';

const fetchArticlesWithQuery = (searchQuery, page = 1) => {
  console.log(page);

  return axios
    .get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=16237149-31f8128048fb3bf9af47cfac8`,
    )
    .then(response => response.data.hits);
};

export default {
  fetchArticlesWithQuery,
};
