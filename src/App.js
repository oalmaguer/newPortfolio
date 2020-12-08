import './App.css';
import Imagen from './Components/Imagen';
import Container from '@material-ui/core/Container';
import Iconos from './Components/Iconos';
import Ufo from './images/ufo.png'; // Tell webpack this JS file uses this image
import ContactMe from './Components/ContactMe';

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
