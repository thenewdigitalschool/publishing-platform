import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './index.css';

export default class Label extends Component {
  render() {
    return (
      <div className="Label">
        <p className="Label-text">{this.props.children}</p>
        <img
          alt="Arrow point down"
          src="http://via.placeholder.com/18x22"
          className="Label-image"
        />
      </div>
    );
  }
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
};
