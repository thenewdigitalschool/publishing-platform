import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './index.css'

export default class ApplyLink extends Component {
  render() {
    return (
      <a className={this.props.className} href={this.props.href}>
        <span className="ApplyLink-text">{this.props.children}</span>{' '}
      </a>
    )
  }
}

ApplyLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
}

ApplyLink.defaultProps = {
  className: null,
  children: null,
}
