import { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import Button from './Button';

class ImageGallery extends Component {
  render() {
    const { arr, onClose, handleClick } = this.props;
    return (
      <>
        <ul className="ImageGallery">
          {arr.map(({ id, tags, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              onClose={onClose}
              tags={tags}
            />
          ))}
        </ul>
        {arr.length % 12 === 0 && <Button onClick={handleClick} />}
      </>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  arr: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};
