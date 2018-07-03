import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './reset.css';
import './normalize.css';
import './index.css';

export default class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <nav className="Layout-navigation" />
        <div className="Layout-content">{this.props.children}</div>
        <footer className="Layout-footer" />
      </div>);
  }
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
