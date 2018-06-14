import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './index.css';

export default class ApplyLink extends Component {
  render() {
    return (
      <a className="ApplyLink" href={this.props.LinkUrl}>
        {' '}
        <span className="ApplyLink-text">{this.props.children}</span>{' '}
      </a>
    );
  }
}

ApplyLink.propTypes = {
  LinkUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
