import React, { Component } from 'react';

import './index.css';
import Input from '../../Input';

export default class MailingList extends Component {
  render() {
    return (
      <form className="MailingList">
        <Input className="Input" placeholder="Email" type="email" />
        <button className="MailingList-button" value="submit">
          <span className="MailingList-buttonText"> Subscribe </span>
        </button>
      </form>
    );
  }
}
