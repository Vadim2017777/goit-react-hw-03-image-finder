const INITIAL_STATE_SEARCHBAR = {
  articles: [],
  loading: false,
  error: null,
  query: '',
  page: 1,
  showModal: false,
  largeImageURL: '',
};

const INITIAL_STATE_GALLERY = {
  query: '',
};

const baseUrl =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&';

const API_KEY = '16237149-31f8128048fb3bf9af47cfac8';

export { INITIAL_STATE_SEARCHBAR, INITIAL_STATE_GALLERY, baseUrl, API_KEY };
