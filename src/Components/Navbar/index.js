import React, { Component } from 'react';
import './index.css';

import Link from '../Navigation/link';
import TndsLogo from '../Logo';

<<<<<<< Updated upstream
<<<<<<< Updated upstream
    export default class Navbar extends React.Component{
        render(){
            return (
            <div className="nav-wrapper">
                <div className="logo">
                    <img src="./tnds_logo_white.svg" alt=""/>
=======
import Link from "../Navigation/link"
import TndsLogo from "../Logo"
export default class Navbar extends React.Component {
    render(){
        
        return (
            <div className="Navbar">
                <div className="Navbar-Logo">
                    <TndsLogo />
                </div>
                <div className="Navbar-Links">
                    <Link  linkurl="" linklabel="About Us"/>
                    <Link  linkurl="" linklabel="Full Time Program"/>
                    <Link  linkurl="" linklabel="Living in Porto"/>
                    <Link  linkurl="" linklabel="Apply Now"/>
>>>>>>> Stashed changes
                </div>
                <div className="links">
                    <ul className="link-container">
                        <a href=""><li className="link-item">ABOUT US</li></a>
                        <a href=""><li className="link-item">FULL-TIME PROGRAM</li></a>
                        <a href=""><li className="link-item">LIVING IN PORTO</li></a>
                        <a href=""><button className="apply-button">Apply Now</button></a>
                    </ul>
                </div>  
            </div>
            )
        }
    }
=======
export default class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="Navbar-Logo">
          <TndsLogo />
        </div>
        <div className="Navbar-Links">
          <Link linkurl="" linklabel="About Us" />
          <Link linkurl="" linklabel="Full Time Program" />
          <Link linkurl="" linklabel="Living in Porto" />
          <Link linkurl="" linklabel="Apply Now" />
        </div>
      </div>
    );
  }
}

>>>>>>> Stashed changes
