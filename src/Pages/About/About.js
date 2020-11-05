import React, { Component } from "react";
import { ProfileImageContainer, Heading, Hr,Skills } from "./style";
import { Card, CardActions, Button } from "@material-ui/core";
export default class About extends Component {
  render() {
    return (
      <ProfileImageContainer>
        <Card
          style={{
            width: "80%",
            margin: "auto",
            height: "400px",
            margin: "30px",
          }}
        >
          <Heading>ABOUT ME</Heading>
          <Hr/>
          <Skills>
          Full Stack Web Developer using PHP|Firebase, React
           with an emphasis on Frontend web development. Experienced
            in building CRUD applications, Forntend focused, Backend
             E-Commerce, Redux , react-router, redux- thunk. Common use of
              UI libraries: Bootstrap 4, React-Bootstrap, Elemental-UI.
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
