import React from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import './ImageGallery.css';

const ImageGallery = ({ data }) => (
  <ul className="ImageGallery">
    {data.map(({ id, webformatURL, tags }) => (
      <ImageGalleryItem key={id} webformatURL={webformatURL} tags={tags} />
    ))}
  </ul>
);

export default ImageGallery;

ImageGallery.propTypes = {
  data: PropTypes.array.isRequired,
};
