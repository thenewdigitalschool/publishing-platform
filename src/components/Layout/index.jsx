import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Navbar from '../Navbar';
import Footer from '../Footer';

import './reset.css';
import './normalize.css';
import './index.css';

export default class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="Layout-content">{this.props.children}</div>

        <Footer />
      </div>
    );
  }
}

Layout.propTypes = { children: PropTypes.node.isRequired };
