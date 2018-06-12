import React, { Component } from 'react';
import './index.css';


export default class Quote extends Component {
  render() {
    return (
        <p className="Quote">{this.props.children}</p>
      );
    }
}
