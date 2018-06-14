import React, { Component } from 'react';

import './index.css';
import Quote from '../Quote';
import Title from '../Title';

export default class Hero extends Component {
  render() {
    return (
      <div className="Hero">
        {this.props.children}
        /* logo goes here
        nav bar goes here */
        <div className="FeatureContainer">
          <Title>Telmos Story</Title>
          <Quote>
            "In the school there is not a typical day, like, you always have a
            different activies, but the good thing is that you can decide which
            activities you want to be involved with."
          </Quote>
        </div>
      </div>
    )
  }
}
