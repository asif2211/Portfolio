import React, { Component } from "react";
import '../../components/Logo/style.css';
export default class Logo extends Component {
  render() {
    return (
      <div className="logoContainer">
        <img className="logo" src={require("../../images/shopifyimage.png")} alt="Smiley face" />
        <i className="title">shopify</i>
      </div>
    );
  }
}
