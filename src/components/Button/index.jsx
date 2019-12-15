import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './index.css';

export default class Button extends Component {
  render() {
    return (
      <button className="Button" type="button">
        {this.props.children}
      </button>
    );
  }
}
Button.propTypes = {
  children: PropTypes.string.isRequired,
};
