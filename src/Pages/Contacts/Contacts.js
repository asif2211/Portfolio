import React, { Component } from "react";
import { ProfileImageContainer, Heading, Hr, Skills, FirstName,Message } from "./style";
import { Card, CardActions, Button } from "@material-ui/core";
export default class Contacts extends Component {
  state = {
    Fname: "",
    Lname: "",
    Email: "",
    Message: "",
  };
  handleFirstName = (event) => {
    this.setState({
      Fname: event.target.value,
    });
  };
  handleLastName = () => {
    console.log("first name");
  };
  handleEmail = () => {
    console.log("first name");
  };
  handleMessage = () => {
    console.log("first name");
  };
  render() {
    return (
      <ProfileImageContainer>
        <Card
          style={{
            width: "80%",
            margin: "auto",
            height: "500px",
            margin: "30px",
          }}
        >
          <Heading>CONTACT US</Heading>
          <Hr />
          <Skills>
            <div>
              <FirstName
                placeholder="First Name"
                value={this.state.Fname}
                onChange={this.handleFirstName}
              />
              <h3>{this.state.Fname}</h3>
            </div>
            <div>
              <FirstName placeholder="Last Name" />
            </div>
            <div>
              <FirstName placeholder="Email" />
            </div>
            <div>
              <Message placeholder="Message" row="10" col="30" />
            </div>
          </Skills>
          {/* <ProfileContent>
          <ProfileHeading>
          ABOUT ME
          </ProfileHeading>
          <Hr/>
          <Skills>
          Full Stack Web Developer using PHP|Firebase, React
           with an emphasis on Frontend web development. Experienced
            in building CRUD applications, Forntend focused, Backend
             E-Commerce. Redux , react-router, redux- thunk. Common use of
              UI libraries: Bootstrap 4, React-Bootstrap, Elemental-UI.
          </Skills>
        </ProfileContent> */}
        </Card>
      </ProfileImageContainer>
    );
  }
}
