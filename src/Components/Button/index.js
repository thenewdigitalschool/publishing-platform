import React, {Component} from 'react';

import './index.css';

export default class Button extends Component {
  render(){
      return(
          <button className="Button">{this.props.children}</button>
      )
    }
  }
