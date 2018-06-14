import React, {Component} from "react"
import "./index.css"

export default class Title extends Component {
  render() {
    return <h1 className="Title">{this.props.children}</h1>
  }
}
