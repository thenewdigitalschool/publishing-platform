import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './index.css';

export default class Avatar extends Component {
  render() {
    return (
      <div className="Avatar">
        <img className="Avatar-image" src={this.props.src} alt={this.props.alt} />
      </div>
    );
  }
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
