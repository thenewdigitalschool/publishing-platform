import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './index.css';

export default class Subtitle extends Component {
  render() {
    return <h2 className="Subtitle">{this.props.children}</h2>;
  }
}

Subtitle.propTypes = {
  children: PropTypes.node.isRequired,
};
