import React, { Component } from 'react';
import './index.css';

import Link from '../Navigation/link';
import TndsLogo from '../Logo';

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="Navbar-Logo">
          <TndsLogo />
        </div>
        <div className="Navbar-Links">
          <Link linkurl="" linklabel="About Us" />
          <Link linkurl="" linklabel="Full Time Program" />
          <Link linkurl="" linklabel="Living in Porto" />
          <Link linkurl="" linklabel="Apply Now" />
        </div>
      </div>
    );
  }
}


