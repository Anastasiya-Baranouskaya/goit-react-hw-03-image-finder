import { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  onClickGalleryItem = () => {
    this.props.onClose(this.props.largeImageURL);
  };

  render() {
    return (
      <li className="ImageGalleryItem" onClick={this.onClickGalleryItem}>
        <img
          src={this.props.webformatURL}
          alt={this.props.id}
          className="ImageGalleryItem-image"
        />
      </li>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  onClose: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
};
