import React, { Component } from "react";
import {Container,Heading,SubHeading,Button,Input} from './style';

export default class LeftHeader extends Component {
  render() {
    return (
      <Container>
        <Heading>ECOMMERCE SOFTWARE</Heading>
        <SubHeading>Build an online business—no matter what business you’re in</SubHeading>
        <Input placeholder="enter your email address"/>
        <Button>Normal</Button>
        
      </Container>

       
     
    );
  }
}
