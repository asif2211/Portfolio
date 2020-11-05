import React, { Component } from 'react';
import {ProfileImageContainer,Image,ProfileContent,ProfileHeading,Hr,Skills} from './style'
export default class Resume extends Component {
  render() {
    return (
      
      <ProfileImageContainer>
      {/* <img src={require('../images/shopify.png')} className="ProfileImage"/> */}
        <div style={{width:'30%',}}>
        <Image alt="Avatar" src={require('../../images/PortfolioProfile.jpg') } alt="Avatar" style={{width:'200px'}}/>
        </div>
        <ProfileContent>
          <ProfileHeading>
            Full Stack Devloepr
          </ProfileHeading>
          <Hr/>
          <Skills>
          HTML/CSS | Bootstrap | Javascript | React | PHP | MYSQL | Mongo Db 
          </Skills>
        </ProfileContent>
      </ProfileImageContainer>
      
    );
  }
}
