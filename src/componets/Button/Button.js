import React from 'react';
// import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ onClick }) => (
  <button type="button" className="Button" onClick={onClick}>
    Load more
  </button>
);

export default Button;

// ImageGalleryItem.propTypes = {
//   tags: PropTypes.string.isRequired,
//   webformatURL: PropTypes.string.isRequired,
// };
