import React from "react";
import './App.css';
import {BrowserRouter as  Router, Switch,Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Profile from './Pages/Profile/Profile'
import Resume from "./Pages/Resume/Resume";
import SignIn from "./Pages/SignIn/SignIn";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Contacts from "./Pages/Contacts/Contacts";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
    <Router>
        <Navbar />
        
        
        <Switch>
        <Route path="/" exact component={Dashboard} />
          <Route path="/About" component={About} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Contacts" component={Contacts} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/Resume" component={Resume} />
        </Switch>
        
       
      </Router>
    </div>
  );
}

export default App;
