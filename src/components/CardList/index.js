import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default class CardList extends Component {
  render() {
    return (
      <ul className="CardList">
        {this.props.children}
      </ul>
    );
  }
}

CardList.propTypes = {
  children: PropTypes.node.isRequired,
};
