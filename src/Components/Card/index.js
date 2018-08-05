import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class Card extends Component {
  render() {
    return (
      <article className="Card">
        <div className="Card-PostImage">
          <img src="http://via.placeholder.com/350x200" alt="Let's try describing this thing" />
        </div>
        <div className="Card-PostPreview">
          {this.props.children}
        </div>
      </article>
    );
  }
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
