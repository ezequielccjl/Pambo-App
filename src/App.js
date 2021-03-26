import logo from './logo.svg';
import './App.css';

//Components
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import {Navbar} from './components/Navbar'
import {WppButton} from './components/WppButton'
import {Footer} from './components/Footer'
import {Landing} from './components/Landing'
import {Contacto} from './components/Contacto'
import {Cursos} from './components/Cursos'
import {Educar} from './components/Educar'
import {Deportes} from './components/Deportes'
import {Historia} from './components/Historia'
import {Testimonios} from './components/Testimonios'
import {Tienda} from './components/Tienda'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <WppButton />

        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>

          <Route path="/contacto">
            <Contacto />
          </Route>

          <Route path="/educar">
            <Educar />
          </Route>

          <Route path="/deportes">
            <Deportes />
          </Route>

          <Route path="/historia">
            <Historia />
          </Route>

          <Route path="/testimonios">
            <Testimonios />
          </Route>

          <Route path="/tienda">
            <Tienda />
          </Route>

          <Route path="/cursos/:categoriaCurso">
            <Cursos />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
