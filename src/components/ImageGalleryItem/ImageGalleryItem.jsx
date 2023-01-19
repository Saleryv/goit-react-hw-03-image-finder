import PropTypes from 'prop-types';
import css from "../ImageGalleryItem/ImageGalleryItem.module.css"
import { Modal } from '../Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  onModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    return (
      <li className={css.ImageGalleryItem}>
        <img
          onClick={this.onModal}
          className={css.ImageGalleryItemImage}
          src={this.props.webformatURL}
          alt=""
        />
        {this.state.isModalOpen && (
          <Modal
            largeImageURL={this.props.largeImageURL}
            onClose={this.onModal}
          />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};