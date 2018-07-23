import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './index.css';
import Navigation from '../Navbar';

export default class HeroBlog extends Component {
  render() {
    return (
      <div className="Hero">
        {this.props.children}
        <Navigation />
        <div className="Hero-featureContainer" />
      </div>
    );
  }
}
HeroBlog.propTypes = {
  children: PropTypes.node.isRequired,
};
