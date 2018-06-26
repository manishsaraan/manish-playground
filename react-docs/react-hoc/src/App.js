import React, { Component } from 'react';
import logo from './logo.svg';
import ButtonOne from './components/buttonOne';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonOne disable/>
      </div>
    );
  }
}

export default App;
