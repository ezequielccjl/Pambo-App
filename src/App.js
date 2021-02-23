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
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <WppButton />
    </div>
  );
}

export default App;
