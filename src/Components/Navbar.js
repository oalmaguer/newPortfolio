import { render } from '@testing-library/react';
import React from 'react';
import Imagen from './Imagen.js';
import Iconos from './Iconos.js';
import ContactMe from './ContactMe.js';
import About from './About';
import Education from './Education';
import ContactPage from './ContactPage';
import Home from './Home';
import Experience from './Experience';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link as Link2
} from 'react-router-dom';

const NavbarMenu = () => {
        return(
            <div>
        <Router>
<Navbar collapseOnSelect expand="lg" variant="dark" >
  <Navbar.Toggle aria-controls="responsive-navbar-nav"  style={{color: "white"}} />
  <Navbar.Collapse id="responsive-navbar-nav" bg="light" variant="light" style={{color: "#17bf63"}} >
    <Nav className="mr-auto">
     
        <Nav.Link ><Link2 to="/newPortfolio">Home</Link2>
        </Nav.Link>

        <Nav.Link ><Link2 to="/education">Education</Link2>
        </Nav.Link>

        <Nav.Link ><Link2 to="/experience">Experience</Link2>
        </Nav.Link>

         <Nav.Link ><Link2 to="/about">My Projects</Link2>
        </Nav.Link>

         <Nav.Link ><Link2 to="/contactpage">Contact</Link2>
        </Nav.Link>
    
    </Nav>
    
  </Navbar.Collapse>
</Navbar>


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
            </div>
        )
    }



    export default NavbarMenu;