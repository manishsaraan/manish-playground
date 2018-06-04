import React, { Component } from 'react';
import LifeCycleMethods from './life-cycle-component';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    showLifyCycle: true,
    totalClicks: 0,
  }
  toggleLifeCycle = () => {
    this.setState({showLifyCycle: !this.state.showLifyCycle});
  }

  updateCount = () => {
    this.setState({totalClicks: this.state.totalClicks + 1});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <h1 className="App-title">Welcome to Reacts</h1>
          <button type="button" onClick={this.updateCount}>Update Count</button>
          <button type="button" onClick={this.toggleLifeCycle}>{this.state.showLifyCycle ? 'Hide': 'Show'}</button>
        </header>
        {this.state.showLifyCycle && <LifeCycleMethods clicks={this.state.totalClicks}/>}
      </div>
    );
  }
}

export default App;
