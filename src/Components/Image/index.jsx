import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './index.css';

export default class Image extends Component {
  render() {
    return <img src={this.props.src} alt={this.props.alt} />;
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
