import React, { Component } from 'react';
import './reset.css';
import './normalize.css';
import './index.css';

export default class Layout extends Component {
    render() {
        return <div class="Layout">
            <nav className="Layout-navigation"></nav>
            <div className="Layout-content">{this.props.children}</div>
            <footer className="Layout-footer"></footer>
        </div>
    }
}
