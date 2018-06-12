import React, { Component } from 'react';
import Icon from './icon.js';
import './index.css';

export default class Icons extends Component {
    render() {
        return <div className="Icons">
            <Icon socialIcon="facebook"/>
            <Icon socialIcon="twitter"/>
            <Icon socialIcon="instagram"/>
            <Icon socialIcon="medium"/>
            <Icon socialIcon="producthunt"/>
        </div>
    }
}
