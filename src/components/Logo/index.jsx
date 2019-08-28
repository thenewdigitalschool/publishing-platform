import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './index.css';
import logo from './tnds_logo_white.svg';

export default class TndsLogo extends Component {
  render() {
    return (
      <div className="Logo">
        <a href="http://thenewdigitalschool.com/">
          <img alt="TNDS logo" src={logo} className="Logo-image" />
          <p className="Logo-text">{this.props.children}</p>
        </a>
      </div>
    );
  }
}

TndsLogo.propTypes = {
  children: PropTypes.node.isRequired,
};
