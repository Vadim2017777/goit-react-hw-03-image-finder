import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { INITIAL_STATE_GALLERY } from '../helpers/constants';

import './Searchbar.css';

export default class Searchbar extends Component {
  state = {
    ...INITIAL_STATE_GALLERY,
  };

  handleInputChange = ({ target }) => {
    this.setState({ query: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { query } = this.state;
    onSubmit(query);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE_GALLERY });
  };

  render() {
    const { query } = this.state;

    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
