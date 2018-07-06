import React, { Component } from 'react';
import ErrorHandler from './ErrorHandler';
import BuggyCounter from './BuggyCounter';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
        isError: false,
    }

   componentDidCatch(){
        this.setState({isError: true });
    }

  render() {
    if(this.state.isError){
      return (<div>some wrnt</div>);
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ErrorHandler>
          <BuggyCounter/>
        </ErrorHandler>
      </div>
    );
  }
}

export default App;
