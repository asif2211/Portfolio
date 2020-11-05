import styled from "styled-components";

export const ProjectContainer = styled.div`
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
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 5%;
`;
export const Heading = styled.h2`
text-align:center;
margin-top:20px;
  width:100%;
`;
export const Image = styled.img`
  
  
  float: left;
  margin:5px;
  height:272px;
  
  
`;
export const ProfileContent = styled.div`
  width: 30%;
  margin-top: 20px;
  height: 300px;
  
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
  text-align: center;
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
