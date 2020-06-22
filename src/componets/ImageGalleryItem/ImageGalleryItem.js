import React from 'react';
import PropTypes from 'prop-types';

import './imageGalleryItem.css';

const ImageGalleryItem = ({ webformatURL, tags, openModal, largeImageURL }) => (
  <li className="ImageGalleryItem" onClick={openModal}>
    <img
      src={webformatURL}
      alt={tags}
      data-name={largeImageURL}
      className="ImageGalleryItem-image"
    />
  </li>
);

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
