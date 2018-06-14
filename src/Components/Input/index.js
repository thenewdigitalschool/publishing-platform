import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './index.css';

export default class Input extends Component {
  render() {
    return (
      <div className="Input">
        <label htmlFor={this.props.id} className="Input-label">{/* eslint-disable-line jsx-a11y/label-has-for */}
          {this.props.label}
        </label>
        <input id={this.props.id} className="Input-type" type={this.props.type} />
      </div>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'textarea']).isRequired,
};
