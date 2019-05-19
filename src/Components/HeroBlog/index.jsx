import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './index.css';

export default class HeroBlog extends Component {
  render() {
    return (
      <div className="Hero">
        <div className="Hero-featureContainer">
          {this.props.children}
          <div />
        </div>
      </div>
    );
  }
}
HeroBlog.propTypes = {
  children: PropTypes.node.isRequired,
};
