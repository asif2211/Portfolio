import styled from "styled-components";

export const ProfileImageContainer = styled.div`
  background: #fff; /* fallback for old browsers */
  
  width: 100%;
  height: 800px;
  padding-left: 15%;
  padding-right: 10%;
  padding-top: 5%;
`;

export const Image = styled.img`
  margin: auto;

  border: 10px solid #953a37;
  height: 250px;
  width: 200px;
  border-radius: 10px 0 10px 0px;
  width: 30%;
  float: left;
`;
export const ProfileContent = styled.div`
  width: 70%;

  margin-top: 5px;
  height: 150px;
  text-align: center;
  float: left;
  margin-left: 30px;
  border-radius: 10px;
  background: #141e30; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #243b55,
    #141e30
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #243b55,
    #141e30
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
export const ProfileHeading = styled.h1`
  font-family: "Times New Roman", Times, serif;
  color: white;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
`;
export const Hr = styled.hr`
  border-top: 10px dotted white;
  width: 50%;
  color: white;
  margin: auto;
  margin-top: 10px;
`;

export const Skills = styled.p`
  color: white;
  font-size: 20px;
  padding: 1em;
`;
