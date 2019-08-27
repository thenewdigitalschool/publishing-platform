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
          <TndsLogo>hacking design education</TndsLogo>
        </div>
        <div className="Navbar-Links">
          <NavigationLink
            linkurl="http://thenewdigitalschool.com/about"
            linklabel="About Us"
          />
          <NavigationLink
            linkurl="http://thenewdigitalschool.com/fulltime_program"
            linklabel="Full Time Program"
          />
          <NavigationLink
            linkurl="http://thenewdigitalschool.com/application"
            linklabel="Applications"
          />
        </div>
      </div>
    );
  }
}
NavigationLink.propTypes = {
  linkurl: PropTypes.string.isRequired,
  linklabel: PropTypes.string.isRequired,
};
