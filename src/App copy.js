import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Dashbaord from './Dashboard';
import {Router} from 'react-router-dom';
import Routes from './routes/index';
import history from './Services/history';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  
  return (
    <Router history={history}>
      <Routes/>
    </Router>
      
    
  );
}

export default App;
