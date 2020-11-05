import React from 'react';
import {
  Nav,
  Bars,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  SignUpBtn,
  SignUpBtnLink
  
} from './NavElements';
import { FaBars } from 'react-icons/fa';
import SignIn from "../../Pages/SignIn";

const Navbar = () => {
  return (
    <>
      <Nav>
      <NavLink to="/SignIn">Home</NavLink>
          <NavLogo to="/">Logo</NavLogo>
          <MobileIcon>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="/SignIn">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/SignIn">Post</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about">Resource</NavLink>
            </NavItem>
            
          </NavMenu>
          <SignUpBtn>
            <SignUpBtnLink to="/">
            SignUp
            </SignUpBtnLink>
          </SignUpBtn>
        </NavbarContainer>
        
      </Nav>
    </>
  );
};

export default Navbar;
