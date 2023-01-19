import { Component } from 'react';
import { createPortal } from 'react-dom';
import propTypes from 'prop-types';
import css from "../Modal/Modal.module.css"


export class Modal extends Component {
  handleBackdrop = e => {
    if (e.target === e.currentTarget) this.props.onClose();
  };

  handleKeyDown = e => {
    if (e.key === 'Escape') this.props.onClose();
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return createPortal(
      <div className={css.Overlay} onClick={this.handleBackdrop}>
        <div className={css.Modal}>
          <img src={this.props.largeImageURL} alt="modal" />
        </div>
      </div>,
      document.querySelector('#modalPortal')
    );
  }
}

Modal.propTypes = {
  largeImageURL: propTypes.string.isRequired,
};