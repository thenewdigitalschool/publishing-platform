import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './index.css';

export default class Text extends Component {
  render() {
    return <div className="MainText">{this.props.children}</div>;
  }
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
};
