import React, {Component} from "react"
import "./index.css"

    export default class Navbar extends React.Component{
        render(){
            return (
            <div className="nav-wrapper">
                <div className="logo">
                    <img src="./tnds_logo_white.svg" alt=""/>
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
