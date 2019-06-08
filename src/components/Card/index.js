import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class Card extends Component {
  render() {
    return <article className="Card">{this.props.children}</article>;
  }
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
