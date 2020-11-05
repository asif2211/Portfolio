import styled from 'styled-components';


export const Container = styled.div`
width:50%;
background-color:#FAEBD7;
height:100%;
float:left;
padding-top:5%;


`;
export const Heading = styled.h3`
font-size:20px;
margin-left:16%;
background-color:#FAEBD7;
font-weight:bold;
color:#004C3F;
margin-top:-20px;

`;
export const SubHeading = styled.p`
font-size:4em;
font-weight:800;
margin-left:16%;
color:#004C3F;

`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  margin-left:16%;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: white;
  border-radius: 3px;
  margin-left:16%;
  width:400px;
  border: 2px solid indigo;
`;
