import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './index.css';
import NavigationLink from '../Navigation/Link';
import TndsLogo from '../Logo';

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="Navbar-Logo">
          <TndsLogo />
        </div>
        <div className="Navbar-Links">
          <NavigationLink linkurl="#" linklabel="About Us" />
          <NavigationLink linkurl="#" linklabel="Full Time Program" />
          <NavigationLink linkurl="#" linklabel="Living in Porto" />
          <NavigationLink linkurl="#" linklabel="Apply Now" />
        </div>
      </div>
    );
  }
}
NavigationLink.propTypes = {
  linkurl: PropTypes.string.isRequired,
  linklabel: PropTypes.string.isRequired,
};
