import React, { Component } from 'react';

import './index.css';

export default class Input extends Component {
    render() {
        return (
            <div className="Input">
                <label className="Input-label">{this.props.label}</label>
                <input className="Input-type" type={this.props.type} />
            </div>
        )
    }
}
