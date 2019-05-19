import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './index.css';

export default class Link extends Component {
  render() {
    return (
      <a className="Link" href={this.props.linkurl}>
        {this.props.linklabel}{' '}
      </a>
    );
  }
}

Link.propTypes = {
  linkurl: PropTypes.string.isRequired,
  linklabel: PropTypes.string.isRequired,
};
