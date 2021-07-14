import logo from './logo.svg';
import './App.css';
import Chatbot from 'react-chatbot-kit'

import ActionProvider from '/ActionProvider';
import MessageParser from '/MessageParser';
import config from '/config';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Chatbot />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test 
        </p>
      </header>
    </div>
  );
}

export default App;
