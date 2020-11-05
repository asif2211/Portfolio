import React, { Component } from "react";
import {
  ImageContainer,
  Image,
  Title,
  SubTitle,
  Hr,
  VerticalLine,
  Container,
  Box,
  BoxDetails,
  HrForLeftPanel,
  SubBox,
  Stars,
} from "./style";
import { CardSubtitle } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
export default class Resume extends Component {
  render() {
    return (
      <>
        <Container>
          <ImageContainer>
            <div style={{ width: "30%" }}>
              <Image
                alt="Avatar"
                src={require("../../images/PortfolioProfile.jpg")}
                alt="Avatar"
                style={{ width: "200px" }}
              />
              <Title>Muhammad Asif</Title>
              <SubTitle>Full Stack  Developer</SubTitle>
              <Hr />
              <div style={{width:'300px', marginTop:'10px',marginBottom:'2%',
              fontSize:'16px',
              fontFamily:'Times New Roman, Times, serif'}}>
              <Stars>&#10025;</Stars>Mobile: +92-302-8066873
              </div>
              <div style={{width:'300px',marginTop:'10px',marginBottom:'2%',
              fontSize:'16px',
              fontFamily:'Times New Roman, Times, serif'}}>
              <Stars>&#10025;</Stars>Email: asifbsit@gmail.com
              </div>
              <div style={{width:'300px',marginTop:'10px',marginBottom:'2%',
              fontSize:'16px',
              fontFamily:'Times New Roman, Times, serif'}}>
              <Stars>&#10025;</Stars>Skype: muhammad46983
              </div>
              <div style={{width:'300px',marginTop:'10px',marginBottom:'2%',
              fontSize:'16px',
              fontFamily:'Times New Roman, Times, serif'}}>
              <Stars>&#10025;</Stars>Total Experienc: 4 years
              </div>
              
            </div>
          </ImageContainer>
          <VerticalLine>
            <Box>Objective :</Box>
            <BoxDetails>
            To Pursue a Dynamic career in an organization where extensive
              knowledge and advance pertaining the field Computer Science and
              information technology can be experienced. Seek the passion that
              offer challenges and growth in professional environment.
            </BoxDetails>
            <HrForLeftPanel />

            <Box>Experience :</Box>
            <SubBox>2018-Continue :</SubBox>
            <BoxDetails>
            <Stars>&#10025;</Stars><b>Arbisoft Pvt Ltd Lahore June-2018:</b> Frontend Developer:
              React Js | Js, Web Automation: Python | Selenium
            </BoxDetails>
            <SubBox>2017-2018 :</SubBox>
            <BoxDetails>
            <Stars>&#10025;</Stars><b>Mediland Pakistan Pvt Ltd | Lahore July, 2017 – June, 2018:</b>{" "}
              ERP Software Quality Analyst.
            </BoxDetails>
            <SubBox>2016-2017 :</SubBox>
            <BoxDetails>
            <Stars>&#10025;</Stars><b>Royalsoft Pvt Ltd | Lahore July, 2016 – June, 2017 :</b> Web
              Application Developer in PHP.
            </BoxDetails>
            <HrForLeftPanel />

            <Box>Certificaton :</Box>
            <BoxDetails>
            <Stars>&#10025;</Stars><b>SKANS School of Accountancy | Lahore, Jan-Sep, 2012 :</b> Acca
              3 Paper + FIA (Foundation in Accountancy).
            </BoxDetails>
            <HrForLeftPanel />
            <Box>Internship :</Box>
            <BoxDetails>
            <Stars>&#10025;</Stars>FFC (Fouji Fertilizer Company Mirpur Mathelo) | Mirpur,June-July,
              2012
            </BoxDetails>
            <HrForLeftPanel />
            <Box>Skills :</Box>
            <BoxDetails>
            <Stars>&#10025;</Stars>HTML/CSS | Bootstrap | Javascript | React | PHP | MYSQL | Firebase
            </BoxDetails>
            <HrForLeftPanel />
            <Box>Education :</Box>
            <SubBox>2012-2016 :</SubBox>
            <BoxDetails>
            <Stars>&#10025;</Stars><b>BS(IT):</b> The Islmia University – Bahawalpur, <b>CGPA :</b> 3.22/4.00, <b>Marks : </b>
              3288/4400
            </BoxDetails>
            <SubBox>2010-2011</SubBox>
            <BoxDetails>
            <Stars>&#10025;</Stars><b>FSC (Pre-Engineering) : </b>BISE Bahawalpur , 
              <b>Marks : </b> 753/1100
            </BoxDetails>
            <SubBox>2007-2009 :</SubBox>
            <BoxDetails>
            <Stars>&#10025;</Stars><b>Martric (Science) :</b> BISE Bahawalpur , 
              <b>Marks : </b> 745/1050
            </BoxDetails>
            <HrForLeftPanel />
            <Box>Personal Detail :</Box>
            <BoxDetails>
            <div style={{marginBottom:'2%',
              fontSize:'16px',
              fontFamily:'Times New Roman, Times, serif'}}>
            <Stars>&#10025;</Stars>Father Name : Allah Ditta (Late)
            </div>
            <div style={{marginBottom:'2%',
              fontSize:'16px',
              fontFamily:'Times New Roman, Times, serif'}}>
            <Stars>&#10025;</Stars>Father Name : Allah Ditta (Late)
            </div>
            <div style={{marginBottom:'2%',
              fontSize:'16px',
              fontFamily:'Times New Roman, Times, serif'}}>
            <Stars>&#10025;</Stars>DOB (14 Aug, 1994)
            </div>
            <div style={{marginBottom:'2%',
              fontSize:'16px',
              fontFamily:'Times New Roman, Times, serif'}}>
            <Stars>&#10025;</Stars>CNIC – 31301-2529862-1
            </div>
            <div style={{marginBottom:'2%',
              fontSize:'16px',
              fontFamily:'Times New Roman, Times, serif'}}>
            <Stars>&#10025;</Stars>Marital status – Married
            </div>
            <div style={{marginBottom:'2%',
              fontSize:'16px',
              fontFamily:'Times New Roman, Times, serif'}}>
            <Stars>&#10025;</Stars>Employment status – Full time
            </div>
            <div style={{marginBottom:'2%',
              fontSize:'16px',
              fontFamily:'Times New Roman, Times, serif'}}>
            <Stars>&#10025;</Stars>Domicile: Rahim Yar Khan
            </div>
            </BoxDetails>
            <HrForLeftPanel />
          </VerticalLine>
        </Container>
      </>
    );
  }
}
