import React, { Component } from 'react';
import './App.css';
import CryptoChecker from './components/CryptoChecker';
require('dotenv').config()

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hooked CryptoChecker</h1>
        <CryptoChecker />
      </div>
    );
  }
}

export default App;
