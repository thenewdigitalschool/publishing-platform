import React, { Component } from 'react';

import './index.css';
import Link from '../Link';
import MailingList from './MailingList';
import BrandMark from './BrandMark';
import Icons from '../Icons';

export default class Footer extends Component {
  render() {
    return (
      <section className="Footer">
        <div className="Footer-content">
          <div className="Footer-panel">
            <h3 className="Footer-heading">Lets hack design education together</h3>
            <p className="Footer-text">Get involved and stay up to date with whats happening.</p>
            <MailingList />
            <div className="Footer-contactInfo">
              <span className="Footer-label">e-mail</span>
              <a className="Footer-link" href="mailto:hi@thenewdigitalschool.com">hi@thenewdigitalschool.com</a>
              <span className="Footer-label">address</span>
              <a className="Footer-link" href="https://www.google.com/maps/place/The+New+Digital+School/">Founders Founders Rua da Constituição 346 4200-192 Porto, Portugal</a>
            </div>
            <div className="Footer-social">
              <p className="Footer-label">Have any questions?</p>
              <Icons />
            </div>
          </div>
          <Link LinkText="Program" LinkUrl="http://thenewdigitalschool.com/fulltime_program" />
        </div>
        <BrandMark />
      </section>
    );
  }
}
