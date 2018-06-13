import React, { Component } from 'react';
import './index.css'

export default class ApplyLink extends Component {
    render() {
        return (
            <a className="ApplyLink" href={this.props.LinkUrl} > <span className="ApplyLink-text">{this.props.children}</span> </a>
        )
    }
} 
