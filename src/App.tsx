import logo from './logo.svg';
import './App.scss';
import Greetings from './components/Greetings';
import Async from './components/Async';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={String(logo)} className="App-logo" alt="logo" />
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
        <Greetings string="Hi I'm rando"/>
        <Async/>
      </header>
    </div>
  );
}

export default App;
