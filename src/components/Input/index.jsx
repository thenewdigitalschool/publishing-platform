import PropTypes from 'prop-types'
import React, { Component } from 'react'

import './index.css'

export default class Input extends Component {
  renderWithLabel() {
    return (
      <div className="Input">
        <label htmlFor={this.props.id} className="Input-label">
          {/* eslint-disable-line jsx-a11y/label-has-for */}
          {this.props.label}
        </label>
        <input
          id={this.props.id}
          className="Input-type"
          type={this.props.type}
          placeholder={this.props.placeholder}
        />
      </div>
    )
  }

  renderWithoutLabel() {
    return (
      <div className="Input">
        <input
          id={this.props.id}
          className="Input-type"
          type={this.props.type}
          placeholder={this.props.placeholder}
        />
      </div>
    )
  }

  render() {
    if (this.props.label) {
      return this.renderWithLabel()
    }

    return this.renderWithoutLabel()
  }
}

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'textarea']).isRequired,
}

Input.defaultProps = {
  id: null,
  label: null,
}
