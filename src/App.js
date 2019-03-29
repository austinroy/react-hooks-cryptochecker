import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CryptoChecker from './components/CryptoChecker';

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
