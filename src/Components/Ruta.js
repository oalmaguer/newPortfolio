import React, {Component} from 'react';
import Iconos from './Iconos.js';
import ContactMe from './ContactMe.js';
import About from './About';
import Education from './Education';
import ContactPage from './ContactPage';
import Experience from './Experience';
import Home from './Home';
import Ufo from '../images/ufo.png'; // Tell webpack this JS file uses this image

import {Navbar} from 'react-bootstrap';
import Container from '@material-ui/core/Container';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';


export default function Ruta(){



    return(
        <Router>
         
        

        {/* <div className="responsive">
        <a className="dropbtn"><img src={Ufo} style={{width: "40px"}} /></a>
        <div className="dropdownContent">
        <ul>
        <li>
        <Link to="/newPortfolio">Home</Link>
        
        </li>
        <li>
        <Link to="/education">Education</Link>
        </li> 

        <li>
        <Link to="/experience">Work Experience</Link>
        </li> 

        <li>
        <Link to="/about">My Projects</Link>
        </li> 

        <li>
        <Link to="/contactpage">Contact Me!</Link>
        </li> 
        </ul>
        </div>
        </div> */}
       
        <Switch>
          <Route exact path="/newPortfolio">
          <Home />
          </Route>

          <Route path="/about">
          <About />
          </Route>

          <Route path="/education">
          <Education />
          </Route>

          <Route path="/experience">
          <Experience />
          </Route>

          <Route path="/contactpage">
          <ContactPage />
          </Route>

        </Switch>
        
        </Router>
    );
}




