import logo from '../src/emmanuel.jpg';
import './App.css';

// const logo=require("./emmanuel.jpg") 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>My name is <i>'insert your name here'</i> and I am going to master react!</code>
        </p>
        <a
          className="App-link"
          href="https://github.com/TheWizard91"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github Profile: https://github.com/TheWizard91
        </a>
      </header>
    </div>
  );
}

export default App;
