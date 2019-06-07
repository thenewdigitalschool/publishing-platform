import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './index.css';

export default class FooterLabel extends Component {
  render() {
    return <p className="FooterLabel">{this.props.children}</p>;
  }
}

FooterLabel.propTypes = {
  children: PropTypes.node.isRequired,
};
