import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './index.css';

export default class Separator extends Component {
    render() {
    return (
      <div className="Separator">
        <h1 className="Separator-title">{this.props.children}</h1>
      </div>
    );
  }
}

Separator.propTypes = {
  children: PropTypes.node.isRequired,
};
