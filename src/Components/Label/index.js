import React, { Component } from 'react';
import './index.css';

export default class Label extends Component {
    render() {

        return (
            <div className="Label">
                <p className="Label-text">
                    {this.props.children}
                </p>
                <img src="http://via.placeholder.com/18x22" className="Label-image"/>
            </div>
        )
    }
}
