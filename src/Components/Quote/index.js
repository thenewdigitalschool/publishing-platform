import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './index.css';

export default class Quote extends Component {
  render() {
    return <p className="Quote">{`"${this.props.children}"`}</p>;
  }
}

Quote.propTypes = {
  children: PropTypes.node.isRequired,
};
