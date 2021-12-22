import React from 'react';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({
  largeImageURL,
  webformatURL,
  onClose,
}) {
  const onClickGalleryItem = () => {
    onClose(largeImageURL);
  };
  return (
    <li className="ImageGalleryItem" onClick={onClickGalleryItem}>
      <img
        src={webformatURL}
        data-source={largeImageURL}
        alt="pictures"
        className="ImageGalleryItem-image"
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
