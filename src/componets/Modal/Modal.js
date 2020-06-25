import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Modal.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  handleClick = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      this.props.closeModal();
    }
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = ({ target, code }) => {
    if (code === 'Escape' || target) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className="Overlay" onClick={this.handleClick}>
        <div className="Modal">
          <img src={this.props.imgUrl} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
