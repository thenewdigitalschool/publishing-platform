import React, { Component } from 'react';

import './index.css';

export default class Image extends Component {
  render() {
    return (
      <img src={this.props.src} alt={this.props.alt} />
    )
  }
}
