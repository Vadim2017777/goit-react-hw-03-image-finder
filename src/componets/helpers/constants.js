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

export { INITIAL_STATE_SEARCHBAR, INITIAL_STATE_GALLERY };
