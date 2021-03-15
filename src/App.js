import logo from './logo.svg';
import './App.css';

//Components
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import {Navbar} from './components/Navbar'
import {WppButton} from './components/WppButton'
import {Header} from './components/Header'
import {Contacto} from './components/Contacto'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <WppButton />

        <Switch>
          <Route exact path="/">
            <Header />
          </Route>

          <Route path="/contacto">
            <Contacto />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
