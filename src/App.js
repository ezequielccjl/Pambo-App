import logo from './logo.svg';
import './App.css';

//Components
import {Navbar} from './components/Navbar'
import {WppButton} from './components/WppButton'
import {Header} from './components/Header'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <WppButton />
    </div>
  );
}

export default App;
