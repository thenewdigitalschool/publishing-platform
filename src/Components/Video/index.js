import React, { Component } from 'react';

import './index.css';
import PlayButton from './PlayButton';

export default class Video extends Component {
  render() {
    return (
      <div className="Video">
        <video className="Video-view" src={this.props.src} alt={this.props.alt} />
        <PlayButton></PlayButton>
      </div>
    )
  }
}

