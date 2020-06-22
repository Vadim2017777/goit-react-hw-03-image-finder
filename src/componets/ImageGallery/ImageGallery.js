import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import './ImageGallery.css';

const ImageGallery = ({ data, openModal }) => (
  <ul className="ImageGallery">
    {data.map(({ id, webformatURL, tags, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        tags={tags}
        openModal={openModal}
        largeImageURL={largeImageURL}
      />
    ))}
  </ul>
);

export default ImageGallery;

ImageGallery.propTypes = {
  data: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};
