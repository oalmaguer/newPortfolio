import React, {Component} from 'react';
import Imagen from './Imagen.js';
import Iconos from './Iconos.js';
import ContactMe from './ContactMe.js';
import Aboutpage from './About';
import Container from '@material-ui/core/Container';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import Ufo from '../images/ufo.png';

export default function Ruta(){



    return(
        <Router>
        <div className="menu">
        <ul>
        <li>
        <Link to="/newPortfolio">Home</Link>
        </li>
        <li>
        <Link to="/about">My Projects</Link>
        </li> 
        </ul>
        </div>

        <Switch>
          <Route exact path="/newPortfolio">
          <Home />
          </Route>
          <Route path="/about">
          <About />
          </Route>
        </Switch>

        </Router>
    );
}

function Home() {
    return(
        <div>
        <img src={Ufo} className="iconLaptop" />
      <Imagen />
      <Container maxWidth="md">
        <p className="name">Hi, I'm Oliver</p>
        <h3 className="job">Full Stack Web Developer</h3>
        <p className="parrafo">
         I'm a Fullstack Web Developer from Sinaloa, Mexico, based in Atlanta, Georgia. Green card holder. <br />
         I graduated from university in Mexico in 2018 as an Information Systems Engineer
         and ever since I discovered the Web Development area I fell in love with it and I've been learning everything I can
         about it. I'm a fast learner and I'm always looking to improve my skills.
         I started a small website business this last year creating pages with Wordpress, Elementor and code. 
        You can learn more about it here <a href="https:///creativoa.com" target="_blank">Creativo A</a> 
        <br />
        <p><span className="habilidades">My Skills: </span> HTML, CSS, Javascript, Jquery, React, PHP, Mysql, Wordpress, MongoDB, Photoshop, Premiere.</p>
        </p>
        
      <Iconos />

      <ContactMe />
            <p className="website">
            Website created and developed by Oliver Almaguer 👽 
            </p>

      </Container>
      </div>
    )
}

function About() {
    return(
       <Aboutpage />
    )
}