import React, { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from '../componets/ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';

import articlesApi from '../services/articlesAPI';

import './App.css';

const INITIAL_STATE_SEARCHBAR = {
  articles: [],
  loading: false,
  error: null,
  query: '',
  page: 1,
};

class App extends Component {
  state = {
    ...INITIAL_STATE_SEARCHBAR,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    const prevQuery = prevState.query;
    const nextQuery = query;
    const prevPage = prevState.page;
    const nextPage = page;
    if (prevQuery !== nextQuery) {
      this.fetchArticles();
    }

    if (nextPage !== prevPage) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  fetchArticles = () => {
    const { query, page } = this.state;
    this.setState({ loading: true });

    articlesApi
      .fetchArticlesWithQuery(query, page)
      .then(articles =>
        this.setState(prevState => ({
          articles: [...prevState.articles, ...articles],
          page: prevState.page + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = query => {
    this.setState({ query, page: 1, articles: [] });
  };

  render() {
    const { articles, loading, error } = this.state;
    return (
      <>
        {error && <p>Somthing went wrong:{error.message}</p>}

        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        {articles.length > 0 && <ImageGallery data={articles} />}
        {loading && <Loader />}
        {articles.length > 0 && !loading && (
          <Button onClick={this.fetchArticles} />
        )}
      </>
    );
  }
}

export default App;
