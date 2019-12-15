import PropTypes from 'prop-types'
import React, { Component } from 'react'

import './index.css'

export default class ApplyLink extends Component {
  render() {
    return (
      <a className={this.props.className} href={this.props.href}>
        <span className="ApplyLink-text">{this.props.text}</span>{' '}
      </a>
    )
  }
}

ApplyLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
}

ApplyLink.defaultProps = {
  className: null,
  text: null,
}
