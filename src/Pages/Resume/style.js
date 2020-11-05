import styled from "styled-components";

export const Container = styled.div`
width:100%;
height:1785px;
`
export const ImageContainer = styled.div`
  background: #fff; /* fallback for old browsers */
  
  width: 30%;
  height: 100%;
  padding-left:10%;
  padding-top: 3%;
  float:left;
  @media screen and (max-width: 700px) {
    width: 30%;
  height: 500px;
  }
`;

export const Image = styled.img`
  
  margin-top:10px;
  height: 200px;
  width: 100px;
  border-radius: 50%;
  
  
`;
export const Title = styled.h2`
 
width:300px;
padding-left:10%;
margin-top:10px;
`;
export const SubTitle = styled.h3`
  width:300px;
  margin-top:10px;
  padding-left:10%;
  
`;
export const Hr = styled.hr`
  border-top: 2px steelblue  #fcb045;
  width:200px;
  margin-top:10px;
  padding-left:10%;
  
`;
export const HrForLeftPanel = styled.hr`
  border-top: 2px steelblue  #fcb045;
  width:100%;
  margin-top:5%;
  padding-left:10%;
  margin-bottom:5%;
  
  
  
`;
export const VerticalLine = styled.div`

  border-left: 3px solid #ccc;
  
  width:70%;
  float:right;
  margin-top:5%;
  height:100%;
`

export const Skills = styled.p`
  color: white;
  font-size: 20px;
  padding: 1em;
`;
export const Box = styled.h2`
 margin-left:20px;
 color:#E22544;
 @media screen and (max-width: 700px) {
    width: 30%;
  height: 500px;
  }

`
export const SubBox = styled.h4`

color:#E22544;
margin-left:5%;
`

export const BoxDetails = styled.p`
 margin-left:10%;
 margin-top:2%;
 margin-bottom:2%;
 font-size:16px;
 font-family:"Times New Roman", Times, serif;

`
export const Stars = styled.span`
margin-right:10px;
`


