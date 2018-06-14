import React, { Component } from 'react';

import './index.css';


export default class PlayButton extends Component {
  render() {
    return (
      <div className="PlayButton">
        <svg className="PlayButton-icon" src={this.props.src} alt={this.props.alt} />
        <p className="PlayButton-label">Watch this!</p>
      </div>
    )
  }
}
