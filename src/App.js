import './App.css';
import Imagen from './Components/Imagen';
import Container from '@material-ui/core/Container';
import Iconos from './Components/Iconos';
import Ufo from './images/ufo.png'; // Tell webpack this JS file uses this image
import ContactMe from './Components/ContactMe';
import Ruta from "./Components/Ruta.js";

function App() {
  return (

    <div className="App">
    <Ruta />
    
    </div>
  );
}

export default App;
