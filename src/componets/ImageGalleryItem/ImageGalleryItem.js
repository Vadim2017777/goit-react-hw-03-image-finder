import React from 'react';
import PropTypes from 'prop-types';

import './imageGalleryItem.css';

const ImageGalleryItem = ({ webformatURL, tags }) => (
  <li className="ImageGalleryItem">
    <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
  </li>
);

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
};
