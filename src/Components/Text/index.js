import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './index.css';

export default class Text extends Component {
  render() {
    return <p className="MainText">{this.props.children}</p>;
  }
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
};
