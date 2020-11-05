import React, { Component } from "react";
import {Container,Heading,Images} from './style';
export default class RightHeader extends Component {
  render() {
    return (
      <Container>
        
        <Images src={require('../../images/right.jpg')} width="100%" height="100%"/>
        
      </Container>
    //   <div className="right-half">
    //   <img
    //     className="right"
    //     src={require("../../images/right.jpg")}
    //     alt="Smiley face"
    //   />
    // </div>
    );
  }
}
