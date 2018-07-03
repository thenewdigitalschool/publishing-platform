import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './index.css';
import Link from '../Navigation/Link';
import TndsLogo from '../Logo';

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="Navbar-Logo">
          <TndsLogo />
        </div>
        <div className="Navbar-Links">
          <Link l="#" linklabel="About Us" />
          <Link linkurl="#" linklabel="Full Time Program" />
          <Link linkurl="#" linklabel="Living in Porto" />
          <Link linkurl="#" linklabel="Apply Now" />
        </div>
      </div>
    );
  }
}
Link.propTypes = {
  linkurl: PropTypes.string.isRequired,
  linklabel: PropTypes.string.isRequired,
};
