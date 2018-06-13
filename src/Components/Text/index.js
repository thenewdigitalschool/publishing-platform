import React, { Component } from 'react';
import './index.css';

export default class Text extends Component {
  render(){
    return(
      <p className="MainText">{this.props.mainText}</p>
    );
  }

}
