import styled from "styled-components";

export const ProfileImageContainer = styled.div`
  background: #833ab4; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #fcb045,
    #fd1d1d,
    #833ab4
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #fcb045,
    #fd1d1d,
    #833ab4
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  width: 100%;
  height: 800px;
  padding-left: 15%;
  padding-top: 5%;
`;

export const Heading = styled.h2`
text-align:center;
margin-top:20px;
  
`;
export const ProfileContent = styled.div`
  width: 70%;
  margin-top: 5px;
  height: 600px;
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
  margin-top:20px;
  
  
`;
export const Hr = styled.hr`
  border-top: 10px dotted black;
  width: 50%;
  color: black;
  margin: auto;
  margin-top: 10px;
`;

export const Skills = styled.p`
  color: #000;
  font-size: 20px;
  margin:20px;
  text-align:center;
`;
export const FirstName = styled.input`
width:400px;
height:50px;
border-radius:5px;
border:1px solid #ccc;
padding:10px;
font-size:16px;
margin:10px;

`;

export const Message  = styled.textarea`
width:400px;
height:100px;
border-radius:5px;
border:1px solid #ccc;
padding:10px;
font-size:16px;
margin:10px;

`;